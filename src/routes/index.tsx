import {
  DashboardFeatured,
  HomeHero,
  OurMentors,
  StudentsFeatured,
  UIFooter,
  UIHeader,
  UIHero,
} from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <UIHeader />

      <UIHero
        primary="Victory Church Training Centre"
        secondary="By Pastor Gian C Villatoro"
        bgUrl={HomeHero}
      />

      <main className="bg-primary-50">
        <DashboardFeatured />
        <OurMentors />
        <StudentsFeatured />
      </main>

      <UIFooter />
    </>
  );
}
