import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Help Agent</h1>
      <Link href={`/`}>Dashboard</Link>
      <Link href={`/tickets`}>Tickets</Link>
      <Link href={`/about`}>About</Link>
    </nav>
  );
};

export default Navbar;
