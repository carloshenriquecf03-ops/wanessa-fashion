"use client"

import Image from "next/image"
import { Award, Heart, Shield, Star } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "20+ Anos de Experiência",
    description: "Duas décadas dedicadas à estética e beleza em Balneário Gaivota",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado para cada cliente",
  },
  {
    icon: Shield,
    title: "Procedimentos Seguros",
    description: "Técnicas modernas e produtos de alta qualidade",
  },
  {
    icon: Star,
    title: "Resultados Naturais",
    description: "Realçando sua beleza com resultados duradouros",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_95-cWjsOceM7RlYRvb1gfHFHysEPVzyB1.png"
                alt="Dra. Wanessa - Especialista em Estética"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A24A]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F6E6EA] rounded-full -z-10" />
            
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-[#C9A24A] text-[#111111] px-6 py-4 rounded-xl shadow-lg">
              <span className="font-serif text-3xl font-bold">20+</span>
              <span className="block text-sm font-medium">Anos de Experiência</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-[#C9A24A] font-medium tracking-wider uppercase text-sm">
                Sobre a Profissional
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight text-balance">
                Dra. Wanessa
              </h2>
              <div className="w-20 h-1 bg-[#C9A24A]" />
            </div>

            <div className="space-y-4 text-[#111111]/70 leading-relaxed">
              <p>
                Dra. Wanessa é especialista em estética e beleza, com mais de 20 anos de
                experiência atendendo em Balneário Gaivota. Ao longo de sua trajetória,
                construiu uma reputação baseada em confiança, cuidado com os pacientes e
                excelência em tratamentos estéticos.
              </p>
              <p>
                Seu compromisso é proporcionar bem-estar, autoestima e resultados naturais
                para cada cliente. Com uma abordagem personalizada, ela analisa as
                necessidades individuais de cada pessoa para oferecer os melhores
                tratamentos disponíveis.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#FDF3F5] hover:bg-[#F6E6EA] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C9A24A]/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-[#C9A24A]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#111111] text-sm">{item.title}</h4>
                    <p className="text-xs text-[#111111]/60 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
