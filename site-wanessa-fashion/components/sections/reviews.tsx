"use client"

import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Maria Silva",
    rating: 5,
    text: "Excelente profissional! A Dra. Wanessa é muito atenciosa e competente. Os resultados dos tratamentos são incríveis. Super recomendo!",
    date: "Há 2 semanas",
  },
  {
    name: "Ana Paula",
    rating: 5,
    text: "Ambiente super acolhedor e tratamento de primeira qualidade. Já faço tratamentos há anos e sempre saio satisfeita.",
    date: "Há 1 mês",
  },
  {
    name: "Juliana Costa",
    rating: 5,
    text: "Melhor clínica de estética da região! Profissionalismo e dedicação em cada atendimento. A Dra. Wanessa é maravilhosa!",
    date: "Há 3 semanas",
  },
  {
    name: "Fernanda Lima",
    rating: 5,
    text: "Fiz limpeza de pele e tratamento facial. Adorei o resultado! O ambiente é lindo e muito bem cuidado.",
    date: "Há 2 meses",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-[#C9A24A] text-[#C9A24A]" : "text-[#E8D4D9]"}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1)

  return (
    <section id="avaliacoes" className="py-20 lg:py-32 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C9A24A] font-medium tracking-wider uppercase text-sm">
            O Que Dizem Nossos Clientes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] mt-4 mb-6 leading-tight text-balance">
            Avaliações
          </h2>
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-6" />

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-[#C9A24A]">
                {averageRating}
              </div>
              <div className="flex justify-center mt-2">
                <StarRating rating={5} />
              </div>
              <p className="text-sm text-[#111111]/60 mt-2">
                Baseado em {reviews.length} avaliações
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative p-8 bg-[#FDF3F5] rounded-2xl hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="absolute top-6 right-6 text-[#C9A24A]/20"
              />

              {/* Rating */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-[#111111]/70 mt-4 mb-6 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A24A]/20 flex items-center justify-center">
                  <span className="font-semibold text-[#C9A24A]">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#111111]">{review.name}</p>
                  <p className="text-xs text-[#111111]/50">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/mimn3Nced7Z514wy5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A24A] hover:text-[#B8923A] font-medium transition-colors"
          >
            Ver todas as avaliações no Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
