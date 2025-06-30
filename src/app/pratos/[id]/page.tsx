'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { dishes } from '@/lib/data';
import Button from '@/components/ui/Button';
import RecommendedDishes from '@/components/pratos/RecommendedDishes';
import { useCart } from '@/app/cardapio/cart-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface DishDetailPageProps {
  params: {
    id: string;
  };
}

export default function DishDetailPage({ params }: DishDetailPageProps) {  
  const dish = dishes.find((d) => d.id === params.id);
  const { addItem } = useCart();

  if (!dish) {
    notFound(); // Redireciona para a página 404
  }

  // Pratos recomendados (filtrados pela mesma categoria, excluindo o atual)
  const recommendedDishes = dishes.filter(
    (d) => d.category === dish.category && d.id !== dish.id
  ).slice(0, 5); // Limita a 5 recomendados

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex flex-col md:flex-row gap-8 p-6 bg-white rounded-lg shadow-md"
    >
      {/* Conteúdo Principal do Prato */}
      <div className="md:w-2/3">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg mb-6 shadow-lg"
        >
          {dish.image !== "" && <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
            priority // Carrega a imagem principal mais rápido
          />}
        </motion.div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{dish.name}</h1>
        <p className="text-xl font-semibold text-blue-700 mb-4">R$ {dish.price.toFixed(2)}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{dish.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">
            Categoria: {dish.category}
          </span>
          {dish.tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button onClick={() => addItem(dish)} className="w-full sm:w-auto">
          Adicionar ao Carrinho
        </Button>

        <RecommendedDishes dishes={recommendedDishes} />
      </div>

      {/* A Sidebar do Carrinho é renderizada no RootLayout */}
      {/* Aqui não precisamos renderizá-la novamente, ela é global */}
    </motion.div>
  );
}