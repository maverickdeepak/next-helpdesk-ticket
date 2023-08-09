import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from './dojo-logo.png'

const Navbar = () => {
  return (
    <nav>
      <Image
      src={Logo}
      alt="helpdesk-logo"
      height={100}
      width={70}
      placeholder="blur"
      />
      <h1>Help Agent</h1>
      <Link href={`/`}>Dashboard</Link>
      <Link href={`/tickets`}>Tickets</Link>
      <Link href={`/about`}>About</Link>
    </nav>
  );
};

export default Navbar;
