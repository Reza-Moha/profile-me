import { SectionHeader } from "@/UI/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/constants/Data";
import { Fragment } from "react";

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="تجربه مشتریان"
          eyebrow="نظرات مشتریان دررابطه با  ما"
          description="به حرف من اکتفا نکنید؛ ببینید مشتریانم درباره کارم چه می‌گویند"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pl-8 flex-none animate-move-right [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
