import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Kaysar',
    lastName:  '',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Senior Data Analyst',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://https://github.com/IbrahimKB',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ibrahim-boksh/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: '',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Senior Data Analyst</>,
    subline: <>I'm Kaysar, a senior data analyst at <InlineCode>Gain Theory</InlineCode>, where I help drive business insights <br/> using data user experiences. <br/>After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Kaysar is a London-based data analyst with a passion for solving complex challenges through simple, impactful solutions. His work encompasses data-driven insights, interactive platforms, and the integration of analytics with innovative technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Gain Theory',
                timeframe: '2023 - Present',
                role: 'Senior Data Analyst',
                achievements: [
                    <>Streamlined global data operations, ensuring 95% data accuracy and compliance across regional pipelines, reducing errors by 20% through optimized workflows.</>,
                    <>Successfully integrated new data sources for clients, delivering tailored solutions that improved operational efficiency and exceeded client expectations.</>,
                    <>Improved data efficiency by leveraging Snowflake for scalable warehousing, achieving a 25% enhancement in query performance and streamlining data management processes.</>
                ],
                images: [ ]
            },
            {
                company: 'Rockborne',
                timeframe: '2022 - 2023',
                role: 'Data Consultant',
                achievements: [
                    <>Delivered actionable insights for a bike-share company, leveraging SQL, Excel, and PowerPoint to clean, analyze, and visualize data. The solution contributed to a 15% cost reduction and a 20% revenue increase, presented effectively to stakeholders.</>,
                    <>Developed a predictive healthcare model using Python, employing KNN algorithms and Random Forest classifiers to achieve 95% accuracy in stroke probability estimation. Documented findings in a detailed report with a confusion matrix and classification metrics, aiding healthcare professionals in early detection.</>,
                    <>Created a Power BI dashboard to identify prime locations for a new Airbnb, incorporating imported visuals and DAX formulas. The dashboard exceeded client expectations by delivering an in-depth and visually compelling analysis.</>    
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Roehampton',
                description: <>Studied Biomedical Science.</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}


export { person, social, newsletter, home, about, blog, work };