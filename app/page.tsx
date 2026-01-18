export default function Home() {
  const skills = [
    { category: "Cloud Platforms", items: ["AWS EC2", "S3", "RDS", "Lambda", "CloudFormation", "IAM"] },
    { category: "Container & Orchestration", items: ["Docker", "Kubernetes", "Docker Compose", "Helm"] },
    { category: "Infrastructure as Code", items: ["Terraform", "CloudFormation", "Ansible"] },
    { category: "CI/CD", items: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"] },
    { category: "Monitoring & Logging", items: ["CloudWatch", "Prometheus", "Grafana", "ELK Stack"] },
    { category: "Tools & Technologies", items: ["Git", "Linux", "Python", "Bash", "YAML"] },
  ];

  const projects = [
    {
      title: "Kubernetes Multi-Cluster Setup",
      description: "Designed and deployed a highly available Kubernetes cluster with auto-scaling capabilities using kubeadm and managed services.",
      tech: ["Kubernetes", "Docker", "Helm", "kubectl"],
      github: "https://github.com",
    },
    {
      title: "AWS Infrastructure Automation",
      description: "Automated infrastructure provisioning using Terraform for multi-environment deployments (dev, staging, production).",
      tech: ["Terraform", "AWS", "CloudFormation", "IAM"],
      github: "https://github.com",
    },
    {
      title: "CI/CD Pipeline Implementation",
      description: "Built complete CI/CD pipeline using GitHub Actions with automated testing, building, and deployment to AWS.",
      tech: ["GitHub Actions", "Docker", "AWS", "Git"],
      github: "https://github.com",
    },
    {
      title: "Microservices Deployment",
      description: "Containerized microservices and deployed on Kubernetes with service mesh implementation for better observability.",
      tech: ["Kubernetes", "Docker", "Istio", "Prometheus"],
      github: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SK</h1>
          <div className="flex gap-6">
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Cloud & DevOps Engineer
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Building scalable, reliable infrastructure on AWS with Kubernetes, Docker, and Infrastructure as Code. 
            Passionate about automating deployments and optimizing cloud costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/shashi0396"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              GitHub Profile
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 hover:border-blue-400 transition">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-slate-600 rounded-full text-sm text-gray-200 hover:bg-blue-600 transition">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 hover:border-blue-400 transition h-full flex flex-col">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-600 rounded text-xs text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-white">Let's Connect</h3>
          <p className="text-gray-300 mb-8 text-lg">Interested in collaborating or discussing cloud infrastructure? Reach out!</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:your.email@example.com" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
              Email Me
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition">
              LinkedIn
            </a>
            <a href="https://github.com/shashi0396" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-lg font-semibold transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4 text-center text-gray-400">
        <p>&copy; 2025 Shashi Kumar. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
