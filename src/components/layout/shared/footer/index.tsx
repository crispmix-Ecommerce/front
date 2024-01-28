import React from 'react'

export default function Footer() {
  return (
    <section className="bg-custom-dark text-white p-2 py-4 grid grid-rows-1 lg:grid-cols-5 gap-4 text-sm  ">
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Atendimento</p>
        <div className="flex flex-col">
          <p>(99) 99999-9999</p>
          <p>contato@teste.com</p>
          <p>Horário de atendimento on-line</p>
          <p>Segunda à sexta das 8:00h até as 18:00h</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Acesso rápido</p>
        <div className="flex flex-col">
          <p>Home</p>
          <p>Meus pedidos</p>
          <p>Produtos</p>
          <p>Aprenda a fazer os seus pedidos</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Institucional</p>
        <div className="flex flex-col">
          <p>Sobre a Crispmix</p>
          <p>Política de privacidade</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Mais acessadas</p>
        <div className="flex flex-col">
          <p>Tinta Crispmix branco TWS</p>
          <p>Pigmento Crispmix Amarelo Canário</p>
          <p>Aditivo Crispmix Ligante</p>
          <p>Tinta Crispmix Mix</p>
        </div>
      </div>
    </section>
  )
}
