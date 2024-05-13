import { UIHeader } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <UIHeader />
      <main className="container-"></main>
    </>
  );
}
