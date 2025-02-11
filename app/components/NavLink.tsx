import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#000000FF] sm:text-md rounded md:p-1  font-semibold hover:text-[#036d39] hover:font-bold"
    >
      {title}
    </Link>
  );
};

export default NavLink;
