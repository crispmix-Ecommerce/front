interface ProductOption {
    price: number;
  }
  
  interface ProductImage {
    firstImage: string;
  }
  interface ProductImage {
    firstImage: string;
  }
  
  class Product {
    name: string;
    options: ProductOption[];
    images: ProductImage[];
    category: string;
  
    constructor(name: string, options: ProductOption[], images: ProductImage[], category: string) {
      this.name = name;
      this.options = options;
      this.images = images;
      this.category = category;
    }
  
    getFirstOptionPrice(): string | number {
      if (this.options && this.options.length > 0) {
        return this.options[0].price.toFixed(2);
      }
      return 0; 
    }
  
    getFirstImageUrl(): string {
      if (this.images && this.images.length > 0) {
        return this.images[0].firstImage;
      }
      return ''; 
    }
  }
  
  export default Product;
  