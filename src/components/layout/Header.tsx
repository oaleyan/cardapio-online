
'use client'; // Client Component para usar o useCart

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/app/cardapio/cart-provider';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-white shadow-md py-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          Catálogo de Pratos
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </Link>
            </li>
            <li className="relative">
              <span className="text-gray-700">
                Carrinho ({totalItems})
              </span>
              {/* No Next.js, a sidebar será controlada por estado ou um slot. Aqui é só o contador */}
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;