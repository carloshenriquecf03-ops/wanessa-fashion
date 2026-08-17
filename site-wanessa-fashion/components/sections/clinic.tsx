"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Ambiente acolhedor e profissional",
  "Equipamentos modernos",
  "Produtos de alta qualidade",
  "Higiene e segurança rigorosas",
  "Sala de espera confortável",
  "Atendimento com hora marcada",
]

export function ClinicSection() {
  return (
    <section id="clinica" className="py-20 lg:py-32 bg-[#FDF3F5]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#C9A24A] font-medium tracking-wider uppercase text-sm">
                Nossa Estrutura
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight text-balance">
                A Clínica
              </h2>
              <div className="w-20 h-1 bg-[#C9A24A]" />
            </div>

            <div className="space-y-4 text-[#111111]/70 leading-relaxed">
              <p>
                A Wanessa Fashion Centro Estético é um espaço dedicado ao cuidado com a
                saúde, estética e bem-estar. Com um ambiente acolhedor e profissional, a
                clínica oferece tratamentos realizados com segurança, qualidade e atenção
                individual a cada cliente.
              </p>
              <p>
                Nosso espaço foi pensado para proporcionar conforto e tranquilidade
                durante todos os procedimentos. Contamos com equipamentos de última
                geração e profissionais qualificados para garantir os melhores resultados.
              </p>
            </div>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#C9A24A] shrink-0" />
                  <span className="text-sm text-[#111111]/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_94-n0TETVp6dmg5hde5nyqwyvxJfdXX4J.png"
                alt="Ambiente da Clínica Wanessa Fashion"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C9A24A]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E3C979]/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
