/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pt.wikipedia.org',
        pathname: '/**',
      },
      // Se precisar de outras origens, adicione aqui
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // O Wikipedia também usa este domínio
        pathname: '/**',
      },
    ],
    // Opcional: configure formatos adicionais
    formats: ['image/avif', 'image/webp'],
    // Opcional: configure tamanhos de imagem
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;