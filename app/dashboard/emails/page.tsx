import Link from "next/link";
import React from "react";
import Image from "next/image";
import { readallEmails } from "@/lib/actions/blog";
export default async function Home() {
	let { data: emails } = await readallEmails();

	if (!emails?.length) {
		emails = [];
	}
	return (
		<div className="">

	<div className="pt-16">

    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
  <ul className="space-y-4"> {/* Adds spacing between each list item */}
    {emails.map((email, index) => (
      <li key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="font-semibold text-gray-700">{email.created_at}</div>
        <div className="text-gray-500">{email.email}</div>
      </li>
    ))}
  </ul>
</div>
    </div>

		</div>
	);
}
