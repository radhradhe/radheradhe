"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useUser } from "@/lib/store/user";
import Profile from "./profile";
import Logout from "@/components/logout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function 
navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  const userLoggedIn = user?.id ? false : true; // Check if user has an id
    setIsLoggedIn(userLoggedIn); 
  }, []);

  const user = useUser((state) => state.user);
  return (
    <div className=" z-10 md:bg-white/10   backdrop-blur-sm rounded-sm  shadow-sm w-full ">
    <nav className="md:py-2 fixed py-0">
      <div className=" w-full px-4 md:text-xl text-lg flex justify-between items-center">
        <div className="flex">
          <Link className="flex md:text-2xl  text-sm text-white" href="/">
           Prospire
          </Link>
          <ul className="ml-10 flex md:mx-4 mx-2">
          <Link className="flex" href="/blogs">
          <li className="md:mx-6  md:text-2xl  text-sm text-white mx-1">projects</li>

          </Link>
          </ul>
        </div>
        <div>
          {user?.id ? (
            <DropdownMenu>
              <DropdownMenuTrigger >
                <Profile />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Link href={pathname === '/profile' ? '/dashboard' : '/profile'}>
                    {pathname === '/' ? 'Profile' : 'Dashboard'}
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {" "}
                  <Link href={pathname === '/' ? '/dashboard' : '/'}>
                    {pathname === '/' ? 'Dashbaord' : 'Home'}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="text-red-600" href="/login">
                    <Logout />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <h1>
              {" "}
              <Link className="text-white" href="/login">Login</Link>{" "}
            </h1>
          )}
        </div>
      </div>
    </nav>
  </div>
  );
}
