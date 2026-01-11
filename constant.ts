import { ExperienceItem, EducationItem, PublicationItem, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  email: "anthony.kobanda@polytechnique.org",
  phone: "+33 6 22 21 52 47",
  linkedin: "https://www.linkedin.com/in/anthony-kobanda",
  scholar: "https://scholar.google.com/citations?user=dEBQPAkAAAAJ&hl=fr",
  github: "https://github.com/anthony-kobanda",
  resumeUrl: "/resume.pdf" // Ensure you put a file named 'resume.pdf' in your public/root folder
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "phd-research",
    role: "Ph.D. Researcher in Deep RL",
    company: "Ubisoft & Inria Scool",
    location: "Bordeaux & Lille",
    period: "2023 – Present",
    description: [
      "Researching Continual Reinforcement Learning applied to complex video game environments.",
      "Developing scalable algorithms to mitigate catastrophic forgetting and improve generalization.",
      "Supervision: Odalric-Ambrym Maillard, Rémy Portelas, and Ludovic Denoyer."
    ]
  },
  {
    id: "jr-scientist",
    role: "Junior Research Scientist",
    company: "Ubisoft",
    location: "Bordeaux",
    period: "Oct 2022 – Apr 2023",
    description: [
      "Conducted research on Deep Learning for Budgeted Reinforcement Learning.",
      "Implemented prototype algorithms for resource-constrained agents."
    ]
  },
  {
    id: "intern-ubisoft",
    role: "Research Scientist Intern",
    company: "Ubisoft",
    location: "Bordeaux",
    period: "Apr 2022 – Oct 2022",
    description: [
      "Master's thesis on Deep Learning for Budgeted RL."
    ]
  },
  {
    id: "intern-crct",
    role: "Research Engineer Intern",
    company: "CRCT (Cancer Research)",
    location: "Toulouse",
    period: "Apr 2021 – Sep 2021",
    description: [
      "Developed a surrogate model of an agent-based model for cell cultures.",
      "Programmed a robot and web interface for semi-automated injections.",
      "Publication accepted at ISMCO 2021."
    ]
  },
  {
    id: "intern-bci",
    role: "Data Scientist Intern",
    company: "BCI Asia",
    location: "Remote / Singapore",
    period: "Jul 2020 – Sep 2020",
    description: [
      "Developed database cleaning and prospection tools."
    ]
  },
  {
    id: "xprojets",
    role: "Senior Project Manager",
    company: "XProjets (Junior Enterprise)",
    location: "Palaiseau",
    period: "2019 – 2021",
    description: [
      "Managed business development strategies and recruited students for client missions.",
      "Contributed to ranking XProjets among the top 30 French Junior Enterprises."
    ]
  },
  {
    id: "xafrique",
    role: "Strategy Manager",
    company: "X-Afrique",
    location: "Palaiseau",
    period: "2019 – 2020",
    description: [
      "Coordinated associative projects and organized annual forums."
    ]
  },
  {
    id: "gendarmerie",
    role: "Deputy Section Head",
    company: "National Gendarmerie",
    location: "Châteaulin",
    period: "Dec 2018 – Apr 2019",
    description: [
      "Led a section of 33 non-commissioned officers during military training."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "phd",
    degree: "Ph.D. in Deep Reinforcement Learning",
    school: "University of Lille | Inria Scool",
    location: "Lille, France",
    year: "2023 – Present",
    details: []
  },
  {
    id: "ms-polytech-ai",
    degree: "M.S. Artificial Intelligence & Visual Computing",
    school: "École Polytechnique",
    location: "Palaiseau, France",
    year: "2021 – 2022",
    details: ["Deep Learning, RL, Computer Vision, NLP, Robotics"]
  },
  {
    id: "eng-polytech",
    degree: "Cycle Ingénieur Polytechnicien (M.Sc.)",
    school: "École Polytechnique",
    location: "Palaiseau, France",
    year: "2018 – 2022",
    details: ["Outstanding Investment Acknowledgment"]
  },
  {
    id: "prepa",
    degree: "B.S. Preparatory Classes",
    school: "Lycée Jean-Baptiste Kléber",
    location: "Strasbourg, France",
    year: "2015 – 2018",
    details: ["Mathematics, Physics, Philosophy"]
  }
];

export const SKILL_DATA: SkillCategory[] = [
  {
    title: "Programming & Tools",
    skills: ["Python", "PyTorch", "JAX", "TensorFlow", "Hydra", "Numpy", "Pandas", "OpenCV", "Git", "Docker", "SLURM"]
  },
  {
    title: "Research Areas",
    skills: ["Deep Reinforcement Learning", "Continual Learning", "Computer Vision", "3D Graphics", "NLP", "Applied Mathematics"]
  },
  {
    title: "Languages",
    skills: ["French (Native)", "English (Fluent)", "Spanish (Intermediate)", "Chinese (Basic)"]
  }
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: "ismco-2021",
    title: "Surrogate modeling of an agent-based model for cell cultures under constraints",
    authors: "A. Kobanda, S. Cussat-Blanc, J. Fadiga, C.A. L'Hostis, Y. Ponty",
    venue: "ISMCO",
    year: "2021",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-87602-9_11"
  },
  {
    id: "wip-1",
    title: "Continual Reinforcement Learning in Video Games",
    authors: "A. Kobanda, O. Maillard, R. Portelas, L. Denoyer",
    venue: "In Preparation",
    year: "2024"
  }
];