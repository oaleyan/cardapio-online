'use client';

import React, { useState, useMemo, useEffect } from 'react';
import DishCard from '@/components/pratos/DishCard';
import DishFilters from '@/components/pratos/DishFilters';
import { dishes, categories as allCategories, tags as allTags } from '@/lib/data';
import { Category, Tag } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dishesPerPage = 8; // Ajuste conforme necessário

  // Lógica para filtrar pratos
  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(dish.category);
      const matchesTag = selectedTags.length === 0 || dish.tags.some(tag => selectedTags.includes(tag));
      return matchesCategory && matchesTag;
    });
  }, [selectedCategories, selectedTags]);

  // Lógica de Paginação
  const totalPages = Math.ceil(filteredDishes.length / dishesPerPage);
  const paginatedDishes = useMemo(() => {
    const startIndex = (currentPage - 1) * dishesPerPage;
    const endIndex = startIndex + dishesPerPage;
    return filteredDishes.slice(startIndex, endIndex);
  }, [filteredDishes, currentPage, dishesPerPage]);

  // Resetar página ao mudar filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedTags]);

  const handleCategoryChange = (category: Category, isChecked: boolean) => {
    setSelectedCategories((prev) =>
      isChecked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const handleTagChange = (tag: Tag, isChecked: boolean) => {
    setSelectedTags((prev) =>
      isChecked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      <DishFilters
        categories={allCategories}
        tags={allTags}
        selectedCategories={selectedCategories}
        selectedTags={selectedTags}
        onCategoryChange={handleCategoryChange}
        onTagChange={handleTagChange}
        onClearFilters={handleClearFilters}
      />
      <div className="flex-1">
        {filteredDishes.length === 0 ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-lg text-gray-600 mt-10"
          >
            Nenhum prato encontrado com os filtros selecionados.
          </motion.p>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={pageVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {paginatedDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Paginação */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Anterior
              </button>
              <span className="text-lg font-medium">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Próximo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
