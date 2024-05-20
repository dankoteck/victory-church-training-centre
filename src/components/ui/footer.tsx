import { Link } from "@tanstack/react-router";
import { LogoSvg } from "@/components";

import navData from "@/static/nav.json";

export default function UIFooter() {
  return (
    <footer className="bg-gray-800">
      <div className="container flex flex-col items-center gap-6 py-16">
        <Link href="/">
          <img alt="LOGO" src={LogoSvg} />
        </Link>
        <ul className="flex flex-col items-center gap-8">
          <li className="flex-shrink-0">
            <p className="text-lg tracking-[0.64px] text-primary-200 text-center">
              Victory Church Training Centre Designed By By Pastor Gian C
              Villatoro{" "}
            </p>
          </li>
          <li className="flex-shrink-0">
            <ul className="flex items-center gap-8">
              {navData.map((navItem) => (
                <li
                  key={navItem.label}
                  className="text-base tracking-[0.64px] text-white"
                >
                  <Link to={navItem.href}>{navItem.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex-shrink-0">
            <p className="text-lg tracking-[0.64px] text-primary-200">
              © 2024 Victory Church. All rights reserved.
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
