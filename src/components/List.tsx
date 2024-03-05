import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  alt: string;
  desc: string;
};

export default function List({ icon, alt, desc }: Props) {
  return (
    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
      <div className="w-7 h-7 flex items-center justify-center">
        <Image src={icon} alt={alt} />
      </div>
      <p className="flex-1 text-txt-gray pr-2">{desc}</p>
    </li>
  );
}
