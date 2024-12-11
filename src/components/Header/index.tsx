"use client";
import { HEADER } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/images/logo.svg" width={190} height={39} alt="logo" />
          </Link>
          <div className="flex items-center">
            {HEADER.map(({ id, name, url }) => (
              <Link key={id} href={url}>
                <p
                  className={`p-4 text-text-01 ${
                    pathname === url && "text-primary"
                  } hover:text-primary font-medium`}
                >
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
