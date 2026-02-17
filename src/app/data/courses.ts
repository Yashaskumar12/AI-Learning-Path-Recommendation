export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  duration: string;
  level: string;
  topics: number;
  color: string;
}

export const engineeringCourses: Course[] = [
  // Computer Science & Software Engineering
  {
    id: 'web-development',
    title: 'Full Stack Web Development',
    description: 'Master modern web development with React, Node.js, and databases',
    category: 'Computer Science',
    icon: '💻',
    duration: '12 weeks',
    level: 'Intermediate',
    topics: 10,
    color: 'bg-blue-500',
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Learn essential DSA concepts for technical interviews and problem-solving',
    category: 'Computer Science',
    icon: '🔢',
    duration: '10 weeks',
    level: 'Beginner',
    topics: 12,
    color: 'bg-purple-500',
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning & AI',
    description: 'Build intelligent systems with Python, TensorFlow, and neural networks',
    category: 'Computer Science',
    icon: '🤖',
    duration: '14 weeks',
    level: 'Advanced',
    topics: 15,
    color: 'bg-indigo-500',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Create native and cross-platform mobile apps with React Native',
    category: 'Computer Science',
    icon: '📱',
    duration: '10 weeks',
    level: 'Intermediate',
    topics: 10,
    color: 'bg-cyan-500',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing & DevOps',
    description: 'Deploy and manage applications on AWS, Azure, and Kubernetes',
    category: 'Computer Science',
    icon: '☁️',
    duration: '8 weeks',
    level: 'Advanced',
    topics: 9,
    color: 'bg-sky-500',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    description: 'Understand network security, cryptography, and ethical hacking',
    category: 'Computer Science',
    icon: '🔒',
    duration: '11 weeks',
    level: 'Intermediate',
    topics: 11,
    color: 'bg-red-500',
  },
  
  // Electronics & Electrical Engineering
  {
    id: 'digital-electronics',
    title: 'Digital Electronics & Logic Design',
    description: 'Master digital circuits, microcontrollers, and FPGA programming',
    category: 'Electronics',
    icon: '⚡',
    duration: '10 weeks',
    level: 'Intermediate',
    topics: 10,
    color: 'bg-yellow-500',
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems Engineering',
    description: 'Learn Arduino, Raspberry Pi, and IoT device programming',
    category: 'Electronics',
    icon: '🔌',
    duration: '12 weeks',
    level: 'Intermediate',
    topics: 11,
    color: 'bg-orange-500',
  },
  {
    id: 'pcb-design',
    title: 'PCB Design & Manufacturing',
    description: 'Design professional circuit boards using Altium and Eagle',
    category: 'Electronics',
    icon: '🔧',
    duration: '8 weeks',
    level: 'Advanced',
    topics: 8,
    color: 'bg-green-500',
  },
  
  // Mechanical Engineering
  {
    id: 'cad-modeling',
    title: 'CAD & 3D Modeling',
    description: 'Master SolidWorks, AutoCAD, and Fusion 360 for product design',
    category: 'Mechanical',
    icon: '🛠️',
    duration: '10 weeks',
    level: 'Beginner',
    topics: 10,
    color: 'bg-teal-500',
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    description: 'Build and program robots using ROS and control systems',
    category: 'Mechanical',
    icon: '🤖',
    duration: '14 weeks',
    level: 'Advanced',
    topics: 13,
    color: 'bg-violet-500',
  },
  {
    id: 'thermodynamics',
    title: 'Thermodynamics & Heat Transfer',
    description: 'Understand energy systems, engines, and thermal analysis',
    category: 'Mechanical',
    icon: '🌡️',
    duration: '9 weeks',
    level: 'Intermediate',
    topics: 9,
    color: 'bg-rose-500',
  },
  
  // Civil Engineering
  {
    id: 'structural-analysis',
    title: 'Structural Analysis & Design',
    description: 'Learn building design, load calculations, and structural software',
    category: 'Civil',
    icon: '🏗️',
    duration: '11 weeks',
    level: 'Intermediate',
    topics: 10,
    color: 'bg-amber-500',
  },
  {
    id: 'autocad-civil',
    title: 'AutoCAD for Civil Engineering',
    description: 'Master 2D/3D drafting for construction and infrastructure projects',
    category: 'Civil',
    icon: '📐',
    duration: '8 weeks',
    level: 'Beginner',
    topics: 8,
    color: 'bg-lime-500',
  },
  
  // General Engineering
  {
    id: 'project-management',
    title: 'Engineering Project Management',
    description: 'Learn Agile, Scrum, and project planning for engineering teams',
    category: 'General',
    icon: '📊',
    duration: '6 weeks',
    level: 'Beginner',
    topics: 7,
    color: 'bg-pink-500',
  },
  {
    id: 'engineering-math',
    title: 'Engineering Mathematics',
    description: 'Master calculus, linear algebra, and differential equations',
    category: 'General',
    icon: '📚',
    duration: '12 weeks',
    level: 'Beginner',
    topics: 14,
    color: 'bg-fuchsia-500',
  },
];

export const categories = [
  'All Courses',
  'Computer Science',
  'Electronics',
  'Mechanical',
  'Civil',
  'General',
];
