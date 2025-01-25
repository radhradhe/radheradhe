import React from "react";
import Content from "./components/Content";
import { SITE_URL } from "@/app/config";
import supabase from "@/utils/supabase/supabase";
import "react-quill/dist/quill.snow.css";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const { data, error } = await supabase
      .from("blog")
      .select("*")
      .eq("slug", params.id)
      .single();

    if (error) {
      console.error("Error fetching blog metadata:", error);
      return {
        title: "Error | radhe radhe ",
        openGraph: {
          title: "Error | radhe Garage",
          url: `${SITE_URL}blog/${params.id}`,
          siteName: "Hardware Garage",
          type: "website",
        },
        keywords: [],
      };
    }

    return {
      title: data?.title,
      openGraph: {
        title: data?.title,
        url: `${SITE_URL}blog/${params.id}`,
        siteName: "Hardware Garage",
        images: data?.image,
        type: "website",
      },
      keywords: ["mechatronics", "arduino", "Raspberry pi"],
    };
  } catch (error) {
    console.error("Unexpected error in generateMetadata:", error);
    return {
      title: "Error | Hardware Garage",
      openGraph: {
        title: "Error | Hardware Garage",
        url: `${SITE_URL}blog/${params.id}`,
        siteName: "Hardware Garage",
        type: "website",
      },
      keywords: [],
    };
  }
}

export default async function Page({ params }: PageProps) {
  let blog = null;
  let authorData = null;

  try {
    const { data: blogData, error: blogError } = await supabase
      .from("blog")
      .select("*")
      .eq("slug", params.id)
      .single();

    if (blogError) {
      console.error("Error fetching blog data:", blogError);
      throw blogError;
    }

    blog = blogData;

    const { data: author, error: authorError } = await supabase
      .from("instructor")
      .select("*")
      .eq("id", blog.author)
      .single();

    if (authorError) {
      console.error("Error fetching author data:", authorError);
      throw authorError;
    }

    authorData = author;
  } catch (error) {
    console.error("Error loading page data:", error);
    // Optionally, return an error component or a fallback UI
    return (
      <div className="max-w-[800px] pt-[60px] mx-auto min-h-screen space-y-10">
        <p>Error loading content. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] pt-[60px] mx-auto min-h-screen space-y-10">
      <Content blog={blog} author={authorData} />
    </div>
  );
}
