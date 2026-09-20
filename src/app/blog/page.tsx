import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { BlogPage } from "@/components/pages/BlogPage";

export const metadata = {
  title: "Insights — Oraxco Studio",
  description: "Design thinking, engineering deep-dives, and visual retrospectives from the Oraxco team.",
};

export default function Blog() {
  return (
    <InnerPageLayout>
      <BlogPage />
    </InnerPageLayout>
  );
}
