"use client";
import { useEffect, useState } from "react";

export default function Input({ name, disabled, value }) {
  const [val, setVal] = useState(value || "");
  useEffect(() => {
    setVal(value || "");
  }, [value]);
  function handleChange(e) {
    setVal(e.target.val);
  }

  return (
    <div>
      <p>{name}</p>
      <input
        type="text"
        className=" bg-transparent border-2 border-gray-600 p-2 rounded-md focus:border-sky-600 w-full"
        name="name"
        autoComplete="off"
        value={val.trim()}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}
