import Image from "next/image";
import React from "react";
import Arrow from "@/assets/arrow-down.svg";


type Props = {
    name: string
}

export default function ItemMenu({name} : Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="font-bold text-white ">{name}</span>
      <Image src={Arrow} alt="Arrow" />
    </button>
  );
}
