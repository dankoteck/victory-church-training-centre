import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { UIFooter, UIHeader } from "@/components";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <UIHeader />
      <Outlet />
      <UIFooter />
      <TanStackRouterDevtools />
    </>
  );
}
