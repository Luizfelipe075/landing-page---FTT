import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  Rocket,
  Code,
  GraduationCap,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos constantemente novas soluções e tecnologias.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos em equipe para alcançar objetivos comuns.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Compromisso com qualidade em todos os projetos.",
  },
  {
    icon: Rocket,
    title: "Crescimento",
    description: "Desenvolvimento contínuo de habilidades e conhecimentos.",
  },
];

const team = [
  {
    icon: Code,
    title: "Desenvolvedores",
    description:
      "Alunos talentosos trabalhando em projetos de frontend, backend e mobile.",
  },
  {
    icon: GraduationCap,
    title: "Mentores",
    description:
      "Professores experientes orientando e supervisionando os projetos.",
  },
  {
    icon: Target,
    title: "Coordenadores",
    description:
      "Gerenciamento de projetos e conexão com empresas parceiras.",
  },
];

export function QuemSomos() {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const isMissionInView = useInView(missionRef, {
    once: true,
    margin: "-100px",
  });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Quem <span className="text-[#8B1A2B]">Somos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Conheça a história, missão e valores da Fábrica de Tecnologias
              Turing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#8B1A2B] to-[#6d1423] p-8 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <Target className="w-12 h-12 mb-6 relative z-10" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Missão</h2>
              <p className="text-lg text-gray-100 relative z-10">
                Proporcionar aos alunos da UniEVANGÉLICA experiência prática no
                desenvolvimento de software, conectando talentos com empresas e
                instituições para criar soluções tecnológicas inovadoras que
                impactem positivamente a sociedade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8B1A2B]/20 rounded-full blur-3xl"></div>
              <Eye className="w-12 h-12 mb-6 relative z-10" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Visão</h2>
              <p className="text-lg text-gray-200 relative z-10">
                Ser reconhecida como referência em formação prática de
                profissionais de tecnologia, desenvolvendo talentos preparados
                para os desafios do mercado e contribuindo para o
                desenvolvimento tecnológico regional e nacional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-[#8B1A2B]">Valores</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Princípios que guiam nosso trabalho e formam a base da nossa
              cultura
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-[#8B1A2B]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#8B1A2B] transition-colors">
                    <Icon className="w-7 h-7 text-[#8B1A2B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section ref={teamRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-[#8B1A2B]">Estrutura</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça as áreas que compõem a Fábrica de Tecnologias Turing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#8B1A2B] transition-all group"
                >
                  <div className="w-16 h-16 bg-[#8B1A2B] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {member.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8B1A2B] mb-2">5+</div>
              <div className="text-gray-400">Anos de Operação</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8B1A2B] mb-2">100+</div>
              <div className="text-gray-400">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8B1A2B] mb-2">50+</div>
              <div className="text-gray-400">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8B1A2B] mb-2">30+</div>
              <div className="text-gray-400">Empresas Parceiras</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
