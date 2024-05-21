import CardMedia01 from "@/assets/img/grid-item-01.webp";
import CardMedia02 from "@/assets/img/grid-item-02.webp";
import CardMedia03 from "@/assets/img/grid-item-03.webp";
import CardMedia04 from "@/assets/img/grid-item-04.webp";

import UICard from "../ui/card";

// TODO: Replace with API calls
const list = [
  {
    title: "Programs Admin",
    media: CardMedia01,
    amount: 8,
    type: "programs" as const,
    description: "8 programs offered",
  },
  {
    title: "Online Tests Admin",
    media: CardMedia02,
    amount: 10,
    type: "tests" as const,
    description: "10 Online Tests",
  },
  {
    title: "Mentors Admin",
    media: CardMedia03,
    amount: 8,
    type: "mentors" as const,
    description: "10 Mentors",
  },
  {
    title: "Students Admin",
    media: CardMedia04,
    amount: 50,
    type: "students" as const,
    description: "50 Enrolled Students",
  },
];

export default function DashboardFeatured() {
  return (
    <section className="mx-auto w-full max-w-[1000px] px-4 py-10 lg:px-0 lg:py-20 bs:py-24">
      <h3 className="text-center text-xl leading-[50px] tracking-[0.96px] text-gray-900 lg:text-3xl bs:text-[40px]">
        VC Training Center-Admin Main Menu
      </h3>

      <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-8 bs:grid-cols-2 bs:grid-rows-2 bs:gap-x-12 bs:gap-y-12">
        {list.map((item) => (
          <li key={item.title}>
            <UICard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
