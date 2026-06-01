import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mare:   { DEFAULT: '#0E5E78', deep: '#08475C', soft: '#3E8AA6' },
        brasa:  { DEFAULT: '#E15A35', deep: '#B73E1F' },
        sol:    '#F2B23C',
        mata:   '#1F7A4F',
        areia:  { DEFAULT: '#F4EDE0', warm: '#EADFC8' },
        tinta:  '#161620',
        espuma: '#FBF8F2',
        linha:  '#E2D9C5',
      },
      fontFamily: {
        logo: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-1': ['80px', { lineHeight: '0.92', letterSpacing: '-0.045em', fontWeight: '800' }],
        'display-2': ['54px', { lineHeight: '1.0',  letterSpacing: '-0.03em',  fontWeight: '700' }],
        'h1':        ['40px', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h2':        ['28px', { lineHeight: '1.1',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3':        ['22px', { lineHeight: '1.2',  letterSpacing: '-0.01em',  fontWeight: '600' }],
      },
      borderRadius: {
        sm: '8px', md: '16px', lg: '24px', xl: '32px', pill: '999px',
      },
      boxShadow: {
        sm:    '0 1px 2px rgba(22,22,32,.08)',
        md:    '0 6px 18px -6px rgba(22,22,32,.16)',
        lg:    '0 18px 40px -16px rgba(22,22,32,.22)',
        brand: '0 12px 32px -12px rgba(14,94,120,.35)',
      },
      keyframes: {
        'sun-pulse':  { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.22)' } },
        'mark-float': { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-8px) rotate(-2deg)' } },
        'stagger-up': { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
      animation: {
        'sun-pulse':  'sun-pulse 1.6s ease-in-out infinite',
        'mark-float': 'mark-float 3.4s ease-in-out infinite',
        'stagger-up': 'stagger-up .9s ease-out both',
      },
    },
  },
  plugins: [],
}
export default config
