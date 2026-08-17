"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Award, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FDF3F5] to-[#F6E6EA] pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#C9A24A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#E3C979]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F6E6EA] rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-4 py-2 rounded-full shadow-sm mb-8 animate-fade-in">
            <Award size={16} className="text-[#C9A24A]" />
            <span className="text-sm text-[#111111]/80">
              Mais de 20 anos de experiência em Balneário Gaivota
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#111111] mb-6 leading-tight text-balance">
            Sua Beleza em{" "}
            <span className="text-[#C9A24A]">Boas Mãos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#111111]/70 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Tratamentos estéticos personalizados para realçar sua beleza natural.
            Cuidado, confiança e resultados que transformam.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-[#C9A24A] hover:bg-[#B8923A] text-[#111111] font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href="https://wa.me/5548997754588?text=Olá!%20Encontrei%20a%20clínica%20Wanessa%20Fashion%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#C9A24A] text-[#111111] hover:bg-[#C9A24A] hover:text-[#111111] font-medium px-8 py-6 text-base rounded-full transition-all"
            >
              <a href="#servicos">Conheça nossos serviços</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-[#FFFFFF]/60 backdrop-blur-sm rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-[#C9A24A]/10 flex items-center justify-center mb-3">
                <Award size={24} className="text-[#C9A24A]" />
              </div>
              <span className="font-serif text-3xl font-bold text-[#C9A24A]">20+</span>
              <span className="text-sm text-[#111111]/60">Anos de Experiência</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#FFFFFF]/60 backdrop-blur-sm rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-[#C9A24A]/10 flex items-center justify-center mb-3">
                <Heart size={24} className="text-[#C9A24A]" />
              </div>
              <span className="font-serif text-3xl font-bold text-[#C9A24A]">1000+</span>
              <span className="text-sm text-[#111111]/60">Clientes Satisfeitas</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-[#FFFFFF]/60 backdrop-blur-sm rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-[#C9A24A]/10 flex items-center justify-center mb-3">
                <Sparkles size={24} className="text-[#C9A24A]" />
              </div>
              <span className="font-serif text-3xl font-bold text-[#C9A24A]">15+</span>
              <span className="text-sm text-[#111111]/60">Tratamentos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#C9A24A]/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#C9A24A] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
