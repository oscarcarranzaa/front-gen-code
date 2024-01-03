"use client";

import Link from "next/link";

export default function Labelink({ url, text }) {
  return (
    <div>
      <div className=" w-44 border flex items-center border-gray-600 text-center mt-4 h-14 rounded-md hover:border-sky-600">
        <Link href={url} className="w-full">
          {text}
        </Link>
      </div>
    </div>
  );
}
