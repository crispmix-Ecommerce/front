import { cartDB } from '@/db/db.cart';
import { CartDBService } from '@/service/cache/cart_db.service';
import { AwardIcon, InfoIcon, Rocket, ShieldIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

interface ProductCheckoutComponentProps {
  name: string;
  category: string;
  subCategory: string;
  price: number;
  urlImg: string;
}

export function ProductCheckoutComponent({
  name,
  category,
  subCategory,
  price,
  urlImg,
}: ProductCheckoutComponentProps) {
  const t = useTranslations('Product.checkout');
  const [count, setCount] = useState(1);

  const handleCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCount = parseInt(e.target.value);
    if (!isNaN(newCount)) {
      setCount(Math.min(Math.max(0, newCount), 50));
    }
  };

  const addToStorage = () => {
    const cart = new CartDBService();
    cart.addProduct({
      name: name,
      category: category,
      subCategory: subCategory,
      price: price,
      quantity: count,
      urlImg: urlImg,
    });
  };

  const maxQuantity = 50;

  return (
    <div>
      <div className="flex flex-col justify-center">
        <p className="py-4">{t('shipping')}</p>
        <div>
          <div className="flex justify-between ">
            <div>
              <p className="text-lg font-bold">{t('quantity')}</p>
              <p className="text-sm">
                {t('maxQuantity', { max: maxQuantity })}
              </p>
            </div>
            <select
              id="count"
              value={count}
              onChange={handleCountChange}
              className="border-custom-gray border-2 rounded p-2"
            >
              {Array.from({ length: maxQuantity }, (_, index) => (
                <option
                  key={index + 1}
                  value={index + 1}
                >
                  {index + 1} Unidade{index !== 0 && 's'}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex py-6">
          <p>{t('description')}</p>
        </div>
        <div className="my-2">
          <button className="flex py-2 px-4 bg-custom-green hover:bg-blue-500 text-white font-bold rounded">
            <p className="mr-2"> {t('contact')}</p>
            <img
              src="/zapicon.png"
              alt="Whatsapp icon"
              className=" h-6 w-6"
            />
          </button>
        </div>
        <h3 className="pt-4 text-lg font-bold ">{t('stock')}</h3>
        <div className="flex justify-between">
          <h3 className="text-custom-green pb-4">{t('shippingTurbo')}</h3>
          <div className="flex">
            <div className="text-custom-orange ml-2">
              <Rocket
                size={22}
                aria-hidden="true"
              />
            </div>
            <p className="font-bold italic">{t('turbo')}</p>
          </div>
          <div className=" text-custom-blue">
            <InfoIcon
              size={22}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <Link href="/cart">
          <button
            onClick={addToStorage}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 rounded"
          >
            {t('buy')}
          </button>
        </Link>
        <button
          onClick={addToStorage}
          className="w-full bg-custom-blue  hover:bg-blue-500 text-white font-bold py-4 px-4 rounded"
        >
          {t('buyMore')}
        </button>
        <div className="flex text-blue-900">
          <div>
            <ShieldIcon
              size={22}
              aria-hidden="true"
            />
          </div>
          <p className="ml-2">{t('guarantedPurchase')}</p>
        </div>
        <div className="flex pb-6  text-blue-900">
          <div>
            <AwardIcon
              size={22}
              aria-hidden="true"
            />
          </div>
          <p className="ml-2">{t('guarantee')}</p>
        </div>
      </div>
    </div>
  );
}
