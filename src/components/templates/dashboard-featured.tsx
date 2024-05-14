import CardMedia01 from "@/assets/img/grid-item-01.jpeg";
import CardMedia02 from "@/assets/img/grid-item-02.jpeg";
import CardMedia03 from "@/assets/img/grid-item-03.jpeg";
import CardMedia04 from "@/assets/img/grid-item-04.jpeg";

import UICard from "../ui/card";

// TODO: Replace with API calls
const list = [
  {
    title: "Programs Admin",
    media: CardMedia01,
    amount: 8,
    type: "programs" as const,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Online Tests Admin",
    media: CardMedia02,
    amount: 10,
    type: "tests" as const,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Mentors Admin",
    media: CardMedia03,
    amount: 8,
    type: "mentors" as const,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Students Admin",
    media: CardMedia04,
    amount: 50,
    type: "students" as const,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function DashboardFeatured() {
  return (
    <section className="w-full max-w-[1000px] mx-auto py-24">
      <h3 className="text-[40px] leading-[50px] tracking-[0.96px] text-center text-gray-900">
        Victory Church Training Centre
      </h3>

      <h4 className="text-xl text-center text-gray-500 mt-4 max-w-screen-sm mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h4>

      <ul className="mt-8 grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-12">
        {list.map((item) => (
          <li key={item.title}>
            <UICard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
