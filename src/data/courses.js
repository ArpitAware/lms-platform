import img1 from '../assets/coursecardImages/image1.png'
import img2 from '../assets/coursecardImages/image2.png'
import img3 from '../assets/coursecardImages/image3.png'
import img4 from '../assets/coursecardImages/image4.png'
import img5 from '../assets/coursecardImages/image5.png'
import img6 from '../assets/coursecardImages/image6.png'
import img7 from '../assets/coursecardImages/image7.png'
import img8 from '../assets/coursecardImages/image8.png'
import img9 from '../assets/coursecardImages/image9.png'
import img10 from '../assets/coursecardImages/image10.png'

export const courseCardsArray = [
  {
    id: "course_1",
    title: "React Mastery Bootcamp",
    instructor: "Amit Sharma",
    category: "Web Development",
    price: 499,
    rating: 4.7,
    totalReviews: 1200,
    language: "Hindi",
    duration: "12h 30m",
    thumbnail: img1,
    description:
      "Master React from basics to advanced with real-world projects.",
    sections: [
      {
        sectionTitle: "Introduction",
        subsections: [
          { title: "What is React", videoLength: "10:00" },
          { title: "Setup Environment", videoLength: "12:00" },
          { title: "Project Structure", videoLength: "11:00" },
        ],
      },
      {
        sectionTitle: "Core Concepts",
        subsections: [
          { title: "JSX", videoLength: "15:00" },
          { title: "Props", videoLength: "14:00" },
          { title: "State", videoLength: "18:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "Hooks", videoLength: "20:00" },
          { title: "Routing", videoLength: "22:00" },
          { title: "Optimization", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u1",
        userName: "Rahul",
        comment: "Excellent React course",
        rating: 5,
      },
    ],
  },

  {
    id: "course_2",
    title: "JavaScript Complete Guide",
    instructor: "Rohit Singh",
    category: "Programming",
    price: 399,
    rating: 4.6,
    totalReviews: 950,
    language: "English",
    duration: "14h",
    thumbnail: img2,
    description: "Complete JavaScript from beginner to advanced.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Variables", videoLength: "10:00" },
          { title: "Data Types", videoLength: "11:00" },
          { title: "Operators", videoLength: "12:00" },
        ],
      },
      {
        sectionTitle: "Functions",
        subsections: [
          { title: "Function Basics", videoLength: "13:00" },
          { title: "Arrow Functions", videoLength: "12:00" },
          { title: "Closures", videoLength: "15:00" },
        ],
      },
      {
        sectionTitle: "Async JS",
        subsections: [
          { title: "Promises", videoLength: "14:00" },
          { title: "Async Await", videoLength: "16:00" },
          { title: "Fetch API", videoLength: "15:00" },
        ],
      },
      {
        sectionTitle: "DOM",
        subsections: [
          { title: "Selectors", videoLength: "10:00" },
          { title: "Events", videoLength: "12:00" },
          { title: "Manipulation", videoLength: "13:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u2",
        userName: "Sneha",
        comment: "Very clear explanations",
        rating: 4,
      },
    ],
  },

  {
    id: "course_3",
    title: "Node.js Backend Development",
    instructor: "Vikram Joshi",
    category: "Backend",
    price: 599,
    rating: 4.5,
    totalReviews: 870,
    language: "English",
    duration: "10h",
    thumbnail: img3,
    description: "Build scalable backend with Node.js.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "Node Basics", videoLength: "09:00" },
          { title: "Modules", videoLength: "10:00" },
          { title: "NPM", videoLength: "11:00" },
        ],
      },
      {
        sectionTitle: "Express",
        subsections: [
          { title: "Setup", videoLength: "12:00" },
          { title: "Routing", videoLength: "13:00" },
          { title: "Middleware", videoLength: "14:00" },
        ],
      },
      {
        sectionTitle: "Database",
        subsections: [
          { title: "MongoDB", videoLength: "15:00" },
          { title: "Mongoose", videoLength: "16:00" },
          { title: "CRUD", videoLength: "17:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u3",
        userName: "Aman",
        comment: "Great backend intro",
        rating: 4,
      },
    ],
  },

  {
    id: "course_4",
    title: "Full Stack MERN",
    instructor: "Ankit Verma",
    category: "Full Stack",
    price: 799,
    rating: 4.8,
    totalReviews: 1500,
    language: "Hindi",
    duration: "20h",
    thumbnail: img4,
    description: "Complete MERN stack project.",
    sections: [
      {
        sectionTitle: "Frontend",
        subsections: [
          { title: "React Setup", videoLength: "12:00" },
          { title: "Components", videoLength: "13:00" },
          { title: "Routing", videoLength: "14:00" },
        ],
      },
      {
        sectionTitle: "Backend",
        subsections: [
          { title: "Node API", videoLength: "15:00" },
          { title: "Auth", videoLength: "16:00" },
          { title: "JWT", videoLength: "17:00" },
        ],
      },
      {
        sectionTitle: "Database",
        subsections: [
          { title: "Schema", videoLength: "14:00" },
          { title: "Queries", videoLength: "15:00" },
          { title: "Aggregation", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Deployment",
        subsections: [
          { title: "Frontend Deploy", videoLength: "12:00" },
          { title: "Backend Deploy", videoLength: "13:00" },
          { title: "Env Setup", videoLength: "11:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u4",
        userName: "Deepak",
        comment: "Best full stack course",
        rating: 5,
      },
    ],
  },

  {
    id: "course_5",
    title: "Python for Data Science",
    instructor: "Neha Gupta",
    category: "Data Science",
    price: 699,
    rating: 4.6,
    totalReviews: 1100,
    language: "English",
    duration: "18h",
    thumbnail: img5,
    description: "Data science using Python and libraries.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Syntax", videoLength: "10:00" },
          { title: "Loops", videoLength: "12:00" },
          { title: "Functions", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Libraries",
        subsections: [
          { title: "NumPy", videoLength: "14:00" },
          { title: "Pandas", videoLength: "15:00" },
          { title: "Matplotlib", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Projects",
        subsections: [
          { title: "Analysis", videoLength: "18:00" },
          { title: "Visualization", videoLength: "19:00" },
          { title: "Case Study", videoLength: "20:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u5",
        userName: "Pooja",
        comment: "Very useful course",
        rating: 5,
      },
    ],
  },

  {
    id: "course_6",
    title: "Machine Learning Basics",
    instructor: "Amit Sharma",
    category: "AI/ML",
    price: 899,
    rating: 4.5,
    totalReviews: 900,
    language: "English",
    duration: "22h",
    thumbnail: img6,
    description: "Learn ML concepts and algorithms.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "ML Overview", videoLength: "10:00" },
          { title: "Types", videoLength: "12:00" },
          { title: "Workflow", videoLength: "11:00" },
        ],
      },
      {
        sectionTitle: "Algorithms",
        subsections: [
          { title: "Regression", videoLength: "15:00" },
          { title: "Classification", videoLength: "16:00" },
          { title: "Clustering", videoLength: "17:00" },
        ],
      },
      {
        sectionTitle: "Evaluation",
        subsections: [
          { title: "Metrics", videoLength: "14:00" },
          { title: "Validation", videoLength: "15:00" },
          { title: "Optimization", videoLength: "16:00" },
        ],
      },
    ],
    reviews: [
      { userId: "u6", userName: "Ravi", comment: "Good ML intro", rating: 4 },
    ],
  },

  {
    id: "course_7",
    title: "Docker & DevOps",
    instructor: "Rohit Singh",
    category: "DevOps",
    price: 599,
    rating: 4.4,
    totalReviews: 700,
    language: "English",
    duration: "11h",
    thumbnail: img7,
    description: "DevOps tools and workflows.",
    sections: [
      {
        sectionTitle: "Docker",
        subsections: [
          { title: "Images", videoLength: "10:00" },
          { title: "Containers", videoLength: "12:00" },
          { title: "Volumes", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "CI/CD",
        subsections: [
          { title: "Pipeline", videoLength: "14:00" },
          { title: "GitHub Actions", videoLength: "15:00" },
          { title: "Deploy", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Monitoring",
        subsections: [
          { title: "Logs", videoLength: "11:00" },
          { title: "Metrics", videoLength: "12:00" },
          { title: "Alerts", videoLength: "13:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u7",
        userName: "Karan",
        comment: "Nice devops course",
        rating: 4,
      },
    ],
  },

  {
    id: "course_8",
    title: "Cyber Security Essentials",
    instructor: "Ankit Verma",
    category: "Cyber Security",
    price: 499,
    rating: 4.3,
    totalReviews: 650,
    language: "Hindi",
    duration: "9h",
    thumbnail: img8,
    description: "Learn security fundamentals.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Threats", videoLength: "08:00" },
          { title: "Attacks", videoLength: "09:00" },
          { title: "Defense", videoLength: "10:00" },
        ],
      },
      {
        sectionTitle: "Tools",
        subsections: [
          { title: "Firewall", videoLength: "11:00" },
          { title: "Encryption", videoLength: "12:00" },
          { title: "VPN", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Practice",
        subsections: [
          { title: "Scanning", videoLength: "14:00" },
          { title: "Testing", videoLength: "15:00" },
          { title: "Reports", videoLength: "16:00" },
        ],
      },
    ],
    reviews: [
      { userId: "u8", userName: "Nisha", comment: "Helpful course", rating: 4 },
    ],
  },

  {
    id: "course_9",
    title: "Advanced React Patterns",
    instructor: "Vikram Joshi",
    category: "Web Development",
    price: 699,
    rating: 4.7,
    totalReviews: 880,
    language: "English",
    duration: "13h",
    thumbnail: img9,
    description: "Advanced React concepts and patterns.",
    sections: [
      {
        sectionTitle: "Hooks",
        subsections: [
          { title: "Custom Hooks", videoLength: "12:00" },
          { title: "useReducer", videoLength: "14:00" },
          { title: "useContext", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Performance",
        subsections: [
          { title: "Memo", videoLength: "15:00" },
          { title: "Lazy", videoLength: "16:00" },
          { title: "Optimization", videoLength: "17:00" },
        ],
      },
      {
        sectionTitle: "Patterns",
        subsections: [
          { title: "HOC", videoLength: "14:00" },
          { title: "Render Props", videoLength: "15:00" },
          { title: "Compound", videoLength: "16:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u9",
        userName: "Arjun",
        comment: "Advanced but useful",
        rating: 5,
      },
    ],
  },

  {
    id: "course_10",
    title: "UI UX Design Fundamentals",
    instructor: "Neha Gupta",
    category: "Design",
    price: 299,
    rating: 4.5,
    totalReviews: 720,
    language: "English",
    duration: "8h",
    thumbnail: img10,
    description: "Understand Ui/Ux concepts from basics.",
    sections: [
      {
        sectionTitle: "Design Basics",
        subsections: [
          { title: "Color", videoLength: "08:00" },
          { title: "Typography", videoLength: "09:00" },
          { title: "Layout", videoLength: "10:00" },
        ],
      },
      {
        sectionTitle: "Tools",
        subsections: [
          { title: "Figma", videoLength: "11:00" },
          { title: "Wireframe", videoLength: "12:00" },
          { title: "Prototype", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "UX",
        subsections: [
          { title: "Research", videoLength: "14:00" },
          { title: "Testing", videoLength: "15:00" },
          { title: "Improvement", videoLength: "16:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u10",
        userName: "Simran",
        comment: "Great design intro",
        rating: 4,
      },
    ],
  },
];
