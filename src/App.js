import React, { useState } from 'react';
import Resume from './components/Resume';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      const resumeContainer = document.getElementById('resume-container');
      
      if (!resumeContainer) {
        throw new Error('Resume container not found');
      }

      // Scroll to top to ensure we capture from the beginning
      window.scrollTo(0, 0);
      
      // Wait a bit for scroll to complete
      await new Promise(resolve => setTimeout(resolve, 200));

      // Get all sections
      const sections = Array.from(resumeContainer.querySelectorAll('.resume-section'));
      
      if (sections.length === 0) {
        throw new Error('No sections found');
      }

      // Wait a bit more for layout to settle
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get the inner content div (the actual resume content)
      const resumeContent = resumeContainer.querySelector('.w-full');
      if (!resumeContent) {
        throw new Error('Resume content div not found');
      }
      
      const containerRect = resumeContainer.getBoundingClientRect();
      const contentRect = resumeContent.getBoundingClientRect();
      
      // Calculate section positions relative to the resume content div (not container)
      // This is more accurate since sections are inside the content div
      const sectionData = sections.map((section, idx) => {
        const rect = section.getBoundingClientRect();
        // Calculate position relative to content div's top
        // Add the offset of content div within container
        const contentOffsetTop = contentRect.top - containerRect.top;
        const top = (rect.top - contentRect.top) + contentOffsetTop;
        const bottom = (rect.bottom - contentRect.top) + contentOffsetTop;
        
        return {
          element: section,
          top: Math.max(0, top),
          bottom: Math.max(0, bottom),
          height: rect.height,
          index: idx,
          sectionName: section.getAttribute('data-section') || `section-${idx}`
        };
      });

      // Debug: Log section data
      console.log('Sections found:', sectionData.length);
      sectionData.forEach((s, i) => {
        console.log(`Section ${i} (${s.sectionName}): top=${s.top.toFixed(2)}, bottom=${s.bottom.toFixed(2)}, height=${s.height.toFixed(2)}`);
      });

      // Ensure container is fully visible and scrolled to top
      resumeContainer.scrollTop = 0;
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Get the actual content height - use the last section's bottom position
      const lastSectionBottom = Math.max(...sectionData.map(s => s.bottom));
      const containerFullHeight = Math.max(
        resumeContainer.scrollHeight,
        resumeContainer.offsetHeight,
        lastSectionBottom + 50 // Add some padding
      );
      
      console.log('Container heights:', {
        scrollHeight: resumeContainer.scrollHeight,
        offsetHeight: resumeContainer.offsetHeight,
        lastSectionBottom: lastSectionBottom,
        using: containerFullHeight
      });
      
      const canvas = await html2canvas(resumeContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: resumeContainer.scrollWidth,
        height: containerFullHeight,
        windowWidth: resumeContainer.scrollWidth,
        windowHeight: containerFullHeight,
        allowTaint: false,
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          // Ensure cloned document also has proper layout
          const clonedContainer = clonedDoc.getElementById('resume-container');
          if (clonedContainer) {
            clonedContainer.style.overflow = 'visible';
          }
        }
      });
      
      console.log('Canvas captured:', canvas.width, 'x', canvas.height);
      console.log('Expected height based on last section:', lastSectionBottom * 2);

      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Calculate PDF dimensions
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = 297; // A4 height in mm
      
      // Calculate image dimensions to fit PDF width while maintaining aspect ratio
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Conversion factor: pixels to mm (for PDF)
      const pixelsToMM = pdfWidth / canvas.width;

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      // Convert pixel positions to PDF mm positions
      const convertToPDFHeight = (pixels) => pixels * pixelsToMM;
      
      // Group sections by page
      const topMargin = 5;
      const bottomMargin = 5;
      const effectivePageHeight = pdfHeight - topMargin - bottomMargin;
      
      let currentPageSections = [];
      const pageGroups = [];

      sectionData.forEach((section, index) => {
        // Calculate the height needed if we add this section to current page
        let pageStartY, pageEndY;
        
        if (currentPageSections.length === 0) {
          // First section on page
          pageStartY = section.top;
          pageEndY = section.bottom;
        } else {
          // Add to existing sections - use the first section's top and current section's bottom
          pageStartY = currentPageSections[0].top;
          pageEndY = section.bottom;
        }
        
        const pageHeightInPDF = convertToPDFHeight(pageEndY - pageStartY);
        
        console.log(`Checking section ${section.sectionName}: pageHeight=${pageHeightInPDF.toFixed(2)}mm, effectiveHeight=${effectivePageHeight.toFixed(2)}mm`);
        
        // Check if this section fits on current page
        if (currentPageSections.length === 0 || pageHeightInPDF <= effectivePageHeight) {
          currentPageSections.push(section);
          console.log(`  -> Added to current page (${currentPageSections.length} sections)`);
        } else {
          // Current page is full, save it and start a new page
          const lastPageGroup = {
            sections: [...currentPageSections],
            startY: currentPageSections[0].top,
            endY: currentPageSections[currentPageSections.length - 1].bottom
          };
          pageGroups.push(lastPageGroup);
          console.log(`  -> Page ${pageGroups.length} complete with ${lastPageGroup.sections.length} sections`);
          
          // Start new page with current section
          currentPageSections = [section];
          console.log(`  -> Started new page with section ${section.sectionName}`);
        }
        
        // If this is the last section, add the current page group
        if (index === sectionData.length - 1) {
          const lastPageGroup = {
            sections: [...currentPageSections],
            startY: currentPageSections[0].top,
            endY: currentPageSections[currentPageSections.length - 1].bottom
          };
          pageGroups.push(lastPageGroup);
          console.log(`  -> Final page ${pageGroups.length} complete with ${lastPageGroup.sections.length} sections`);
        }
      });

      // Calculate the actual scale factor between container and canvas
      // html2canvas with scale: 2 means canvas should be 2x the size
      // But we need to verify the actual scale
      const containerHeight = containerFullHeight;
      const containerToCanvasScaleY = canvas.height / containerHeight;
      const containerToCanvasScaleX = canvas.width / resumeContainer.scrollWidth;
      
      console.log('Scale calculation:', {
        containerHeight,
        canvasHeight: canvas.height,
        scaleY: containerToCanvasScaleY,
        scaleX: containerToCanvasScaleX,
        expectedScale: 2,
        actualScaleMatches: Math.abs(containerToCanvasScaleY - 2) < 0.1
      });
      
      // Verify all sections are within canvas bounds
      const maxSectionBottom = Math.max(...sectionData.map(s => s.bottom));
      const maxSectionBottomInCanvas = maxSectionBottom * containerToCanvasScaleY;
      console.log('Section bounds check:', {
        maxSectionBottom,
        maxSectionBottomInCanvas,
        canvasHeight: canvas.height,
        withinBounds: maxSectionBottomInCanvas <= canvas.height
      });
      
      if (maxSectionBottomInCanvas > canvas.height) {
        console.warn('WARNING: Some sections may be outside canvas bounds!');
      }
      
      console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
      console.log('Container scrollHeight:', resumeContainer.scrollHeight);
      console.log('Container offsetHeight:', resumeContainer.offsetHeight);
      console.log('Scale Y:', containerToCanvasScaleY);
      console.log('Page groups:', pageGroups.length);
      pageGroups.forEach((pg, i) => {
        console.log(`Page ${i + 1} sections:`, pg.sections.map(s => s.sectionName).join(', '));
      });
      
      // Verify all sections are included
      const includedSections = new Set();
      pageGroups.forEach(pg => {
        pg.sections.forEach(s => includedSections.add(s.sectionName));
      });
      const allSectionNames = sectionData.map(s => s.sectionName);
      const missingSections = allSectionNames.filter(name => !includedSections.has(name));
      
      if (missingSections.length > 0) {
        console.error('WARNING: Missing sections in page groups:', missingSections);
      } else {
        console.log('✓ All sections are included in page groups');
      }
      
      // Add pages based on section groups
      pageGroups.forEach((pageGroup, groupIndex) => {
        console.log(`\n=== Processing page ${groupIndex + 1} ===`);
        console.log('Sections:', pageGroup.sections.map(s => s.sectionName).join(', '));
        console.log('Container Y range:', pageGroup.startY, 'to', pageGroup.endY);

        if (groupIndex > 0) {
          pdf.addPage();
        }

        // Convert pixel positions to canvas coordinates
        // The positions are relative to container top, need to scale to canvas
        const startYInCanvas = pageGroup.startY * containerToCanvasScaleY;
        const endYInCanvas = pageGroup.endY * containerToCanvasScaleY;
        const sectionHeightInCanvas = endYInCanvas - startYInCanvas;
        
        console.log('Canvas Y range:', startYInCanvas.toFixed(2), 'to', endYInCanvas.toFixed(2));
        console.log('Canvas height:', sectionHeightInCanvas.toFixed(2));
        
        // Ensure we don't go beyond canvas bounds, but allow slight overflow for last page
        let clampedStartY = Math.max(0, Math.floor(startYInCanvas));
        let clampedEndY = Math.min(canvas.height, Math.ceil(endYInCanvas));
        
        // For the last page, if content extends slightly beyond canvas, still try to capture it
        if (groupIndex === pageGroups.length - 1 && endYInCanvas > canvas.height) {
          console.warn(`Last page extends beyond canvas (${endYInCanvas} > ${canvas.height}), adjusting...`);
          clampedEndY = canvas.height; // Use full canvas height
        }
        
        const clampedHeight = clampedEndY - clampedStartY;
        
        console.log('Clamped Y range:', clampedStartY, 'to', clampedEndY);
        console.log('Clamped height:', clampedHeight);
        
        if (clampedHeight <= 0) {
          console.error(`Page ${groupIndex + 1} has invalid height (${clampedHeight}), skipping`);
          return;
        }
        
        // Verify we're not trying to extract beyond canvas
        if (clampedStartY >= canvas.height) {
          console.error(`Page ${groupIndex + 1} start position (${clampedStartY}) is beyond canvas height (${canvas.height})`);
          return;
        }
        
        // Create a temporary canvas to extract just this section
        const sectionCanvas = document.createElement('canvas');
        sectionCanvas.width = canvas.width;
        sectionCanvas.height = clampedHeight;
        const sectionCtx = sectionCanvas.getContext('2d');
        
        // Fill with white background
        sectionCtx.fillStyle = '#ffffff';
        sectionCtx.fillRect(0, 0, sectionCanvas.width, sectionCanvas.height);
        
        // Draw the relevant portion of the original canvas to the section canvas
        try {
          sectionCtx.drawImage(
            canvas,
            0, clampedStartY, // Source: x, y (from original canvas)
            canvas.width, clampedHeight, // Source: width, height
            0, 0, // Destination: x, y (to section canvas)
            canvas.width, clampedHeight // Destination: width, height
          );
          console.log('Successfully extracted section to canvas');
        } catch (error) {
          console.error(`Error drawing image for page ${groupIndex + 1}:`, error);
          return;
        }
        
        // Convert section canvas to image
        const sectionImgData = sectionCanvas.toDataURL('image/png', 1.0);
        
        // Calculate dimensions for PDF
        const sectionWidthInPDF = pdfWidth;
        const sectionHeightInPDF = (sectionCanvas.height * pdfWidth) / canvas.width;
        
        console.log('PDF dimensions:', sectionWidthInPDF.toFixed(2), 'x', sectionHeightInPDF.toFixed(2), 'mm');
        
        // Add the section image to the PDF
        pdf.addImage(sectionImgData, 'PNG', 0, topMargin, sectionWidthInPDF, sectionHeightInPDF, undefined, 'FAST');
        console.log(`Page ${groupIndex + 1} added to PDF`);
      });
      
      pdf.save('Akash-Saini-Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while generating the PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="app-container bg-gray-100 min-h-screen">
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={generatePDF}
          disabled={isGenerating}
          className={`px-6 py-3 rounded-lg font-semibold text-white ${
            isGenerating ? 'bg-gray-500' : 'bg-[#2D3748] hover:bg-[#1a202c]'
          } transition-colors duration-200 shadow-lg flex items-center space-x-2`}
        >
          {isGenerating ? (
            <>
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
              Generating PDF...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </>
          )}
        </button>
      </div>

      <div id="resume-container" className="max-w-[1200px] mx-auto my-8 bg-white shadow-xl print:shadow-none relative">
        <Resume />
      </div>
    </div>
  );
}

export default App;