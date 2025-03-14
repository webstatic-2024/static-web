"use client";
import { HEADER } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div className="py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="relative w-[150px] h-[31px] md:w-[190px] md:h-[39px]">
                <Image
                  src="/images/logo.svg"
                  width={190}
                  height={39}
                  alt="logo"
                />
              </div>
            </Link>
            <div className="hidden lg:flex items-center">
              {HEADER.map(({ id, name, url }) => (
                <Link key={id} href={url}>
                  <p
                    className={`p-4 ${
                      pathname === url ? "text-primary" : "text-text-01"
                    } hover:text-primary font-medium`}
                  >
                    {name}
                  </p>
                </Link>
              ))}
            </div>
            <div
              className="flex justify-center items-center w-11 h-11 lg:hidden bg-primary rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src={`/images/${isOpen ? "close" : "hamburger"}.png`}
                width={16}
                height={16}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full bg-white transform transition-all duration-300 ${
          isOpen
            ? "top-[76px] max-h-[500px] opacity-100 z-10"
            : "top-[76px] max-h-0 opacity-0 -z-10"
        }`}
      >
        <div className="flex lg:hidden flex-col gap-4 items-end py-6 px-4">
          {HEADER.map(({ id, name, url }) => (
            <Link key={id} href={url}>
              <p
                className={`${
                  pathname === url
                    ? "text-primary border-primary border-b"
                    : "text-text-01"
                } hover:text-primary font-medium`}
              >
                {name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
