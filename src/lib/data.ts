// src/lib/data.ts
import { Dish, Category, Tag } from './types';

export const categories: Category[] = ['vegetariano', 'vegano', 'com carne', 'frutos do mar'];
export const tags: Tag[] = ['saudável', 'fast food', 'refeição leve', 'doce', 'picante'];

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Salada Quinoa e Abacate',
    image: '/salada quinoa.avif',
    price: 35.00,
    category: 'vegetariano',
    tags: ['saudável', 'refeição leve'],
    description: 'Uma refrescante salada com quinoa, abacate, tomate cereja e molho de limão.'
  },
  {
    id: '2',
    name: 'Hamburguer Artesanal',
    image: '/lanche2.jpg',
    price: 45.00,
    category: 'com carne',
    tags: ['fast food'],
    description: 'Suculento hambúrguer de carne com queijo, bacon, alface e tomate.'
  },
  {
    id: '3',
    name: 'Moqueca Vegana',
    image: '/moqueca-vegana.webp',
    price: 55.00,
    category: 'vegano',
    tags: ['saudável'],
    description: 'Moqueca cremosa com leite de coco, azeite de dendê e vegetais frescos.'
  },
  {
    id: '4',
    name: 'Sushi Variado',
    image: '/sushi.jpg',
    price: 70.00,
    category: 'frutos do mar',
    tags: ['saudável', 'refeição leve'],
    description: 'Seleção de sushis e sashimis frescos do dia.'
  },
  {
    id: '5',
    name: 'Torta de Limão',
    image: '/torta-de-limao.webp',
    price: 20.00,
    category: 'vegetariano',
    tags: ['doce', 'refeição leve'],
    description: 'Deliciosa torta de limão com merengue suíço.'
  },
  {
    id: '6',
    name: 'Frango Xadrez',
    image: '/frango-xadrez.jpg',
    price: 40.00,
    category: 'com carne',
    tags: ['picante'],
    description: 'Frango em cubos com pimentões, cebola e amendoim, molho agridoce.'
  },
  {
    id: '7',
    name: 'Açaí com Granola',
    image: '/acai-granola.jpg',
    price: 25.00,
    category: 'vegano',
    tags: ['saudável', 'refeição leve'],
    description: 'Tigela de açaí puro com granola e frutas frescas.'
  },
  {
    id: '8',
    name: 'Pizza Margherita',
    image: '/pizza-marguerita.jpg',
    price: 50.00,
    category: 'vegetariano',
    tags: ['fast food'],
    description: 'Pizza clássica com molho de tomate, mussarela e manjericão fresco.'
  },
];