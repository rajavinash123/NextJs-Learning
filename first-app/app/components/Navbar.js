import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 py-4 bg-black text-white">
      <div className="font-bold text-xl">NextJS</div>

      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/learn">Learn</Link></li>
        <li><Link href="/image">Image</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;