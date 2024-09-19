import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <Tabs>
        <TabList>
          <Tab>Software Development</Tab>
          <Tab>UI/UX Design</Tab>
          <Tab>Project Management</Tab>
          <Tab>Additional Skills</Tab>
          <Tab>Achievements</Tab>
        </TabList>
        <TabPanel>
        <ul className="list-disc pl-2 ml-5"> 
          <li>Proficient in JavaScript (React.js, Next.js, Redux)</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful API development</li>
          <li>MySQL</li>
          <li>HTML,CSS,Tailwind CSS</li>
          <li>JSON</li>
          <li>GIT</li>
          <li>Stripe</li>
          <li>JWT (JSON Web Tokens)</li>
          <li>CMS:WordPress, Shopify,Quickbutik (Basic)</li>
        </ul>
        </TabPanel>
        <TabPanel>
        <ul className="list-disc pl-2 ml-5">
          <li>Figma</li>
          <li>Responsive Web Design</li>
          <li>Accessibility Standards</li>
        </ul>
        </TabPanel>
        <TabPanel>
        <ul className="list-disc pl-2 ml-5">
          <li>Jira</li>
          <li>Team Collaboration</li>
        </ul>
        </TabPanel>
        <TabPanel>
        <ul className="list-disc pl-2 ml-5">
          <li>AI-Powered Development: Skilled in utilizing AI tools and prompt-based coding to accelerate development, 
            optimize code, and solve complex programming challenges efficiently.</li>
          <li>Problem Solver</li>
          <li>Quick Learner</li>
          <li>Versatile Team Player</li>
          <li>Commitment to High-Quality, Scalable Solutions</li>
          <li>Strong Background in Web Development</li>
          <li>Interactive Web Application Development</li>
          <li>Front-End Development (React,HTML, CSS)</li>
          <li>Back-End Development (Node.js, Express.js, MySQL)</li>
          <li>A+ for technical support</li>
        </ul>
        </TabPanel>
        <TabPanel>
        <ul className="list-disc pl-2 ml-5">
          <li>Completed over 65% of the full stack curriculum at Skillur.com</li>
          <li>Achieved significant milestones on Skillur.com</li>
          <li>3 years of Software Development experience</li>
          <li>1 year of Full Stack Development experience</li>
        </ul>
        </TabPanel>
        </Tabs>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Diploma.NET/React.js full stack /Lexicon Malmö 2021</li>
          <li>University of Jordan (Jordan), Bachelors degree in computer information systems (CIA).</li>
          <li>High school (Jordan) Information Technology (IT)</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li className='text-sky-600 cursor-pointer hover:text-sky-300'><Link href="/DiplomNet.pdf" target="_blank" rel="noopener noreferrer">Systemutvecklare .NET Certification</Link></li>
          <li className='text-sky-600 cursor-pointer hover:text-sky-300'><Link href="https://www.credly.com/badges/346948e1-9483-4cf2-bfc3-1c308ec83243" target="_blank" rel="noopener noreferrer">Microsoft Certified: Azure Data Fundamentals</Link></li>
          <li className='text-sky-600 cursor-pointer hover:text-sky-300'><Link href="https://www.credly.com/badges/a1ab39bc-d75c-4294-a46f-c975c0036acd" target="_blank" rel="noopener noreferrer">Microsoft Certified: Azure Fundamentals</Link></li>
          <li className='text-sky-600 cursor-pointer hover:text-sky-300'><Link href="https://www.coursera.org/account/accomplishments/certificate/DQQC4UMV6GK7" target="_blank" rel="noopener noreferrer">Create a Mockup in Figma</Link></li>
          <li className='text-sky-600 cursor-pointer hover:text-sky-300'><Link href="https://www.sololearn.com/en/certificates/CT-1CLEBEEX" target="_blank" rel="noopener noreferrer">SQL</Link></li>
          <li className='text-sky-600 cursor-pointer hover:text-sky-300'><Link href="https://www.sololearn.com/en/certificates/CT-CYP3LO7C" target="_blank" rel="noopener noreferrer">CSS</Link></li>
          <li className='text-sky-600 cursor-pointer hover:text-sky-300'><Link href="https://www.sololearn.com/en/certificates/CT-NKGA2HDN" target="_blank" rel="noopener noreferrer">HTML</Link></li>
        </ul>
      ),
    },
  ];

  export default TAB_DATA