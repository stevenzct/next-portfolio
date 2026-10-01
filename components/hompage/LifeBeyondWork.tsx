import Image from "next/image";

import waterfall from "../../public/images/life/IMG_1082.webp";
import swimming from "../../public/images/life/IMG_1084.webp";
import bridge from "../../public/images/life/IMG_2837.webp";
import friends from "../../public/images/life/IMG_3518.webp";
import styles from "./LifeBeyondWork.module.css";

const photos = [
  {
    image: waterfall,
    layout: "waterfall",
    alt: "A waterfall flowing between rocky cliffs into a natural pool",
    portrait: true,
  },
  {
    image: bridge,
    layout: "bridge",
    alt: "A group photo beside a suspension bridge in the mountains at sunset",
    portrait: true,
  },
  {
    image: swimming,
    layout: "swimming",
    alt: "A group enjoying a swim in a natural rock pool",
    portrait: false,
  },
  {
    image: friends,
    layout: "friends",
    alt: "A group posing on the rocks beside a waterfall",
    portrait: false,
  },
];

const LifeBeyondWork = () => (
  <section
    id="life-beyond-work"
    aria-labelledby="life-beyond-work-heading"
    data-home-layout
    data-nav-theme="light"
    data-home-motion-section
    className="bg-[#F8F8F8] text-[#242424] py-[calc(80*var(--home-unit,1px))] md:py-24 lg:py-[calc(120*var(--home-unit,1px))]"
  >
    <div className="container-wrapper h-auto w-full">
      <div className="app-container mx-6 w-auto max-w-[1200px] md:mx-12 lg:mx-auto lg:w-[90%] xl:w-[88%] 2xl:w-[75%]">
        <div className="mb-8 flex flex-col gap-6 md:mb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              data-home-motion-copy
              className="mb-2 font-nm-book text-base text-[#57534E] md:text-xl lg:text-2xl"
            >
              Off the clock
            </p>
            <h2
              id="life-beyond-work-heading"
              data-home-motion-heading
              className="font-nm-medium text-[clamp(2rem,6vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.035em] text-[#242424]"
            >
              Life Beyond Work
            </h2>
          </div>
          <p
            data-home-motion-copy
            className="max-w-[calc(320*var(--home-unit,1px))] font-nm-book text-base leading-relaxed text-[#57534E] md:text-lg"
          >
            Fresh air, good company, and a little time away from the screen.
          </p>
        </div>

        <div className={styles.gallery}>
          {photos.map(({ image, layout, alt, portrait }) => (
            <figure
              key={layout}
              data-home-motion-media
              className={`${styles.photo} ${styles[layout]}`}
            >
              <Image
                src={image}
                alt={alt}
                placeholder="blur"
                quality={85}
                sizes={portrait
                  ? "(min-width: 4000px) 1024px, (min-width: 1280px) 26vw, (min-width: 768px) calc((100vw - 144px) / 3), calc((100vw - 64px) / 2)"
                  : "(min-width: 4000px) 1024px, (min-width: 1280px) 26vw, (min-width: 768px) calc((100vw - 144px) / 3), calc(100vw - 48px)"}
                className="block h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LifeBeyondWork;
