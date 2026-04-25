import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que é a{" "}
            <span className="text-[#8B1A2B]">
              Fábrica de Tecnologias Turing?
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#8B1A2B] to-transparent rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A Fábrica de Tecnologias Turing é um ambiente de inovação onde
              alunos da UniEVANGÉLICA têm a oportunidade de trabalhar em
              projetos reais de software, desenvolvendo soluções para empresas e
              instituições parceiras. Nosso objetivo é fomentar a criatividade,
              o aprendizado prático e a colaboração, formando profissionais
              prontos para o mercado de tecnologia.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-[#8B1A2B] mb-2">100+</div>
            <div className="text-gray-600">Alunos Participantes</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-[#8B1A2B] mb-2">50+</div>
            <div className="text-gray-600">Projetos Desenvolvidos</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-[#8B1A2B] mb-2">30+</div>
            <div className="text-gray-600">Empresas Parceiras</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}