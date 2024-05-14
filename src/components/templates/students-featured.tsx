import StudentMockup from "@/assets/img/students-mockup.jpeg";
import { ArrowWhiteIcon } from "@/components";

export default function StudentsFeatured() {
  return (
    <section className="container flex items-center gap-20 py-24">
      <img
        alt="Student Featured Mockup"
        src={StudentMockup}
        className="rounded-full w-[457px] h-[435px] object-cover"
      />

      <div className="space-y-6">
        <h3 className="text-gray-900 tracking-[0.96px] text-4xl">
          Students at VC
        </h3>
        <p className="text-xl text-gray-500 tracking-[0.64px]">
          Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do eiusmod
          tempor incidt ut labore et dolore magna aliqua. Ut enim exerction
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-primary-700 flex items-center gap-2 justify-center px-5 py-2.5 rounded-full w-[252px] text-white text-lg tracking-[0.64px]">
            Create a New Account
            <img alt="Arrow icon" src={ArrowWhiteIcon} />
          </button>
          <button className="border border-gray-200 bg-white px-5 py-2.5 rounded-full w-[234px] text-gray-900 text-lg tracking-[0.64px]">
            Access Student Portal
          </button>
        </div>
      </div>
    </section>
  );
}
