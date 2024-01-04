"use client";

import Link from "next/link";

export default function LabelLink({ url, text }) {
  return (
    <div className="w-full h-full border-2 border-gray-500 flex  items-center justify-center text-center rounded-lg hover:border-sky-600">
      <Link
        href={url}
        className="w-full h-full flex justify-center items-center"
      >
        {text}
      </Link>
    </div>
  );
}
