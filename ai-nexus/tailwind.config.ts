import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        nexus: {
          bg: { primary: '#0a0a0f', secondary: '#12121a', surface: '#1a1a2e', elevated: '#22223a' },
          border: { subtle: '#2a2a40', active: '#3a3a5c' },
          neon: { blue: '#00d4ff', purple: '#a855f7', green: '#22d3ee', amber: '#f59e0b', red: '#ef4444' },
          text: { primary: '#e8e8f0', secondary: '#9898b0', muted: '#5a5a78' },
          glass: { bg: 'rgba(26,26,46,0.6)', border: 'rgba(255,255,255,0.06)' },
          trust: { official: '#22d3ee', high: '#10b981', medium: '#f59e0b', low: '#f97316', unverified: '#6b7280', rumor: '#ef4444' }
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards', shimmer: 'shimmer 2s infinite', 'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.3s ease forwards', 'slide-in-right': 'slideInRight 0.3s ease forwards',
        'scale-in': 'scaleIn 0.2s ease forwards', glow: 'glow 2s ease-in-out infinite alternate', marquee: 'marquee 30s linear infinite'
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        pulseNeon: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.7' } },
        slideInLeft: { '0%': { transform: 'translateX(-8px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInRight: { '0%': { transform: 'translateX(8px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        scaleIn: { '0%': { transform: 'scale(.96)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        glow: { '0%': { boxShadow: '0 0 8px #00d4ff55' }, '100%': { boxShadow: '0 0 16px #00d4ffaa' } },
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } }
      }
    }
  },
  plugins: []
};

export default config;
