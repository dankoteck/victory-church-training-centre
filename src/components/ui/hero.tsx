import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { CSSProperties, ReactNode } from "react";

type Props = {
  primary: ReactNode;
  secondary?: ReactNode;
  bgUrl: string;
  className?: ClassValue | ClassValue[];
};

export default function Hero({ bgUrl, primary, secondary, className }: Props) {
  return (
    <section
      style={{ "--image-url": `url(${bgUrl})` } as CSSProperties}
      className={cn(
        "relative flex min-h-[126px] flex-col justify-center lg:min-h-[176px]",
        className,
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 h-full w-full bg-[image:var(--image-url)] bg-cover bg-fixed bg-bottom bg-no-repeat" />

      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-[#1A56DB26]" />

      {/* Text */}
      <div className="z-10 mx-auto flex max-w-screen-xl flex-col justify-center">
        <h1 className="text-center text-2xl !leading-[1] tracking-[0.64px] text-gray-900 lg:text-4xl xl:text-6xl bs:text-[66px]">
          {primary}
        </h1>
        <h2 className="text-center text-lg leading-[2] tracking-[0.64px] text-gray-900 lg:mt-2 lg:text-xl xl:text-2xl bs:text-3xl">
          {secondary}
        </h2>
      </div>
    </section>
  );
}
