import Link from "next/link"
import { Instagram, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#111111] text-[#FDF3F5]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-[#C9A24A]">
                Wanessa Fashion
              </span>
              <span className="text-xs tracking-[0.2em] text-[#FDF3F5]/70 uppercase">
                Centro Estético
              </span>
            </div>
            <p className="text-[#FDF3F5]/70 text-sm leading-relaxed">
              Mais de 20 anos dedicados à sua beleza e bem-estar em Balneário Gaivota.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#C9A24A]">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#servicos", label: "Serviços" },
                { href: "#galeria", label: "Galeria" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#FDF3F5]/70 hover:text-[#C9A24A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#C9A24A]">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5548997754588"
                className="flex items-center gap-3 text-sm text-[#FDF3F5]/70 hover:text-[#C9A24A] transition-colors"
              >
                <Phone size={16} className="text-[#C9A24A]" />
                (48) 99775-4588
              </a>
              <a
                href="https://www.instagram.com/clinicadeestetica_dra.wanessa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#FDF3F5]/70 hover:text-[#C9A24A] transition-colors"
              >
                <Instagram size={16} className="text-[#C9A24A]" />
                @clinicadeestetica_dra.wanessa
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#C9A24A]">Localização</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-[#FDF3F5]/70">
                <MapPin size={16} className="text-[#C9A24A] mt-0.5 shrink-0" />
                <span>
                  Rua Danilo Carvalho dos Santos, 509
                  <br />
                  Jardim Ultramar
                  <br />
                  Balneário Gaivota – SC
                  <br />
                  CEP 88955-000
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#FDF3F5]/70">
                <Clock size={16} className="text-[#C9A24A]" />
                Seg - Sex: 9h às 19h
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#FDF3F5]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#FDF3F5]/50">
              © {new Date().getFullYear()} Wanessa Fashion Centro Estético. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/clinicadeestetica_dra.wanessa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#FDF3F5]/10 hover:bg-[#C9A24A] text-[#FDF3F5] hover:text-[#111111] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
