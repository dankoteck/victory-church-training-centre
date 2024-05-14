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
      className="py-16 bg-[image:var(--image-url)] bg-bottom bg-cover bg-no-repeat bg-fixed"
    >
      <h1 className="text-[66px] leading-[60px] tracking-[0.64px] text-center text-gray-900">
        {primary}
      </h1>
      <h2 className="text-3xl mt-2 leading-[2] tracking-[0.64px] text-center text-gray-900">
        {secondary}
      </h2>
    </section>
  );
}
