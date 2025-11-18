export const siteConfig = {
  name: "Henry (Haorui) Zhang",
  title: "AI/ML Engineer & Data Scientist",
  description: "Portfolio website of Henry (Haorui) Zhang - Data Science, AI, and Quantitative Finance",
  accentColor: "#004F90",
  social: {
    email: "haoruizhang@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/haorui-zhang/",
    twitter: "",
    github: "https://github.com/haoruizhang2001",
  },
  aboutMe:
    "I am someone who works at the intersection of mathematics, computer science, data science, and quantitative finance. Currently pursuing graduate studies at the University of Pennsylvania and UC Berkeley, I am passionate about data modeling, machine learning, and AI-driven systems. I enjoy building practical, scalable solutions and exploring how intelligent models can solve real-world problems. I am actively seeking opportunities in data science, AI/ML engineering, and quantitative finance.",  skills: {
    "Programming Languages": ["Python", "C/C++", "Java", "R", "MATLAB"],
    "ML/DL Frameworks": ["TensorFlow", "PyTorch", "Scikit-Learn", "XGBoost", "CUDA"],
    "Databases": ["SQL", "MongoDB", "Neo4j"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Git"],
    "Tools": ["Apache Spark", "LaTeX", "Gurobi", "Tableau", "Power BI"],
  },
  
  projects: [
    {
      name: "Distributed GPU Computing for Machine Learning Systems",
      description:
        "Engineered a high-performance PyTorch-style tensor and autograd engine in C++/CUDA, achieving 2.3× faster convolution and 3.7× faster pooling than LibTorch on megapixel-scale inputs. Built a full GPU training stack with custom-optimized kernels for convolution, RNN/LSTM, normalization, pooling, and self-attention, enabling 1–7 ms forward/backward passes. Designed distributed LSTM/ML forecasting pipelines using NCCL-based data parallelism, delivering a 25% error reduction over baseline models in financial backtests.",
      link: "",
      skills: ["C++", "CUDA", "PyTorch", "cuBLAS", "cuDNN", "AWS", "NCCL"],
    },
    {
      name: "Prompt Engineering Project",
      description:
        "Built an LLM-based financial derivative analysis tool using GPT-3.5/4 and Claude Sonnet APIs. Applied few-shot, COT, and instruction-tuned prompting to enhance model reasoning with 55% premium than benchmark. Achieved significantly higher prediction accuracy than benchmark pricing (40%) and traditional ML models (15-60%).",
      link: "",
      skills: ["Python", "LLM", "GPT-4", "Claude Sonnet"],
    },
    {
      name: "Bayesian Model Scan and Risk Factor Construction",
      description:
        "Developed a novel approach combining Bayesian Model Scanning and machine learning techniques to extract profitable trading signals from ETF and mutual fund returns. Implemented a three-stage dimension reduction strategy including PCA and Tree method to make Bayesian Model Scanning computationally feasible for large-scale factor selection.",
      link: "https://github.com/haoruizhang2001/Bayesian-Model-Scan-and-Dimensional-Reduction",
      skills: ["Python", "R", "Bayesian Statistics", "Machine Learning", "PCA"],
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
      dateRange: "Jul 2022 - Oct 2022",
      bullets: [
        "Conducted qualitative and quantitative financial analysis on 200+ corporate financial statements",
        "Developed automation tools via Python & MathPix API for data mining and image recognition with almost 100% accuracy",
        "Analyzed aspects of corporate bond-issuing firms, highlighting evolution, key features, and challenges",
      ],
    },
    {
      company: "Tsingtao Stone Asset Management",
      title: "Quantitative Researcher Intern",
      dateRange: "Dec 2021 - Mar 2022",
      bullets: [
        "Conducted strategy development/back-test of energy futures trading, eliminated 30% of underperforming models",
        "Analyzed 12 financial factors, highlighted consistent significance of SMB and HML factors",
        "Performed quantitative analysis for 20 indices, identified root causes of model-market discrepancies",
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
        "Honors: Outstanding Finance Student, Charles F. Knight Scholarship, Beta Gamma Sigma Honor Society",
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
