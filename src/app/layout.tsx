import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Importa os estilos do Tailwind
import { CartProvider } from './cardapio/cart-provider'; // Importa o provedor do carrinho
import Header from '@/components/layout/Header';
import CartSidebar from '@/components/layout/CartSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sweet & Salty',
  description: 'Um catálogo de pratos delicioso com filtros e carrinho de reserva.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex container mx-auto px-4 py-8">
              {children}
            </main>
            <CartSidebar /> {/* Sidebar do carrinho */}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}