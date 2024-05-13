import { LogoSvg, UIButton } from "@/components";
import { Link } from "@tanstack/react-router";

import navData from "@/static/nav.json";

export default function UIHeader() {
  return (
    <header className="bg-primary-50 py-6">
      <div className="container flex items-center justify-between">
        <nav className="flex items-center">
          <Link href="/">
            <img alt="LOGO" src={LogoSvg} />
          </Link>
          <ul className="flex items-center gap-8 ml-[112px]">
            <li className="text-lg tracking-[1.6px]">
              <Link className="[&.active]:text-primary-600" to="/">
                Home
              </Link>
            </li>
            {navData.map((navItem) => (
              <li className="text-lg tracking-[1.6px]" key={navItem.label}>
                <Link className="[&.active]:text-primary-600" to={navItem.href}>
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex items-center gap-4">
          <Link href="/login">
            <span className="text-lg">Log In</span>
          </Link>
          <UIButton className="w-[144px] text-lg">Get Started</UIButton>
        </nav>
      </div>
    </header>
  );
}
