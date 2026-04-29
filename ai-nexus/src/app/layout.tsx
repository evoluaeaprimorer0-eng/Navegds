import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI NEXUS — Global AI Intelligence Navigator',
  description: "The world's first exclusive AI navigator...",
  keywords: 'AI, artificial intelligence, news, models',
  openGraph: {
    title: 'AI NEXUS — Global AI Intelligence Navigator',
    description: "The world's first exclusive AI navigator...",
    type: 'website',
    url: 'http://localhost:3000'
  },
  icons: '/icons/favicon.svg'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="dark">
        {/* TODO: Wrap with AppShell in cycle 3 */}
        <div>{children}</div>
      </body>
    </html>
  );
}
