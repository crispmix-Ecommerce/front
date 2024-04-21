interface ProductOption {
  price: number;
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

  constructor(
    id: string,
    name: string,
    options: ProductOption[],
    images: ProductImage[],
    category: string,
    subCategory: string,
  ) {
    this.id = id;
    this.name = name;
    this.options = options;
    this.images = images;
    this.category = category;
    this.subCategory = subCategory;
  }

  getFirstOptionPrice(): string | number {
    if (this.options && this.options.length > 0) {
      return this.options[0].price.toFixed(2);
    }
    return 0;
  }

  getImageUrl(index: number): string {
    if (this.images && this.images.length > index) {
      return this.images[index].imageUrl;
    }
    return '';
  }
}

export default Product;
