"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_94-n0TETVp6dmg5hde5nyqwyvxJfdXX4J.png",
    alt: "Ambiente da Clínica - Área de Atendimento",
    category: "Ambiente",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_95-cWjsOceM7RlYRvb1gfHFHysEPVzyB1.png",
    alt: "Dra. Wanessa - Profissional",
    category: "Profissional",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1
      )
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1
      )
    }
  }

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-[#FDF3F5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C9A24A] font-medium tracking-wider uppercase text-sm">
            Conheça Nosso Espaço
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] mt-4 mb-6 leading-tight text-balance">
            Galeria de Fotos
          </h2>
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-6" />
          <p className="text-[#111111]/70 leading-relaxed">
            Veja nosso ambiente acolhedor e profissional, preparado para receber você
            com todo o conforto e carinho.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-[#C9A24A] font-medium uppercase tracking-wider">
                  {image.category}
                </span>
                <p className="text-white font-medium mt-1">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-[#111111]/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-[#C9A24A] transition-colors"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 p-2 text-white hover:text-[#C9A24A] transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 p-2 text-white hover:text-[#C9A24A] transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white font-medium">
              {galleryImages[selectedImage].alt}
            </p>
            <p className="text-[#C9A24A] text-sm mt-1">
              {selectedImage + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
