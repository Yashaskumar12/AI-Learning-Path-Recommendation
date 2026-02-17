import { RoadmapTopic } from '../components/RoadmapContainer';

interface CourseRoadmap {
  [courseId: string]: Omit<RoadmapTopic, 'id' | 'status'>[];
}

export const courseRoadmaps: CourseRoadmap = {
  'web-development': [
    { title: 'HTML & CSS Fundamentals', description: 'Learn semantic HTML5 and modern CSS layouts', difficulty: 'Beginner', stage: 1 },
    { title: 'JavaScript Basics', description: 'Master JavaScript syntax, DOM manipulation, and ES6+', difficulty: 'Beginner', stage: 1 },
    { title: 'React Fundamentals', description: 'Build interactive UIs with React components and hooks', difficulty: 'Intermediate', stage: 2 },
    { title: 'State Management', description: 'Learn Redux, Context API, and advanced state patterns', difficulty: 'Intermediate', stage: 2 },
    { title: 'Node.js & Express', description: 'Build RESTful APIs with Node.js and Express framework', difficulty: 'Intermediate', stage: 3 },
    { title: 'Database Design', description: 'Work with SQL (PostgreSQL) and NoSQL (MongoDB) databases', difficulty: 'Intermediate', stage: 3 },
    { title: 'Authentication & Security', description: 'Implement JWT, OAuth, and secure your applications', difficulty: 'Advanced', stage: 4 },
    { title: 'Testing & Deployment', description: 'Write tests and deploy to production with CI/CD', difficulty: 'Advanced', stage: 4 },
    { title: 'Performance Optimization', description: 'Optimize frontend and backend performance', difficulty: 'Advanced', stage: 5 },
    { title: 'Full Stack Project', description: 'Build and deploy a complete full-stack application', difficulty: 'Expert', stage: 5 },
  ],
  
  'data-structures': [
    { title: 'Arrays & Strings', description: 'Master array manipulation and string algorithms', difficulty: 'Beginner', stage: 1 },
    { title: 'Linked Lists', description: 'Understand singly and doubly linked list operations', difficulty: 'Beginner', stage: 1 },
    { title: 'Stacks & Queues', description: 'Implement stack and queue data structures', difficulty: 'Beginner', stage: 2 },
    { title: 'Hash Tables', description: 'Learn hashing, collision resolution, and hash maps', difficulty: 'Intermediate', stage: 2 },
    { title: 'Trees & BST', description: 'Work with binary trees and binary search trees', difficulty: 'Intermediate', stage: 3 },
    { title: 'Heaps & Priority Queues', description: 'Implement min/max heaps and priority queues', difficulty: 'Intermediate', stage: 3 },
    { title: 'Graphs', description: 'Learn graph representations and traversal algorithms', difficulty: 'Advanced', stage: 4 },
    { title: 'Sorting Algorithms', description: 'Master quick sort, merge sort, and other algorithms', difficulty: 'Intermediate', stage: 4 },
    { title: 'Dynamic Programming', description: 'Solve complex problems with DP techniques', difficulty: 'Advanced', stage: 5 },
    { title: 'Advanced Graph Algorithms', description: 'Dijkstra, A*, and network flow algorithms', difficulty: 'Advanced', stage: 5 },
    { title: 'System Design Basics', description: 'Design scalable systems using DSA concepts', difficulty: 'Expert', stage: 6 },
    { title: 'Interview Preparation', description: 'Practice coding interviews and problem-solving', difficulty: 'Expert', stage: 6 },
  ],
  
  'machine-learning': [
    { title: 'Python for ML', description: 'Master Python, NumPy, and Pandas for data science', difficulty: 'Beginner', stage: 1 },
    { title: 'Mathematics for ML', description: 'Linear algebra, calculus, and probability', difficulty: 'Intermediate', stage: 1 },
    { title: 'Data Preprocessing', description: 'Clean, transform, and prepare data for ML models', difficulty: 'Beginner', stage: 2 },
    { title: 'Supervised Learning', description: 'Linear regression, logistic regression, and decision trees', difficulty: 'Intermediate', stage: 2 },
    { title: 'Unsupervised Learning', description: 'Clustering, dimensionality reduction, and PCA', difficulty: 'Intermediate', stage: 3 },
    { title: 'Neural Networks', description: 'Build and train deep neural networks', difficulty: 'Advanced', stage: 3 },
    { title: 'Convolutional Neural Networks', description: 'Image classification and computer vision', difficulty: 'Advanced', stage: 4 },
    { title: 'Recurrent Neural Networks', description: 'Sequence modeling and NLP applications', difficulty: 'Advanced', stage: 4 },
    { title: 'Transfer Learning', description: 'Use pre-trained models and fine-tuning', difficulty: 'Advanced', stage: 5 },
    { title: 'Model Optimization', description: 'Hyperparameter tuning and model evaluation', difficulty: 'Advanced', stage: 5 },
    { title: 'MLOps & Deployment', description: 'Deploy ML models to production', difficulty: 'Expert', stage: 6 },
    { title: 'Reinforcement Learning', description: 'Q-learning, policy gradients, and RL applications', difficulty: 'Expert', stage: 6 },
    { title: 'Transformers & LLMs', description: 'Modern NLP with BERT, GPT, and transformers', difficulty: 'Expert', stage: 7 },
    { title: 'Computer Vision Projects', description: 'Object detection, segmentation, and tracking', difficulty: 'Expert', stage: 7 },
    { title: 'Capstone ML Project', description: 'Build an end-to-end ML solution', difficulty: 'Expert', stage: 8 },
  ],
  
  'mobile-development': [
    { title: 'Mobile Development Basics', description: 'Understanding mobile platforms and ecosystems', difficulty: 'Beginner', stage: 1 },
    { title: 'JavaScript & TypeScript', description: 'Master modern JavaScript for mobile development', difficulty: 'Beginner', stage: 1 },
    { title: 'React Native Setup', description: 'Set up development environment and first app', difficulty: 'Beginner', stage: 2 },
    { title: 'Components & Styling', description: 'Build UI with React Native components', difficulty: 'Intermediate', stage: 2 },
    { title: 'Navigation', description: 'Implement navigation with React Navigation', difficulty: 'Intermediate', stage: 3 },
    { title: 'State Management', description: 'Manage app state with Redux and Context', difficulty: 'Intermediate', stage: 3 },
    { title: 'Native Modules', description: 'Access native device features and APIs', difficulty: 'Advanced', stage: 4 },
    { title: 'Performance Optimization', description: 'Optimize app performance and memory usage', difficulty: 'Advanced', stage: 4 },
    { title: 'Testing & Debugging', description: 'Write tests and debug mobile applications', difficulty: 'Advanced', stage: 5 },
    { title: 'Publishing Apps', description: 'Deploy to App Store and Google Play', difficulty: 'Expert', stage: 5 },
  ],
  
  'cloud-computing': [
    { title: 'Cloud Computing Fundamentals', description: 'Understanding IaaS, PaaS, and SaaS models', difficulty: 'Beginner', stage: 1 },
    { title: 'AWS Core Services', description: 'EC2, S3, RDS, and Lambda basics', difficulty: 'Intermediate', stage: 1 },
    { title: 'Docker & Containers', description: 'Containerize applications with Docker', difficulty: 'Intermediate', stage: 2 },
    { title: 'Kubernetes Basics', description: 'Deploy and orchestrate containers with K8s', difficulty: 'Advanced', stage: 2 },
    { title: 'CI/CD Pipelines', description: 'Automate deployment with Jenkins and GitHub Actions', difficulty: 'Intermediate', stage: 3 },
    { title: 'Infrastructure as Code', description: 'Terraform and CloudFormation for IaC', difficulty: 'Advanced', stage: 3 },
    { title: 'Monitoring & Logging', description: 'Implement observability with Prometheus and Grafana', difficulty: 'Advanced', stage: 4 },
    { title: 'Security & Compliance', description: 'Cloud security best practices and IAM', difficulty: 'Advanced', stage: 4 },
    { title: 'Cloud Architecture', description: 'Design highly available and scalable systems', difficulty: 'Expert', stage: 5 },
  ],
  
  'cybersecurity': [
    { title: 'Security Fundamentals', description: 'CIA triad, threats, and security principles', difficulty: 'Beginner', stage: 1 },
    { title: 'Network Security', description: 'Firewalls, VPNs, and network protocols', difficulty: 'Intermediate', stage: 1 },
    { title: 'Cryptography', description: 'Encryption, hashing, and digital signatures', difficulty: 'Intermediate', stage: 2 },
    { title: 'Web Application Security', description: 'OWASP Top 10 and secure coding practices', difficulty: 'Intermediate', stage: 2 },
    { title: 'Penetration Testing', description: 'Ethical hacking and vulnerability assessment', difficulty: 'Advanced', stage: 3 },
    { title: 'Malware Analysis', description: 'Analyze and reverse engineer malicious software', difficulty: 'Advanced', stage: 3 },
    { title: 'Incident Response', description: 'Handle security incidents and forensics', difficulty: 'Advanced', stage: 4 },
    { title: 'Cloud Security', description: 'Secure cloud infrastructure and applications', difficulty: 'Advanced', stage: 4 },
    { title: 'Security Compliance', description: 'GDPR, HIPAA, and security frameworks', difficulty: 'Intermediate', stage: 5 },
    { title: 'Advanced Threat Hunting', description: 'Detect and respond to advanced threats', difficulty: 'Expert', stage: 5 },
    { title: 'Security Capstone', description: 'Complete security audit and assessment project', difficulty: 'Expert', stage: 6 },
  ],
  
  'digital-electronics': [
    { title: 'Number Systems & Logic Gates', description: 'Binary, Boolean algebra, and basic gates', difficulty: 'Beginner', stage: 1 },
    { title: 'Combinational Circuits', description: 'Adders, multiplexers, and decoders', difficulty: 'Beginner', stage: 1 },
    { title: 'Sequential Circuits', description: 'Flip-flops, registers, and counters', difficulty: 'Intermediate', stage: 2 },
    { title: 'Finite State Machines', description: 'Design and implement FSMs', difficulty: 'Intermediate', stage: 2 },
    { title: 'Microcontrollers Basics', description: 'Introduction to 8051 and AVR microcontrollers', difficulty: 'Intermediate', stage: 3 },
    { title: 'Microcontroller Programming', description: 'C programming for embedded systems', difficulty: 'Intermediate', stage: 3 },
    { title: 'FPGA & Verilog', description: 'Hardware description and FPGA programming', difficulty: 'Advanced', stage: 4 },
    { title: 'Digital Signal Processing', description: 'Filters, FFT, and signal analysis', difficulty: 'Advanced', stage: 4 },
    { title: 'Memory Systems', description: 'RAM, ROM, and memory interfacing', difficulty: 'Advanced', stage: 5 },
    { title: 'Digital Design Project', description: 'Complete digital system design', difficulty: 'Expert', stage: 5 },
  ],
  
  'embedded-systems': [
    { title: 'Embedded Systems Overview', description: 'Architecture and real-time systems', difficulty: 'Beginner', stage: 1 },
    { title: 'Arduino Programming', description: 'Get started with Arduino development', difficulty: 'Beginner', stage: 1 },
    { title: 'Sensors & Actuators', description: 'Interface sensors and control actuators', difficulty: 'Intermediate', stage: 2 },
    { title: 'Communication Protocols', description: 'I2C, SPI, UART, and CAN protocols', difficulty: 'Intermediate', stage: 2 },
    { title: 'Raspberry Pi', description: 'Linux-based embedded development', difficulty: 'Intermediate', stage: 3 },
    { title: 'IoT Fundamentals', description: 'MQTT, HTTP, and cloud connectivity', difficulty: 'Intermediate', stage: 3 },
    { title: 'RTOS Programming', description: 'Real-time operating systems and scheduling', difficulty: 'Advanced', stage: 4 },
    { title: 'Power Management', description: 'Low-power design and battery optimization', difficulty: 'Advanced', stage: 4 },
    { title: 'Wireless Communication', description: 'WiFi, Bluetooth, and LoRa modules', difficulty: 'Advanced', stage: 5 },
    { title: 'Edge AI', description: 'Deploy ML models on embedded devices', difficulty: 'Expert', stage: 5 },
    { title: 'IoT Security', description: 'Secure embedded and IoT systems', difficulty: 'Expert', stage: 6 },
  ],
  
  'pcb-design': [
    { title: 'PCB Design Basics', description: 'Understanding PCB layers and manufacturing', difficulty: 'Beginner', stage: 1 },
    { title: 'Schematic Capture', description: 'Create circuit schematics in Eagle/Altium', difficulty: 'Beginner', stage: 1 },
    { title: 'Component Selection', description: 'Choose components and create footprints', difficulty: 'Intermediate', stage: 2 },
    { title: 'PCB Layout', description: 'Route traces and design PCB layouts', difficulty: 'Intermediate', stage: 2 },
    { title: 'Design Rules & DFM', description: 'Design for manufacturing and assembly', difficulty: 'Advanced', stage: 3 },
    { title: 'Signal Integrity', description: 'High-speed design and impedance control', difficulty: 'Advanced', stage: 3 },
    { title: 'Power Distribution', description: 'Design power planes and decoupling', difficulty: 'Advanced', stage: 4 },
    { title: 'PCB Manufacturing', description: 'Generate Gerber files and order PCBs', difficulty: 'Expert', stage: 4 },
  ],
  
  'cad-modeling': [
    { title: '3D Modeling Basics', description: 'Introduction to CAD software and concepts', difficulty: 'Beginner', stage: 1 },
    { title: 'Sketching & Constraints', description: 'Master 2D sketches and geometric constraints', difficulty: 'Beginner', stage: 1 },
    { title: 'Part Modeling', description: 'Create 3D parts with extrude, revolve, and sweep', difficulty: 'Intermediate', stage: 2 },
    { title: 'Assembly Design', description: 'Build assemblies with mates and constraints', difficulty: 'Intermediate', stage: 2 },
    { title: 'Sheet Metal Design', description: 'Design sheet metal parts and flat patterns', difficulty: 'Intermediate', stage: 3 },
    { title: 'Surface Modeling', description: 'Create complex surfaces and organic shapes', difficulty: 'Advanced', stage: 3 },
    { title: 'Engineering Drawings', description: 'Generate detailed 2D drawings from 3D models', difficulty: 'Intermediate', stage: 4 },
    { title: 'Simulation & Analysis', description: 'FEA, stress analysis, and motion studies', difficulty: 'Advanced', stage: 4 },
    { title: '3D Printing', description: 'Prepare models for additive manufacturing', difficulty: 'Intermediate', stage: 5 },
    { title: 'Capstone Design Project', description: 'Complete product design from concept to prototype', difficulty: 'Expert', stage: 5 },
  ],
  
  'robotics': [
    { title: 'Robotics Fundamentals', description: 'Robot kinematics and dynamics', difficulty: 'Intermediate', stage: 1 },
    { title: 'Robot Operating System (ROS)', description: 'Set up and program with ROS', difficulty: 'Intermediate', stage: 1 },
    { title: 'Sensors & Perception', description: 'LIDAR, cameras, and sensor fusion', difficulty: 'Intermediate', stage: 2 },
    { title: 'Motor Control', description: 'Servo motors, stepper motors, and control', difficulty: 'Intermediate', stage: 2 },
    { title: 'Path Planning', description: 'Navigation algorithms and obstacle avoidance', difficulty: 'Advanced', stage: 3 },
    { title: 'Computer Vision for Robotics', description: 'Object detection and visual servoing', difficulty: 'Advanced', stage: 3 },
    { title: 'SLAM', description: 'Simultaneous localization and mapping', difficulty: 'Advanced', stage: 4 },
    { title: 'Robot Manipulation', description: 'Robotic arms and gripper control', difficulty: 'Advanced', stage: 4 },
    { title: 'Multi-Robot Systems', description: 'Swarm robotics and coordination', difficulty: 'Expert', stage: 5 },
    { title: 'AI for Robotics', description: 'Reinforcement learning for robot control', difficulty: 'Expert', stage: 5 },
    { title: 'Autonomous Systems', description: 'Build autonomous mobile robots', difficulty: 'Expert', stage: 6 },
    { title: 'Industrial Automation', description: 'Factory automation and PLCs', difficulty: 'Expert', stage: 6 },
    { title: 'Robotics Capstone', description: 'Complete robot design and implementation', difficulty: 'Expert', stage: 7 },
  ],
  
  'thermodynamics': [
    { title: 'Basic Concepts', description: 'Energy, work, and heat fundamentals', difficulty: 'Beginner', stage: 1 },
    { title: 'First Law of Thermodynamics', description: 'Energy conservation and applications', difficulty: 'Intermediate', stage: 1 },
    { title: 'Properties of Pure Substances', description: 'Phase diagrams and property tables', difficulty: 'Intermediate', stage: 2 },
    { title: 'Second Law & Entropy', description: 'Entropy, Carnot cycle, and efficiency', difficulty: 'Intermediate', stage: 2 },
    { title: 'Power Cycles', description: 'Rankine, Brayton, and Otto cycles', difficulty: 'Advanced', stage: 3 },
    { title: 'Refrigeration Cycles', description: 'Vapor compression and heat pumps', difficulty: 'Advanced', stage: 3 },
    { title: 'Heat Transfer', description: 'Conduction, convection, and radiation', difficulty: 'Intermediate', stage: 4 },
    { title: 'Heat Exchangers', description: 'Design and analysis of heat exchangers', difficulty: 'Advanced', stage: 4 },
    { title: 'Thermodynamics Applications', description: 'Real-world thermal system design', difficulty: 'Expert', stage: 5 },
  ],
  
  'structural-analysis': [
    { title: 'Statics Review', description: 'Forces, moments, and equilibrium', difficulty: 'Beginner', stage: 1 },
    { title: 'Structural Analysis Basics', description: 'Loads, reactions, and support conditions', difficulty: 'Intermediate', stage: 1 },
    { title: 'Truss Analysis', description: 'Method of joints and method of sections', difficulty: 'Intermediate', stage: 2 },
    { title: 'Beam Analysis', description: 'Shear force and bending moment diagrams', difficulty: 'Intermediate', stage: 2 },
    { title: 'Deflections', description: 'Beam deflection and elastic curves', difficulty: 'Advanced', stage: 3 },
    { title: 'Influence Lines', description: 'Analysis for moving loads', difficulty: 'Advanced', stage: 3 },
    { title: 'Structural Software', description: 'SAP2000, STAAD Pro, and ETABS', difficulty: 'Intermediate', stage: 4 },
    { title: 'Concrete Design', description: 'Reinforced concrete member design', difficulty: 'Advanced', stage: 4 },
    { title: 'Steel Design', description: 'Steel member and connection design', difficulty: 'Advanced', stage: 5 },
    { title: 'Building Design Project', description: 'Complete structural design of a building', difficulty: 'Expert', stage: 5 },
  ],
  
  'autocad-civil': [
    { title: 'AutoCAD Interface', description: 'Workspace, commands, and basic tools', difficulty: 'Beginner', stage: 1 },
    { title: '2D Drawing', description: 'Lines, shapes, and 2D drafting', difficulty: 'Beginner', stage: 1 },
    { title: 'Layers & Properties', description: 'Organize drawings with layers', difficulty: 'Beginner', stage: 2 },
    { title: 'Dimensioning & Annotation', description: 'Add dimensions and text to drawings', difficulty: 'Intermediate', stage: 2 },
    { title: 'Site Plans', description: 'Create civil site layout plans', difficulty: 'Intermediate', stage: 3 },
    { title: '3D Modeling', description: 'Basic 3D modeling for civil projects', difficulty: 'Advanced', stage: 3 },
    { title: 'Road Design', description: 'Highway and road alignment design', difficulty: 'Advanced', stage: 4 },
    { title: 'Civil Engineering Project', description: 'Complete civil drafting project', difficulty: 'Expert', stage: 4 },
  ],
  
  'project-management': [
    { title: 'Project Management Basics', description: 'PMBOK and project lifecycle', difficulty: 'Beginner', stage: 1 },
    { title: 'Agile & Scrum', description: 'Agile methodologies and Scrum framework', difficulty: 'Beginner', stage: 1 },
    { title: 'Project Planning', description: 'WBS, scheduling, and resource planning', difficulty: 'Intermediate', stage: 2 },
    { title: 'Risk Management', description: 'Identify and mitigate project risks', difficulty: 'Intermediate', stage: 2 },
    { title: 'Team Leadership', description: 'Lead and motivate engineering teams', difficulty: 'Advanced', stage: 3 },
    { title: 'Budgeting & Cost Control', description: 'Manage project budgets and finances', difficulty: 'Advanced', stage: 3 },
    { title: 'Capstone Project', description: 'Manage a real engineering project', difficulty: 'Expert', stage: 4 },
  ],
  
  'engineering-math': [
    { title: 'Algebra & Trigonometry', description: 'Foundation mathematics for engineering', difficulty: 'Beginner', stage: 1 },
    { title: 'Calculus I', description: 'Limits, derivatives, and applications', difficulty: 'Intermediate', stage: 1 },
    { title: 'Calculus II', description: 'Integration techniques and series', difficulty: 'Intermediate', stage: 2 },
    { title: 'Multivariable Calculus', description: 'Partial derivatives and multiple integrals', difficulty: 'Advanced', stage: 2 },
    { title: 'Linear Algebra', description: 'Matrices, vectors, and transformations', difficulty: 'Intermediate', stage: 3 },
    { title: 'Differential Equations', description: 'ODEs and their applications', difficulty: 'Advanced', stage: 3 },
    { title: 'Partial Differential Equations', description: 'Heat equation, wave equation, and Laplace', difficulty: 'Advanced', stage: 4 },
    { title: 'Vector Calculus', description: 'Gradient, divergence, and curl', difficulty: 'Advanced', stage: 4 },
    { title: 'Complex Analysis', description: 'Complex functions and contour integration', difficulty: 'Advanced', stage: 5 },
    { title: 'Numerical Methods', description: 'Computational approaches to solving equations', difficulty: 'Advanced', stage: 5 },
    { title: 'Fourier Analysis', description: 'Fourier series and transforms', difficulty: 'Advanced', stage: 6 },
    { title: 'Probability & Statistics', description: 'Statistical analysis for engineering', difficulty: 'Intermediate', stage: 6 },
    { title: 'Optimization', description: 'Linear programming and optimization techniques', difficulty: 'Expert', stage: 7 },
    { title: 'Applied Mathematics Project', description: 'Solve real engineering problems with math', difficulty: 'Expert', stage: 7 },
  ],
};

export function generateRoadmapForCourse(courseId: string): RoadmapTopic[] {
  const roadmap = courseRoadmaps[courseId] || courseRoadmaps['web-development'];
  
  return roadmap.map((topic, index) => ({
    ...topic,
    id: `${courseId}-topic-${index}`,
    status: index === 0 ? 'unlocked' : 'locked',
  })) as RoadmapTopic[];
}
