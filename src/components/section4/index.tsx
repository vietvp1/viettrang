import Image from "next/image";
import AnimateOnScroll from "../common/AnimateOnScroll";
import Line from "../icons/Line";
import { VTVModal } from "../common/modal";
import { useState } from "react";
import VTSwiper, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperSlide,
} from "../common/Swiper";

const imageList = [
  "/images/IMG_9462.jpg",
  "/images/HTM08782.JPG",
  "/images/HTM07178.JPG",
  "/images/HTM09351.JPG",
  "/images/HTM07566.JPG",
  "/images/HTM09667.JPG",
  "/images/HTM08750.JPG",
  "/images/HTM08270.JPG",
  "/images/HTM08827.JPG",
  "/images/HTM08209.JPG",
];

const Section4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(1);

  const onClickImage = (e: any) => {
    const ariaDetails = e?.target?.getAttribute("aria-details");
    if (!ariaDetails) return;

    const slideFocused = imageList.findIndex((item) => item === ariaDetails);
    setInitialSlide(slideFocused);
    setIsOpen(true);
  };

  return (
    <div onClick={onClickImage} className="!mt-14 bg-[#f1f3f4]" id="SECTION4">
      <div className="page-width py-6 pb-16 overflow-hidden">
        <AnimateOnScroll animationType="fadeInUp">
          <div className="section-title scale hover:text-[#BDA4B3]">
            Album Ảnh Cưới
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll
          animationType="fadeInRight"
          className="flex justify-center"
        >
          <Line className="w-[150px] md:w-[300px] h-2 fill-[#BB6A07]" />
        </AnimateOnScroll>
        <AnimateOnScroll animationType="fadeInUp">
          <div className="section-sub-heading">
            Hãy để tình yêu diễn biến thật tự nhiên, đã là duyên thì cũng chẳng
            sợ lạc đường
          </div>
        </AnimateOnScroll>
        <div className="mt-7 md:mt-10 flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4 h-[280px] md:h-[676px]">
            <AnimateOnScroll className="relative h-full w-[45%]">
              <Image
                alt=""
                aria-details="/images/IMG_9462.jpg"
                src="/images/IMG_9462.jpg"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <div className="flex-1 flex flex-col gap-2 md:gap-4">
              <AnimateOnScroll
                className="flex-1 relative h-full"
                animationType="fadeInRight"
              >
                <Image
                  alt=""
                  aria-details="/images/HTM08782.JPG"
                  src="/images/HTM08782.JPG"
                  fill
                  className="object-cover scale"
                />
              </AnimateOnScroll>
              <AnimateOnScroll
                className="flex-1 relative h-full"
                animationType="fadeInRight"
              >
                <Image
                  alt=""
                  aria-details="/images/HTM07178.JPG"
                  src="/images/HTM07178.JPG"
                  fill
                  className="object-cover scale"
                />
              </AnimateOnScroll>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 h-[280px] md:h-[676px] flex-row-reverse">
            <AnimateOnScroll
              animationType="fadeInRight"
              className="relative h-full w-[45%]"
            >
              <Image
                alt=""
                aria-details="/images/HTM09351.JPG"
                src="/images/HTM09351.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <div className="flex-1 flex flex-col gap-2 md:gap-4">
              <AnimateOnScroll className="flex-1 relative h-full">
                <Image
                  alt=""
                  aria-details="/images/HTM07566.JPG"
                  src="/images/HTM07566.JPG"
                  fill
                  className="object-cover scale"
                />
              </AnimateOnScroll>
              <AnimateOnScroll className="flex-1 relative h-full">
                <Image
                  alt=""
                  aria-details="/images/HTM09667.JPG"
                  src="/images/HTM09667.JPG"
                  fill
                  className="object-cover scale"
                />
              </AnimateOnScroll>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 h-[140px] md:h-[334px]">
            <AnimateOnScroll
              animationType="fadeInUp"
              duration={2}
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-details="/images/HTM08750.JPG"
                src="/images/HTM08750.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              animationType="fadeInUp"
              duration={2}
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-details="/images/HTM08270.JPG"
                src="/images/HTM08270.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              animationType="fadeInUp"
              duration={2}
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-details="/images/HTM08827.JPG"
                src="/images/HTM08827.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              animationType="fadeInUp"
              duration={2}
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-details="/images/HTM08209.JPG"
                src="/images/HTM08209.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {isOpen && (
        <VTVModal
          closeModal={() => {
            setIsOpen(false);
          }}
        >
          <VTSwiper
            modules={[Pagination, Navigation, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
            }}
            speed={500}
            initialSlide={initialSlide}
          >
            {imageList.map((url, index: number) => (
              <SwiperSlide key={index}>
                <div className="relative w-[360px] md:w-[650px] h-[70vh] mx-auto">
                  <Image className="object-contain" fill alt="" src={url} />
                </div>
              </SwiperSlide>
            ))}
          </VTSwiper>
        </VTVModal>
      )}
    </div>
  );
};

export default Section4;
