import StudentMockup from "@/assets/img/students-mockup.webp";
import { ArrowWhiteIcon } from "@/components";

export default function StudentsFeatured() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-5 px-4 py-10 lg:max-w-[1000px] lg:flex-row lg:gap-12 lg:py-16 xl:max-w-screen-lg xl:gap-16 xl:px-0 bs:max-w-screen-xl bs:gap-20 bs:py-24">
      <img
        alt="Student Featured Mockup"
        src={StudentMockup}
        className="aspect-[457/435] max-h-[275px] rounded-full object-cover shadow-lg md:max-h-[325px] bs:max-h-[435px]"
      />

      <div className="w-full space-y-6 text-center lg:text-left bs:max-w-screen-sm">
        <h3 className="text-4xl tracking-[0.96px] text-gray-900">
          Students at VC
        </h3>
        <p className="text-xl tracking-[0.64px] text-gray-500 sm:mx-auto sm:max-w-md lg:mx-0 lg:max-w-screen-sm xl:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do eiusmod
          tempor incidt ut labore et dolore magna aliqua. Ut enim exerction
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-lg tracking-[0.64px] text-white bs:max-w-[252px]">
            Create a New Account
            <img alt="Arrow icon" src={ArrowWhiteIcon} />
          </button>
          <button className="w-full rounded-full border border-gray-200 bg-white px-5 py-2.5 text-lg tracking-[0.64px] text-gray-900 bs:max-w-[234px]">
            Access Student Portal
          </button>
        </div>
      </div>
    </section>
  );
}
