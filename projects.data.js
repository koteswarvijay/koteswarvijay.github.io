// ─────────────────────────────────────────────────────────────────────────────
// projects.data.js  –  Edit this file to add, remove, or update projects.
//
// Each project object supports:
//   category    : 'ai' | 'cloud' | 'data' | 'delivery' | 'personal'
//   year        : display string, e.g. "2025 – Present"
//   type        : display badge, e.g. "Enterprise" | "Personal" | "Early Career"
//   title       : card heading
//   org         : organisation / location
//   description : one-paragraph summary
//   impact      : array of bullet strings (shown with ▸ prefix)
//   tags        : array of tech / skill tags
//   link        : (optional) { href, label } — renders a "→" link at the bottom
//   personal    : (optional) true — applies purple accent instead of blue
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [

    // ── AI & Automation ───────────────────────────────────────────
    {
        category: 'ai',
        year: '2025 – Present',
        type: 'Enterprise',
        title: 'AI Developer Framework (Claude Integration)',
        org: 'Epsilon, Bengaluru',
        description: 'Built a reusable AI framework integrating Claude services into the product development lifecycle, enabling developers to accelerate feature delivery with AI-assisted tooling.',
        impact: [
            'Integrated Claude AI services into internal developer workflows',
            'Created reusable framework adopted across engineering teams',
            'Conducted POC with Amazon Q for day-to-day development activities',
        ],
        tags: ['Python', 'Claude AI', 'Amazon Q', 'AWS'],
    },
    {
        category: 'ai',
        year: '2025 – Present',
        type: 'Enterprise',
        title: 'Automated Workflow Platform',
        org: 'Epsilon, Bengaluru',
        description: 'Developed end-to-end automated workflows for User Story creation and Product Configuration, significantly improving team productivity and reducing manual overhead.',
        impact: [
            'Automated User Story generation from product requirements',
            'Built Product Configuration pipelines to reduce manual steps',
            'Developed Pre-sales demo sites to support business development',
        ],
        tags: ['n8n', 'React JS', '.Net', 'AWS Lambda', 'Kibana'],
    },
    {
        category: 'ai',
        year: '2022 – 2023',
        type: 'Enterprise',
        title: 'Code Generation Accelerator',
        org: 'LTIMindtree, Bengaluru',
        description: 'Spearheaded a code generation accelerator initiative that automated the migration of 200+ Java/J2EE applications to Node.js, dramatically cutting development timelines across the migration program.',
        impact: [
            'Automated Java → Node.js code translation for 200+ applications',
            'Reduced developer effort per application significantly',
            'Drove overall productivity improvement across the program',
        ],
        tags: ['Java', 'Node.js', 'J2EE', 'AWS'],
    },
    {
        category: 'ai',
        year: '2021 – 2022',
        type: 'Enterprise',
        title: 'Regression Test Automation Framework',
        org: 'Mindtree, Bengaluru',
        description: 'Led the automation team to build a comprehensive regression testing framework that reduced manual testing effort by over 99%, saving approximately 10,000 person-days annually.',
        impact: [
            'Reduced regression testing from 600 person-days to just 5 per run',
            'Saved ~10,000 person-days annually in testing effort',
            'Scaled production issue backlog from 5,000+ down to fewer than 100',
        ],
        tags: ['.Net', 'Angular', 'Python', 'CI/CD', 'AWS'],
    },

    // ── Cloud Migration ───────────────────────────────────────────
    {
        category: 'cloud',
        year: '2022 – 2023',
        type: 'Enterprise',
        title: 'AWS Cloud Migration Program (200+ Apps)',
        org: 'LTIMindtree, Bengaluru',
        description: 'Led the end-to-end migration program for 200+ applications from on-premises infrastructure to AWS Cloud, defining migration strategy and managing all dependencies at program level.',
        impact: [
            'Migrated 200+ applications using R-Factor (Re-write, Retire, Re-Host, Re-platform)',
            'Managed program-level dependencies and application prioritization',
            'Delivered in full accordance with cost, scheduling, and quality targets',
        ],
        tags: ['AWS', 'Python', 'Java', 'Angular', 'Node.js', 'Power BI'],
    },

    // ── Data & Analytics ──────────────────────────────────────────
    {
        category: 'data',
        year: '2023 – 2024',
        type: 'Enterprise',
        title: 'Enterprise Data Platform',
        org: 'WinWire Technologies, Bengaluru',
        description: 'Architected and delivered an Enterprise Data Platform that consolidated multiple business units onto a single common platform, driving major cloud cost efficiencies.',
        impact: [
            'Consolidated disparate business unit data onto one unified platform',
            'Achieved savings of over $60K USD per month in cloud costs',
            'Partnered with Microsoft on Azure migration programs',
        ],
        tags: ['Databricks', 'Azure Synapse', 'ADF', 'Microsoft Fabric', 'Power BI'],
    },
    {
        category: 'data',
        year: '2019 – 2021',
        type: 'Enterprise',
        title: 'Application Monitoring & Observability Platform',
        org: 'Mindtree, Bengaluru',
        description: 'Designed and implemented customized observability dashboards in AppDynamics and Splunk, identifying process gaps and proactively resolving critical production incidents.',
        impact: [
            'Reduced Severity-1 issues from 4 per week to ZERO',
            'Built custom AppDynamics and Splunk dashboards for real-time visibility',
            'Identified root-cause process gaps and implemented permanent fixes',
        ],
        tags: ['AppDynamics', 'Splunk', 'Java', 'J2EE'],
    },

    // ── Enterprise Delivery ───────────────────────────────────────
    {
        category: 'delivery',
        year: '2017 – 2019',
        type: 'Enterprise',
        title: 'Digital Solutions Program',
        org: 'Mindtree, Sydney',
        description: "Delivery Manager for a critical Digital Solutions program, leading a team of 80+ with full accountability for on-time delivery of the year's most critical projects.",
        impact: [
            'Managed team of 80+ across multiple projects with end-to-end accountability',
            'Served as primary point of contact for all internal and external escalations',
            'Identified RAID (Risks, Assumptions, Issues & Dependencies) and tracked to closure',
            'Drove revenue expansion and strategic decision making for client relationship',
            'Received multiple "Trust and Respect" awards for this program',
        ],
        tags: ['Java', 'J2EE', 'Program Management'],
    },
    {
        category: 'delivery',
        year: '2015 – 2017',
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
        tags: ['Java', 'J2EE', 'IBM Mainframes', 'Linux', 'SDLC'],
    },
    {
        category: 'delivery',
        year: '2014 – 2015',
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
        tags: ['Java', 'J2EE', 'Ab Initio'],
    },
    {
        category: 'delivery',
        year: '2013 – 2015',
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
        tags: ['Java', 'J2EE', 'DataStage'],
    },
    {
        category: 'delivery',
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
        tags: ['Function Points', 'RFP', 'Project Estimation'],
    },
    {
        category: 'delivery',
        year: '2009 – 2013',
        type: 'Enterprise',
        title: 'Telecom Platform Development & Onsite Coordination',
        org: 'Mindtree, Brussels',
        description: 'Technical Lead on a C++ telecom platform, serving as onsite coordinator in Brussels (May 2011 – Dec 2012) and owning the full Dev, QA and Pre-Prod build pipeline.',
        impact: [
            'Played onsite coordinator role at customer site in Brussels',
            'Designed and developed various application enhancements',
            'Performed code reviews and provided Development team sign-off',
            'Implemented Dev builds; owned Dev, QA and Pre-Prod environments',
            'Created Application Handbook and KT plan for new joiners',
            'Received "10/10" award for the onsite coordinator role',
        ],
        tags: ['C++', 'Linux', 'Shell Scripting', 'Agile / Scrum'],
    },
    {
        category: 'delivery',
        year: '2008 – 2009',
        type: 'Enterprise',
        title: 'Systems Development – Module Lead',
        org: 'Mindtree, London',
        description: 'Module Lead managing a small team in London, responsible for designing, developing and unit testing reusable and reliable system components in C and UNIX scripting.',
        impact: [
            'Managed team of 4 engineers',
            'Designed, developed and unit tested reusable and reliable code',
            'Documented technical workflows to educate newly hired employees',
        ],
        tags: ['C', 'UNIX Scripting'],
    },
    {
        category: 'delivery',
        year: '2006 – 2007',
        type: 'Enterprise',
        title: 'Telecom Software Solutions',
        org: 'Wipro, Hyderabad',
        description: 'Senior Software Engineer delivering business-critical enhancements for a US-based Telecom company, working across development, testing and production support functions.',
        impact: [
            'Key developer for business-critical enhancements',
            'Analyzed proposed technical solutions based on customer requirements',
            'Analyzed and resolved production issues reported by Production Support team',
        ],
        tags: ['C++', 'Unix', 'VC++'],
    },
    {
        category: 'delivery',
        year: '2005 – 2006',
        type: 'Enterprise',
        title: 'Technical Support & Database Operations',
        org: 'IBM, Bengaluru',
        description: 'Technical Analyst responsible for root-cause analysis, database querying for report processing, and supporting customers with technical queries and orders.',
        impact: [
            'Discovered root causes of problems and identified appropriate solutions',
            'Queried databases for information needed for report processing',
            'Logged call information and solutions into internal knowledge base',
        ],
        tags: ['Database', 'Technical Support', 'Root Cause Analysis'],
    },
    {
        category: 'delivery',
        year: '2004 – 2006',
        type: 'Enterprise',
        title: 'L2/L3 Technical Support',
        org: 'HTMT, Bengaluru',
        description: 'Provided L2/L3 support to internal and external customers, handling escalated issues related to Windows OS, internet connectivity and performance troubleshooting.',
        impact: [
            'Provided L2/L3 support for customer issues',
            'Handled Windows OS, Internet connectivity and speed issues',
            'Served as primary customer support for internal and external customers',
        ],
        tags: ['Windows OS', 'Networking', 'L2/L3 Support'],
    },
    {
        category: 'delivery',
        year: '2003 – 2004',
        type: 'Early Career',
        title: 'Civil Engineering Computation Utilities',
        org: 'ECI, Hyderabad',
        description: 'Developed a suite of C-language utilities that automated complex computational tasks for Civil Engineers, along with user manuals enabling adoption by non-technical staff.',
        impact: [
            'Developed utilities in C that reduced manual computation effort for Civil Engineers',
            'Created packages and user manuals for non-technical Civil Engineers',
        ],
        tags: ['C', 'Utilities Development'],
    },
    {
        category: 'delivery',
        year: '2000 – 2003',
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
        tags: ['C', 'C++', 'VB', 'MS-Access'],
    },

    // ── Personal Projects ─────────────────────────────────────────
    {
        category: 'personal',
        personal: true,
        year: '2024 – Present',
        type: 'Personal',
        title: 'F1toF12 — Productivity Tools',
        org: 'Personal Project',
        description: 'A curated collection of software productivity tools and automation utilities designed to streamline developer and knowledge-worker workflows. Focused on reducing friction in day-to-day tasks.',
        impact: [
            'Published suite of automation and productivity tools',
            'Live website with growing user base',
        ],
        tags: ['React', 'Node.js', 'Automation'],
        link: { href: 'https://f1tof12.com', label: 'Visit f1tof12.com →' },
    },
    {
        category: 'personal',
        personal: true,
        year: '2025 – Present',
        type: 'Personal',
        title: 'Business Development Platform',
        org: 'Personal Project',
        description: 'Building a recruitment and business development platform that connects top talent with opportunities. Leverages intelligent matching and automation to optimize the hiring process end-to-end.',
        impact: [
            'AI-assisted candidate matching and opportunity discovery',
            'Automated outreach and workflow orchestration',
        ],
        tags: ['Python', 'React JS', 'AWS', 'AI'],
    },

];
