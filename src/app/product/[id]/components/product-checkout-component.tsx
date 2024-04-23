import { AwardIcon, InfoIcon, Rocket, ShieldIcon } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

export function ProductCheckoutComponent() {
  const [count, setCount] = useState(1);

  const handleCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCount = parseInt(e.target.value);
    if (!isNaN(newCount)) {
      setCount(Math.min(Math.max(0, newCount), 50));
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center">
        <p className="py-4">Envio para todo o país</p>
        <div>
          <div className="flex justify-between ">
            <div>
              <p className="text-lg font-bold">Quantidade</p>
              <p className="text-sm">Máximo de 50 unidades</p>
            </div>
            <select
              id="count"
              value={count}
              onChange={handleCountChange}
              className="border-custom-gray border-2 rounded p-2"
            >
              {Array.from({ length: 50 }, (_, index) => (
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
          <p>
            Para comprar em atacado, entre em contato com um de nossos
            consultores. Você ira receber uma tabela de preços personalizada e
            exclusiva.
          </p>
        </div>
        <div className="my-2">
          <button className="flex py-2 px-4 bg-custom-green hover:bg-blue-500 text-white font-bold rounded">
            <p className="mr-2"> Entrar em contato</p>
            <img
              src="/zapicon.png"
              alt="Whatsapp icon"
              className=" h-6 w-6"
            />
          </button>
        </div>
        <h3 className="pt-4 text-lg font-bold ">Estoque disponível</h3>
        <div className="flex justify-between">
          <h3 className="text-custom-green pb-4">
            Entrega turbo para Vale do Itajaí
          </h3>
          <div className="flex">
            <div className="text-custom-orange ml-2">
              <Rocket
                size={22}
                aria-hidden="true"
              />
            </div>
            <p className="font-bold italic">TURBO</p>
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
        <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 rounded">
          Comprar
        </button>
        <button className="w-full bg-custom-blue  hover:bg-blue-500 text-white font-bold py-4 px-4 rounded">
          Adicitonar no carrinho
        </button>
        <div className="flex text-blue-900">
          <div>
            <ShieldIcon
              size={22}
              aria-hidden="true"
            />
          </div>
          <p className="ml-2">Compra garantida por CRISPMIX LTDA.</p>
        </div>
        <div className="flex pb-6  text-blue-900">
          <div>
            <AwardIcon
              size={22}
              aria-hidden="true"
            />
          </div>
          <p className="ml-2">3 meses de garantia de fábrica.</p>
        </div>
      </div>
    </div>
  );
}
