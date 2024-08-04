import { ProductComponent } from './components/product-component';

interface ProductDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  let productIds = [];

  for (let index = 0; index < 43; index++) {
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
    <ProductComponent
      id={id}
      name={''}
      options={[]}
      images={[]}
      category={''}
      subCategory={''}
      description={''}
    />
  );
}
