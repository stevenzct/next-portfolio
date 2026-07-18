import { createPageMetadata } from "../../../utils/metadata";

export const metadata = createPageMetadata({
  title: "Resources",
  description: "Resources from Steven Cabugos are coming soon.",
  path: "/resources",
  noIndex: true,
});

export default function Resources() {
  return (
    <div className="resources-page container-wrapper min-h-screen w-full bg-black pb-20 pt-28 text-white md:pb-24 md:pt-36 lg:pb-28">
      <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
        <h1
          data-page-motion-heading
          className="font-nm-medium text-[clamp(2.625rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.035em]"
        >
          Resources
        </h1>
      </div>
    </div>
  );
}
