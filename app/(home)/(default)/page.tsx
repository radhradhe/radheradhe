"use client";
import React from "react";

import Home from "./Homepage";
import { useRouter } from "next/navigation";

export default function CreateForm() {
	const router = useRouter();

	// Regular expression for validating email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



	return (
		<div>
			<Home />
		</div>
	);
}
