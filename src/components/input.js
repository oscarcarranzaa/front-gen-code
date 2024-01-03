"use client";
import { useState, useEffect } from "react";
export default function InputTitle({ name, Value, label }) {
  const [valueData, setValue] = useState("");
  useEffect(() => {
    setValue(Value);
  }, [Value]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const colorWarn = valueData.length < 20 ? "green-600" : "yellow-600";
  return (
    <>
      <div className="flex items-center">
        <div
          className={`border-2 ${
            valueData.length > 20 ? "border-yellow-500" : "border-green-600"
          } p-2 rounded-md  w-full mb-3`}
        >
          <input
            type="text"
            placeholder={name}
            name="title"
            className="text-white bg-transparent w-full  text-xl text-ellipsis"
            autoComplete="off"
            required={true}
            maxLength={200}
            value={valueData}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center ml-3">
          <div className={`bg-${colorWarn} w-2 h-2 rounded-full`}></div>
          <p className="ml-1">{valueData.length}</p>
        </div>
      </div>
    </>
  );
}
