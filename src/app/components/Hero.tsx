import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1753715613457-63127ec40824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RlJTIwcHJvZ3JhbW1pbmclMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc3NTY4NDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Code Programming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/75 to-[#8B1A2B]/30"></div>
      </div>

      {/* Animated Tech Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjFBMkIiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#8B1A2B]/20 backdrop-blur-md border border-[#8B1A2B]/30 px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-[#8B1A2B] rounded-full animate-pulse"></div>
            <span className="text-sm text-white/90">UniEVANGÉLICA</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme Sua Ideia em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1A2B] via-red-500 to-[#8B1A2B] animate-gradient-x">
              Código Real
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Onde alunos desenvolvem projetos reais de software para empresas
            parceiras. Experiência prática que prepara para o mercado.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/participantes">
            <Button
              size="lg"
              className="bg-[#8B1A2B] hover:bg-[#6d1423] text-white px-6 py-3 text-base font-semibold shadow-lg shadow-[#8B1A2B]/50 hover:shadow-xl hover:shadow-[#8B1A2B]/60 transition-all group border border-[#8B1A2B]/50 relative overflow-hidden"
            >
              <span className="relative z-10">Solicite um Projeto</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </Link>
          <Link to="/participantes">
            <Button
              size="lg"
              className="bg-gray-800/50 backdrop-blur-md hover:bg-gray-700/60 border-2 border-gray-700/50 hover:border-[#8B1A2B]/50 text-white px-6 py-3 text-base font-semibold transition-all group relative overflow-hidden"
            >
              <span className="relative z-10">Sou Aluno da FTT</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B1A2B]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#8B1A2B] rounded-full mt-2 shadow-lg shadow-[#8B1A2B]/50"
          />
        </div>
      </motion.div>
    </section>
  );
}