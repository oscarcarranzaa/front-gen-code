"use client";
import Link from "next/link";

export default function ItemsCodes({ url, text, select, code, succes, total }) {
  const selected = select ? "bg-gray-800" : "bg-transparent";
  const check = succes ? "text-green-500" : "text-gray-600";
  console.log(succes);
  return (
    <div
      className={`w-full h-full border-b-2 border-gray-500 ${selected} hover:bg-gray-900`}
    >
      <Link
        href={url}
        className="w-full h-full flex flex-col justify-center pl-5"
      >
        <p className="text-md line-clamp-1">{text}</p>
        <div className="pt-1 flex justify-between">
          <p className="text-xs text-gray-300">{code}</p>
          <div className="flex">
            <p className="text-yellow-500 text-xs mr-3">x{total}</p>
            <p className={`text-xs ${check} font-semibold`}>succes</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
