"use client";

import Link from "next/link";

import Logo from "@core/components/logo";

import SearchWidget from "@/app/shared/search/search";
import StickyHeader from "../sticky-header";
import HamburgerButton from "../hamburger-button";
import Sidebar from "./sidebar";
import HeaderMenuRight from "../header-menu-right";

export default function Header() {
  return (
    <StickyHeader className="z-[990] 2xl:py-5 3xl:px-8  4xl:px-10 border-b-2 border-gray-100">
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton
          view={<Sidebar className="static w-full 2xl:w-full" />}
        />
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        >
          <Logo iconOnly={true} />
        </Link>
      </div>

      <HeaderMenuRight />
    </StickyHeader>
  );
}
