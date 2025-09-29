import React, { useState } from 'react';
import Resume from './components/Resume';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    const resumeElement = document.getElementById('resume-container');

    try {
      const canvas = await html2canvas(resumeElement, {
        scale: 1.2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        allowTaint: true,
        onclone: (clonedDoc) => {
          const element = clonedDoc.getElementById('resume-container');
          if (element) {
            element.style.transform = 'scale(1)';
            element.style.margin = '0';
            element.style.padding = '0px';
          }
        }
      });

      // A4 dimensions in mm
      const a4Width = 210;
      const a4Height = 297;
      // Padding in mm
      const topPadding = 15;
      const bottomPadding = 15;
      const usableHeight = a4Height - topPadding - bottomPadding;
      // Calculate dimensions to fit A4 width
      const imgWidth = a4Width;
      // Calculate the scale between canvas px and PDF mm
      const pxPerMm = canvas.width / a4Width;
      // Height of one PDF page in canvas px (excluding paddings)
      const pageCanvasHeight = usableHeight * pxPerMm;
      // Total number of pages
      const pageCount = Math.ceil(canvas.height / pageCanvasHeight);
      // Left column width in mm (30% of A4)
      const leftColWidth = a4Width * 0.3;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      for (let i = 0; i < pageCount; i++) {
        if (i > 0) pdf.addPage();
        // Draw blue rectangle for left column
        pdf.setFillColor(45, 55, 72); // #2D3748
        pdf.rect(0, 0, leftColWidth, a4Height, 'F');
        // Calculate the source y position in the canvas
        const srcY = i * pageCanvasHeight;
        // Calculate the height of the slice (may be less on last page)
        const sliceHeight = Math.min(pageCanvasHeight, canvas.height - srcY);
        // Create a temporary canvas for the current page slice
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeight;
        const ctx = pageCanvas.getContext('2d');
        ctx.drawImage(
          canvas,
          0, srcY, canvas.width, sliceHeight, // source
          0, 0, canvas.width, sliceHeight // destination
        );
        const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.7);
        // Draw the image with top padding, and reduce height to leave bottom padding
        pdf.addImage(
          pageImgData,
          'JPEG',
          0,
          topPadding,
          imgWidth,
          (sliceHeight / pxPerMm),
          undefined,
          'FAST'
        );
      }
      pdf.save('Devansh-Resume.pdf');
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