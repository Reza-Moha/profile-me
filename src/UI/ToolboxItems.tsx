import { TechIcons } from "@/UI/TechIcon";
import { ElementType, Fragment } from "react";
import { twMerge } from "tailwind-merge";

export default function ToolboxItems({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) {
  return (
    <>
      <div
        className={twMerge(
          "flex [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)]",
          className,
        )}
      >
        <div
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemsWrapperClassName,
          )}
        >
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {items.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                >
                  <TechIcons component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
