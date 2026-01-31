import React from 'react';

const Resume = () => {
  return (
    <div className="w-full bg-white p-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8 resume-section" data-section="header">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Akash Saini</h1>
        <p className="text-lg text-gray-600">Gurugram, Haryana, India | +91-7302033202 | akashsaini5377@gmail.com</p>
      </header>

      {/* Professional Summary */}
      <section className="mb-6 break-inside-avoid resume-section" data-section="professional-summary">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Professional Summary</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3 text-sm">
          Results-driven Software Developer with 2.5+ years of experience specializing in React Native mobile applications and React.js web development. Proven track record of delivering scalable, high-performance applications for healthcare, e-commerce, and enterprise sectors. Expert in modern development practices including, real-time features, and secure API integrations.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          Experienced in integrating complex APIs (OpenStreetMaps, payment gateways), implementing real-time features (WebSocket, RabbitMQ), and ensuring data security through end-to-end encryption. Successfully deployed applications to both iOS App Store and Google Play Store.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6 break-inside-avoid resume-section" data-section="skills">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Skills</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Programming Languages:</h3>
            <p className="text-xs text-gray-700">JavaScript (ES6+), SQLite, HTML5/CSS3</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Frontend Technologies:</h3>
            <p className="text-xs text-gray-700">React.js, React Native, Firebase, Tailwind CSS, Redux/Context API, Bootstrap CSS, Responsive Design</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Mobile Development:</h3>
            <p className="text-xs text-gray-700">Cross-platform mobile app development (iOS & Android) using React Native, App Store Deployment, Google Play Console</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">DevOps & Cloud:</h3>
            <p className="text-xs text-gray-700">Git</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Tools:</h3>
            <p className="text-xs text-gray-700">VS Code, Postman, Git</p>
          </div>
        </div>
        {/* <div className="bg-gray-200 p-3 rounded">
          <h3 className="font-semibold text-gray-800 mb-1 text-sm">Technical Overview:</h3>
          <p className="text-xs text-gray-700">
            Software developer with expertise in modern web and mobile technologies. Proficient in JavaScript ecosystem including React.js, React Native, DevOps practices, and API integration. Experienced in  frontend  with a focus on scalable, high-performance applications.
          </p>
        </div> */}
      </section>

      {/* Work History */}
      <section className="mb-6 break-inside-avoid resume-section" data-section="work-history">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Work History</h2>
        </div>
        
        {/* SourceDOTcom Position */}
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-base font-bold text-gray-800">Software Developer</h3>
            <span className="text-gray-600 text-sm">Dec 2023 – Present</span>
          </div>
          <div className="flex justify-between items-baseline mb-2">
            <p className="text-gray-700 font-semibold text-sm">SourceDOTcom Pvt Ltd</p>
            <span className="text-gray-600 text-sm">Gurugram, Haryana</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            {/* <li>Implemented modern development tools and workflows, resulting in 40% improvement in development speed and 60% reduction in code review time</li> */}
            <li>Developed comprehensive real-time messaging system with GitLab integration and AI chatbot using WebSocket, RabbitMQ, and STOMP protocols</li>
            <li>Implemented MedsKey hospital management system with live tracking and secure API integration</li>
            <li>Developed Sampark Setu mobile application for ARESA initiative, enabling Ex-Servicemen and ARESA Centres to manage grievance, policy updates, and grant management</li>
            <li>Developed 5+ cross-platform mobile applications using React Native, JavaScript, Firebase, and SQLite</li>
            <li>Designed and developed responsive web applications using React.js, JavaScript, and Bootstrap CSS</li>
            <li>Integrated third-party APIs including payment gateways, OpenStreetMaps, and secure API authentication systems; implemented Firebase push notifications</li>
            {/* <li>Optimized application performance through code splitting, lazy loading, and bundle optimization techniques</li> */}
            <li>Implemented advanced state management solutions using Redux and Context API for complex React applications</li>
            <li>Implemented security best practices including JWT authentication, data encryption, and secure API endpoints</li>
            <li>Mentored junior developers and conducted code reviews to maintain high code quality standards</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions and maintain code standards</li>
          </ul>
        </div>

        {/* ICAR-IVRI Position */}
        {/* <div className="mb-6">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-base font-bold text-gray-800">Full Stack Mobile Developer</h3>
            <span className="text-gray-600 text-sm">Dec 2020 – Sep 2023</span>
          </div>
          <div className="flex justify-between items-baseline mb-2">
            <p className="text-gray-700 font-semibold text-sm">ICAR - IVRI Bareilly</p>
            <span className="text-gray-600 text-sm">Uttar Pradesh</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Developed 20+ cross-platform mobile applications using React Native for veterinary and agricultural sectors</li>
            <li>Implemented Redux and Context API for efficient state management across complex applications</li>
            <li>Built and integrated RESTful APIs using Node.js and Express.js for mobile applications</li>
            <li>Improved app performance by 50% through code optimization and lazy loading techniques</li>
            <li>Collaborated with UX/UI designers to create intuitive interfaces, achieving 90% user satisfaction</li>
            <li>Managed project timelines and deliverables while maintaining high code quality standards</li>
          </ul>
        </div> */}

        {/* Krenai Services Position */}
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-base font-bold text-gray-800">Mobile Application Developer</h3>
            <span className="text-gray-600 text-sm">Aug 2023 – Dec 2023</span>
          </div>
          <div className="flex justify-between items-baseline mb-2">
            <p className="text-gray-700 font-semibold text-sm">ANSIT Services Pvt Ltd</p>
            <span className="text-gray-600 text-sm">Noida, Uttar Pradesh</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Developed React Native application for Ring Bell application development</li>
            <li>Integrated third-party APIs and implemented Redux for state management; utilized Firebase for push notifications</li>
            <li>Built cross-platform applications from scratch for both iOS and Android platforms</li>
            {/* <li>Achieved 95% code coverage through comprehensive testing and quality checks</li> */}
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
          </ul>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="mb-6 break-inside-avoid resume-section" data-section="notable-projects">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Notable Projects</h2>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Instant Messaging Platform</h3>
            <p className="text-gray-700 text-xs">React Native mobile app with GitLab integration for file sharing and messaging using WebSocket and real-time messaging. Technologies: React Native, WebSocket, GitLab API</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">MedsKey Healthcare System</h3>
            <p className="text-gray-700 text-xs">Comprehensive hospital management system with live tracking, OpenStreetMaps integration, and Aadhaar API authentication. Technologies: React Native, OpenStreetMaps, Aadhaar APIs, Firebase</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">ECHS Beneficiary App</h3>
            <p className="text-gray-700 text-xs">Government healthcare claims management system using React Native, Firebase, REST APIs, and secure authentication. Technologies: React Native, Firebase, REST APIs, JWT Authentication</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Sampark Setu</h3>
            <p className="text-gray-700 text-xs">Official mobile application for ARESA initiative enabling Ex-Servicemen and ARESA Centres to manage grievance, policy updates, and grant management. Technologies: React Native, Firebase, REST APIs</p>
          </div>
        </div>
      </section>


      {/* Education */}
      <section className="mb-6 break-inside-avoid resume-section" data-section="education">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Education</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">Bachelor of Technology</h3>
            <p className="text-xs text-gray-700">Computer Science and Engineering</p>
            <p className="text-xs text-gray-700">IIMT Engineering College Meerut</p>
            <p className="text-xs text-gray-700">Meerut, Uttar Pradesh</p>
            {/* <p className="text-xs text-gray-700">2016 - 202 | CGPA: 7.2/10</p> */}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-8 break-inside-avoid resume-section" data-section="certifications" style={{ paddingTop: '30px', pageBreakBefore: 'auto', pageBreakInside: 'avoid', breakInside: 'avoid' }}>
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Certifications</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 pb-4">
         
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">React Native Development</h3>
            <p className="text-xs text-gray-700">Jspider Institute in Noida</p>
          </div>
         
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6 break-inside-avoid resume-section" data-section="languages">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Languages</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-700 font-semibold">English (Professional)</p>
          </div>
          <div>
            <p className="text-xs text-gray-700 font-semibold">Hindi (Native)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;