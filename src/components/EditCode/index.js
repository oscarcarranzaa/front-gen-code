"use client";

import { useState } from "react";
import Input from "./input";

export default function EditCode({ title, code, data }) {
  const isDisabled = !code;
  const name = data ? data.Descripcion.split("-")[1] : "";
  const model = data ? data.Descripcion.split("-")[0] : "";
  const color = data ? data.Descripcion.split("-")[2] : "";
  return (
    <div className="flex flex-col w-4/12">
      <div>
        <h2 className="">{title || "Seleccione un elemento a editar"}</h2>
      </div>
      <form className="mt-8">
        <Input name={"Nombre"} disabled={isDisabled} value={name} />
        <Input name={"Modelo"} disabled={isDisabled} value={model} />
        <Input name={"Color"} disabled={isDisabled} value={color} />
      </form>
    </div>
  );
}
