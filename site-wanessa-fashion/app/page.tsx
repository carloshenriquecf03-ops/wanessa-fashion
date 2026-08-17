import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ClinicSection } from "@/components/sections/clinic"
import { ServicesSection } from "@/components/sections/services"
import { GallerySection } from "@/components/sections/gallery"
import { ReviewsSection } from "@/components/sections/reviews"
import { ContactSection } from "@/components/sections/contact"
import { CTASection } from "@/components/sections/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ClinicSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
