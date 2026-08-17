"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5548997754588?text=Olá!%20Encontrei%20a%20clínica%20Wanessa%20Fashion%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} className="fill-white" />
      <span className="hidden md:inline font-medium text-sm">
        Agendar pelo WhatsApp
      </span>
    </a>
  )
}
