'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/cardapio/cart-provider';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const CartSidebar: React.FC = () => {
  const { items, removeItem, totalPrice, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

  return (
    <>
      {/* Botão flutuante para abrir o carrinho */}
      <motion.button
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {items.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 flex flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Seu Carrinho</h2>
              <Button onClick={() => setIsOpen(false)} variant="secondary">
                Fechar
              </Button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-gray-500">Seu carrinho está vazio.</p>
              ) : (
                <ul>
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      className="flex items-center justify-between py-2 border-b last:border-b-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.quantity} x R$ {item.price.toFixed(2)}
                        </p>
                      </div>
                      <Button onClick={() => removeItem(item.id)} variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                        Remover
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span>Total:</span>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
              <Button onClick={() => {
                alert('Funcionalidade de reserva não implementada. Carrinho limpo!');
                clearCart();
                setIsOpen(false);
              }} className="w-full">
                Reservar Pratos
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black backdrop-blur-{2xl} backdrop filter z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CartSidebar;