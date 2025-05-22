import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import UserRoleSection from "@/components/user-role-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialSection from "@/components/testimonial-section"
import CtaSection from "@/components/cta-section"
import HowItWorksSection from "@/components/how-it-works-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <UserRoleSection />
      <BenefitsSection />
      <TestimonialSection />
      <CtaSection />
    </>
  )
}
