/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Diselaraskan dengan colors.xml aplikasi + gaya banner marketing
        brand: {
          50: '#EEF9F0',
          100: '#D7F1DD',
          200: '#AEE3BB',
          300: '#7FD097',
          400: '#4EB870',
          500: '#22A24C', // aksen hijau utama
          600: '#178A3E',
          700: '#116C31',
          800: '#0E5628',
          900: '#0B4521',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#5B6169',
          muted: '#8A9099',
        },
        paper: {
          DEFAULT: '#F3F5F2', // latar halaman
          card: '#FFFFFF',
        },
        line: '#E9E9EA',
        amber: {
          soft: '#FFFBEB',
          DEFAULT: '#F59E0B',
          ink: '#92400E',
        },
        danger: {
          soft: '#FDECEC',
          DEFAULT: '#E23636',
          ink: '#B91C1C',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(16, 32, 20, 0.06)',
        'card-hover': '0 14px 40px rgba(16, 32, 20, 0.12)',
        cta: '0 12px 30px rgba(34, 162, 76, 0.30)',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease both',
      },
    },
  },
  plugins: [],
}
