"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dish } from "@/lib/types";
import Button from "@/components/ui/Button";
import { useCart } from "@/app/cardapio/cart-provider";
import { motion } from "framer-motion";


interface DishCardProps {
  dish: Dish;
  
}

const DishCard = ({ dish }: DishCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      <div>
        <Link
          href={`/pratos/${dish.id}`}
          className="block relative w-full h-45 overflow-hidden"
        >
        
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-xl text-orange-700 font-semibold mb-2 line-clamp-2">{dish.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          Categoria: <span className="font-medium">{dish.category}</span>
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {dish.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-orange-700">
            R$ {dish.price.toFixed(2)}
          </span>
          <Button onClick={() => addItem(dish)}>Adicionar</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
