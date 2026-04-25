import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Users, Briefcase } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Aprendizado Prático",
    description:
      "Os alunos aplicam teorias em projetos reais, desenvolvendo habilidades essenciais para o mercado de trabalho.",
  },
  {
    icon: Users,
    title: "Mentoria de Especialistas",
    description:
      "Supervisão de profissionais e professores experientes para orientar os alunos durante todo o desenvolvimento.",
  },
  {
    icon: Briefcase,
    title: "Parcerias com Empresas",
    description:
      "Projetos personalizados para empresas e startups, gerando valor real e experiência profissional.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como <span className="text-[#8B1A2B]">Funciona?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Na FTT, alunos de diversos cursos de Tecnologia e áreas relacionadas
            têm a oportunidade de trabalhar em projetos de desenvolvimento de
            software para empresas reais, aplicando seus conhecimentos e
            adquirindo experiência prática.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-[#8B1A2B] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
