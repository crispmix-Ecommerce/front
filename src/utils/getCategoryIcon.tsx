import { PaintBucket, Palette, FlaskConical } from 'lucide-react';

enum Category {
  Tintas = 'tintas',
  Pigmentos = 'pigmentos',
  Aditivos = 'aditivos',
}

interface CategoryIconMap {
  [category: string]: JSX.Element; 
}

const categoryIconMap: CategoryIconMap = {
  [Category.Tintas]: <PaintBucket size={20} />,
  [Category.Pigmentos]: <Palette size={20} />,
  [Category.Aditivos]: <FlaskConical size={20} />,
};

export function getCategoryIcon(category: string): JSX.Element {
  const icon = categoryIconMap[category.toLowerCase()];
  if (icon) {
    return icon;
  } else {
    console.warn(`No icon found for category: ${category}`);
    return <div>No Icon</div>;
  }
}
