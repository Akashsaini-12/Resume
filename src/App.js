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

      // Capture the resume as canvas with higher quality
      const canvas = await html2canvas(resumeContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: resumeContainer.scrollWidth,
        windowHeight: resumeContainer.scrollHeight,
        allowTaint: false,
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Calculate PDF dimensions
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = 297; // A4 height in mm
      
      // Calculate image dimensions to fit PDF width while maintaining aspect ratio
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      // If content fits on one page
      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      } else {
        // Content spans multiple pages - split it properly with better page break handling
        // Use a more intelligent approach to avoid cutting sections
        let heightLeft = imgHeight;
        let pageNumber = 0;
        const topMargin = 10;
        const bottomMargin = 30; // Much larger bottom margin to avoid cutting sections
        const effectivePageHeight = pdfHeight - topMargin - bottomMargin;

        while (heightLeft > 0) {
          if (pageNumber > 0) {
            pdf.addPage();
          }
          
          // Calculate Y position: negative value to show the correct portion of the image
          // Add top margin to leave space at the top of each page
          const yPosition = -(pageNumber * effectivePageHeight) + topMargin;
          
          // Add the full image but positioned to show the correct portion
          pdf.addImage(imgData, 'PNG', 0, yPosition, imgWidth, imgHeight, undefined, 'FAST');
          
          heightLeft -= effectivePageHeight;
          pageNumber++;
        }
      }
      
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