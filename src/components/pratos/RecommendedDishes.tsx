import React from 'react';
import { Dish } from '@/lib/types';
import DishCard from './DishCard';
import { motion } from 'framer-motion';

interface RecommendedDishesProps {
  dishes: Dish[];
}

const RecommendedDishes: React.FC<RecommendedDishesProps> = ({ dishes }) => {
  if (dishes.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Pratos Recomendados</h2>
      <motion.div
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {dishes.map((dish) => (
          <motion.div
            key={dish.id}
            className="flex-shrink-0 w-64"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <DishCard dish={dish} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecommendedDishes;