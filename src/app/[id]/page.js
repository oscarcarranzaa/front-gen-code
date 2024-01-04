"use client";
import { useParams, useSearchParams } from "next/navigation";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import LabelLink from "@/components/LabelLinks";
import EditCode from "@/components/EditCode";

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
  useEffect(() => {
    axios
      .get("http://localhost:4000/get-xlsx?id=" + id + "&page=" + query)
      .then((res) => {
        setData(res.data);
        setArgs(res.data.data);
        setLoadingCodes(false);
      });
  }, [query]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/one-object?id=" + id + "&code=" + codeParam)
      .then((res) => {
        setCode(res.data);
        setCodeLoad(false);
      });
  }, [codeParam]);
  return (
    <div>
      {loadingCodes ? null : (
        <Pagination totalPages={data.totalItems} limit={10} />
      )}
      <div className="flex">
        <div className="flex w-6/12 flex-wrap">
          {loadingCodes
            ? null
            : args.map((e) => {
                return (
                  <div className="w-96 h-20 mt-3 pr-3" key={e.Codigo}>
                    <LabelLink
                      url={`http://localhost:3000/${id}?p=${query}&code=${e.Codigo}`}
                      text={e.Descripcion}
                    />
                  </div>
                );
              })}
        </div>
        {codeLoad ? null : (
          <EditCode title={code.Descripcion} code={codeParam} data={code} />
        )}
      </div>
    </div>
  );
}
