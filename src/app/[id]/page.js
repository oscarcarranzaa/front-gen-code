"use client";
import { useParams } from "next/navigation";
import useFetch from "../hooks/useFetch";
export default function Idxlsx() {
  const Params = useParams();
  const id = Params.id;
  const { data, loading } = useFetch("http://localhost:4000/get-xlsx?id=" + id);
  console.log(data);
  return (
    <div>
      <div>Hola</div>
    </div>
  );
}
