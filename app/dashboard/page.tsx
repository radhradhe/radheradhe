"use client"
import React from "react";
import BlogTable from "./blog/components/BlogTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
export default function Blog() {
	return (
		<div className="space-y-5 mx-[50px]">
				<div className="flex items-center pt-[100px] justify-between">
				<h1 className="text-3xl font-bold">Properties</h1>
				<Link href="/dashboard/property">
					<Button
						className="flex items-center gap-2 "
						variant="outline"
					>
						Properties <PlusIcon />
					</Button>
				</Link>
			</div>
			<div className="flex items-center pt-[100px] justify-between">
				<h1 className="text-3xl font-bold">Properties Articles</h1>
				<Link href="/dashboard/blog">
					<Button
						className="flex items-center gap-2 "
						variant="outline"
					>
						Articles <PlusIcon />
					</Button>
				</Link>
			</div>
			<div className="flex items-center pt-[100px] justify-between">
				<h1 className="text-3xl font-bold">Registered email🎉</h1>
				<Link href="/dashboard/emails">
					<Button
						className="flex items-center gap-2 "
						variant="outline"
					>
						Emails <PlusIcon />
					</Button>
				</Link>
			</div>
		
		</div>
	);
}
