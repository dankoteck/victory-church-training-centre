import { CreateNewProgramForm, ProgramsHero, UIHero } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
});

export default function ProgramsPage() {
  return (
    <>
      <UIHero primary="Programs Main Menu VCTC" bgUrl={ProgramsHero} />
      <main className="bg-primary-50">
        <CreateNewProgramForm />
      </main>
    </>
  );
}
