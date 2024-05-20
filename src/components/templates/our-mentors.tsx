import { ArrowIcon } from "@/components";
import { cn } from "@/utils/cn";
import { CSSProperties } from "react";

import Mentor01 from "@/assets/img/profile/mentor-01.jpeg";
import Mentor02 from "@/assets/img/profile/mentor-02.jpeg";
import Mentor03 from "@/assets/img/profile/mentor-03.jpeg";
import Mentor04 from "@/assets/img/profile/mentor-04.jpeg";
import Mentor05 from "@/assets/img/profile/mentor-05.jpeg";

const mentors = [
  {
    id: 1,
    name: "Robert Brown",
    position: "Pastor",
    avatar: Mentor01,
  },
  {
    id: 2,
    name: "Carl McFall",
    position: "Pastor",
    avatar: Mentor02,
  },
  {
    id: 3,
    name: "Mike Livingston",
    position: "Priest",
    avatar: Mentor03,
  },
  {
    id: 4,
    name: "Steve Green",
    position: "Cardinal",
    avatar: Mentor04,
  },
  {
    id: 5,
    name: "Peter Byrd",
    position: "Youth Pastor",
    avatar: Mentor05,
  },
];

export default function OurMentors() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20 bs:py-24">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 lg:flex-row lg:gap-12 xl:gap-14 xl:px-8 bs:gap-16 bs:px-0">
        <div className="w-auto space-y-4 text-center lg:flex-shrink-0 lg:text-left bs:min-w-[448px]">
          <h3 className="text-4xl tracking-[0.96px] text-gray-900">
            Our Mentors
          </h3>
          <p className="text-lg text-gray-500 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
            <br />
            eiusmod tempor incidt ut labore et dolore magna aliqua. Ut enim
            <br />
            exerction ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="flex w-full items-center justify-center gap-2 rounded-full border border-primary-700 px-5 py-3 text-lg tracking-[0.64px] text-primary-700">
            Browse Students
            <img alt="Arrow icon" src={ArrowIcon} />
          </button>
        </div>

        <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-12 md:gap-4 md:gap-y-5 bs:gap-x-3 bs:gap-y-3">
          {mentors.map((mentor) => (
            <li
              style={
                {
                  "--mentor-profile-img-url": `url('${mentor.avatar}')`,
                } as CSSProperties
              }
              className={cn(
                "relative flex h-40 flex-col items-center justify-end overflow-hidden rounded-[48px] bg-[image:var(--mentor-profile-img-url)] bg-cover bg-center bg-no-repeat p-2.5 after:absolute after:inset-0 after:h-full after:w-full after:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_3.65%,_rgba(0,_0,_0,_0.6)_83.85%),linear-gradient(0deg,_rgba(26,_86,_219,_0.15),_rgba(26,_86,_219,_0.15))] md:col-span-4 md:h-60 xl:h-72 bs:h-80 bs:rounded-[48px]",
                {
                  "md:col-span-6": mentor.id === 4 || mentor.id === 5,
                },
              )}
              key={mentor.id}
            >
              <p className="z-[1] text-center font-['Arial'] text-lg font-bold text-white">
                {mentor.name}
              </p>
              <p className="z-[1] text-center font-['Arial'] text-base font-normal text-gray-300">
                {mentor.position}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
