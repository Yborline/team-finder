import LoaderPage from "@pages/LoaderPage/LoaderPage";
import { lazy, Suspense } from "react";

export function lazyLoadRoutes(componentName: string) {
  const LazyElement = lazy(
    () => import(`@pages/${componentName}/${componentName}.tsx`)
  );

  return (
    <Suspense fallback={<LoaderPage />}>
      <LazyElement />
    </Suspense>
  );
}
