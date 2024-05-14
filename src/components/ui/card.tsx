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
    <div className="py-8 px-5 space-y-4 border rounded-3xl bg-white border-gray-200 shadow-md">
      <img
        alt={description}
        src={media}
        className="shadow-lg rounded-2xl w-full object-cover object-center max-h-[288px]"
      />
      <p className="text-4xl tracking-[0.96px] text-center">{title}</p>
      <p className="w-fit mx-auto py-0.5 px-2.5 rounded-full bg-gray-100 text-lg tracking-[0.64px] text-center">
        {amount} {getStringByType(type)}
      </p>
      <p className="text-gray-500 text-lg text-center tracking-[0.64px]">
        {description}
      </p>
      <button className="w-full rounded-full border border-primary-700 py-3 px-5 text-lg text-primary-700 tracking-[0.64px]">
        Login as {title}
      </button>
    </div>
  );
}
