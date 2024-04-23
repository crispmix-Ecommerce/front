import { AwardIcon, TicketIcon, ShieldIcon, ForwardIcon } from 'lucide-react';

export function CartCheckouComponent() {
  return (
    <div className="w-full my-4 border-2 border-custom-gray rounded">
      <div className="flex flex-col justify-center">
        <p className="py-4 px-2 border-b-2 border-custom-gray">Resumo</p>
        <div>
          <div className="flex justify-between px-2 ">
            <div>
              <p className="text-lg font-bold">Produtos(8)</p>
              <p className="text-sm">resumo</p>
            </div>
            <p>R$ 1840.23</p>
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
            <p className="ml-2">Como funciona o processo de compra?</p>
          </div>
          <div className="flex cursor-pointer hover:text-blue-700  text-blue-900">
            <div>
              <TicketIcon
                size={22}
                aria-hidden="true"
              />
            </div>
            <p className="ml-2">Cupom de desconto?</p>
          </div>
        </div>
        <div className="px-2 my-2">
          <button className="flex py-2 px-4 bg-custom-green hover:bg-blue-500 text-white font-bold rounded">
            <p className="mr-2"> Entrar em contato</p>
            <img
              src="/zapicon.png"
              alt="Whatsapp icon"
              className=" h-6 w-6"
            />
          </button>
        </div>
        <div className="flex pt-4 px-2  justify-between">
          <h3 className="text-lg font-bold ">Total</h3>
          <h3 className="pb-4">R$ 1840.23</h3>
        </div>
      </div>
      <div className="flex px-2  py-4 flex-col justify-center ">
        <button className="w-full py-4 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded">
          Continuar a compra
        </button>
      </div>
    </div>
  );
}
