import { EducationItem, ExperienceItem, PublicationItem, SkillCategory } from "./types";

export const EMAIL = "anthony.kobanda@polytechnique.org";
export const GITHUB_LINK = "https://github.com/Anthony-Kobanda";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/anthony-kobanda";
export const RESUME_LINK = "/resume.pdf";
export const SCHOLAR_LINK = "https://scholar.google.com/citations?user=dEBQPAkAAAAJ&hl=fr";

export const ABOUT_TEXT = `I am a final year PhD candidate in Reinforcement Learning at Inria Scool and Ubisoft,
under the supervision of Odalric-Ambrym Maillard, Rémy Portelas, and Ludovic Denoyer. 
I explore Deep RL, Continual RL, and Goal-Conditioned RL, with applications in video games
addressing challenges such as efficiency, generalization, and scalability. 
My objective is to build and contribute to efficient, innovative, and adaptive artificial intelligence systems, 
with positive real-world applications, across various domains and various tasks. 🤖`;

export const SKILLS: SkillCategory[] = [
  {
    category: "Scientific Programming",
    items: ["Python", "PyTorch", "JAX", "Hydra", "NumPy", "OpenCV", "Pandas", "ROS", "Scikit-Learn", "Seaborn"],
  },
  {
    category: "Tools & Infrastructures",
    items: ["Conda", "Docker", "Git / GitLab", "SLURM", "... more to come ( quick learner )"],
  },
  {
    category: "Soft Skills",
    items: ["Critical Reasoning", "Modelling & Prototyping", "Resilience", "Social Adaptability", "Teamwork", "Working Under Pressure"],
  },
  {
    category: "Languages",
    items: ["French | Native", "Lingala | Native", "English | Fluent", "Spanish | Intermediate", "Chinese | Beginner"],
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "phd-ubisoft",
    title: "Ph.D. Researcher",
    company: "Ubisoft",
    location: "Bordeaux, France",
    period: "April 2023 – Now",
    description: "Working on Deep RL, Continual RL, and Goal-Conditioned RL.",
    details: [
      "Supervision : Odalric-Ambrym Maillard, Rémy Portelas & Ludovic Denoyer.",
    ]
  },
  {
    id: "jr-scientist-ubisoft",
    title: "Junior Research Scientist",
    company: "Ubisoft",
    location: "Bordeaux, France",
    period: "Oct. 2022 – April 2023",
    description: "Worked on Offline Reinforcement Learning and Budgeted Reinforcement Learning.",
    details: ["Supervision : Ludovic Denoyer."]
  },
  {
    id: "intern-ubisoft",
    title: "Research Scientist Intern",
    company: "Ubisoft",
    location: "Bordeaux, France",
    period: "April – Oct. 2022",
    description: "Worked on Budgeted Reinforcement Learning.",
    details: ["Supervision : Ludovic Denoyer."]
  },
  {
    id: "intern-crct",
    title: "Research Engineer Intern",
    company: "Institut de Recherche en Informatique (CRCT)",
    location: "Toulouse, France",
    period: "April – Sept. 2021",
    description: "Worked on cell culture modelling and robotics for semi-automated injections.",
    details: ["Supervision : Sylvain Cussat-Blanc."]
  },
  {
    id: "intern-bci",
    title: "Data Scientist Intern",
    company: "BCI Asia",
    location: "Singapore (Remote)",
    period: "July – Sept. 2020",
    description: "Worked on database cleaning and prototyping prospection tools."
  },
  {
    id: "xprojets",
    title: "Senior Project Manager & Event Manager",
    company: "XProjets – Junior Enterprise",
    location: "Palaiseau, France",
    period: "2019 – 2021",
    description: "Managed missions for large companies, start-ups, and individuals."
  },
  {
    id: "xafrique",
    title: "Strategy & Development Manager",
    company: "X-Afrique",
    location: "Palaiseau, France",
    period: "2019 – 2020",
    description: "Organized events, coordinated associative projects, and sought partners.",
  },
  {
    id: "gendarmerie",
    title: "Deputy Section Head",
    company: "National Gendarmerie",
    location: "Châteaulin, France",
    period: "Dec. 2018 – April 2019",
    description: "Oversaw a section of 33 non-commissioned officers in training for five months."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "phd-lille",
    degree: "Ph.D. Inria Scool (ex-Sequel)",
    institution: "University of Lille",
    location: "Lille, France",
    period: "2023 – Now",
    description: "Ph.D. in Deep Reinforcement Learning, exploring Continual Reinforcement Learning.",
    details: [
      "Supervision : Odalric-Ambrym Maillard, Rémy Portelas & Ludovic Denoyer.",
      "Focus : Deep RL, Continual RL, and Goal-Conditioned RL."
    ]
  },
  {
    id: "ms-polytechnique-ai",
    degree: "M.S. AI & Advanced Visual Computing",
    institution: "École Polytechnique",
    location: "Palaiseau, France",
    period: "2021 – 2022",
    description: "Science & Computer Engineering.",
    details: [
      "Supervision : Marie-Paule Cani & Erwan Scornet.",
      "Focus : Deep Learning, Reinforcement Learning, 3D Graphics, Computer Vision, Robotics."
    ]
  },
  {
    id: "ms-polytechnique-eng",
    degree: "M.S. Cycle Ingénieur Polytechnicien",
    institution: "École Polytechnique",
    location: "Palaiseau, France",
    period: "2018 – 2022",
    description: "Science & Computer Engineering – Outstanding Investment Acknowledgment.",
    details: [
      "Computer Science : Algorithms, ML, 3D Graphics, Big Data, Text Mining.",
      "Applied Mathematics : Probabilities, Random Phenomena Modelling, Numerical Analysis.",
      "Entrepreneurship : Economics, Business Model, Innovation.",
      "Extra : Member of the University Basketball team."
    ]
  },
  {
    id: "gendarmerie-academy",
    degree: "Officer Training",
    institution: "National Gendarmerie Officers’ Academy",
    location: "Melun, France",
    period: "Sept. – Dec. 2018",
    description: "3-Months Intensive Military Training – Obtaining the rank of Junior Officer.",
    details: [
      "Main courses : Military Tactics, Police Procedures, Use of firearms.", 
      "Other courses : French Law, Self-Defense, Crossfit.",
      "Soft Skills : Teamwork, Resilience, To get things done.", 
      "Internship : Deputy Section Head"
    ]
  },
  {
    id: "prepa-kleber",
    degree: "B.S. Preparatory Classes",
    institution: "Lycée Jean-Baptiste Kléber",
    location: "Strasbourg, France",
    period: "2015 – 2018",
    description: "Intensive preparation in Mathematics, Physics & Philosophy.",
    details: [
      "Main courses : Mathematics, Physics, Computer Science.", 
      "Other courses : English, Philosophy.",
      "Extra : Member of the Bachelor Basketball team."
    ]
  },
  {
    id: "high-school-kleber",
    degree: "High School",
    institution: "Lycée Jean-Baptiste Kléber",
    location: "Strasbourg, France",
    period: "2012 – 2015",
    description: "English European Section – Graduated with Highest Honours.",
    details: [
      "Main courses : Mathematics, Physics, Biology, French, English.", 
      "Other courses : History, Spanish, Latin.",
      "Extra : Member of the High-School Basketball team."
    ]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "cog-2025",
    title: "A Continual Offline Reinforcement Learning Benchmark for Navigation Tasks",
    authors: "Anthony Kobanda, Odalric-Ambrym Maillard, Rémy Portelas",
    venue: "CoG (IEEE Conference on Games)",
    year: "2025",
    link: "https://arxiv.org/abs/2506.02883"
  },
  {
    id: "ewrl-2025",
    title: "Offline Goal-Conditioned Reinforcement Learning with Projective Quasimetric Planning",
    authors: "Anthony Kobanda, Waris Radji, Mathieu Petitbois, Odalric-Ambrym Maillard, Rémy Portelas",
    venue: "EWRL (European Workshop on Reinforcement Learning)",
    year: "2025",
    link: "https://arxiv.org/abs/2506.18847"
  },
  {
    id: "iclr-rnd-2025",
    title: "Efficient Active Imitation Learning with Random Network Distillation",
    authors: "Émilien Biré, Anthony Kobanda, Ludovic Denoyer, Rémy Portelas",
    venue: "ICLR (International Conference on Learning Representations)",
    year: "2025",
    link: "https://arxiv.org/abs/2411.01894"
  },
  {
    id: "iclr-hispo-2025",
    title: "Hierarchical Subspaces of Policies for Continual Offline Reinforcement Learning",
    authors: "Anthony Kobanda, Rémy Portelas, Odalric-Ambrym Maillard, Ludovic Denoyer",
    venue: "ICLR (International Conference on Learning Representations) - MCDC Workshop",
    year: "2025",
    link: "https://arxiv.org/abs/2412.14865"
  },
  {
    id: "cog-2023",
    title: "Learning Computational Efficient Bots with Costly Features",
    authors: "Anthony Kobanda, Joshua Romoff, Ludovic Denoyer",
    venue: "CoG (IEEE Conference on Games)",
    year: "2023",
    link: "https://arxiv.org/abs/2308.09629"
  },
  {
    id: "ismco-2021",
    title: "Simulating Cytotoxic T-Lymphocyte and Cancer Cells Interactions",
    authors: "David Bernard, Anthony Kobanda, Sylvain Cussat-Blanc",
    venue: "ISMCO (International Symposium on Mathematical and Computational Oncology)",
    year: "2021",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-91241-3_4"
  },
];