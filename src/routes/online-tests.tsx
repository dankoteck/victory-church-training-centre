import { OnlineTestsHero, UIHero } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/online-tests")({
  component: OnlineTestsPage,
});

function OnlineTestsPage() {
  return (
    <>
      <UIHero
        primary="Online Tests"
        bgUrl={OnlineTestsHero}
        className="[&>div:first-child]:bg-[0px_-48px] [&>div:first-child]:opacity-65"
      />
      <main className="bg-primary-50"></main>
    </>
  );
}
