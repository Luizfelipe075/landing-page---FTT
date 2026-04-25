import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aluna de Engenharia de Software",
    content:
      "A FTT transformou minha experiência acadêmica. Trabalhar em projetos reais me deu confiança e habilidades que nunca teria aprendido apenas na sala de aula. Hoje me sinto preparada para o mercado de trabalho.",
    image:
      "https://images.unsplash.com/photo-1699495592088-f63b5d1b1e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwcHJvZ3JhbW1pbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NzU2ODMzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Carlos Oliveira",
    role: "CEO - TechStart Solutions",
    content:
      "Contratar a FTT foi uma das melhores decisões que tomamos. Os alunos são extremamente dedicados e competentes, e o resultado final superou nossas expectativas. Além disso, é gratificante contribuir para a formação de novos talentos.",
    image:
      "https://images.unsplash.com/photo-1590097520752-3258327b7548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzU2NDE0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "João Santos",
    role: "Aluno de Ciência da Computação",
    content:
      "Participar da FTT me ajudou a desenvolver não apenas habilidades técnicas, mas também soft skills como trabalho em equipe e comunicação. A mentoria dos professores foi fundamental para meu crescimento profissional.",
    image:
      "https://images.unsplash.com/photo-1765561667528-28e39c6174dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzc1NjgzMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={ref} className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#8B1A2B]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#8B1A2B]/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que dizem nossos{" "}
            <span className="text-[#8B1A2B]">alunos e parceiros</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Alunos e empresas compartilham suas experiências sobre como a FTT
            impactou suas carreiras e negócios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <Quote className="w-12 h-12 text-[#8B1A2B] mb-6" />
            
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#8B1A2B]"
                />
                <div>
                  <div className="font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              size="icon"
              className="bg-gray-800/50 backdrop-blur-md hover:bg-gray-700/60 border border-gray-700/50 hover:border-[#8B1A2B]/50 text-white transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-[#8B1A2B] w-8"
                      : "bg-white/30 w-2"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextTestimonial}
              size="icon"
              className="bg-gray-800/50 backdrop-blur-md hover:bg-gray-700/60 border border-gray-700/50 hover:border-[#8B1A2B]/50 text-white transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}