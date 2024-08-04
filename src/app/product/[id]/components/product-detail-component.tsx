import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface ProductDetailPageProps {
  getCategoryIcon: (category: string) => JSX.Element;
  productCategory: string;
  productSubCategory: string;
  productName: string;
  productPrice: number;
  productParcelPrice: string;
}

export function ProductDetailPage({
  getCategoryIcon,
  productCategory,
  productSubCategory,
  productName,
  productPrice,

  productParcelPrice,
}: ProductDetailPageProps) {
  const t = useTranslations('Product.detail');
  const [rating, setRating] = useState(5);

  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <div>
      <div className="flex items-center">
        <div>{getCategoryIcon(productCategory)}</div>

        <span className="ml-2">
          {productCategory} | {productSubCategory}
        </span>
      </div>
      <h1 className="text-2xl font-bold">{productName}</h1>
      <div className="flex items-center gap-2 border-b-2 border-gray-200 my-4">
        <div>4.9</div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`text-3xl cursor-pointer ${
                value <= rating ? 'text-yellow-400' : 'text-gray-400'
              }`}
              onClick={() => handleClick(value)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div>(20)</div>
      </div>
      <div className="relative my-4">
        <span className="bg-custom-orange border-8 border-custom-orange rounded">
          {t('promotion')}
        </span>
      </div>
      {productPrice !== null && (
        <div>
          <p className="text-4xl">R$ {productPrice}</p>
          <p>
            {t('inUpTo')} 12x {t('of')} R$ {productParcelPrice}
          </p>
          <p>{t('creditCard')}</p>
        </div>
      )}
    </div>
  );
}
