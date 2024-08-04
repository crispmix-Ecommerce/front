import OpenInformationComponent from '@/components/layout/shared/openInformation';
import { Button } from '@/components/ui/button';
import { ProductDB } from '@/models/ProductDB';
import { CartDBService } from '@/service/cache/cart_db.service';
import { useLiveQuery } from 'dexie-react-hooks';
import { TicketIcon, ForwardIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

interface CartCheckouComponentProps {
  products?: ProductDB[];
}

export function CartCheckouComponent({ products }: CartCheckouComponentProps) {
  const t = useTranslations('Cart');

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const somaTotal = products
    ?.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0)
    .toLocaleString('pt-br', { minimumFractionDigits: 2 });

  const totalProducts = products?.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const productsGetAll = useLiveQuery(() => {
    const cartService = new CartDBService();
    return cartService.getProducts();
  });

  const handleConvertTextAscii = () => {
    const orderProducts = productsGetAll?.map((product) => {
      return `*${product.quantity}x ${product.name} - ${product.category} - ${product.subCategory} - R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.*`;
    });

    const total = products
      ?.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0)
      .toLocaleString('pt-br', { minimumFractionDigits: 2 });

    const text = `👨‍🔬 GOSTOU DE PEDIR EM NOSSO E-COMMERCE? 🎨
Não precisa baixar nada, rápido e seguro:
https://crispmix.com.br/
---------------------------------------
Confira o pedido abaixo:

${orderProducts?.join('\n')}

*Total:* R$ ${total}.

---------------------------------------
*Pedido Crispmix E-commerce*`;

    const formattedText = formatTextForWhatsApp(text);
    const whatsappLink = `https://api.whatsapp.com/send/?phone=5547997137650&text=${formattedText}`;

    window.open(whatsappLink, '_blank');
  };

  const formatTextForWhatsApp = (text: string): string => {
    const formattedText = encodeURIComponent(text);
    return formattedText;
  };

  return (
    <div className="w-full my-4 border-2 border-custom-gray rounded">
      <div className="flex flex-col justify-center">
        <p className="py-4 px-2 border-b-2 border-custom-gray">{t('resume')}</p>
        <div>
          <div className="flex justify-between px-2 ">
            <div>
              <p className="text-lg font-bold">
                {t('products')}({totalProducts})
              </p>
            </div>
            <p>R$ {somaTotal}</p>
          </div>
        </div>
        <div className="flex-col px-2 py-6">
          <div className="flex cursor-pointer hover:text-blue-700  text-blue-900">
            <div>
              <ForwardIcon
                size={22}
                aria-hidden="true"
              />
            </div>
            <p className="ml-2">{t('processPurchasing')}</p>
          </div>
          <div className="flex cursor-pointer hover:text-blue-700  text-blue-900">
            <div>
              <TicketIcon
                size={22}
                aria-hidden="true"
              />
            </div>
            <p
              onClick={handleOpenDialog}
              className="ml-2"
            >
              {t('discountCoupon')}
            </p>
          </div>
          {isDialogOpen && (
            <OpenInformationComponent
              warnText={t('discount.warn')}
              title={t('discount.title')}
              onClose={handleCloseDialog}
              buttonText={t('discount.close')}
              content={
                <div className="py-4 ">
                  <p>{t('discount.description')}</p>
                  <input
                    type="text"
                    placeholder={t('discount.couponCode')}
                    className="p-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:border-custom-blue"
                    maxLength={6}
                  />
                </div>
              }
              children={
                <div className="flex items-center space-x-2">
                  <Button className="bg-custom-blue text-black hover:bg-green-300 hover:bg-opacity-50 hover:text-md transition duration-300 ease-in-out transform hover:scale-105">
                    {t('discount.apply')}
                  </Button>
                </div>
              }
            ></OpenInformationComponent>
          )}
        </div>
        <div className="px-2 my-2">
          <button className="flex py-2 px-4 bg-custom-green hover:bg-blue-500 text-white font-bold rounded">
            <p className="mr-2">{t('contact')}</p>
            <img
              src="/zapicon.png"
              alt="Whatsapp icon"
              className=" h-6 w-6"
            />
          </button>
        </div>
        <div className="flex pt-4 px-2  justify-between">
          <h3 className="text-lg font-bold ">{t('total')}</h3>
          <h3 className="pb-4">R$ {somaTotal}</h3>
        </div>
      </div>
      <div className="flex px-2  py-4 flex-col justify-center ">
        <button
          onClick={handleConvertTextAscii}
          className="w-full py-4 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded"
        >
          {t('keepBuying')}
        </button>
      </div>
    </div>
  );
}
