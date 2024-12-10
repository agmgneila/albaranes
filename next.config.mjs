export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/onboarding',
          permanent: false, // Cambia a true si es una redirección permanente
        },
      ];
    },
  };
  