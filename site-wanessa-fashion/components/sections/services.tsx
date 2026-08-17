"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Flower2, Sun, Heart, Droplets, Star } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Limpeza de Pele",
    description:
      "Procedimento completo para remover impurezas, cravos e células mortas, deixando sua pele renovada e radiante.",
  },
  {
    icon: Flower2,
    title: "Tratamentos Faciais",
    description:
      "Protocolos personalizados para hidratar, nutrir e revitalizar sua pele, tratando manchas, rugas e linhas de expressão.",
  },
  {
    icon: Sun,
    title: "Estética Corporal",
    description:
      "Procedimentos avançados para modelar o corpo, reduzir medidas e melhorar a textura da pele.",
  },
  {
    icon: Heart,
    title: "Rejuvenescimento",
    description:
      "Técnicas modernas para estimular a produção de colágeno e devolver a firmeza e elasticidade da pele.",
  },
  {
    icon: Droplets,
    title: "Cuidados com a Pele",
    description:
      "Tratamentos específicos para cada tipo de pele, incluindo hidratação profunda, controle de oleosidade e mais.",
  },
  {
    icon: Star,
    title: "Procedimentos Especiais",
    description:
      "Tratamentos exclusivos e personalizados para necessidades específicas, com tecnologia de ponta.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C9A24A] font-medium tracking-wider uppercase text-sm">
            O Que Oferecemos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] mt-4 mb-6 leading-tight text-balance">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-6" />
          <p className="text-[#111111]/70 leading-relaxed">
            Oferecemos uma ampla gama de tratamentos estéticos para cuidar da sua beleza
            de forma completa e personalizada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-[#FDF3F5] rounded-2xl hover:bg-[#F6E6EA] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C9A24A]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A24A]/20 transition-colors">
                <service.icon size={28} className="text-[#C9A24A]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">
                {service.title}
              </h3>
              <p className="text-[#111111]/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#C9A24A] text-[#111111] hover:bg-[#C9A24A] hover:text-[#111111] transition-all"
              >
                <a
                  href={`https://wa.me/5548997754588?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#111111]/60 mb-4">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#C9A24A] hover:bg-[#B8923A] text-[#111111] font-semibold px-8 rounded-full"
          >
            <a
              href="https://wa.me/5548997754588?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20disponíveis."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
