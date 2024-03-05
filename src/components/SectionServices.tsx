import React from "react";
import Container from "./Container";
import IconPhone from "@/assets/icon-phone.svg";
import Image from "next/image";
import List from "./List";

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
          <p className="text-lg max-w-[554px] mb-10 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura,rápida e o melhor, no conforto de casa
          </p>

          <ul className="flex flex-col items-start  gap-9">
            <List
              alt="Phone Icon"
              icon={IconPhone}
              desc="Acompanhar sua conta, fazer transferencias e pagamentos onde
                estiver"
            />
            <List
              alt="Phone Icon"
              icon={IconPhone}
              desc="Soluções de empresas e renegociação para organizar suas finanças"
            />
            <List
              alt="Phone Icon"
              icon={IconPhone}
              desc="Diversas opções de investimentos, de acordo com o seu perfil de
                investidor"
            />
            <List
              alt="Phone Icon"
              icon={IconPhone}
              desc="Acompnahe a faturo do seu cartão de crédito e faça comrpas
                online com seu cartão virtual"
            />
          </ul>
        </div>
      </Container>
    </section>
  );
}
