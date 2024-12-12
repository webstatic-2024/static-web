"use client";
import { HEADER, SOCIAL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-8 md:py-12">
          <div className="">
            <Link href="/">
              <div className="relative w-[150px] h-[31px] md:w-[190px] md:h-[39px]">
                <Image src="/images/logo-white.svg" fill alt="logo" />
              </div>
            </Link>
            <div className="mt-8 md:mt-10 mb-2 text-white">
              <Link href="mailto:info@vearntech.online">
                info@vearntech.online
              </Link>
              <p className="mt-8 md:mt-10">
                9/2478 S/F, OLD NO- 974 975, S/O SH. <br /> RAJINDER KUMAR JAIN,
                GALI NO 18, <br /> KAILASH NAGAR, DELHI, East Delhi, <br />{" "}
                Delhi, 110031
              </p>
            </div>
          </div>
          <div className="text-white">
            <p className="pb-3 text-xl font-bold leading-[22px] ">Pages</p>
            <div className="flex flex-col gap-3">
              {HEADER.slice(1).map(({ id, name, url }) => (
                <Link key={id} href={url}>
                  <p
                    className={`text-white hover:text-text-02 ${
                      pathname === url && "text-text-02"
                    } font-medium`}
                  >
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-white">
            <p className="pb-3 text-xl font-bold leading-[22px]">Contact</p>
            <form className="relative">
              <input
                placeholder="Enter your email"
                name="email"
                id="email"
                className="h-[62px] w-full rounded-[30px] border outline-none border-primary py-[10px] pl-5 pr-36 text-black"
              />
              <button className="absolute right-2 top-2 w-28 h-12 bg-primary text-white rounded-full">Submit</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center py-4 md:py-5">
          <p className="text-white">
            © 2024. VEARN OUTFITS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {SOCIAL.map(({ icon, width, height, url }) => (
              <Link href={url} target="_blank" key={icon}>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full">
                  <Image src={icon} width={width} height={height} alt="icon" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
