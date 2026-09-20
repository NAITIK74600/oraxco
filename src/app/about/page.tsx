import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata = {
  title: "About — Oraxco Studio",
  description: "We're a founder-led creative studio. Learn about Oraxco's story, values, and approach.",
};

export default function About() {
  return (
    <InnerPageLayout>
      <AboutPage />
    </InnerPageLayout>
  );
}
