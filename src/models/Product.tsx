interface ProductOption {
  price: number;
  unitMeasure: string;
}
interface ProductImage {
  imageUrl: string;
}

class Product {
  id: string;
  name: string;
  options: ProductOption[];
  images: ProductImage[];
  category: string;
  subCategory: string;
  description: string;

  constructor(
    id: string,
    name: string,
    options: ProductOption[],
    images: ProductImage[],
    category: string,
    subCategory: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.options = options;
    this.images = images;
    this.category = category;
    this.subCategory = subCategory;
    this.description = description;
  }

  getImageUrl(index: number): string {
    if (this.images && this.images.length > index) {
      return this.images[index].imageUrl;
    }
    return '';
  }

  getOptionPrice(index: number): { price: number; unitMeasure: string } {
    if (this.options && this.options.length > index) {
      const { price, unitMeasure } = this.options[index];
      return { price, unitMeasure };
    }
    return { price: 0, unitMeasure: '' };
  }
}

export default Product;
