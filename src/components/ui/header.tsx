import { LogoSvg, UIButton } from "@/components";
import { Link } from "@tanstack/react-router";

import navData from "@/static/nav.json";
import { SignInButton } from "@clerk/clerk-react";

export default function UIHeader() {
  return (
    <header className="bg-primary-50 py-6">
      <div className="mx-auto flex max-w-[375px] items-center justify-center md:max-w-screen-sm md:justify-between lg:max-w-[900px] xl:max-w-screen-lg bs:max-w-screen-xl">
        <nav className="flex items-center bs:mx-auto">
          <Link to="/">
            <img alt="LOGO" src={LogoSvg} />
          </Link>
          <ul className="hidden items-center gap-8 lg:ml-12 lg:flex xl:ml-20 bs:ml-28">
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

        <nav className="hidden items-center gap-4 lg:flex">
          <SignInButton>
            <span className="cursor-pointer text-lg">Log In</span>
          </SignInButton>
          <UIButton className="w-[144px] text-lg">Get Started</UIButton>
        </nav>
      </div>
    </header>
  );
}
