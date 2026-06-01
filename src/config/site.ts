export const siteConfig = {
  siteName: 'CHAPA Delivery',
  companyName: 'HERA TECHNOLOGY',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://chapa.delivery',
  defaultTitle: 'CHAPA Delivery — peça na praia e receba na areia',
  defaultDescription: 'Encontre vendedores perto de você na praia, peça pelo celular, pague com facilidade e receba na areia.',
  vendorSignupUrl: 'https://app.chapa.delivery/vendors-login',
  social: {
    instagram: 'https://www.instagram.com/sejachapa/',
  },
  placeholders: {
    cnpj: '{{CNPJ_HERA}}',
    endereco: '{{ENDERECO_HERA}}',
    emailSuporte: '{{EMAIL_SUPORTE}}',
    emailPrivacidade: '{{EMAIL_PRIVACIDADE}}',
    whatsapp: '{{WHATSAPP_SUPORTE}}',
  },
}
