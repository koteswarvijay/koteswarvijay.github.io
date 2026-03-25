// ─────────────────────────────────────────────────────────────────────────────
// projects.data.js  -  Edit this file to add, remove, or update projects.
//
// Each project object supports:
//   category     : 'ai' | 'cloud' | 'data' | 'pm' | 'delivery' | 'personal'
//   year         : period string — supports month+year format
//                  e.g. "Jan 2025 - Present" | "Mar 2022 - Dec 2023" | "2022 - 2023"
//   type         : display badge, e.g. "Enterprise" | "Personal" | "Early Career"
//   title        : card heading
//   org          : organisation / location
//   description  : one-paragraph summary
//   impact       : array of bullet strings (shown with ▸ prefix)
//   technologies : full list of technologies / tools — colour-coded by type on the card
//   link         : (optional) { href, label } — renders a "→" link at the bottom
//   personal     : (optional) true — applies purple accent instead of blue
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [

    // ── AI & Automation ───────────────────────────────────────────
    {
        category: 'ai',
        year: 'Jul 2025 - Nov 2025',
        type: 'Enterprise',
        title: 'Automated Workflow Platform',
        org: 'Epsilon, Bengaluru',
        description: 'Built a reusable AI framework integrating Claude services into the product development lifecycle, enabling developers to accelerate feature delivery with AI-assisted tooling.',
        impact: [
            'Integrated Claude AI services into internal developer workflows',
            'Created reusable framework adopted across engineering teams',
            'Automated User Story generation from product requirements',
        ],
        technologies: ['Claude AI', 'n8n', 'AWS', 'REST APIs'],
    },
    {
        category: 'ai',
        year: 'May 2025 - Mar 2026',
        type: 'Enterprise',
        title: 'Pre-Sales demo sites',
        org: 'Epsilon, Bengaluru',
        description: 'Developed multiple demo sites for Pre-sales demo.',
        impact: [
            'Engineered scalable pre-sales demo sites to accelerate business development and client acquisition',
            'Architected a reusable component library, reducing development time by 80% across projects',
            'Conducted proof-of-concept (POC) with Amazon Q to enhance developer productivity in day-to-day workflows',
            'Facilitated team enablement sessions on Amazon Q and Prompt Engineering best practices',
            'Designed and implemented an in-house Content Management System (CMS) integrated seamlessly with demo sites',
            'Built an extensible integration framework to onboard and manage third-party applications',   
            'Established CI/CD pipelines to streamline build, test, and deployment processes across environments',
            'Conducted regular code reviews to enforce coding standards, improve code quality, and mentor team members',
        ],
        technologies: ['React JS', '.Net', 'AWS - Lambda', 'Kibana', 'AWS - Cognito', 'Amazon Q', 'Claude AI', 'Figma', 'REST API'],
    },
    {
        category: 'ai',
        year: '2022 - 2023',
        type: 'Enterprise',
        title: 'Code Generation Accelerator',
        org: 'LTIMindtree, Bengaluru',
        description: 'Spearheaded a code generation accelerator initiative that automated the migration of 200+ Java/J2EE applications to Node.js, dramatically cutting development timelines across the migration program.',
        impact: [
            'Engineered an automated code translation pipeline converting 200+ Java/J2EE applications to Node.js',
            'Reduced per-application developer effort by ~90% through intelligent code generation',
            'Drove measurable productivity gains across the full migration program',
        ],
        technologies: ['Java', 'J2EE', 'Node.js', 'AWS', 'Code Parsers'],
    },
    {
        category: 'ai',
        year: 'Feb 2021 - Jan 2022',
        type: 'Enterprise',
        title: 'Regression Test Automation Framework',
        org: 'Mindtree, Bengaluru',
        description: 'Led the automation team to build a comprehensive regression testing framework that reduced manual testing effort by over 99%, saving approximately 10,000 person-days annually.',
        impact: [
            'Reduced regression testing from 600 person-days to just 5 per run',
            'Saved ~10,000 person-days annually in testing effort',
            'Scaled production issue backlog from 5,000+ down to fewer than 100',
            'Accelerated release cadence from quarterly cycles to under 4 weeks, achieving a 75% reduction in time-to-market'
        ],
        technologies: ['.Net', 'Angular', 'Python', 'CI/CD', 'AWS', 'Selenium'],
    },

    // ── Cloud Migration ───────────────────────────────────────────
    {
        category: 'cloud',
        year: '2022 - 2023',
        type: 'Enterprise',
        title: 'AWS Cloud Migration Program (200+ Apps)',
        org: 'LTIMindtree, Bengaluru',
        description: 'Led the end-to-end migration program for 200+ applications from on-premises infrastructure to AWS Cloud, defining migration strategy and managing all dependencies at program level.',
        impact: [
            'Migrated 200+ applications using R-Factor (Re-write, Retire, Re-Host, Re-platform)',
            'Managed program-level dependencies and application prioritization',
            'Delivered in full accordance with cost, scheduling, and quality targets',
            'Led program management for end-to-end migration of on-premises applications to Azure cloud infrastructure',
        ],
        technologies: ['AWS', 'Python', 'Java', 'Angular', 'Node.js', 'Power BI', 'Terraform'],
    },

    // ── Data & Analytics ──────────────────────────────────────────
    {
        category: 'data',
        year: '2023 - 2024',
        type: 'Enterprise',
        title: 'Enterprise Data Platform',
        org: 'WinWire Technologies, Bengaluru',
        description: 'Architected and delivered an Enterprise Data Platform that consolidated multiple business units onto a single common platform, driving major cloud cost efficiencies.',
        impact: [
            'Consolidated disparate business unit data onto one unified platform',
            'Achieved savings of over $60K USD per month in cloud costs',
            'Partnered with Microsoft on Azure migration programs',
        ],
        technologies: ['Databricks', 'Azure Synapse', 'Azure Data Factory', 'Microsoft Fabric', 'Power BI', 'Azure'],
    },
    {
        category: 'data',
        year: '2019 - 2021',
        type: 'Enterprise',
        title: 'Application Monitoring & Observability Platform',
        org: 'Mindtree, Bengaluru',
        description: 'Designed and implemented customized observability dashboards in AppDynamics and Splunk, identifying process gaps and proactively resolving critical production incidents.',
        impact: [
            'Reduced Severity-1 issues from 4 per week to ZERO',
            'Built custom AppDynamics and Splunk dashboards for real-time visibility',
            'Identified root-cause process gaps and implemented permanent fixes',
        ],
        technologies: ['AppDynamics', 'Splunk', 'Java', 'J2EE', 'JDBC'],
    },

    // ── Project Management ────────────────────────────────────────
    {
        category: 'pm',
        year: 'Feb 2021 - Jan 2022',
        type: 'Enterprise',
        title: 'Production Issue Resolution & Delivery Excellence',
        org: 'Mindtree, Bengaluru',
        description: 'Led a comprehensive delivery excellence initiative to transform client satisfaction and production stability — reducing open issues from 5,000+ to under 100 and improving customer feedback scores significantly.',
        impact: [
            'Reduced production issues from 5,000+ to fewer than 100 through backlog reduction, log analysis and performance bottleneck fixes',
            'Increased average customer feedback score from 4.5 to 6.3 on a scale of 7',
            'Automated recurring issue resolution processes to prevent re-occurrence',
            'Served as primary client contact, driving maximum customer satisfaction in each interaction',
        ],
        technologies: ['.Net', 'Angular', 'AWS', 'Python', 'Splunk', 'JIRA'],
    },
    {
        category: 'pm',
        year: 'Feb 2021 - Jan 2022',
        type: 'Enterprise',
        title: 'CI/CD Roadmap & Implementation',
        org: 'Mindtree, Bengaluru',
        description: 'Created and drove the roadmap for Continuous Integration / Continuous Delivery (CI/CD) processes, guiding the engineering team through end-to-end implementation to modernise the release pipeline.',
        impact: [
            'Defined CI/CD strategy and end-to-end implementation roadmap',
            'Guided engineering team through pipeline setup across Dev, QA and Prod environments',
            'Accelerated release cadence from quarterly cycles to under 4 weeks',
        ],
        technologies: ['CI/CD', 'AWS', 'Python', 'NodeJS', 'HTML', 'CSS'],
    },
    {
        category: 'pm',
        year: '2017 - 2019',
        type: 'Enterprise',
        title: 'Digital Solutions Program',
        org: 'Mindtree, Sydney',
        description: "Delivery Manager for a critical Digital Solutions program, leading a team of 80+ with full accountability for on-time delivery of the year's most critical projects. Responsible for relationship management, metrics, revenue expansion, and strategic decision making.",
        impact: [
            'Managed team of 80+ across multiple projects with end-to-end accountability',
            'Served as primary point of contact for all internal and external escalations',
            'Identified RAID (Risks, Assumptions, Issues & Dependencies) and tracked to closure',
            'Drove revenue expansion and strategic decision making for client relationship',
            'Received multiple "Trust and Respect" awards for this program',
        ],
        technologies: ['Java', 'J2EE', 'Agile', 'JIRA', 'Confluence'],
    },
    {
        category: 'pm',
        year: '2015 - 2017',
        type: 'Enterprise',
        title: 'Multi-Portfolio Program Management',
        org: 'Mindtree, Bengaluru',
        description: 'Senior Project Manager overseeing 21 applications across 4 distinct portfolios, managing 50+ project teams through the full SDLC lifecycle from conceptualization to maintenance.',
        impact: [
            'Managed 21 applications across 4 different portfolios simultaneously',
            'Led 50+ project teams using SDLC methodologies',
            'Directed project scope and cost changes with appropriate change management',
            'Communicated project plans and progress to key stakeholders',
        ],
        technologies: ['Java', 'J2EE', 'IBM Mainframes', 'Linux', 'SDLC', 'MS Project'],
    },
    {
        category: 'pm',
        year: '2014 - 2015',
        type: 'Enterprise',
        title: 'Reinsurance Application Platform',
        org: 'Mindtree, Bengaluru',
        description: 'Project Manager for a complex Reinsurance domain application, developing the initial framework and full documentation suite that enabled the team to build future enhancements independently.',
        impact: [
            'Developed initial application framework from the ground up',
            'Created HLD, LLD and Mapping documents for future reference',
            'Developed and maintained Query Log for Change Requests and queries',
            'Managed team of 9 (Developers and Testers)',
            'Received "Hats-off", "Partnership" & "Influencing" awards for this project',
        ],
        technologies: ['Java', 'J2EE', 'Ab Initio', 'Oracle DB'],
    },
    {
        category: 'pm',
        year: '2013 - 2015',
        type: 'Enterprise',
        title: 'Transact ODS Integration',
        org: 'Mindtree, Bengaluru',
        description: 'Technical Manager for a large-scale application integration initiative, managing 18+ engineers across multiple geographies and designing integration between distributed systems.',
        impact: [
            'Managed team of 18+ including Tech Leads, Engineers, QA and Business Analysts',
            'Designed and implemented integration between multiple applications',
            'Coordinated teams spread across multiple geographies',
            'Created WSR templates, Review checklists and Impact Analysis documents',
            'Received "Unstoppable" and "Strategic thinking" awards for this project',
        ],
        technologies: ['Java', 'J2EE', 'IBM DataStage', 'Oracle DB', 'Shell Scripting'],
    },
    {
        category: 'pm',
        year: '2013',
        type: 'Enterprise',
        title: 'SWIFT Audit & RFP Program',
        org: 'Mindtree, Bengaluru',
        description: 'Led estimation and proposal work for a major RFP that was successfully awarded to Mindtree, and contributed to the SWIFT audit program that earned team recognition.',
        impact: [
            'Estimated project scope using Function Points methodology',
            'Worked on Request for Proposal (RFP) — subsequently awarded to Mindtree',
            'Received the "A-Team" award for contribution to SWIFT audit',
        ],
        technologies: ['Function Points', 'SWIFT', 'MS Excel', 'Estimation Tools'],
    },
    {
        category: 'delivery',
        year: '2009 - 2013',
        type: 'Enterprise',
        title: 'Telecom Platform Development & Onsite Coordination',
        org: 'Mindtree, Brussels',
        description: 'Technical Lead on a C++ telecom platform, serving as onsite coordinator in Brussels (May 2011 - Dec 2012) and owning the full Dev, QA and Pre-Prod build pipeline.',
        impact: [
            'Played onsite coordinator role at customer site in Brussels',
            'Designed and developed various application enhancements',
            'Performed code reviews and provided Development team sign-off',
            'Implemented Dev builds; owned Dev, QA and Pre-Prod environments',
            'Created Application Handbook and KT plan for new joiners',
            'Received "10/10" award for the onsite coordinator role',
        ],
        technologies: ['C++', 'Linux', 'Shell Scripting', 'Agile / Scrum', 'GDB', 'Make'],
    },
    {
        category: 'delivery',
        year: '2008 - 2009',
        type: 'Enterprise',
        title: 'Systems Development - Module Lead',
        org: 'Mindtree, London',
        description: 'Module Lead managing a small team in London, responsible for designing, developing and unit testing reusable and reliable system components in C and UNIX scripting.',
        impact: [
            'Managed team of 4 engineers',
            'Designed, developed and unit tested reusable and reliable code',
            'Documented technical workflows to educate newly hired employees',
        ],
        technologies: ['C', 'UNIX Scripting', 'Shell', 'Make'],
    },
    {
        category: 'delivery',
        year: '2006 - 2007',
        type: 'Enterprise',
        title: 'Telecom Software Solutions',
        org: 'Wipro, Hyderabad',
        description: 'Senior Software Engineer delivering business-critical enhancements for a US-based Telecom company, working across development, testing and production support functions.',
        impact: [
            'Key developer for business-critical enhancements',
            'Involved in DSL to Fiber optics switching',
            'Analyzed proposed technical solutions based on customer requirements',
            'Analyzed and resolved production issues reported by Production Support team',
        ],
        technologies: ['C++', 'VC++', 'Unix', 'Purify', 'Make'],
    },
    {
        category: 'delivery',
        year: '2005 - 2006',
        type: 'Enterprise',
        title: 'Technical Support & Database Operations',
        org: 'IBM, Bengaluru',
        description: 'Technical Analyst responsible for root-cause analysis, database querying for report processing, and supporting customers with technical queries and orders.',
        impact: [
            'Discovered root causes of problems and identified appropriate solutions',
            'Queried databases for information needed for report processing',
            'Logged call information and solutions into internal knowledge base',
        ],
        technologies: ['SQL', 'Database Tools', 'Lotus Notes'],
    },
    {
        category: 'delivery',
        year: '2004 - 2006',
        type: 'Enterprise',
        title: 'L2/L3 Technical Support',
        org: 'HTMT, Bengaluru',
        description: 'Provided L2/L3 support to internal and external customers, handling escalated issues related to Windows OS, internet connectivity and performance troubleshooting.',
        impact: [
            'Provided L2/L3 support for customer issues',
            'Handled Windows OS, Internet connectivity and speed issues',
            'Served as primary customer support for internal and external customers',
        ],
        technologies: ['Networking Tools', 'Remote Desktop', 'Active Directory'],
    },
    {
        category: 'delivery',
        year: '2003 - 2004',
        type: 'Early Career',
        title: 'Civil Engineering Computation Utilities',
        org: 'ECI, Hyderabad',
        description: 'Developed a suite of C-language utilities that automated complex computational tasks for Civil Engineers, along with user manuals enabling adoption by non-technical staff.',
        impact: [
            'Developed utilities in C that reduced manual computation effort for Civil Engineers',
            'Created packages and user manuals for non-technical Civil Engineers',
        ],
        technologies: ['C'],
    },
    {
        category: 'delivery',
        year: '2000 - 2003',
        type: 'Early Career',
        title: 'In-House Application Development',
        org: 'Image Infosys, Hyderabad',
        description: 'Programmer building in-house applications to meet company operational needs, working directly with customers to understand requirements and deliver custom solutions.',
        impact: [
            'Developed in-house applications designed for company operational needs',
            'Worked with customers to understand needs and develop tailored applications',
            'Prepared technical documentation and generated reports',
            'Learned new skills and applied them to daily tasks to improve productivity',
        ],
        technologies: ['C', 'C++', 'Visual Basic', 'MS-Access'],
    },

    // ── Personal Projects ─────────────────────────────────────────
    {
        category: 'personal',
        personal: true,
        year: 'July 2025 - Dec 2025',
        type: 'Personal',
        title: 'F1toF12 — Business Development Platform',
        org: 'Personal Project',
        description: 'Building a recruitment and business development platform that connects top talent with opportunities. Leverages intelligent matching and automation to optimize the hiring process end-to-end.',
        impact: [
            'Published suite of automation and productivity tools',
            'Live website to support recuiters day to day activities',
            'Manage User Management using AWS Cognito',
            'Implement REST APIs using Python',
            'Implement CI/CD using GitHub Actions',
            'Developed a comprehensive dashboard for real-time analytics',
            'Test environments published for testing purposes',
            'DB Layer where we can change backend database as per user requirement'
        ],
        technologies: ['React', 'Python', 'AWS', 'CI/CD', 'GitHub', 'DynamoDB'],
        link: { href: 'https://f1tof12.com', label: 'Visit f1tof12.com →' },
    }
];
