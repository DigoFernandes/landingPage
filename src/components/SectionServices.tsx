import React from "react";
import Container from "./Container";

export default function SectionServices() {
  return (
    <section className="w-full h-[965px] pt-32">
      <Container>
        <div className="flex-1 max-w-[594px]">
          <span className="text-primary-orange text-sm font-bold uppercase block mb-9">
            Serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-15 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura,rápida e o melhor, no conforto de casa
          </p>

          <ul>
            <li>
                <p>Acompanhar sua conta, fazer transferencias e pagamentos onde estiver</p>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
