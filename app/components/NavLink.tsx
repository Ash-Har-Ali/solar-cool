"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-md rounded md:p-1 font-semibold ${
        isActive ? "text-[#036d39] font-bold" : "text-[#000000FF]"
      } hover:text-[#036d39] hover:font-bold`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
