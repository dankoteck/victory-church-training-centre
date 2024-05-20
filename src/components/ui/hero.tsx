import { CSSProperties, ReactNode } from "react";

type Props = {
  primary: ReactNode;
  secondary?: ReactNode;
  bgUrl: string;
};

export default function Hero({ bgUrl, primary, secondary }: Props) {
  return (
    <section
      style={{ "--image-url": `url(${bgUrl})` } as CSSProperties}
      className="bg-[image:var(--image-url)] bg-cover bg-fixed bg-bottom bg-no-repeat"
    >
      <div className="mx-auto max-w-screen-xl py-6 md:py-7 lg:py-8 xl:py-12 bs:py-16">
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