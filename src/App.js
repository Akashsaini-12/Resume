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
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      // Set up fonts and colors
      pdf.setFont('helvetica');
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 15;
      const contentWidth = pageWidth - (2 * margin);
      let yPosition = margin;

      // Helper function to add text with word wrap and page break handling
      const addText = (text, fontSize = 10, isBold = false, color = [0, 0, 0]) => {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
        pdf.setTextColor(color[0], color[1], color[2]);
        
        const lines = pdf.splitTextToSize(text, contentWidth);
        const lineHeight = fontSize * 0.4;
        const requiredHeight = lines.length * lineHeight;
        
        // Check if we need a new page
        if (yPosition + requiredHeight > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        pdf.text(lines, margin, yPosition);
        yPosition += requiredHeight + 3;
        return yPosition;
      };

      // Helper function to add section header
      const addSectionHeader = (title) => {
        // Check if we need a new page for the header
        if (yPosition + 15 > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        // Add background rectangle
        pdf.setFillColor(200, 200, 200); // Light gray
        pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
        
        // Add title
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(0, 0, 0);
        pdf.text(title, pageWidth / 2, yPosition + 3, { align: 'center' });
        yPosition += 12;
      };

      // Header
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Akash Saini', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 8;
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Gurugram, Haryana, India | +91-7302033202 | akashsaini5377@gmail.com', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 15;

      // Professional Summary
      addSectionHeader('PROFESSIONAL SUMMARY');
      addText('Results-driven Software Developer with 2.5+ years of experience specializing in React Native mobile applications and React.js web development. Proven track record of delivering scalable, high-performance applications for healthcare, e-commerce, and enterprise sectors.', 9);
      addText('Skilled in integrating complex APIs (Aadhaar, OpenStreetMaps, payment gateways), implementing real-time features (WebSocket, RabbitMQ), and ensuring data security through end-to-end encryption. Strong expertise in mobile app development for both iOS and Android platforms with successful App Store and Google Play deployments.', 9);
      yPosition += 5;

      // Skills
      addSectionHeader('SKILLS');
      
      // Core technical skills based on Resume.js
      addText('Programming Languages: JavaScript (ES6+), TypeScript, Java, SQLite, HTML5/CSS3', 8);
      addText('Frontend Technologies: React.js, React Native, Firebase, Tailwind CSS, Redux/Context API, Bootstrap, Responsive Design', 8);
      addText('Mobile Development: iOS Development, Android Development, Cross-platform Apps, App Store Deployment, Google Play Console', 8);
      addText('DevOps & Cloud: Git', 8);
      addText('Development Tools: VS Code Extensions, Postman, Cursor, ChatGPT/Claude', 8);
      
      yPosition += 3;

      // (No Technical Overview section per Resume.js)
      yPosition += 0;

      // Work History
      addSectionHeader('WORK HISTORY');
      
      // SourceDOTcom Position
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Software Developer', margin, yPosition);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Dec 2023 – Present', pageWidth - margin, yPosition, { align: 'right' });
      yPosition += 5;
      
      pdf.setFontSize(9);
      pdf.text('SourceDOTcom Pvt Ltd', margin, yPosition);
      pdf.text('Gurugram, Haryana', pageWidth - margin, yPosition, { align: 'right' });
      yPosition += 8;
      
      const achievements = [
        'Implemented modern development tools and workflows, resulting in 40% improvement in development speed and 60% reduction in code review time',
        'Developed comprehensive real-time messaging system with GitLab integration and AI chatbot using WebSocket, RabbitMQ, and STOMP protocols',
        'Implemented MedsKey hospital management system with live tracking, Aadhaar APIs integration',
        'Developed 5+ mobile applications using React Native with JavaScript, Firebase, SQLite',
        'Collaborated with cross-functional teams to deliver high-quality software solutions and maintain code standards',
        'Implemented advanced state management solutions using Redux and Context API for complex React applications',
        'Designed and developed responsive web applications using React.js, JavaScript, Bootstrap CSS',
        'Integrated third-party APIs including payment gateways, OpenStreetMaps, and Aadhaar authentication systems; Firebase for push notifications',
        'Optimized application performance through code splitting, lazy loading, and bundle optimization techniques',
        'Utilized modern development tools including VS Code, Cursor, Postman, and Git for efficient development workflows',
        'Implemented security best practices including JWT authentication, data encryption, and secure API endpoints',
        'Mentored junior developers and conducted code reviews to maintain high code quality standards',
        'Implemented real-time features using WebSocket connections and message queuing systems',
        'Developed cross-platform mobile applications using React Native for both iOS and Android platforms'
      ];
      
      achievements.forEach(achievement => {
        // Check if we need a new page for this achievement
        if (yPosition + 8 > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        pdf.setFontSize(8);
        const lines = pdf.splitTextToSize('• ' + achievement, contentWidth - 6);
        pdf.text(lines, margin + 3, yPosition);
        yPosition += lines.length * 3.2 + 2;
      });
      
      yPosition += 10;

      // ANSIT Services Position
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Mobile Application Developer', margin, yPosition);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Aug-2023– Dec 2023', pageWidth - margin, yPosition, { align: 'right' });
      yPosition += 5;
      
      pdf.setFontSize(9);
      pdf.text('ANSIT Services Pvt Ltd', margin, yPosition);
      pdf.text('Noida, Uttar Pradesh', pageWidth - margin, yPosition, { align: 'right' });
      yPosition += 8;
      
      const ansitAchievements = [
        'Created reusable React Native Application for Ring bell application development',
        'Integrated third-party APIs and implemented Redux for state management; Firebase for push notifications',
        'Built applications from scratch for both iOS and Android platforms',
        'Achieved 95% code coverage through comprehensive testing and quality checks',
        'Worked with cross-functional teams to deliver high-quality software solutions'
      ];
      
      ansitAchievements.forEach(achievement => {
        // Check if we need a new page for this achievement
        if (yPosition + 8 > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        pdf.setFontSize(8);
        const lines = pdf.splitTextToSize('• ' + achievement, contentWidth - 6);
        pdf.text(lines, margin + 3, yPosition);
        yPosition += lines.length * 3.2 + 2;
      });
      
      yPosition += 10;

      // Notable Projects
      addSectionHeader('NOTABLE PROJECTS');
      
      const projects = [
        { name: 'Instant Messaging', desc: 'React Native mobile app with GitLab integration for file sharing and messaging using WebSocket and real-time messaging' },
        { name: 'MedsKey Healthcare System', desc: 'Comprehensive hospital management with live tracking, OpenStreetMaps, Aadhaar APIs' },
        { name: 'ECHS Beneficiary App', desc: 'Government healthcare claims management system using React Native, Firebase, REST APIs, and secure authentication' }
      ];
      
      projects.forEach(project => {
        // Check if we need a new page for this project
        if (yPosition + 15 > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'bold');
        pdf.text(project.name, margin, yPosition);
        yPosition += 4;
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        const lines = pdf.splitTextToSize(project.desc, contentWidth);
        pdf.text(lines, margin, yPosition);
        yPosition += lines.length * 3.2 + 4;
      });
      
      yPosition += 10;

      // Education
      addSectionHeader('EDUCATION');
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Bachelor of Technology', margin, yPosition);
      yPosition += 4;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      pdf.text('Computer Science and Engineering', margin, yPosition);
      yPosition += 3;
      pdf.text('IIMT Engineering College Meerut', margin, yPosition);
      yPosition += 3;
      pdf.text('Meerut, Uttar Pradesh', margin, yPosition);
      yPosition += 10;

      // Certifications - Row format
      addSectionHeader('CERTIFICATIONS');
      if (yPosition + 10 > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('React Native Development', margin, yPosition);
      yPosition += 4;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      pdf.text('Jspider Institute in Noida', margin, yPosition);
      yPosition += 10;

      // Languages
      addSectionHeader('LANGUAGES');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      addText('English (Professional) | Hindi (Native)', 8);

      // Languages
      // addSectionHeader('LANGUAGES');
      // pdf.setFontSize(8);
      // pdf.text('English (Professional) | Hindi (Native)', margin, yPosition);
      
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