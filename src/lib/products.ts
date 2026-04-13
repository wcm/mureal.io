import { getCollection, type CollectionEntry } from 'astro:content';

export type Product = CollectionEntry<'products'>;

export const categoryOrder = ['Apps', 'Design Tools'] as const;

export async function getSortedProducts() {
  const products = await getCollection('products');
  return products.sort((a, b) => a.data.order - b.data.order);
}

export function groupProductsByCategory(products: Product[]) {
  return categoryOrder.map((category) => ({
    category,
    items: products
      .filter((product) => product.data.category === category)
      .sort((a, b) => a.data.order - b.data.order)
  }));
}
