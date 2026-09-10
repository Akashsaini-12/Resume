import React, { useState } from 'react';
import Resume from './components/Resume';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);

  const capturePage = async (element) => {
    const content = element.querySelector('.w-full');
    const height = Math.max(
      element.scrollHeight,
      content?.scrollHeight || 0,
      content?.offsetHeight || 0
    );

    return html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height,
      windowWidth: element.scrollWidth,
      windowHeight: height,
      scrollX: 0,
      scrollY: -window.scrollY,
      onclone: (clonedDoc) => {
        const clonedContainer = clonedDoc.getElementById('resume-container');
        if (clonedContainer) {
          clonedContainer.style.overflow = 'visible';
          clonedContainer.style.height = 'auto';
          clonedContainer.style.maxHeight = 'none';
          clonedContainer.style.margin = '0';
        }
      },
    });
  };

  const buildPageGroups = (sectionElements, maxPageHeight) => {
    const containerRect = sectionElements[0]?.closest('#resume-container')?.getBoundingClientRect();
    if (!containerRect) {
      return [];
    }

    const sections = sectionElements.map((section) => {
      const rect = section.getBoundingClientRect();
      return {
        element: section,
        top: rect.top - containerRect.top,
        bottom: rect.bottom - containerRect.top,
        name: section.getAttribute('data-section'),
      };
    });

    const pageGroups = [];
    let currentPage = [];

    sections.forEach((section, index) => {
      if (currentPage.length === 0) {
        currentPage.push(section);
      } else {
        const pageHeight = section.bottom - currentPage[0].top;
        if (pageHeight <= maxPageHeight) {
          currentPage.push(section);
        } else {
          pageGroups.push([...currentPage]);
          currentPage = [section];
        }
      }

      if (index === sections.length - 1) {
        pageGroups.push([...currentPage]);
      }
    });

    return pageGroups;
  };

  const generatePDF = async () => {
    setIsGenerating(true);

    const resumeContainer = document.getElementById('resume-container');
    const allSections = resumeContainer
      ? Array.from(resumeContainer.querySelectorAll('.resume-section'))
      : [];

    try {
      if (!resumeContainer || allSections.length === 0) {
        throw new Error('Resume content not found');
      }

      window.scrollTo(0, 0);
      resumeContainer.scrollTop = 0;
      await new Promise((resolve) => setTimeout(resolve, 300));

      const measureCanvas = await capturePage(resumeContainer);
      const pdfWidth = 210;
      const pdfHeight = 297;
      const topMargin = 10;
      const bottomMargin = 10;
      const usablePageHeightMm = pdfHeight - topMargin - bottomMargin;
      const pxPerMm = measureCanvas.width / pdfWidth;
      const domToCanvasScale = measureCanvas.height / resumeContainer.scrollHeight;
      const maxPageHeightDom = usablePageHeightMm * pxPerMm / domToCanvasScale;

      const pageGroups = buildPageGroups(allSections, maxPageHeightDom);

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const resumeContent = resumeContainer.querySelector('.w-full');
      const originalContainerMargin = resumeContainer.style.margin;
      const originalContentPadding = resumeContent?.style.padding || '';

      for (let pageIndex = 0; pageIndex < pageGroups.length; pageIndex++) {
        const groupNames = new Set(pageGroups[pageIndex].map((section) => section.name));

        allSections.forEach((section) => {
          section.style.display = groupNames.has(section.getAttribute('data-section'))
            ? ''
            : 'none';
        });

        if (pageIndex > 0) {
          resumeContainer.style.margin = '0';
          if (resumeContent) {
            resumeContent.style.paddingTop = '0';
          }
        }

        await new Promise((resolve) => setTimeout(resolve, 150));

        const pageCanvas = await capturePage(resumeContainer);
        const imgHeightMm = pageCanvas.height / pxPerMm;

        if (pageIndex > 0) {
          pdf.addPage();
        }

        pdf.addImage(
          pageCanvas.toDataURL('image/png', 1.0),
          'PNG',
          0,
          topMargin,
          pdfWidth,
          imgHeightMm,
          undefined,
          'FAST'
        );

        resumeContainer.style.margin = originalContainerMargin;
        if (resumeContent) {
          resumeContent.style.paddingTop = '';
        }
      }

      pdf.save('Akash-Saini-Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while generating the PDF. Please try again.');
    } finally {
      allSections.forEach((section) => {
        section.style.display = '';
      });
      if (resumeContainer) {
        resumeContainer.style.margin = '';
      }
      const resumeContent = resumeContainer?.querySelector('.w-full');
      if (resumeContent) {
        resumeContent.style.paddingTop = '';
      }
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