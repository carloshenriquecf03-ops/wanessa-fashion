"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#clinica", label: "A Clínica" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex flex-col items-center">
            <span className="font-serif text-xl md:text-2xl font-semibold text-[#C9A24A]">
              Wanessa Fashion
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#111111]/70 uppercase">
              Centro Estético
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#111111]/80 hover:text-[#C9A24A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#C9A24A] hover:bg-[#B8923A] text-[#111111] font-medium px-6"
            >
              <a
                href="https://wa.me/5548997754588?text=Olá!%20Encontrei%20a%20clínica%20Wanessa%20Fashion%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#111111]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FFFFFF] border-t border-[#E8D4D9] shadow-lg">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 text-[#111111]/80 hover:text-[#C9A24A] hover:bg-[#F6E6EA] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <Button
                  asChild
                  className="w-full bg-[#C9A24A] hover:bg-[#B8923A] text-[#111111] font-medium"
                >
                  <a
                    href="https://wa.me/5548997754588?text=Olá!%20Encontrei%20a%20clínica%20Wanessa%20Fashion%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
