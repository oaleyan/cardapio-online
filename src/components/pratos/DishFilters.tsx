'use client';

import React from 'react';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import { Category, Tag } from '@/lib/types';
import { motion } from 'framer-motion';

interface DishFiltersProps {
  categories: Category[];
  tags: Tag[];
  selectedCategories: string[];
  selectedTags: string[];
  onCategoryChange: (category: Category, isChecked: boolean) => void;
  onTagChange: (tag: Tag, isChecked: boolean) => void;
  onClearFilters: () => void;
}

const DishFilters: React.FC<DishFiltersProps> = ({
  categories,
  tags,
  selectedCategories,
  selectedTags,
  onCategoryChange,
  onTagChange,
  onClearFilters,
}) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md sticky top-28 h-fit"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtros</h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Categorias</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Checkbox
              key={category}
              label={category}
              checked={selectedCategories.includes(category)}
              onChange={(e) => onCategoryChange(category, e.target.checked)}
              
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Tags</h3>
        <div className="space-y-2">
          {tags.map((tag) => (
            <Checkbox
              key={tag}
              label={tag}
              checked={selectedTags.includes(tag)}
              onChange={(e) => onTagChange(tag, e.target.checked)}
            />
          ))}
        </div>
      </div>

      <Button onClick={onClearFilters} variant="outline" className="w-full">
        Limpar Filtros
      </Button>
    </motion.div>
  );
};

export default DishFilters;