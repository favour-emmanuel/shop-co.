import { Icon } from "@iconify/react/dist/iconify.js";
import { customerReviewItem } from "../data/data";
import { useRef, useState } from "react";

const CustomerReview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const cardWidth = 500; // Adjust to the width of each card
  const visibleCards = 3; // Number of fully visible cards

  // Scroll handler function
  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      let newScrollPosition = scrollPosition;

      if (direction === "left") {
        newScrollPosition = Math.max(scrollPosition - cardWidth, 0);
      } else {
        newScrollPosition = Math.min(scrollPosition + cardWidth, maxScrollLeft);
      }

      setScrollPosition(newScrollPosition);
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative lg:my-10 my-8 lg:pl-20 pl-10">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-3xl text-2xl font-bold font-integral">
          OUR HAPPY CUSTOMERS
        </h1>

        <div className="flex items-center gap-2 text-lg pr-20 text-black">
          <Icon
            icon="mynaui:arrow-left"
            className="cursor-pointer"
            onClick={() => handleScroll("left")}
          />
          <Icon
            icon="mynaui:arrow-right"
            className="cursor-pointer"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>

      {/* Main container for cards */}
      <div className="relative overflow-hidden w-full">
        {/* Blurring effect */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

        {/* Card container */}
        <div
          ref={containerRef}
          className="grid lg:grid-cols-4 grid-cols-1  w-full max-w-[1240px] gap-5 overflow-hidden my-7 transition-all"
          style={{ width: `${visibleCards * cardWidth}px` }}
        >
          {customerReviewItem.map((item, index) => (
            <div
              key={index}
              className=" px-3.5 py-3 rounded-lg border border-black/10 flex-shrink-0"
              style={{ flex: "0 0 auto" }} // Ensure the cards don't shrink
            >
              {/* Star rating icon */}
              <div className="flex items-center gap-2 text-[#FFC633]">
                <Icon icon="ri:star-fill" />
                <Icon icon="ri:star-fill" />
                <Icon icon="ri:star-fill" />
                <Icon icon="ri:star-fill" />
              </div>
              <h2 className="font-bold text-lg flex items-center gap-3">
                {item.title}
                <span className="text-lg text-[#01AB31]">
                  <Icon icon="icon-park-solid:check-one" />
                </span>
              </h2>
              <p className="w-full text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
