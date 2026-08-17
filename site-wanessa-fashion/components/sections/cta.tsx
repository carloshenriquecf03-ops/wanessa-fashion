"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#111111] to-[#1a1a1a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A24A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E3C979]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#C9A24A]/10 px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} className="text-[#C9A24A]" />
            <span className="text-sm text-[#C9A24A]">
              Transforme sua beleza hoje
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FDF3F5] mb-6 leading-tight text-balance">
            Pronta para Cuidar da Sua{" "}
            <span className="text-[#C9A24A]">Beleza</span>?
          </h2>

          <p className="text-lg text-[#FDF3F5]/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Agende sua consulta e descubra os melhores tratamentos para realçar
            sua beleza natural. Estamos esperando você!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#C9A24A] hover:bg-[#B8923A] text-[#111111] font-semibold px-10 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
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
              className="border-[#C9A24A] text-[#FDF3F5] hover:bg-[#C9A24A] hover:text-[#111111] font-medium px-10 py-6 text-base rounded-full transition-all"
            >
              <a href="tel:+5548997754588">(48) 99775-4588</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
