export const siteConfig = {
  name: "Haorui Zhang",
  title: "Graduate Student & AI Researcher",
  description: "Portfolio website of Haorui Zhang - Data Science, AI, and Quantitative Finance",
  accentColor: "#004F90",
  social: {
    email: "haoruizhang@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/haorui-zhang/",
    twitter: "",
    github: "https://github.com/haoruizhang2001",
  },
  aboutMe:
    "Graduate student pursuing dual degrees in Data Science and Computer Science at the University of Pennsylvania, with a Master of Analytics from UC Berkeley and an M.S. in Quantitative Finance from Washington University in St. Louis. Specialized in AI/ML systems, LLM applications in finance, and distributed computing. Experienced in building production ML systems, financial analysis tools, and GPU-accelerated computing pipelines.",
  skills: {
    "Programming Languages": ["Python", "C/C++", "Java", "R", "MATLAB"],
    "ML/DL Frameworks": ["TensorFlow", "PyTorch", "Scikit-Learn", "CUDA"],
    "Databases": ["SQL", "MongoDB", "Neo4j"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Git"],
    "Big Data & Tools": ["Apache Spark", "LaTeX"],
  },
  projects: [
    {
      name: "Distributed GPU Computing for Machine Learning Systems",
      description:
        "Implemented CUDA kernels for parallel tensor computations, optimizing thread scheduling and shared memory to achieve a 5× speedup over CPU baselines. Built custom tensor operators in C++/CUDA integrated with autograd to extend deep learning framework functionality. Deployed and benchmarked multi-GPU distributed training pipelines on AWS and Lambda AI GPU clusters.",
      link: "",
      skills: ["CUDA", "C++", "PyTorch", "AWS", "NCCL"],
    },
    {
      name: "Prompt Engineering Project",
      description:
        "Built an LLM-based financial derivative analysis tool using GPT-3.5/4 and Claude Sonnet APIs. Applied few-shot, COT, and instruction-tuned prompting to enhance model reasoning with 55% premium than benchmark. Achieved significantly higher prediction accuracy than benchmark pricing (40%) and traditional ML models (15-60%).",
      link: "",
      skills: ["Python", "LLM", "GPT-4", "Claude", "Financial Modeling"],
    },
    {
      name: "Bayesian Model Scan and Risk Factor Construction",
      description:
        "Developed a novel approach combining Bayesian Model Scanning and machine learning techniques to extract profitable trading signals from ETF and mutual fund returns. Implemented a three-stage dimension reduction strategy including PCA and Tree method to make Bayesian Model Scanning computationally feasible for large-scale factor selection.",
      link: "",
      skills: ["Python", "Bayesian Statistics", "Machine Learning", "PCA"],
    },
  ],
  experience: [
    {
      company: "Global Key Advisors",
      title: "Artificial Intelligence Research Intern",
      dateRange: "Oct 2025 - Dec 2025",
      bullets: [
        "Built an LLM-based financial analysis RAG system to process large-scale 10-K, 10-Q, and 8-K filings for corporate intelligence",
        "Derived interpretable firm-level risk factors and event signals from financial disclosures through LLM-driven analysis",
        "Constructed and validated LLM-derived event signals explaining cross-sectional variations in post-announcement returns",
      ],
    },
    {
      company: "Haitong Securities",
      title: "Deal Sourcing and Client Coverage Intern (Quantitative Analysis Role)",
      dateRange: "July 2022 - Oct 2022",
      bullets: [
        "Conducted qualitative and quantitative financial analysis on 200+ corporate financial statements",
        "Developed automation tools via Python & MathPix API for data mining and image recognition with almost 100% accuracy",
        "Analyzed aspects of corporate bond-issuing firms, highlighting evolution, key features, and challenges",
      ],
    },
  ],
  education: [
    {
      school: "University of Pennsylvania",
      degree: "Dual Degree: M.S.E. in Data Science & Computer and Information Technology",
      dateRange: "Aug 2023 - Dec 2026",
      achievements: [
        "CGPA: 3.93/4.0",
        "Coursework: GPU Computing for ML Systems, Artificial Intelligence, Natural Language Processing, Deep Learning",
      ],
    },
    {
      school: "University of California, Berkeley",
      degree: "Master of Analytics",
      dateRange: "Aug 2025 - Aug 2026",
      achievements: [
        "Coursework: Optimization, Data Analysis, Machine Learning, Database, Financial Engineering System",
      ],
    },
    {
      school: "Washington University in St. Louis",
      degree: "M.S. in Quantitative Finance",
      dateRange: "Aug 2023 - Dec 2024",
      achievements: [
        "CGPA: 4.0/4.0 (Ranking: 1/89)",
        "Outstanding Finance Student",
        "Charles F. Knight Scholarship",
        "Beta Gamma Sigma Honor Society",
        "Coursework: Mathematical Finance, Real Analysis, Stochastic Analysis",
      ],
    },
    {
      school: "Sun Yat-sen University",
      degree: "B.Econ. in Finance",
      dateRange: "Sep 2019 - Jun 2023",
      achievements: ["CGPA: 3.9/4.0"],
    },
  ],
};
