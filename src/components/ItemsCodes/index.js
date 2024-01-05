"use client";
import Link from "next/link";

export default function ItemsCodes({ url, text, select, code }) {
  const selected = select ? "bg-gray-800" : "bg-transparent";
  return (
    <div
      className={`w-full h-full border-b-2 border-gray-500 ${selected} hover:bg-gray-900`}
    >
      <Link
        href={url}
        className="w-full h-full flex flex-col justify-center pl-5"
      >
        <p className="text-md line-clamp-1">{text}</p>
        <p className="text-xs text-gray-300 pt-1">{code}</p>
      </Link>
    </div>
  );
}
