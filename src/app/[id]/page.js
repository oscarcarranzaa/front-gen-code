"use client";
import { useParams, useSearchParams } from "next/navigation";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import EditCode from "@/components/EditCode";
import ItemsCodes from "@/components/ItemsCodes";

export default function Idxlsx() {
  const [data, setData] = useState([]);
  const [args, setArgs] = useState([]);
  const [code, setCode] = useState();
  const [codeLoad, setCodeLoad] = useState(true);
  const [loadingCodes, setLoadingCodes] = useState(true);
  const query = useSearchParams().get("p") || 1;
  const Params = useParams();
  const id = Params.id;
  const codeParam = useSearchParams().get("code");
  const queryCode = `&code=${codeParam}` || "";
  useEffect(() => {
    axios
      .get("http://localhost:4000/get-xlsx?id=" + id + "&page=" + query)
      .then((res) => {
        setData(res.data);
        setArgs(res.data.data);
        setLoadingCodes(false);
      });
  }, [id, query, codeParam]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/one-object?id=" + id + queryCode)
      .then((res) => {
        setCode(res.data);
        setCodeLoad(false);
      });
  }, [queryCode, id, codeParam]);
  const nextCode = codeLoad
    ? null
    : code.nextCode
    ? `${Params.id}?p=${code.nextPaginate}&code=${code.nextCode}`
    : "#";
  const prevCode = codeLoad
    ? null
    : code.prevCode
    ? `${Params.id}?p=${code.prevPaginate}&code=${code.prevCode}`
    : "#";
  return (
    <div>
      {loadingCodes ? null : (
        <Pagination totalPages={data.totalItems} limit={10} />
      )}
      <div className="flex m-auto 2xl:max-w-7xl w justify-center p-5">
        {codeLoad ? null : (
          <EditCode
            title={code.Descripcion}
            code={codeParam}
            data={code}
            prevCode={prevCode}
            nextCode={nextCode}
          />
        )}
        <div className="ml-5 w-6/12">
          {loadingCodes
            ? null
            : args.map((e) => {
                const select = e.Codigo === codeParam;
                return (
                  <div className="h-14" key={e.Codigo}>
                    <ItemsCodes
                      url={`/${id}?p=${query}&code=${e.Codigo}`}
                      text={e.Descripcion}
                      select={select}
                      code={e.Codigo}
                      succes={e.succes}
                      total={e["(pcs)"]}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
