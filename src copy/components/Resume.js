import React from 'react';

const Resume = () => {
  return (
    <div className="flex h-full">
      {/* Left Column - 30% */}
      
      <div className="w-[30%] bg-[#2D3748] text-white ">
        {/* Profile Section */}
     

        {/* Contact Info */}
        <div className="p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600">Contact</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91-8899190405</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>devanshdixit97@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Gurugram, Haryana, India</p>
              </div>
                              <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p>linkedin.com/in/devansh-kumar-9974b811b</p>
                </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm">2016 - 2020</p>
                <h3 className="font-semibold">Bachelor of Technology</h3>
                <p className="text-sm">Computer Science and Engineering</p>
                <p className="text-sm">Dronacharya College of Engineering</p>
                <p className="text-sm">Maharshi Dayanand University, Rohtak</p>
                <p className="text-sm">CGPA: 8.2/10</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <ul className="space-y-1 text-sm">
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>HTML5/CSS3</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frontend Technologies</h3>
                <ul className="space-y-1 text-sm">
                  <li>React.js</li>
                  <li>React Native</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Redux/Context API</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend & APIs</h3>
                <ul className="space-y-1 text-sm">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Microservices</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Development Tools</h3>
                <ul className="space-y-1 text-sm">
                  <li>VS Code Extensions</li>
                  <li>Cursor</li>
                  <li>GitHub Copilot</li>
                  <li>ChatGPT/Claude</li>
                  <li>Postman</li>
                  <li>Docker</li>
                  <li>AWS/Cloud Services</li>
                  <li>Git & Version Control</li>
                  <li>CI/CD Tools</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mobile Development</h3>
                <ul className="space-y-1 text-sm">
                  <li>iOS Development</li>
                  <li>Android Development</li>
                  <li>Cross-platform Apps</li>
                  <li>App Store Deployment</li>
                  <li>Google Play Console</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600">Certifications</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">AWS Certified Developer</h3>
                <p className="text-sm">Amazon Web Services</p>
              </div>
              <div>
                <h3 className="font-semibold">React Native Development</h3>
                <p className="text-sm">Meta Developer Certification</p>
              </div>
              <div>
                <h3 className="font-semibold">Node.js Backend Development</h3>
                <p className="text-sm">Udemy Certification</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-600">Languages</h2>
            <ul className="space-y-1">
              <li>English (Professional)</li>
              <li>Hindi (Native)</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Right Column - 70% */}
      <div className="w-[70%] bg-white p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Devansh Kumar</h1>
                      <p className="text-xl text-gray-600 leading-relaxed">
              Senior Full Stack Developer | React Native Expert | Mobile App Development | Web Development | API Development | Node.js | JavaScript | TypeScript | Cloud Architecture | DevOps | Productivity Tools
            </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">Professional Summary</h2>
                      <p className="text-gray-600 mb-4">
              Results-driven Senior Full Stack Developer with 5+ years of experience specializing in React Native mobile applications, React.js web development, and Node.js backend services. Proven track record of delivering scalable, high-performance applications for healthcare, e-commerce, and enterprise sectors. Expert in modern development practices including CI/CD pipelines, cloud deployment (AWS), and microservices architecture.
            </p>
            <p className="text-gray-600">
              Skilled in integrating complex APIs (Aadhaar, OpenStreetMaps, payment gateways), implementing real-time features (WebSocket, RabbitMQ), and ensuring data security through end-to-end encryption. Strong expertise in mobile app development for both iOS and Android platforms with successful App Store and Google Play deployments.
            </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">Core Competencies</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Development Productivity</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Modern IDE tools and extensions</li>
                <li>Code generation and optimization</li>
                <li>Automated testing and deployment</li>
                <li>Performance monitoring and debugging</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Full Stack Development</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>React.js & React Native</li>
                <li>Node.js & Express.js</li>
                <li>RESTful APIs & GraphQL</li>
                <li>Database design & optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Mobile Development</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Cross-platform app development</li>
                <li>iOS & Android deployment</li>
                <li>App Store optimization</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">DevOps & Cloud</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>CI/CD pipeline development</li>
                <li>AWS cloud services</li>
                <li>Docker containerization</li>
                <li>Automated testing & deployment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">Professional Experience</h2>

          {/* SourceDOTcom Position */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Senior Full Stack Developer</h3>
              <span className="text-gray-600">September 2023 - Present</span>
            </div>
            <p className="text-gray-600 mb-4 font-semibold">SourceDOTcom Pvt Ltd, Gurugram, Haryana</p>

                          <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gray-800">Key Achievements & Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                  <li><strong>Development Productivity:</strong> Implemented modern development tools and workflows, resulting in 40% improvement in development speed and 60% reduction in code review time</li>
                <li><strong>Enterprise Messaging Platform:</strong> Developed comprehensive real-time messaging system with GitLab integration and AI chatbot using WebSocket, RabbitMQ, and STOMP protocols</li>
                <li><strong>Healthcare Solutions:</strong> Implemented MedsKey hospital management system with live tracking, Aadhaar APIs integration, and NFC card functionality using APDU commands</li>
                <li><strong>DevOps Excellence:</strong> Established automated CI/CD pipelines for iOS and Android app deployment, reducing deployment time by 70%</li>
                <li><strong>API Development:</strong> Developed robust RESTful APIs and GraphQL endpoints for healthcare applications, ensuring HIPAA compliance and data security</li>
                <li><strong>Mobile App Development:</strong> Led development of 15+ mobile applications using React Native with TypeScript, achieving 4.5+ star ratings on app stores</li>
                </ul>
              </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-gray-800">Technologies & Tools:</h4>
              <p className="text-gray-600">React Native, React.js, Node.js, TypeScript, GraphQL, WebSocket, RabbitMQ, AWS, Docker, OpenStreetMaps, NFC/RFID, Aadhaar APIs, Firebase, MongoDB, PostgreSQL</p>
            </div>
          </div>

          {/* ICAR-IVRI Position */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Full Stack Mobile Developer</h3>
              <span className="text-gray-600">December 2020 - September 2023</span>
            </div>
            <p className="text-gray-600 mb-4 font-semibold">ICAR - IVRI Bareilly, Uttar Pradesh</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Mobile App Development:</strong> Developed 20+ cross-platform mobile applications using React Native for veterinary and agricultural sectors</li>
              <li><strong>State Management:</strong> Implemented Redux and Context API for efficient state management across complex applications</li>
              <li><strong>API Integration:</strong> Built and integrated RESTful APIs using Node.js and Express.js for mobile applications</li>
              <li><strong>Performance Optimization:</strong> Improved app performance by 50% through code optimization and lazy loading techniques</li>
              <li><strong>User Experience:</strong> Collaborated with UX/UI designers to create intuitive interfaces, achieving 90% user satisfaction</li>
            </ul>
          </div>

          {/* Krenai Services Position */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Mobile Application Developer</h3>
              <span className="text-gray-600">January 2020 - December 2020</span>
            </div>
            <p className="text-gray-600 mb-4 font-semibold">Krenai Services, Gurugram, Haryana</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Template Development:</strong> Created reusable React Native templates for rapid application development</li>
              <li><strong>API Integration:</strong> Integrated third-party APIs and implemented Redux for state management</li>
              <li><strong>Cross-platform Development:</strong> Built applications from scratch for both iOS and Android platforms</li>
              <li><strong>Quality Assurance:</strong> Achieved 95% code coverage through comprehensive testing and quality checks</li>
            </ul>
          </div>

          {/* BuildSupply Position */}
          {/* <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <span className="text-gray-600">January 2020 - July 2020</span>
            </div>
            <p className="text-gray-600 mb-4 font-semibold">BuildSupply Pvt Ltd, Gurugram, Haryana</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>E-commerce Platform:</strong> Developed I-material application for building material procurement with RFQ & PO management</li>
              <li><strong>Backend Development:</strong> Created RESTful APIs using Node.js and Express.js for both mobile and web applications</li>
              <li><strong>Database Design:</strong> Designed and optimized database schemas for e-commerce applications</li>
              <li><strong>Team Collaboration:</strong> Worked with cross-functional teams to deliver high-quality software solutions</li>
            </ul>
          </div> */}
        </section>

        {/* Notable Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">Notable Projects</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Enterprise Messaging Platform</h3>
              <p className="text-sm text-gray-600 mb-2">Real-time communication system with intelligent chatbot integration</p>
              <p className="text-xs text-gray-500">Tech: React.js, Node.js, WebSocket, RabbitMQ, GraphQL, Chatbot APIs</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Instant Messaging & My Drive App</h3>
              <p className="text-sm text-gray-600 mb-2">React Native mobile app with GitLab integration for file sharing and messaging</p>
              <p className="text-xs text-gray-500">Tech: React Native, GitLab API, WebSocket, Real-time messaging, File management</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">MedsKey Healthcare System</h3>
              <p className="text-sm text-gray-600 mb-2">Comprehensive hospital management with live tracking and NFC card functionality using APDU commands</p>
              <p className="text-xs text-gray-500">Tech: React Native, OpenStreetMaps, NFC/APDU, Aadhaar APIs, Node.js</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">ECHS Beneficiary App</h3>
              <p className="text-sm text-gray-600 mb-2">Government healthcare claims management system</p>
              <p className="text-xs text-gray-500">Tech: React Native, Node.js, REST APIs, Secure Authentication</p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">I-material Procurement Platform</h3>
              <p className="text-sm text-gray-600 mb-2">E-commerce platform for building materials</p>
              <p className="text-xs text-gray-500">Tech: React Native, Node.js, MongoDB, Payment Gateway Integration</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">What I'm Good At</h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Solving complex problems efficiently</li>
              <li>Building full-stack applications from scratch</li>
              <li>Creating smooth mobile experiences</li>
              <li>Connecting different systems through APIs</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Setting up automated deployment pipelines</li>
              <li>Making apps run faster and smoother</li>
              <li>Keeping applications secure and compliant</li>
              <li>Working efficiently in agile teams</li>
            </ul>
          </div>
        </section>

        {/* Professional Strengths */}

      </div>
    </div>
  );
};

export default Resume;