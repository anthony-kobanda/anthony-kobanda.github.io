import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { Education, Experience, SkillCategory, SocialLink, ProjectOrInterest, Publication } from './types';

export const SOCIALS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anthony-kobanda",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Anthony-Kobanda",
    icon: Github,
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=dEBQPAkAAAAJ&hl=fr",
    icon: GraduationCap,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/akbdx18",
    icon: Twitter,
  },
  {
    name: "Email",
    url: "mailto:anthony.kobanda@polytechnique.org",
    icon: Mail,
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "On the Challenges of Continual Reinforcement Learning in Video Games",
    authors: "A. Kobanda, O.A. Maillard, R. Portelas, L. Denoyer",
    venue: "Ongoing Research / PhD Thesis",
    year: "2024",
    url: "https://scholar.google.com/citations?user=dEBQPAkAAAAJ",
  },
  {
    title: "Budgeted Reinforcement Learning with an Approximate Policy",
    authors: "A. Kobanda, L. Denoyer",
    venue: "Ubisoft Research / Internal Technical Report",
    year: "2023",
    url: "https://scholar.google.com/citations?user=dEBQPAkAAAAJ",
  },
  {
    title: "A surrogate model of an agent-based model to simulate cell cultures in a micro-fluidic device",
    authors: "A. Kobanda, et al.",
    venue: "ISMCO (International Symposium on Mathematical and Computational Oncology)",
    year: "2021",
    url: "https://scholar.google.com/citations?user=dEBQPAkAAAAJ",
    citations: "12"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "phd-inria",
    role: "Ph.D. Candidate",
    company: "Inria Scool & Ubisoft",
    location: "Lille / Bordeaux, France",
    period: "Apr 2023 – Present",
    description: [
      "Specializing in Deep Reinforcement Learning (RL) and Continual Reinforcement Learning.",
      "Supervised by Odalric-Ambrym Maillard, Rémy Portelas, and Ludovic Denoyer.",
      "Addressing key challenges like generalization, catastrophic forgetting, and scalability in video game applications."
    ]
  },
  {
    id: "junior-scientist",
    role: "Junior Research Scientist",
    company: "Ubisoft",
    location: "Bordeaux, France",
    period: "Oct 2022 – Apr 2023",
    description: [
      "Conducted research on Deep Learning for Budgeted Reinforcement Learning."
    ]
  },
  {
    id: "intern-ubisoft",
    role: "Research Scientist Intern",
    company: "Ubisoft",
    location: "Bordeaux, France",
    period: "Apr 2022 – Oct 2022",
    description: [
      "Worked on Deep Learning for Budgeted RL under the supervision of Ludovic Denoyer."
    ]
  },
  {
    id: "intern-irit",
    role: "Research Engineer Intern",
    company: "Institut de Recherche en Informatique (IRIT)",
    location: "Toulouse, France",
    period: "Apr 2021 – Sept 2021",
    description: [
      "Programmed a robot and web interface for semi-automated injections at Toulouse Cancer Research Center.",
      "Developed a surrogate model of an agent-based model to simulate cell cultures.",
      "Work led to a publication in the 3rd edition of ISMCO."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "phd",
    degree: "Ph.D. in Deep Reinforcement Learning",
    institution: "University of Lille / Inria Scool",
    location: "Lille, France",
    year: "2023 – Now",
    details: "Focus on Continual Reinforcement Learning."
  },
  {
    id: "ms-polytech-ai",
    degree: "M.S. Artificial Intelligence & Adv. Visual Computing",
    institution: "École Polytechnique",
    location: "Palaiseau, France",
    year: "2021 – 2022",
    courses: "Deep Learning, RL, 3D Graphics, Computer Vision, Geometry & Topology, NLP."
  },
  {
    id: "ms-polytech-eng",
    degree: "M.S. Computer Science & Engineering",
    institution: "École Polytechnique",
    location: "Palaiseau, France",
    year: "2018 – 2022",
    details: "Outstanding Investment Acknowledgment. 'Cycle Ingénieur Polytechnicien'.",
    courses: "Algorithms, Machine Learning, Big Data, Text Mining, Applied Mathematics."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core AI & Data",
    skills: ["Deep Learning", "Reinforcement Learning", "Computer Vision", "NLP", "Data Visualization", "Applied Math"]
  },
  {
    title: "Programming & Frameworks",
    skills: ["Python", "PyTorch", "JAX", "TensorFlow", "Conda", "Hydra", "Scikit-learn", "NumPy", "Pandas", "OpenCV"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git/GitLab", "SLURM", "ROS", "Linux"]
  },
  {
    title: "Languages",
    skills: ["French (Native)", "English (Fluent)", "Spanish", "Chinese"]
  }
];

export const INTERESTS: ProjectOrInterest[] = [
  {
    title: "Sports",
    description: "Varsity Basketball (13 years), Break-dance (XBreak), Bachata.",
    tags: ["Basketball", "Dance"]
  },
  {
    title: "Creative Arts",
    description: "Video editing, animation, manga, comics, and culinary arts (Paninix).",
    tags: ["Video Editing", "Cooking", "Reading"]
  },
  {
    title: "Gaming",
    description: "Open world RPGs (World of Warcraft). Passionate about game AI mechanics.",
    tags: ["WoW", "RPG", "Gaming"]
  }
];