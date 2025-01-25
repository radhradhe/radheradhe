  "use client"; // Needed for Next.js components using hooks
  import { useEffect } from "react";
  import { motion, useAnimation } from "framer-motion";
  import Image from "next/image";
  import image1 from "../../assests/ImageItem.jpg";
  import image2 from "../../assests/ImageItem 2.jpg";
  import image3 from "../..//assests/image3.png";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { LinkedInLogoIcon } from "@radix-ui/react-icons";
  import { InstagramLogoIcon } from "@radix-ui/react-icons";
  import logofull from "../../assests/Logo_full.png";
  import AnimatedTitle from "@/components/Animatedtext";
  import { useState, ChangeEvent } from "react";
  import {
    EmailFormschemaType,
  } from "@/app/dashboard/blog/schema";
  import { useForm } from "react-hook-form";
  import { IEmaildetail } from "@/lib/types";
  import { useTransition } from "react";
  import {
    Form,
    FormControl,
    FormItem,
    FormField,
    FormMessage,
  } from "@/components/ui/form";
  export default function Home({
    onHandleSubmit,
    defaultEmail,
  }: {
    defaultEmail: IEmaildetail;
    onHandleSubmit: (data: EmailFormschemaType) => void;
  }) {
    const [isPending, startTransition] = useTransition();
    const [isDesktop, setIsDesktop] = useState(false);


    // Regular expression for email validation

    const form = useForm<EmailFormschemaType>({
      mode: "all",
      // resolver: zodResolver(EmailFormschema),

      defaultValues: {
        email: defaultEmail?.email || "",
      },
    });

    const onSubmit = (data: EmailFormschemaType) => {
      console.log(data);
      startTransition(() => {
        onHandleSubmit(data);
      });
    };
    useEffect(() => {
      if (form.getValues().email) {
        form.setValue("created_at", new Date().toISOString().slice(0, 16));
      }
    }, [form.getValues().email]);

    const controls = useAnimation();

    // Run the intro fade-in and then animation sequence

    useEffect(() => {
      // Only run this in the browser
      if (typeof window !== 'undefined') {
        // Set initial screen size
        setIsDesktop(window.innerWidth >= 768);

        // Update isDesktop based on window size
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    useEffect(() => {
      const sequence = async () => {
        // Start with low opacity
        await controls.start("faded");

        // Gradually increase opacity over iterations
        for (let i = 0; i < 3; i++) {
          // Select opacity level based on iteration
          const opacityVariant =
            i === 0
              ? "faded"
              : i === 1
              ? "lessVisible"
              : i === 2
              ? "moreVisible"
              : "fullVisible";

          // Apply fade-out and fade-in at each opacity level
          await controls.start(opacityVariant);
          await controls.start("faded");
        }

        // End with full opacity
        controls.start("fullVisible");
      };

      sequence();
    }, [controls]);

    return (
      <div className="relative min-h-screen bg-white text-gray-800">
        <div>
          <main className="text-center md:py-10 py-2 px-4 md:px-20">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className=" text-[20px] pt-[34px] md:pt-[2px] pl-[10px]  gilroy_medium md:text-[38px] "
            >
              We make You weeding perfect
            </motion.h1>

            <div className="text-[40px] md:text-[130px] font-gilroy_bold text-shadow-lg  text-black">
              <AnimatedTitle />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[#403D3D] font-gilroy text-[20px]  md:text-[25px]  text-sm md:font-[28px] pt-[20px]  md:pt-[35px]"
            >
              "Stay tuned for the ultimate property search experience"
            </motion.p>

            {/* Email Input */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="md:pt-[55px] pt-[42px]  md:pl-[8px] ">
                  <div className="md:w-[750px] w-[350px] md:mt-[10px] py-1  px-1 mx-auto border border-[#7A7979] rounded-full flex items-center     ">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <div className="justify-between">
                              {/* {form.getFieldState("email").invalid &&
                              form.getValues().email && (
                                <div className="text-red-400">
                                <FormMessage />
                              </div>
                              )} */}
                                <Input
                                
                                  placeholder="Enter your email address"
                                  {...field}                       
                                  className=" md:w-[550px] pt-[4px] bg-white  placeholder-black md:text-[21px] text-[12px] font-gilroy  text-black  mx-4 border-none md:my-2 md:py-[18px] py-1"
                                />
                              </div>
                            </FormControl>

                          
                          </FormItem>
                        );
                      }}
                    />

                    <Button
                      role="button"
                      type="submit"
                      variant="default"
                      // disabled={!form.formState.isValid}
                      className="bg-[#4C2B21] disabled:bg-[#4C2B21] disabled:opacity-95 font-gilroy hover:shadow-xl shadow-gray-700 ml-[80px]  md:ml-[34px]  text-[8px]  md:text-[24px]  text-white py-2 md:py-[25px] rounded-full hover:bg-brown-800"
                    >
                      <p className="font-gilroy_medium md:pt-0 pt-[2px] md:pr-0 pl-[1px] text-[11px] md:text-[20px]">
                        Notify Me
                      </p>
                    </Button>
                  </div>
                </div>
              </form>
            </Form>

            <div
              id="calling"
              className=" md:pt-[55px] pt-[24px] md:pl-[6px] cursor-pointer hover:text-[#4C2B21]  mb-[15px]"
            >
              <div className="md:w-[732px] hover:shadow-lg shadow-gray-700  w-[300px] h-[43px] md:h-[83px] md:pl-[135px] justify-center md:pr-[173px] pt-[26px] pb-[21px] bg-[#f6f4f4] rounded-[19px] items-center inline-flex">
                <div className="text-[#2d2c2c] md:pl-[13px] md:text-2xl text-[14px] font-normal font-gilroy_medium">
                {isDesktop ? (
          <a href="https://wa.me/919873344942" target="_blank" rel="noopener noreferrer">
            Call/WhatsApp us at +91 9873344942{" "}
          </a>
        ) : (
          <a href="tel:+919873344942">
            Call/WhatsApp us at +91 9873344942{" "}
          </a>
        )}
                  
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Section with Villas */}
        <section className="px-[30px] py-4 text-center md:mt-[60px] md:pt-[85px] pt-[55px] pb-[50px] md:px-20 bg-[#FBF8F4] ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-5xl font-gilroy_medium mb-[44px]"
          >
            Luxury Living in the Heart of Goa
          </motion.h2>
          <p className="max-w-xl md:text-xl  text-[14px] font-gilroy mx-auto mb-[52px] text-gray-600">
            Discover the perfect blend of modern comforts and tropical charm at
            Goa Villas. Our premium villas are designed to provide you with an
            unparalleled living experience.
          </p>

          {/* Villa Images */}
          <div className="grid grid-cols-1 justify-center md:mb-[40px] px-0 items-center sm:grid-cols-2 md:grid-cols-3 gap-8 md:ml-[54px]">
            <motion.div whileHover={{ scale: 1.05 }} className="">
              <Image
                src={image1}
                alt="Villa 1"
                width={368}
                height={724}
                className=""
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className=" ">
              <Image
                src={image2}
                alt="Villa 2"
                width={368}
                height={724}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" "
            >
              <Image
                src={image3}
                alt="Villa 3"
                width={368}
                height={724}
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        <footer className="bg-[#FBF8F4]  md:pr-[140px]  md:px-[20px] md:pt-[10px] border-t border-gray-300">


          <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2  items-center justify-between  ">
          <div className=" justify-center md:pl-[110px] flex">
            <Image width={240} height={240} src={logofull} alt="logo"></Image>
          </div>


          <div
              className="flex  md:text-xl justify-center items-center gap-1 text-lg
      "
            >
              <span className="font-semibold  md:ml-[115px] md:text-[22px] text-black">
                Follow us on -
              </span>
              <a
                className=" md:text-2xl "
                href="https://www.instagram.com/homefinderr.in?igsh=MXo4eHc4Z200OXJ4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogoIcon width={24} height={24} />
              </a>
              <a
                className=" md:text-2xl "
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon width={24} height={24} />
              </a>
            </div>


            <div className="grid grid-flow-cols grid-rows-2 text-black md:ml-[110px] md:text-[22px] pt-[40px] md:pt-[0px] md:pb-0 pb-[30px]   md:mb-[12px] text-center ">
          <div className="flex justify-center items-center">
          <span className="font-semibold md:pl-[30px]  ">
                Need Support ?
              </span>
          </div>
           <div>
           <a
                target="blank"
                href="mailto:homefinderr@gmail.com"
                  className="md:text-xl md:ml-[20px]"
              >
                Homefinderr@gmail.com
              </a>
           </div>
            </div>
          </div>

          <div className="flex border-t px-[25px] justify-center  md:px-[90px] py-[10px] md:py-[20px] bg-[#FBF8F4] ">
          
          <div className=" bg-[#FBF8F4] md:ml-[80px] justify-center items-center text-[12px]  float-right md:text-[16px]  py-2   md:pr-[36px] pr-[16px] md:text-sm    md:px-[86px] border-gray-300 md:pt-10  text-[#3F3E3E] ">
            Homefinderr©copyright2024 All Rights Reserved.
          </div>
        </div>
        </footer>

      
      </div>
    );
  }
