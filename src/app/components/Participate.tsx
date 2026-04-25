import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, UserPlus, Building2 } from "lucide-react";
import { Link } from "react-router";

export function Participate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="participate" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8B1A2B]/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como <span className="text-[#8B1A2B]">Participar</span> da Fábrica
            de Tecnologias?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Se você é aluno da UniEVANGÉLICA, pode se inscrever e fazer parte da
            FTT, trabalhando em projetos de software para empresas reais. Se você
            é uma empresa ou instituição, solicite um projeto personalizado e
            colabore com nossos alunos talentosos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Students */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1A2B]/20 rounded-full blur-3xl"></div>
            <UserPlus className="w-12 h-12 mb-6 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Para Alunos
            </h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Desenvolva suas habilidades trabalhando em projetos reais e construa
              um portfólio profissional antes mesmo de se formar.
            </p>
            <Link to="/participantes">
              <Button className="bg-[#8B1A2B] hover:bg-[#6d1423] text-white group/btn relative z-10 shadow-lg shadow-[#8B1A2B]/30">
                Quero Participar
                <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* For Companies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#8B1A2B] to-[#6d1423] p-8 rounded-2xl text-white relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <Building2 className="w-12 h-12 mb-6 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Para Empresas
            </h3>
            <p className="text-gray-100 mb-8 relative z-10">
              Tenha acesso a soluções tecnológicas de qualidade desenvolvidas por
              alunos talentosos supervisionados por profissionais experientes.
            </p>
            <Link to="/participantes">
              <Button className="bg-gray-900/90 backdrop-blur-md hover:bg-gray-800 border border-gray-700/50 text-white group/btn relative z-10 shadow-lg">
                Solicitar um Projeto
                <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}