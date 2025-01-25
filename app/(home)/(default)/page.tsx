"use client";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Home from "./Homepage";
import { createEmail } from "@/lib/actions/blog";
import { EmailFormschemaType } from "@/app/dashboard/blog/schema";
import { useRouter } from "next/navigation";
import { defaultEmail } from "@/lib/data";
import { ToastAction } from "@/components/ui/toast"


export default function CreateForm() {
	const router = useRouter();

	// Regular expression for validating email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const onHandleSubmit = async (data: EmailFormschemaType) => {
		// Validate email format before sending data
		if (!emailRegex.test(data.email)) {
			toast( {
				variant: "destructive",
				title: "Uh oh! email validation failed  😢",
				description: "Please enter a valid email address.",
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			
			}
		);
			return; // Stop submission if email is invalid
		}

		try {
			const result = await createEmail(data);	
			if (!result) {
				throw new Error("No response received from server.");
			}

			const parsedResult = result as PostgrestSingleResponse<null>;
			const { error } = parsedResult;

			if (error?.message) {
				toast({
					title: "Failed to add the email 😢",
					description: (
						<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
							<code className="text-white">{error.message}</code>
						</pre>
					),
				});
			} else {
				toast({
					title: "Successfully added your email 🎉",
					description: data.email,
				});
				router.push("/thankyou");
			}
		} catch (error) {
			console.error("Error occurred while handling submit:", error);
			toast({
				title: "Submission Error",
				description: "An error occurred while submitting your email. Please try again.",
			});
		}
	};

	return (
		<div>
			<Home onHandleSubmit={onHandleSubmit} defaultEmail={defaultEmail} />
		</div>
	);
}
