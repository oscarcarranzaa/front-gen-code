"use client";
import LabelLink from "@/components/LabelLinks";
import useFetch from "../hooks/useFetch";
export default function Home() {
  const { data, loading } = useFetch("http://localhost:4000/get-all-xlsx");
  return (
    <main>
      <div className="flex justify-center mt-9 flex-nowrap w-full">
        <div className=" w-4/12">
          <h1 className=" text-2xl font-semibold text-center">Home</h1>
        </div>
      </div>
    </main>
  );
}
