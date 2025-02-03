"use client";

import Link from "next/link";
import { routes } from "@/config/routes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button, Title } from "rizzui";
import cn from "@core/utils/class-names";
import { PiArrowLineRight, PiUserCirclePlus } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { siteConfig } from "@/config/site.config";
import { BsFacebook } from "react-icons/bs";
import OrSeparation from "./or-separation";

function AuthNavLink({
  href,
  children
}: React.PropsWithChildren<{
  href: string;
}>) {
  const pathname = usePathname();
  function isActive(href: string) {
    if (pathname === href) {
      return true;
    }
    return false;
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-x-1 rounded-3xl p-2 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 md:px-4 md:py-2.5 [&>svg]:w-4 [&>svg]:text-gray-500",
        isActive(href) ? "bg-gray-100 text-gray-900 [&>svg]:text-gray-900" : " "
      )}
    >
      {children}
    </Link>
  );
}

export default function AuthWrapper({
  children,
  title,
  isSocialLoginActive = false,
  isSignIn = false,
  className = ""
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  isSocialLoginActive?: boolean;
  isSignIn?: boolean;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex w-full flex-col justify-center px-5">
        <div
          className={cn(
            "mx-auto w-full max-w-md py-12 md:max-w-lg lg:max-w-xl 2xl:pb-8 2xl:pt-2",
            className
          )}
        >
          <div className="flex flex-col">
            <Link
              href={"/"}
              className="inline-block max-w-[190px] mb-5 lg:mb-4"
            >
              <Image src={siteConfig.icon} alt={siteConfig.title} />
            </Link>
            <Title
              as="h2"
              className="mb-7  text-[28px] font-bold leading-snug md:text-3xl md:!leading-normal lg:mb-10 lg:text-4xl"
            >
              {title}
            </Title>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
