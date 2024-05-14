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
    <section className="bg-white py-24">
      <div className="container flex gap-16">
        <div className="space-y-4 min-w-[448px]">
          <h3 className="text-gray-900 text-4xl tracking-[0.96px]">
            Our Mentors
          </h3>
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
            <br />
            eiusmod tempor incidt ut labore et dolore magna aliqua. Ut enim
            <br />
            exerction ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="py-3 px-5 rounded-full flex items-center justify-center gap-2 w-full border border-primary-700 text-primary-700 text-lg tracking-[0.64px]">
            Browse Students
            <img alt="Arrow icon" src={ArrowIcon} />
          </button>
        </div>

        <ul className="grid grid-cols-12 grid-rows-2 gap-x-3 gap-y-3 w-full">
          {mentors.map((mentor) => (
            <li
              style={
                {
                  "--mentor-profile-img-url": `url('/src/assets/img/profile/mentor-0${mentor.id}.jpeg')`,
                } as CSSProperties
              }
              className={cn(
                "flex flex-col items-center justify-end relative overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_3.65%,_rgba(0,_0,_0,_0.6)_83.85%),linear-gradient(0deg,_rgba(26,_86,_219,_0.15),_rgba(26,_86,_219,_0.15))] h-[320px] p-2.5 rounded-[48px] col-span-4 bg-center bg-cover bg-no-repeat bg-[image:var(--mentor-profile-img-url)]",
                {
                  "col-span-6": mentor.id === 4 || mentor.id === 5,
                }
              )}
              key={mentor.id}
            >
              <p className="text-white text-lg text-center font-['Arial'] font-bold z-[1]">
                {mentor.name}
              </p>
              <p className="text-gray-300 text-base text-center font-['Arial'] font-normal z-[1]">
                {mentor.position}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
