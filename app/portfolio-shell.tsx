"use client";

import { useMemo } from "react";
import Skiper10 from "../components/skiper/skiper10";
import Skiper80 from "../components/skiper/skiper80";
import { getRepoImagePreloadTiers } from "./repo-images";
import type { RepoSection } from "./repo-sections";

interface PortfolioShellProps {
  initialSlug?: string | null;
  sections: RepoSection[];
}

const INITIAL_PRELOAD_COUNT = 12;

const PortfolioShell = ({
  initialSlug = null,
  sections,
}: PortfolioShellProps) => {
  const preloadTiers = useMemo(
    () =>
      getRepoImagePreloadTiers(
        sections
          .flatMap((section) => section.items.map((item) => item.title))
          .slice(0, INITIAL_PRELOAD_COUNT),
      ),
    [sections],
  );

  return (
    <Skiper10 preloadTiers={preloadTiers}>
      <Skiper80 sections={sections} initialSlug={initialSlug} />
    </Skiper10>
  );
};

export default PortfolioShell;
