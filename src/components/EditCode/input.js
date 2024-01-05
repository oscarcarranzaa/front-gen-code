"use client";
import { useEffect, useState } from "react";

export default function Input({ name, disabled, value, title }) {
  const [val, setVal] = useState(value || "");
  useEffect(() => {
    setVal(value || "");
  }, [value]);
  function handleChange(e) {
    setVal(e.target.value);
  }
  const valTrim = val !== "" ? val.trim() : val;
  return (
    <div className="mt-2">
      <p>{title}</p>
      <div className="flex items-center">
        <input
          type="text"
          className=" bg-transparent border-2 border-gray-600 p-2 rounded-md focus:border-sky-600 w-full"
          name={name}
          autoComplete="off"
          value={valTrim}
          onChange={handleChange}
          disabled={disabled}
        />
        <p
          className={`${
            valTrim.length > 25 ? "text-red-500" : "text-white"
          } text-xs ml-2`}
        >
          {valTrim.length}
        </p>
      </div>
    </div>
  );
}
