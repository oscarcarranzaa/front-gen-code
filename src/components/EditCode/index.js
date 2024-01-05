"use client";

import Link from "next/link";
import ArrowAngle from "../Icons/ArrowAngle";
import Input from "./input";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

export default function EditCode({ title, code, data, prevCode, nextCode }) {
  const Router = useRouter();
  const Params = useParams();
  const isDisabled = !code;
  function getInfoData(input) {
    const out = ["model", "name", "color"];
    if (data.succes) {
      return data[out[input]];
    }
    return data ? data.Descripcion.split("-")[input] : "";
  }
  const send = (e) => {
    e.preventDefault();
    const getData = Object.fromEntries(new FormData(e.target));
    axios({
      method: "POST",
      url: "http://localhost:4000/one-object",
      data: { ...getData, IdXlsx: Params.id, code: data.Codigo },
    }).then(() => {
      Router.push(nextCode);
    });
  };
  const deleteCode = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:4000/one-object",
      data: { IdXlsx: Params.id, code: data.Codigo },
    }).then(() => {
      Router.push(nextCode);
    });
  };
  return (
    <div className="flex flex-col w-5/12">
      <div className="flex flex-wrap justify-between">
        <Link
          href={prevCode}
          className="w-10 h-10 rounded-full hover:bg-slate-800 flex items-center justify-center -rotate-90"
        >
          <ArrowAngle width="20" height="20" fill={"#fff"} />
        </Link>
        <h2 className="w-10/12 text-center">
          {title || "Seleccione un elemento a editar"}
        </h2>
        <Link
          href={nextCode}
          className="w-10 h-10 rounded-full hover:bg-slate-800 flex items-center justify-center rotate-90"
        >
          <ArrowAngle width="20" height="20" fill={"#fff"} />
        </Link>
      </div>
      <form className="mt-10" onSubmit={send}>
        <Input
          title={"Nombre"}
          disabled={isDisabled}
          value={getInfoData(1)}
          name={"name"}
        />
        <Input
          title={"Modelo"}
          disabled={isDisabled}
          value={getInfoData(0)}
          name={"model"}
        />
        <Input
          title={"Color"}
          disabled={isDisabled}
          value={getInfoData(2)}
          name={"color"}
        />
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className={`${
              isDisabled ? "bg-gray-600" : "bg-blue-600"
            } p-3 pl-5 pr-5 rounded mt-5`}
            disabled={isDisabled}
          >
            Actualizar
          </button>
          <button
            type="button"
            className={`${
              isDisabled ? "bg-slate-900" : "bg-gray-800"
            }  w-10 h-10 rounded-full mt-5`}
            disabled={isDisabled}
            onClick={deleteCode}
          >
            :
          </button>
        </div>
      </form>
    </div>
  );
}
