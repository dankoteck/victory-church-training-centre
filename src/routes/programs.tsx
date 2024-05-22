import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  CreateNewProgramForm,
  ProgramsHero,
  TableList,
  UIButton,
  UIHero,
} from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
});

type Action = "update" | "delete";

type Program = {
  level: number;
  levelName: string;
  videoUrl: string;
  pdfUrl: string;
  action: Action[];
};

const data: Program[] = [
  {
    level: 1,
    levelName: "Level 01",
    videoUrl: "https://youtu.be/jXyTIQOfTTk?si=fOy0Ui7rHMB9l3a-",
    pdfUrl: "https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf",
    action: ["update", "delete"],
  },
  {
    level: 2,
    levelName: "Level 02",
    videoUrl: "https://youtu.be/jXyTIQOfTTk?si=fOy0Ui7rHMB9l3a-",
    pdfUrl: "https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf",
    action: ["update", "delete"],
  },
  {
    level: 3,
    levelName: "Level 03",
    videoUrl: "https://youtu.be/jXyTIQOfTTk?si=fOy0Ui7rHMB9l3a-",
    pdfUrl: "https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf",
    action: ["update", "delete"],
  },
  {
    level: 4,
    levelName: "Level 04",
    videoUrl: "https://youtu.be/jXyTIQOfTTk?si=fOy0Ui7rHMB9l3a-",
    pdfUrl: "https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf",
    action: ["update", "delete"],
  },
  {
    level: 5,
    levelName: "Level 05",
    videoUrl: "https://youtu.be/jXyTIQOfTTk?si=fOy0Ui7rHMB9l3a-",
    pdfUrl: "https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf",
    action: ["update", "delete"],
  },
];

const columnHelper = createColumnHelper<Program>();
const columns = [
  columnHelper.accessor("level", {
    header: "Level",
    cell: (info) => (
      <span className="text-lg tracking-[0.64px] text-gray-900">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("levelName", {
    header: "Name Of Level",
    cell: (info) => (
      <span className="text-lg tracking-[0.64px] text-gray-900">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("videoUrl", {
    header: "Video Allocation",
    cell: (info) => (
      <span className="mx-auto block max-w-[200px] truncate text-lg tracking-[0.64px] text-primary-500 lg:max-w-[160px]">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("pdfUrl", {
    header: "PDF Allocation",
    cell: (info) => (
      <span className="mx-auto block max-w-[200px] truncate text-lg tracking-[0.64px] text-primary-500 lg:max-w-[160px]">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => (
      <div className="flex items-center justify-center gap-4">
        {info.getValue().map((actionEl) => (
          <UIButton
            variant={actionEl === "delete" ? "destructive" : "default"}
            size="small"
          >
            {actionEl}
          </UIButton>
        ))}
      </div>
    ),
  }),
];

function ProgramsPage() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <UIHero primary="Programs Main Menu VCTC" bgUrl={ProgramsHero} />
      <main className="bg-white">
        <section className="bg-primary-50">
          <div className="container max-w-screen-lg space-y-10 py-16 lg:py-[100px]">
            <h3 className="text-4xl tracking-[0.96px] text-gray-900">
              Create New Program
            </h3>
            <CreateNewProgramForm />
          </div>
        </section>

        <section className="container max-w-screen-xl space-y-8 py-16 lg:py-[100px]">
          <h4 className="w-fit font-['Arial'] text-4xl font-bold -tracking-[0.16px] text-gray-900">
            List of Programs
          </h4>
          <div className="overflow-x-auto p-[1px]">
            <TableList table={table} />
          </div>
        </section>
      </main>
    </>
  );
}
