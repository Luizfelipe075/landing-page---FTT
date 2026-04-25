import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Calendar,
  Users,
  Code,
  Sparkles,
  Filter,
} from "lucide-react";

const categories = [
  "Todos",
  "Web Development",
  "Mobile Development",
  "Data Analytics",
  "EdTech",
  "E-commerce",
  "Healthcare",
];

const allProjects = [
  {
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma completa para gerenciamento de processos internos, controle de estoque, gestão de vendas e relatórios financeiros em tempo real. Interface intuitiva e responsiva.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NTYzMjc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Web Development",
    duration: "4 meses",
    team: "6 alunos",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Aplicativo Mobile de Delivery",
    description:
      "App multiplataforma para pedidos online com sistema de rastreamento em tempo real, pagamento integrado, avaliações de usuários e programa de fidelidade.",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGxhcHRvcHxlbnwxfHx8fDE3NzU2ODMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Mobile Development",
    duration: "5 meses",
    team: "8 alunos",
    technologies: ["React Native", "Firebase", "Stripe"],
  },
  {
    title: "Portal Educacional Interativo",
    description:
      "Plataforma de ensino online com recursos de videoconferência integrada, gestão de turmas, distribuição de materiais, sistema de avaliações e acompanhamento de desempenho individual.",
    image:
      "https://images.unsplash.com/photo-1758873268877-3cd8ed329ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW58ZW58MXx8fHwxNzc1NTk2NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "EdTech",
    duration: "6 meses",
    team: "10 alunos",
    technologies: ["Vue.js", "WebRTC", "MongoDB"],
  },
  {
    title: "Dashboard de Analytics",
    description:
      "Sistema avançado de visualização de dados com gráficos interativos, relatórios customizáveis, alertas inteligentes e integração com múltiplas fontes de dados para tomada de decisões estratégicas.",
    image:
      "https://images.unsplash.com/photo-1590097520752-3258327b7548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzU2NDE0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Data Analytics",
    duration: "3 meses",
    team: "5 alunos",
    technologies: ["Angular", "Python", "D3.js"],
  },
  {
    title: "Plataforma de E-commerce",
    description:
      "Loja virtual completa com catálogo de produtos, carrinho de compras, múltiplas formas de pagamento, gestão de pedidos, sistema de cupons e integração com marketplaces.",
    image:
      "https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NTY1MjkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "E-commerce",
    duration: "5 meses",
    team: "7 alunos",
    technologies: ["Next.js", "Shopify API", "MySQL"],
  },
  {
    title: "Sistema de Saúde Digital",
    description:
      "Aplicativo para agendamento de consultas médicas, prontuário eletrônico, prescrições digitais, lembretes de medicamentos e telemedicina integrada.",
    image:
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGFwcHxlbnwxfHx8fDE3NzU1NzkwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Healthcare",
    duration: "6 meses",
    team: "9 alunos",
    technologies: ["Flutter", "GraphQL", "AWS"],
  },
];

export function Projetos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  const filteredProjects =
    selectedCategory === "Todos"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjFBMkIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#8B1A2B]/20 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#8B1A2B]" />
              <span className="text-sm">Projetos Desenvolvidos</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos <span className="text-[#8B1A2B]">Projetos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Conheça as soluções inovadoras desenvolvidas pelos alunos da FTT
              em parceria com empresas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-[#8B1A2B] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#8B1A2B] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8B1A2B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-[#8B1A2B]" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-[#8B1A2B]" />
                      {project.team}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-[#8B1A2B]" />
                      <span className="text-sm font-semibold text-gray-700">
                        Tecnologias:
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="flex items-center justify-center w-full gap-2 text-[#8B1A2B] font-semibold py-3 px-4 rounded-xl bg-[#8B1A2B]/5 hover:bg-[#8B1A2B]/10 transition-all group-hover:gap-3">
                    Ver Detalhes
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para desenvolver seu{" "}
              <span className="text-[#8B1A2B]">próximo projeto?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato e descubra como a FTT pode ajudar sua empresa
            </p>
            <motion.a
              href="/participantes"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#8B1A2B] hover:bg-[#6d1423] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Solicitar Projeto
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
