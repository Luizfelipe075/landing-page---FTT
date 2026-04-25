import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import logo from "figma:asset/a32bd38f14dc9e70a50d93932734a44dbcfd181d.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjFBMkIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="FTT Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-bold text-lg">Fábrica de Tecnologias</div>
                <div className="text-sm text-gray-400">Turing</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Conectando talentos e empresas no desenvolvimento de soluções
              inovadoras de software.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#8B1A2B] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#8B1A2B] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#8B1A2B] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/quem-somos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/participantes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solicite um Projeto
                </Link>
              </li>
              <li>
                <Link
                  to="/participantes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inscrição para Alunos
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#8B1A2B] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contato@ftt.edu.br"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    contato@ftt.edu.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#8B1A2B] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+5562999999999"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (62) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8B1A2B] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  UniEVANGÉLICA
                  <br />
                  Anápolis, GO
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Fábrica de Tecnologias Turing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}