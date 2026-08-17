"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Instagram, Navigation } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-[#FDF3F5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C9A24A] font-medium tracking-wider uppercase text-sm">
            Entre em Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] mt-4 mb-6 leading-tight text-balance">
            Localização & Contato
          </h2>
          <div className="w-20 h-1 bg-[#C9A24A] mx-auto mb-6" />
          <p className="text-[#111111]/70 leading-relaxed">
            Estamos localizados em Balneário Gaivota - SC. Venha nos visitar ou entre
            em contato para agendar seu horário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A24A]/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-[#C9A24A]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#111111] mb-2">
                    Endereço
                  </h3>
                  <p className="text-[#111111]/70 leading-relaxed">
                    Rua Danilo Carvalho dos Santos, 509
                    <br />
                    Jardim Ultramar
                    <br />
                    Balneário Gaivota – SC
                    <br />
                    CEP 88955-000
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A24A]/10 flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-[#C9A24A]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#111111] mb-2">
                    Telefone / WhatsApp
                  </h3>
                  <a
                    href="tel:+5548997754588"
                    className="text-[#C9A24A] font-medium text-lg hover:text-[#B8923A] transition-colors"
                  >
                    (48) 99775-4588
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A24A]/10 flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-[#C9A24A]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#111111] mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-[#111111]/70">
                    Segunda a Sexta: 9h às 19h
                    <br />
                    Sábado: Mediante agendamento
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-[#C9A24A] hover:bg-[#B8923A] text-[#111111] font-semibold rounded-full"
              >
                <a
                  href="https://wa.me/5548997754588?text=Olá!%20Encontrei%20a%20clínica%20Wanessa%20Fashion%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={18} className="mr-2" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 border-[#C9A24A] text-[#111111] hover:bg-[#C9A24A] hover:text-[#111111] font-medium rounded-full"
              >
                <a
                  href="https://www.instagram.com/clinicadeestetica_dra.wanessa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} className="mr-2" />
                  Seguir no Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9!2d-49.5707!3d-29.1556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA5JzIwLjIiUyA0OcKwMzQnMTQuNSJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Localização Wanessa Fashion Centro Estético"
              />
            </div>
            <Button
              asChild
              variant="outline"
              className="w-full border-[#C9A24A] text-[#111111] hover:bg-[#C9A24A] hover:text-[#111111] font-medium rounded-full"
            >
              <a
                href="https://maps.app.goo.gl/mimn3Nced7Z514wy5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={18} className="mr-2" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
