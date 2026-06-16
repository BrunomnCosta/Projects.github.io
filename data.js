/* ============================================================
   SITE LINKS — fill these in once you have them.
   Until then the buttons that depend on them are hidden and
   the rest of the site works normally.
   ============================================================ */
const SITE_LINKS = {
  // TODO: substitui pelo URL real do teu perfil de LinkedIn
  linkedin: "",

  securitest: {
    // TODO: cola aqui o link do repositório do SecuritEST no GitHub
    repo: "",
    // TODO: cola aqui o link da demo live (Azure Container Instance / frontend), se estiver no ar
    demo: ""
  },

  hawkeye: {
    // TODO: cola aqui o link do repositório do Hawk-Eye Padel, quando o publicares
    repo: ""
  }
};

/* ============================================================
   PROJECTS
   statusKey: "live" | "progress" | "soon"
   detailPage: path to a case-study page, or null
   links.repo / links.demo: real URL, or "" to hide the button
   ============================================================ */
const projects = [
  {
    id: "securitest",
    category: ["security", "cloud", "backend"],
    statusKey: "live",
    title: {
      pt: "SecuritEST — API Security Scanner",
      en: "SecuritEST — API Security Scanner"
    },
    summary: {
      pt: "Scanner de segurança para APIs com análise de endpoints, pontuação de risco e histórico de resultados. Implementado e em execução na Azure, com infraestrutura definida em Terraform e CI/CD via GitHub Actions.",
      en: "API security scanner that analyses endpoints, assigns a risk score, and keeps a history of scan results. Deployed and running on Azure, with infrastructure defined in Terraform and CI/CD via GitHub Actions."
    },
    stack: ["FastAPI", "Azure ACI", "Azure Container Registry", "Cosmos DB", "Terraform", "Docker", "GitHub Actions", "React"],
    detailPage: "projects/securitest.html",
    links: { repo: SITE_LINKS.securitest.repo, demo: SITE_LINKS.securitest.demo }
  },
  {
    id: "hawk-eye-padel",
    category: ["research", "backend"],
    statusKey: "progress",
    title: {
      pt: "Hawk-Eye Padel — Visão Computacional",
      en: "Hawk-Eye Padel — Computer Vision"
    },
    summary: {
      pt: "Sistema de visão computacional para padel: deteção da bola com YOLOv8 e um algoritmo de classificação de impacto a partir de vídeo de jogo, com o objetivo de correr numa aplicação Android em tempo real. Projeto de tese (Projeto II).",
      en: "Computer-vision system for padel: YOLOv8-based ball detection and an impact-classification algorithm running on match footage, aimed at a real-time Android application. Final-year thesis project (Projeto II)."
    },
    stack: ["Python", "YOLOv8", "OpenCV", "Computer Vision", "Android (planned)"],
    detailPage: "projects/hawkeye-padel.html",
    links: { repo: SITE_LINKS.hawkeye.repo, demo: "" }
  },
  {
    id: "cloud-security-lab",
    category: ["cloud", "security"],
    statusKey: "soon",
    title: {
      pt: "Cloud Security Lab",
      en: "Cloud Security Lab"
    },
    summary: {
      pt: "Laboratório prático para IAM, redes cloud, logging, hardening e deteção de configurações inseguras.",
      en: "A hands-on lab covering IAM, cloud networking, logging, hardening, and detection of insecure configurations."
    },
    stack: ["AWS", "Azure", "IAM", "Terraform", "Linux"],
    detailPage: null,
    links: { repo: "", demo: "" }
  },
  {
    id: "secure-backend-patterns",
    category: ["security", "backend"],
    statusKey: "soon",
    title: {
      pt: "Secure Backend Patterns",
      en: "Secure Backend Patterns"
    },
    summary: {
      pt: "Coleção de exemplos pequenos sobre autenticação, validação de input, rate limiting, logging e gestão de segredos.",
      en: "A collection of small examples covering authentication, input validation, rate limiting, logging, and secrets management."
    },
    stack: ["Java", "Spring Boot", "Docker", "REST APIs"],
    detailPage: null,
    links: { repo: "", demo: "" }
  }
];

/* ============================================================
   LAB NOTES
   ============================================================ */
const notes = [
  {
    date: "2026-06-12",
    title: {
      pt: "Como vou estruturar o meu portefólio de cloud security",
      en: "How I'm structuring my cloud security portfolio"
    },
    text: {
      pt: "Objetivos, stack inicial, critérios de documentação e próximos projetos a publicar.",
      en: "Goals, initial stack, documentation criteria, and the next projects to publish."
    }
  },
  {
    date: "2026-06-12",
    title: {
      pt: "Checklist para documentar um projeto de segurança",
      en: "A checklist for documenting a security project"
    },
    text: {
      pt: "Problema, threat model, arquitetura, comandos, evidências, limitações e melhorias futuras.",
      en: "Problem, threat model, architecture, commands, evidence, limitations, and future improvements."
    }
  },
  {
    date: "2026-06-12",
    title: {
      pt: "Primeiro laboratório: IAM e permissões mínimas",
      en: "First lab: IAM and least-privilege permissions"
    },
    text: {
      pt: "Plano para criar um lab simples com utilizadores, roles, políticas e logs de auditoria.",
      en: "Plan for a simple lab with users, roles, policies, and audit logs."
    }
  }
];
