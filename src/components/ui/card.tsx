type RoleType = "programs" | "students" | "mentors" | "tests";

type Props = {
  title: string;
  amount: number;
  type: RoleType;
  description: string;
  media: string;
};

const getStringByType = (type: RoleType): string => {
  switch (type) {
    case "programs":
      return "programs Offered";
    case "mentors":
      return "Mentors";
    case "students":
      return "Students";
    case "tests":
      return "Online Tests";
    default:
      return "";
  }
};

export default function UICard({
  title,
  amount,
  type,
  description,
  media,
}: Props) {
  return (
    <div className="space-y-2 rounded-3xl border border-gray-200 bg-white p-4 shadow-md md:space-y-3 md:p-6 xl:p-5 bs:space-y-4 bs:py-8">
      <img
        alt={description}
        src={media}
        className="max-h-[188px] w-full rounded-2xl object-cover object-center shadow-lg md:max-h-[238px] bs:max-h-[288px]"
      />
      <p className="text-center text-2xl tracking-[0.96px] bs:text-4xl">
        {title}
      </p>
      <p className="mx-auto w-fit rounded-full bg-gray-100 px-2.5 py-0.5 text-center text-base tracking-[0.64px] bs:text-lg">
        {amount} {getStringByType(type)}
      </p>
      <p className="text-center text-base tracking-[0.64px] text-gray-500 bs:text-lg">
        {description}
      </p>
    </div>
  );
}
