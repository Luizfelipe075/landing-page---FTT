import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  FileText,
  Send,
  Building2,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function Participantes() {
  const [formType, setFormType] = useState<"aluno" | "empresa">("aluno");
  const formRef = useRef(null);
  const benefitsRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });

  const studentBenefits = [
    {
      title: "Experiência Prática",
      description:
        "Trabalhe em projetos reais que serão utilizados por empresas.",
    },
    {
      title: "Portfólio Profissional",
      description: "Construa um portfólio sólido antes mesmo de se formar.",
    },
    {
      title: "Networking",
      description: "Conecte-se com profissionais e empresas da área.",
    },
    {
      title: "Mentoria Especializada",
      description: "Aprenda com professores e profissionais experientes.",
    },
  ];

  const companyBenefits = [
    {
      title: "Soluções Personalizadas",
      description: "Desenvolvimento de software sob medida para seu negócio.",
    },
    {
      title: "Custo Benefício",
      description: "Acesso a talentos qualificados com investimento reduzido.",
    },
    {
      title: "Qualidade Garantida",
      description: "Projetos supervisionados por profissionais experientes.",
    },
    {
      title: "Impacto Social",
      description: "Contribua para a formação de novos profissionais.",
    },
  ];

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
              Faça <span className="text-[#8B1A2B]">Parte</span> da FTT
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Seja você um aluno em busca de experiência prática ou uma empresa
              procurando soluções tecnológicas
            </p>

            {/* Toggle Buttons */}
            <div className="inline-flex bg-white/10 backdrop-blur-lg p-1.5 rounded-xl">
              <button
                onClick={() => setFormType("aluno")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  formType === "aluno"
                    ? "bg-[#8B1A2B] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Sou Aluno
              </button>
              <button
                onClick={() => setFormType("empresa")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  formType === "empresa"
                    ? "bg-[#8B1A2B] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Sou Empresa
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {formType === "aluno" ? "Benefícios para" : "Vantagens para"}{" "}
              <span className="text-[#8B1A2B]">
                {formType === "aluno" ? "Alunos" : "Empresas"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(formType === "aluno" ? studentBenefits : companyBenefits).map(
              (benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isBenefitsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#8B1A2B] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8B1A2B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B1A2B] transition-colors">
                      <div className="w-6 h-6 bg-[#8B1A2B] rounded group-hover:bg-white transition-colors"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {formType === "aluno"
                    ? "Inscreva-se como Aluno"
                    : "Solicite um Projeto"}
                </h2>
                <p className="text-gray-600">
                  Preencha o formulário e entraremos em contato em breve
                </p>
              </div>

              <form className="space-y-6">
                {formType === "aluno" ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nome Completo
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="Seu nome"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mail
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="(62) 99999-9999"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Curso
                        </label>
                        <div className="relative">
                          <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="Seu curso"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nome da Empresa
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="Nome da empresa"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Responsável
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="Nome do responsável"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mail
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="email"
                            placeholder="empresa@email.com"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="(62) 99999-9999"
                            className="pl-10 h-12"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tipo de Projeto
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          placeholder="Ex: Sistema Web, App Mobile, etc."
                          className="pl-10 h-12"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {formType === "aluno"
                      ? "Por que deseja participar?"
                      : "Descreva seu projeto"}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Textarea
                      placeholder={
                        formType === "aluno"
                          ? "Conte-nos suas motivações..."
                          : "Descreva as funcionalidades e objetivos do projeto..."
                      }
                      className="pl-10 min-h-32"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8B1A2B] hover:bg-[#6d1423] text-white h-12 text-lg font-semibold group"
                >
                  Enviar Inscrição
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
