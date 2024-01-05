"use client";

import Link from "next/link";
import ArrowAngle from "../Icons/ArrowAngle";
import WarnSVG from "../Icons/Warn";
import Input from "./input";

export default function EditCode({ title, code, data }) {
  const isDisabled = !code;
  const name = data ? data.Descripcion.split("-")[1] : "";
  const model = data ? data.Descripcion.split("-")[0] : "";
  const color = data ? data.Descripcion.split("-")[2] : "";
  return (
    <div className="flex flex-col w-5/12">
      <div className="flex flex-wrap justify-between">
        <Link
          href={"#"}
          className="w-10 h-10 rounded-full hover:bg-slate-800 flex items-center justify-center -rotate-90"
        >
          <ArrowAngle width="20" height="20" fill={"#fff"} />
        </Link>
        <h2 className="w-10/12 text-center">
          {title || "Seleccione un elemento a editar"}
        </h2>
        <Link
          href={"#"}
          className="w-10 h-10 rounded-full hover:bg-slate-800 flex items-center justify-center rotate-90"
        >
          <ArrowAngle width="20" height="20" fill={"#fff"} />
        </Link>
      </div>
      <form className="mt-8">
        <Input name={"Nombre"} disabled={isDisabled} value={name} />
        <Input name={"Modelo"} disabled={isDisabled} value={model} />
        <Input name={"Color"} disabled={isDisabled} value={color} />
      </form>
    </div>
  );
}
