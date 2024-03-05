import React from "react";
import Container from "./Container";
import IconPhone from "@/assets/icon-phone.svg"
import Image from "next/image";

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

          <ul>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconPhone} alt="Phone icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhar sua conta, fazer transferencias e pagamentos onde
                estiver
              </p>
            </li>
            <li className="flex pt-3 items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconPhone} alt="Phone icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Soluções de empresas e renegociação para organizar suas finanças
              </p>
            </li>
            <li className="flex items-center pt-3 gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconPhone} alt="Phone icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Diversas opções de investimentos, de acordo com o seu perfil de
                investidor
              </p>
            </li>
            <li className="flex items-center pt-3 gap-9 pb-3 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconPhone} alt="Phone icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompnahe a faturo do seu cartão de crédito e faça comrpas
                online com seu cartão virtual
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
