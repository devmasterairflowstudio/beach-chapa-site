import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Benefits } from '@/components/home/Benefits'
import { HowItWorks } from '@/components/home/HowItWorks'
import { VendorsNearby } from '@/components/home/VendorsNearby'
import { PartnerCTA } from '@/components/home/PartnerCTA'
import { SocialProof } from '@/components/home/SocialProof'
import { FaqSection } from '@/components/home/FaqSection'
import { OrganizationJsonLd, WebSiteJsonLd, SoftwareAppJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'CHAPA Delivery — peça na praia e receba na areia',
  description: 'Encontre vendedores perto de você na praia, peça pelo celular, pague com facilidade e receba na areia. Tá na praia? Chama o CHAPA.',
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <SoftwareAppJsonLd />
      <Hero />
      <Benefits />
      <HowItWorks />
      <VendorsNearby />
      <SocialProof />
      <PartnerCTA />
      <FaqSection />
    </>
  )
}
