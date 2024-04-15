import Product from '@/models/ProductHome';
import { ProductComponent } from './components/product-component';

interface ProductDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  let productIds = [];

  for (let index = 0; index < 40; index++) {
    productIds.push(`${index + 1}`);
  }

  return productIds.map((productId) => ({
    id: productId,
  }));
}

export default async function ProductDetailPage({
  params: { id },
}: ProductDetailPageProps) {
  return (
    <section className="flex-col items-center p-16 gap-4">
      <h1>Produto fetch {id}</h1>
      <ProductComponent id={id} />
    </section>
  );
}
