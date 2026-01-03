import React from 'react';

const Resume = () => {
  return (
    <div className="w-full bg-white p-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Akash Saini</h1>
        <p className="text-lg text-gray-600">Gurugram, Haryana, India | +91-7302033202 | akashsaini5377@gmail.com</p>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Professional Summary</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3 text-sm">
          Results-driven Software Developer with 2.5+ years of experience specializing in React Native mobile applications, React.js web development, Proven track record of delivering scalable, high-performance applications for healthcare, e-commerce, and enterprise sectors. Expert in modern development practices including CI/CD pipelines,
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          Skilled in integrating complex APIs (Aadhaar, OpenStreetMaps, payment gateways), implementing real-time features (WebSocket, RabbitMQ), and ensuring data security through end-to-end encryption. Strong expertise in mobile app development for both iOS and Android platforms with successful App Store and Google Play deployments.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Skills</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Programming Languages:</h3>
            <p className="text-xs text-gray-700">JavaScript (ES6+), TypeScript, Java, SQLite, HTML5/CSS3</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Frontend Technologies:</h3>
            <p className="text-xs text-gray-700">React.js, React Native,Firebase ,Tailwind CSS, Redux/Context API, Bootstrap, Responsive Design</p>
          </div>
         
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Mobile Development:</h3>
            <p className="text-xs text-gray-700">iOS Development, Android Development, Cross-platform Apps, App Store Deployment, Google Play Console</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">DevOps & Cloud:</h3>
            <p className="text-xs text-gray-700">CI/CD Tools, Git</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Development Tools:</h3>
            <p className="text-xs text-gray-700">VS Code Extensions, Postman, Cursor, ChatGPT/Claude</p>
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
      <section className="mb-6">
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
            <li>Implemented modern development tools and workflows, resulting in 40% improvement in development speed and 60% reduction in code review time</li>
            <li>Developed comprehensive real-time messaging system with GitLab integration and AI chatbot using WebSocket, RabbitMQ, and STOMP protocols</li>
            <li>Implemented MedsKey hospital management system with live tracking, Aadhaar APIs integration</li>
            {/* <li>Established automated CI/CD pipelines for iOS and Android app deployment, reducing deployment time by 70%</li> */}
            {/* <li>Developed robust RESTful APIs and GraphQL endpoints for healthcare applications, ensuring HIPAA compliance and data security</li> */}
            <li>Developed 5+ mobile applications using React Native with JavaScript,firebase,sqlite</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions and maintain code standards</li>
           
            <li>Implemented advanced state management solutions using Redux and Context API for complex React applications</li>
            <li>Designed and developed responsive web applications using React.js,JavaScript,bootstrap CSS,</li>
            <li>Integrated third-party APIs including payment gateways, OpenStreetMaps, and Aadhaar authentication systems firebase for the push notification</li>
            <li>Optimized application performance through code splitting, lazy loading, and bundle optimization techniques</li>
          
            <li>Utilized modern development tools including VS Code, Cursor, Postman, and Git for efficient development workflows</li>
            <li>Implemented security best practices including JWT authentication, data encryption, and secure API endpoints</li>
        
            <li>Mentored junior developers and conducted code reviews to maintain high code quality standards</li>
            <li>Implemented real-time features using WebSocket connections and message queuing systems</li>
            <li>Developed cross-platform mobile applications using React Native for both iOS and Android platforms</li>
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
            <span className="text-gray-600 text-sm">Aug-2023– Dec 2023</span>
          </div>
          <div className="flex justify-between items-baseline mb-2">
            <p className="text-gray-700 font-semibold text-sm">ANSIT Services Pvt Ltd</p>
            <span className="text-gray-600 text-sm">Noida, Uttar Pradesh</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Created reusable React Native Application for Ring  bell application development</li>
            <li>Integrated third-party APIs and implemented Redux for state management firebase for the push notification</li>
            <li>Built applications from scratch for both iOS and Android platforms</li>
            <li>Achieved 95% code coverage through comprehensive testing and quality checks</li>
            <li>Worked with cross-functional teams to deliver high-quality software solutions</li>
          </ul>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="mb-6">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Notable Projects</h2>
        </div>
        <div className="space-y-2">
          {/* <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Enterprise Messaging Platform</h3>
            <p className="text-gray-700 text-xs">Real-time communication system with intelligent chatbot integration using React.js, Node.js, WebSocket, RabbitMQ, GraphQL</p>
          </div> */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">Instant Messaging </h3>
            <p className="text-gray-700 text-xs">React Native mobile app with GitLab integration for file sharing and messaging using WebSocket and real-time messaging</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">MedsKey Healthcare System</h3>
            <p className="text-gray-700 text-xs">Comprehensive hospital management with live tracking , OpenStreetMaps, Aadhaar APIs</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">ECHS Beneficiary App</h3>
            <p className="text-gray-700 text-xs">Government healthcare claims management system using React Native ,firebase, REST APIs, and secure authentication</p>
          </div>
        </div>
      </section>


      {/* Education */}
      <section className="mb-6">
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
      <section className="mb-6">
        <div className="bg-gray-300 py-2 px-4 mb-3">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-3">Certifications</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
         
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">React Native Development</h3>
            <p className="text-xs text-gray-700">Jspider Institute in Noida</p>
          </div>
         
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
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