"use client";

import Link from "next/link";

export default function LabelLink({ url, text, select }) {
  const selected = select ? "border-green-600" : "border-gray-500";
  return (
    <div
      className={`w-full h-full border-2 ${selected} flex  items-center justify-center text-center rounded-lg hover:border-sky-600`}
    >
      <Link
        href={url}
        className="w-full h-full flex justify-center items-center"
      >
        {text}
      </Link>
    </div>
  );
}
