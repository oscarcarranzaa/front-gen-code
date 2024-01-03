"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const Router = useRouter();
  console.log(file);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  const send = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    axios({
      method: "POST",
      url: "http://localhost:4000/xlsx",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((res) => {
      const id = res.data.id;
      Router.push("/" + id);
      console.log(id);
    });
  };
  return (
    <main>
      <div className="flex justify-center mt-9 flex-nowrap w-full">
        <div className=" w-4/12">
          <h1 className=" text-2xl font-semibold text-center">Subir Excel</h1>
          <div className="mt-8">
            <form onSubmit={send}>
              <input
                type="file"
                accept=".xls,.xlsx"
                name="file"
                onChange={handleFileChange}
              />
              <button>Envia</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
