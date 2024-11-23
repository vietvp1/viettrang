import { useEffect, useRef } from "react";
import AnimateOnScroll from "../common/AnimateOnScroll";
import Line from "../icons/Line";

const Section5 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);
  return (
    <div className="mt-4" id="SECTION5">
      <div className="page-width py-6">
        <AnimateOnScroll animationType="fadeInDown">
          <div className={"section-title scale hover:text-[#BDA4B3]"}>
            Video Cưới
          </div>
          <div className="flex justify-center">
            <Line className="w-[100px] md:w-[150px] -mt-3 h-2 fill-[#BB6A07]" />
          </div>
          <div className="section-sub-heading">
            Cảm ơn đời mỗi sớm mai thức dậy, ta có thêm ngày nữa để yêu thương.
          </div>
        </AnimateOnScroll>
        <div className="mt-7 flex flex-col gap-2">
          <AnimateOnScroll
            animationType="fadeInUp"
            className="h-[460px] md:h-[700px]" //225
          >
            <video
              ref={videoRef}
              controls
              className="h-full mx-auto"
              loop
              muted
              playsInline
            >
              <source src="images/videovt.mp4" type="video/mp4" />
            </video>
            {/* <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/06-XXOTP3Gc"
            ></iframe> */}
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Section5;
