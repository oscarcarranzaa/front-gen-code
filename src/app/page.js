"use client";
import useFetch from "./hooks/useFetch";
import Labelink from "@/components/labelLink";

export default function Home() {
  const { data, loading } = useFetch("http://localhost:4000/get-all-xlsx");
  return (
    <main>
      <div className="flex justify-center mt-9 flex-nowrap w-full">
        <div className=" w-4/12">
          <h1 className=" text-2xl font-semibold text-center">
            GENERADOR DE CÓDIGO
          </h1>
          <div className="mt-8">
            {loading
              ? "null"
              : data.map((d) => {
                  return <Labelink url={"/" + d.id} key={d.id} text={d.id} />;
                })}
          </div>
        </div>
      </div>
    </main>
  );
}
