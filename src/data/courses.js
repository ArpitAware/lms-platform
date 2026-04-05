import img1 from "../assets/coursecardImages/image1.png";
import img2 from "../assets/coursecardImages/image2.png";
import img3 from "../assets/coursecardImages/image3.png";
import img4 from "../assets/coursecardImages/image4.png";
import img5 from "../assets/coursecardImages/image5.png";
import img6 from "../assets/coursecardImages/image6.png";
import img7 from "../assets/coursecardImages/image7.png";
import img8 from "../assets/coursecardImages/image8.png";
import img9 from "../assets/coursecardImages/image9.png";
import img10 from "../assets/coursecardImages/image10.png";
import img11 from "../assets/coursecardImages/image11.png";
import img12 from "../assets/coursecardImages/image12.png";
import img13 from "../assets/coursecardImages/image13.png";
import img14 from "../assets/coursecardImages/image14.png";
import img15 from "../assets/coursecardImages/image15.png";
import img16 from "../assets/coursecardImages/image16.png";
import img17 from "../assets/coursecardImages/image17.png";
import img18 from "../assets/coursecardImages/image18.png";
import img19 from "../assets/coursecardImages/image19.png";
import img20 from "../assets/coursecardImages/image20.png";
import img21 from "../assets/coursecardImages/image21.png";
import img22 from "../assets/coursecardImages/image22.png";
import img23 from "../assets/coursecardImages/image23.png";
import img24 from "../assets/coursecardImages/image24.png";
import img25 from "../assets/coursecardImages/image25.png";
import img26 from "../assets/coursecardImages/image26.png";
import img27 from "../assets/coursecardImages/image27.png";


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
  {
    id: "course_11",
    title: "React Projects Advanced",
    instructor: "Amit Sharma",
    category: "Web Development",
    price: 299,
    rating: 4.3,
    totalReviews: 540,
    language: "Hindi",
    duration: "10h",
    thumbnail: img11,
    description: "Build real world React projects from scratch.",
    sections: [
      {
        sectionTitle: "Projects",
        subsections: [
          { title: "Dashboard", videoLength: "10:00" },
          { title: "Ecommerce UI", videoLength: "12:00" },
          { title: "API Integration", videoLength: "14:00" },
        ],
      },
      {
        sectionTitle: "Optimization",
        subsections: [
          { title: "Lazy Loading", videoLength: "15:00" },
          { title: "Memoization", videoLength: "16:00" },
          { title: "Best Practices", videoLength: "17:00" },
        ],
      },
      {
        sectionTitle: "Deployment",
        subsections: [
          { title: "Build", videoLength: "12:00" },
          { title: "Deploy", videoLength: "13:00" },
          { title: "Testing", videoLength: "11:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u11",
        userName: "Kunal",
        comment: "Great projects course",
        rating: 4,
      },
    ],
  },

  {
    id: "course_12",
    title: "Android App Development",
    instructor: "Rohit Singh",
    category: "App Development",
    price: 599,
    rating: 4.5,
    totalReviews: 720,
    language: "English",
    duration: "15h",
    thumbnail: img12,
    description: "Learn to build Android apps using modern tools.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "UI", videoLength: "10:00" },
          { title: "Layouts", videoLength: "12:00" },
          { title: "Navigation", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "API", videoLength: "14:00" },
          { title: "Storage", videoLength: "15:00" },
          { title: "Auth", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Publish",
        subsections: [
          { title: "Testing", videoLength: "11:00" },
          { title: "Play Store", videoLength: "12:00" },
          { title: "Release", videoLength: "13:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u12",
        userName: "Riya",
        comment: "Very useful app dev course",
        rating: 5,
      },
    ],
  },

  {
    id: "course_13",
    title: "Data Analysis with Python",
    instructor: "Neha Gupta",
    category: "Data Science",
    price: 399,
    rating: 4.4,
    totalReviews: 630,
    language: "English",
    duration: "12h",
    thumbnail: img13,
    description: "Analyze data using Python libraries.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "Python Setup", videoLength: "10:00" },
          { title: "Libraries", videoLength: "11:00" },
          { title: "Data Cleaning", videoLength: "12:00" },
        ],
      },
      {
        sectionTitle: "Analysis",
        subsections: [
          { title: "Pandas", videoLength: "14:00" },
          { title: "Stats", videoLength: "15:00" },
          { title: "Charts", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Project",
        subsections: [
          { title: "Case Study", videoLength: "18:00" },
          { title: "Insights", videoLength: "19:00" },
          { title: "Report", videoLength: "20:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u13",
        userName: "Ankit",
        comment: "Good data course",
        rating: 4,
      },
    ],
  },

  {
    id: "course_14",
    title: "Deep Learning Fundamentals",
    instructor: "Vikram Joshi",
    category: "AI/ML",
    price: 799,
    rating: 4.6,
    totalReviews: 880,
    language: "English",
    duration: "18h",
    thumbnail: img14,
    description: "Understand deep learning models and neural networks.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "DL Basics", videoLength: "10:00" },
          { title: "Neurons", videoLength: "12:00" },
          { title: "Layers", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Models",
        subsections: [
          { title: "CNN", videoLength: "14:00" },
          { title: "RNN", videoLength: "15:00" },
          { title: "Transformers", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Training",
        subsections: [
          { title: "Loss", videoLength: "14:00" },
          { title: "Optimization", videoLength: "15:00" },
          { title: "Evaluation", videoLength: "16:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u14",
        userName: "Ravi",
        comment: "Deep but useful",
        rating: 5,
      },
    ],
  },

  {
    id: "course_15",
    title: "Kubernetes for Beginners",
    instructor: "Rohit Singh",
    category: "DevOps",
    price: 699,
    rating: 4.5,
    totalReviews: 600,
    language: "English",
    duration: "14h",
    thumbnail: img15,
    description: "Learn container orchestration using Kubernetes.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Pods", videoLength: "10:00" },
          { title: "Nodes", videoLength: "12:00" },
          { title: "Cluster", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Deploy",
        subsections: [
          { title: "Deployments", videoLength: "14:00" },
          { title: "Services", videoLength: "15:00" },
          { title: "Scaling", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "Helm", videoLength: "17:00" },
          { title: "Monitoring", videoLength: "18:00" },
          { title: "Security", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u15",
        userName: "Karan",
        comment: "Nice k8s intro",
        rating: 4,
      },
    ],
  },

  {
    id: "course_16",
    title: "Ethical Hacking Masterclass",
    instructor: "Ankit Verma",
    category: "Cyber Security",
    price: 899,
    rating: 4.7,
    totalReviews: 950,
    language: "Hindi",
    duration: "20h",
    thumbnail: img16,
    description: "Learn ethical hacking and penetration testing.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Intro", videoLength: "10:00" },
          { title: "Tools", videoLength: "12:00" },
          { title: "Network", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Attacks",
        subsections: [
          { title: "SQL Injection", videoLength: "14:00" },
          { title: "XSS", videoLength: "15:00" },
          { title: "Phishing", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Defense",
        subsections: [
          { title: "Firewall", videoLength: "17:00" },
          { title: "Encryption", videoLength: "18:00" },
          { title: "Best Practices", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      { userId: "u16", userName: "Aman", comment: "Very practical", rating: 5 },
    ],
  },

  {
    id: "course_17",
    title: "Figma UI Design Mastery",
    instructor: "Neha Gupta",
    category: "Design",
    price: 299,
    rating: 4.4,
    totalReviews: 500,
    language: "English",
    duration: "9h",
    thumbnail: img17,
    description: "Design modern UI using Figma.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Tools", videoLength: "08:00" },
          { title: "Frames", videoLength: "09:00" },
          { title: "Components", videoLength: "10:00" },
        ],
      },
      {
        sectionTitle: "Design",
        subsections: [
          { title: "Layouts", videoLength: "11:00" },
          { title: "Typography", videoLength: "12:00" },
          { title: "Colors", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Prototype",
        subsections: [
          { title: "Interactions", videoLength: "14:00" },
          { title: "Animation", videoLength: "15:00" },
          { title: "Export", videoLength: "16:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u17",
        userName: "Simran",
        comment: "Great UI course",
        rating: 4,
      },
    ],
  },

  {
    id: "course_18",
    title: "Java Programming Mastery",
    instructor: "Rohit Singh",
    category: "Programming",
    price: 499,
    rating: 4.5,
    totalReviews: 700,
    language: "English",
    duration: "13h",
    thumbnail: img18,
    description: "Master Java programming from basics to advanced.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Syntax", videoLength: "10:00" },
          { title: "OOP", videoLength: "12:00" },
          { title: "Loops", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "Collections", videoLength: "14:00" },
          { title: "Streams", videoLength: "15:00" },
          { title: "Multithreading", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Projects",
        subsections: [
          { title: "CLI App", videoLength: "17:00" },
          { title: "Mini Project", videoLength: "18:00" },
          { title: "Deployment", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u18",
        userName: "Rahul",
        comment: "Strong Java course",
        rating: 5,
      },
    ],
  },

  {
    id: "course_19",
    title: "iOS App Development",
    instructor: "Amit Sharma",
    category: "App Development",
    price: 799,
    rating: 4.6,
    totalReviews: 620,
    language: "English",
    duration: "16h",
    thumbnail: img19,
    description: "Build iOS apps using Swift.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "Swift Basics", videoLength: "10:00" },
          { title: "UI Kit", videoLength: "12:00" },
          { title: "Navigation", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "API", videoLength: "14:00" },
          { title: "Storage", videoLength: "15:00" },
          { title: "Auth", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Publish",
        subsections: [
          { title: "Testing", videoLength: "11:00" },
          { title: "App Store", videoLength: "12:00" },
          { title: "Release", videoLength: "13:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u19",
        userName: "Pooja",
        comment: "Nice iOS course",
        rating: 4,
      },
    ],
  },

  {
    id: "course_20",
    title: "SQL & Database Mastery",
    instructor: "Vikram Joshi",
    category: "Programming",
    price: 399,
    rating: 4.4,
    totalReviews: 580,
    language: "English",
    duration: "11h",
    thumbnail: img20,
    description: "Master SQL and database concepts.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Queries", videoLength: "10:00" },
          { title: "Joins", videoLength: "12:00" },
          { title: "Indexes", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "Optimization", videoLength: "14:00" },
          { title: "Transactions", videoLength: "15:00" },
          { title: "Scaling", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Projects",
        subsections: [
          { title: "DB Design", videoLength: "17:00" },
          { title: "Case Study", videoLength: "18:00" },
          { title: "Deployment", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u20",
        userName: "Ankit",
        comment: "Great DB course",
        rating: 4,
      },
    ],
  },
  {
    id: "course_21",
    title: "Vue.js Complete Course",
    instructor: "Sandeep Mishra",
    category: "Web Development",
    price: 349,
    rating: 4.3,
    totalReviews: 510,
    language: "English",
    duration: "11h",
    thumbnail: img21,
    description: "Learn Vue.js from basics to advanced concepts.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Intro to Vue", videoLength: "10:00" },
          { title: "Directives", videoLength: "12:00" },
          { title: "Components", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "Vue Router", videoLength: "14:00" },
          { title: "Vuex", videoLength: "15:00" },
          { title: "Optimization", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Projects",
        subsections: [
          { title: "Dashboard", videoLength: "17:00" },
          { title: "Blog App", videoLength: "18:00" },
          { title: "Deploy", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u21",
        userName: "Ramesh",
        comment: "Nice Vue course",
        rating: 4,
      },
    ],
  },

  {
    id: "course_22",
    title: "Flutter App Development",
    instructor: "Priya Khanna",
    category: "App Development",
    price: 649,
    rating: 4.5,
    totalReviews: 730,
    language: "English",
    duration: "15h",
    thumbnail: img22,
    description: "Build cross platform apps using Flutter.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Setup", videoLength: "10:00" },
          { title: "Widgets", videoLength: "12:00" },
          { title: "Layouts", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "State Mgmt", videoLength: "14:00" },
          { title: "API", videoLength: "15:00" },
          { title: "Firebase", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Projects",
        subsections: [
          { title: "App UI", videoLength: "17:00" },
          { title: "Backend", videoLength: "18:00" },
          { title: "Publish", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u22",
        userName: "Neha",
        comment: "Flutter is awesome",
        rating: 5,
      },
    ],
  },

  {
    id: "course_23",
    title: "Power BI Data Visualization",
    instructor: "Anil Kumar",
    category: "Data Science",
    price: 399,
    rating: 4.4,
    totalReviews: 620,
    language: "English",
    duration: "12h",
    thumbnail: img23,
    description: "Create interactive dashboards using Power BI.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "BI Basics", videoLength: "10:00" },
          { title: "Interface", videoLength: "11:00" },
          { title: "Import Data", videoLength: "12:00" },
        ],
      },
      {
        sectionTitle: "Visualization",
        subsections: [
          { title: "Charts", videoLength: "13:00" },
          { title: "Reports", videoLength: "14:00" },
          { title: "Filters", videoLength: "15:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "DAX", videoLength: "16:00" },
          { title: "Publishing", videoLength: "17:00" },
          { title: "Sharing", videoLength: "18:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u23",
        userName: "Kriti",
        comment: "Very useful BI course",
        rating: 4,
      },
    ],
  },

  {
    id: "course_24",
    title: "AI Chatbot Development",
    instructor: "Rahul Mehta",
    category: "AI/ML",
    price: 799,
    rating: 4.6,
    totalReviews: 850,
    language: "English",
    duration: "17h",
    thumbnail: img24,
    description: "Build intelligent chatbots using AI.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "AI Basics", videoLength: "10:00" },
          { title: "NLP", videoLength: "12:00" },
          { title: "Chatbot Flow", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Development",
        subsections: [
          { title: "Dialogflow", videoLength: "14:00" },
          { title: "API", videoLength: "15:00" },
          { title: "Integration", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Deploy",
        subsections: [
          { title: "Testing", videoLength: "17:00" },
          { title: "Deployment", videoLength: "18:00" },
          { title: "Scaling", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u24",
        userName: "Varun",
        comment: "Amazing chatbot course",
        rating: 5,
      },
    ],
  },

  {
    id: "course_25",
    title: "AWS Cloud Fundamentals",
    instructor: "Karan Malhotra",
    category: "DevOps",
    price: 699,
    rating: 4.5,
    totalReviews: 690,
    language: "English",
    duration: "14h",
    thumbnail: img25,
    description: "Learn AWS cloud services and deployment.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "AWS Intro", videoLength: "10:00" },
          { title: "EC2", videoLength: "12:00" },
          { title: "S3", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "Lambda", videoLength: "14:00" },
          { title: "IAM", videoLength: "15:00" },
          { title: "VPC", videoLength: "16:00" },
        ],
      },
      {
        sectionTitle: "Projects",
        subsections: [
          { title: "Deploy App", videoLength: "17:00" },
          { title: "Scaling", videoLength: "18:00" },
          { title: "Monitoring", videoLength: "19:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u25",
        userName: "Aman",
        comment: "Cloud made easy",
        rating: 4,
      },
    ],
  },

  {
    id: "course_26",
    title: "Network Security Basics",
    instructor: "Mehul Shah",
    category: "Cyber Security",
    price: 499,
    rating: 4.3,
    totalReviews: 550,
    language: "Hindi",
    duration: "10h",
    thumbnail: img26,
    description: "Understand network security fundamentals.",
    sections: [
      {
        sectionTitle: "Intro",
        subsections: [
          { title: "Network Basics", videoLength: "09:00" },
          { title: "Protocols", videoLength: "10:00" },
          { title: "Threats", videoLength: "11:00" },
        ],
      },
      {
        sectionTitle: "Security",
        subsections: [
          { title: "Firewall", videoLength: "12:00" },
          { title: "Encryption", videoLength: "13:00" },
          { title: "VPN", videoLength: "14:00" },
        ],
      },
      {
        sectionTitle: "Practice",
        subsections: [
          { title: "Scanning", videoLength: "15:00" },
          { title: "Testing", videoLength: "16:00" },
          { title: "Reports", videoLength: "17:00" },
        ],
      },
    ],
    reviews: [
      { userId: "u26", userName: "Rohit", comment: "Good basics", rating: 4 },
    ],
  },

  {
    id: "course_27",
    title: "Advanced Photoshop Design",
    instructor: "Simran Kaur",
    category: "Design",
    price: 299,
    rating: 4.4,
    totalReviews: 480,
    language: "English",
    duration: "9h",
    thumbnail: img27,
    description: "Master Photoshop tools and techniques.",
    sections: [
      {
        sectionTitle: "Basics",
        subsections: [
          { title: "Tools", videoLength: "08:00" },
          { title: "Layers", videoLength: "09:00" },
          { title: "Editing", videoLength: "10:00" },
        ],
      },
      {
        sectionTitle: "Design",
        subsections: [
          { title: "Posters", videoLength: "11:00" },
          { title: "Banners", videoLength: "12:00" },
          { title: "Mockups", videoLength: "13:00" },
        ],
      },
      {
        sectionTitle: "Advanced",
        subsections: [
          { title: "Retouching", videoLength: "14:00" },
          { title: "Effects", videoLength: "15:00" },
          { title: "Export", videoLength: "16:00" },
        ],
      },
    ],
    reviews: [
      {
        userId: "u27",
        userName: "Priya",
        comment: "Loved design skills",
        rating: 4,
      },
    ],
  },

  
];
