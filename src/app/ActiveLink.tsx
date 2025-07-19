"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ActiveLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-indigo-600 hover:underline ${
        isActive ? "underline" : ""
      }`}
    >
      {children}
    </Link>
  );
}
