import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link
            href={"/"}
            // className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Image 
                src="/images/logo.png"
                width={50}
                height={50}
                alt='work station'
            />
          </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;