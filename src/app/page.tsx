import Banner from '@/components/layout/shared/banner';
import ProductList from './product-list/page';

export default function HomePage() {
  const imagesUrls = [
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
    '/banner-1.jpg',
  ];

  return (
    <section>
      <Banner></Banner>
      <ProductList></ProductList>
    </section>
  );
}
