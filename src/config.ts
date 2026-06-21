export const siteConfig = {
  name: "Henry (Haorui) Zhang",
  title: "Data Scientist",
  description: "Portfolio website of Henry (Haorui) Zhang - Data Science, AI, and Quantitative Finance",
  accentColor: "#004F90",
  social: {
    email: "haoruizhang@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/haorui-zhang/",
    twitter: "",
    github: "https://github.com/haoruizhang2001",
  },
  aboutMe:
    "I am someone who works at the intersection of mathematics, computer science, data science, and quantitative finance. I am currently a Data Science Intern at Tencent (Level Infinite, its global gaming brand) in Palo Alto, where I apply statistical modeling, machine learning, and A/B testing to turn large, complex datasets into data-driven insights across game development, marketing, and operations. Alongside this, I am pursuing graduate studies at the University of Pennsylvania and UC Berkeley, and I am passionate about data modeling, machine learning, and AI-driven systems. I enjoy building practical, scalable solutions and exploring how intelligent models can solve real-world problems.",
  skills: {
    "Programming Languages": ["Python", "C/C++", "Java"],
    "ML/DL Frameworks": [
      "Scikit-Learn",
      "Pandas",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "CUDA",
    ],
    "AI Skills": [
      "RAG",
      "LlamaIndex",
      "LangChain",
      "Ollama",
      "vLLM",
      "Prompt Engineering",
      "LLM Inference",
      "Vector Retrieval",
      "Agent Workflows",
    ],
    Tools: [
      "R",
      "MATLAB",
      "STATA",
      "VBA",
      "Excel",
      "Git",
      "Docker",
      "Power BI",
      "Tableau",
      "LaTeX",
    ],
    Databases: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j"],
    "Big Data & Cloud": [
      "Apache Spark",
      "Databricks",
      "Snowflake",
      "AWS",
      "GCP",
      "Azure",
    ],
  },
  
  projects: [
    {
      name: "End-to-End Time-Series Forecasting Pipeline: WTI Crude Oil",
      description:
        "Built at UC Berkeley, this project engineered a synchronized multi-frequency data pipeline for WTI crude forecasting, applied PCA and Elastic Net for feature selection, benchmarked LSTM, XGBoost, and Random Forest models against ARIMA with rolling-window validation, and validated a trading strategy that improved directional accuracy by 36%.",
      link: "https://github.com/haoruizhang2001/Oilman-Sachs-Crude-Oil-Price-Prediction",
      skills: [
        "Python",
        "Time Series",
        "LSTM",
        "XGBoost",
        "Random Forest",
        "ARIMA",
        "PCA",
        "Elastic Net",
      ],
    },
    {
      name: "Distributed GPU Computing for Machine Learning Systems",
      description:
        "Engineered a high-performance PyTorch-style tensor and autograd engine in C++/CUDA, achieving 2.3× faster convolution and 3.7× faster pooling than LibTorch on megapixel-scale inputs. Built a full GPU training stack with custom-optimized kernels for convolution, RNN/LSTM, normalization, pooling, and self-attention, enabling 1–7 ms forward/backward passes. Designed distributed LSTM/ML forecasting pipelines using NCCL-based data parallelism, delivering a 25% error reduction over baseline models in financial backtests.",
      link: "",
      skills: ["C++", "CUDA", "PyTorch", "cuBLAS", "cuDNN", "AWS", "NCCL"],
    },
    {
      name: "LLM-Driven Financial Derivative Analysis System",
      description:
        "Engineered a financial reasoning system integrating GPT-4 and Claude Sonnet APIs to analyze complex derivative pricing scenarios, applied chain-of-thought, few-shot, and instruction-tuning strategies for a 55% performance lift over zero-shot baselines, and outperformed traditional pricing models by 40% and ML baselines by 15-60%.",
      link: "",
      skills: ["Python", "LLM", "GPT-4", "Claude Sonnet", "Prompt Engineering"],
    },
    {
      name: "High-Dimensional Bayesian Model Scan & Signal Discovery",
      description:
        "Developed a hybrid signal extraction framework combining Bayesian Model Scanning with machine learning, designed a PCA and tree-based reduction strategy to make large-scale scanning feasible, and applied the Chib and Zeng (2020) framework to evaluate over 20 million candidate models with statistical rigor.",
      link: "https://github.com/haoruizhang2001/Bayesian-Model-Scan-and-Dimensional-Reduction",
      skills: ["Python", "R", "Bayesian Statistics", "Machine Learning", "PCA"],
    },
  ],
  experience: [
    {
      company: "Tencent",
      title: "Data Science Intern",
      dateRange: "Jun 2026 - Present",
      location: "Palo Alto, CA",
      bullets: [],
    },
    {
      company: "Global Key Advisors",
      title: "Artificial Intelligence Research Intern",
      dateRange: "Oct 2025 - Jan 2026",
      location: "San Francisco, CA",
      bullets: [
        "Built an automated pipeline for noisy, multi-format financial records across 1,000+ startups, converting unstructured text into structured corporate intelligence",
        "Derived 20+ risk factors and event signals from financial disclosures through LLM-driven context analysis",
        "Backtested LLM-derived signals and achieved a 25% higher return than traditional machine learning baselines in explaining cross-sectional variation",
      ],
    },
    {
      company: "Haitong Securities",
      title: "Deal Sourcing and Client Coverage Intern (Quantitative Analysis Role)",
      dateRange: "Jul 2022 - Oct 2022",
      location: "Qingdao, China",
      bullets: [
        "Conducted fundamental analysis on financial statements of 200+ corporations with cumulative assets exceeding RMB 500 billion, successfully flagging a high-risk issuer before potential credit events",
        "Developed Python and MathPix automation to digitize financial tables in 15 seconds per table, saving around 40 team-hours weekly by removing manual entry",
        "Analyzed debt structures across 300+ companies and supported data-driven screening for investment banking debt issuance targeting",
      ],
    },
    {
      company: "Tsingtao Stone Asset Management",
      title: "Quantitative Researcher Intern",
      dateRange: "Dec 2021 - Mar 2022",
      location: "Qingdao, China",
      bullets: [
        "Conducted strategy development/back-test of energy futures trading, eliminated 30% of underperforming models",
        "Analyzed 12 financial factors, highlighted consistent significance of SMB and HML factors",
        "Performed quantitative analysis for 20 indices, identified root causes of model-market discrepancies",
      ],
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "Master of Analytics",
      dateRange: "Aug 2025 - Aug 2026",
      achievements: [
        "CGPA: 3.968/4.0",
        "Coursework: Optimization, Data Analysis, Machine Learning, Database, Financial Engineering System",
      ],
    },
    {
      school: "University of Pennsylvania",
      degree: "Dual Degree: M.S.E. in Data Science & Computer and Information Technology",
      dateRange: "Aug 2023 - May 2026",
      achievements: [
        "CGPA: 3.94/4.0",
        "Coursework: GPU Computing for ML Systems, Artificial Intelligence, Natural Language Processing, Deep Learning",
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
