import Image from "next/image";
import AnimateOnScroll from "../common/AnimateOnScroll";
import Line from "../icons/Line";

const Section4 = () => {
  return (
    <div className="!mt-14 bg-[#f1f3f4]" id="SECTION4">
      <div className="page-width py-6 pb-16">
        <div className={"section-title scale hover:text-[#BDA4B3]"}>
          Album Ảnh Cưới
        </div>
        <div aria-description="" className="flex justify-center">
          <Line className="w-[150px] md:w-[300px] h-2 fill-[#BB6A07]" />
        </div>
        <div className="section-sub-heading">
          Hãy để tình yêu diễn biến thật tự nhiên, đã là duyên thì cũng chẳng sợ
          lạc đường
        </div>
        <div className="mt-7 md:mt-10 flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4 h-[280px] md:h-[676px]">
            <AnimateOnScroll className="relative h-full w-[45%]">
              <Image
                alt=""
                aria-description="/images/HTM08750.JPG"
                src="/images/HTM08750.JPG"
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
                  aria-description="/images/HTM08782.JPG"
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
                  aria-description="/images/HTM09645.JPG"
                  src="/images/HTM09645.JPG"
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
                aria-description="/images/HTM09351.JPG"
                src="/images/HTM09351.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <div className="flex-1 flex flex-col gap-2 md:gap-4">
              <AnimateOnScroll className="flex-1 relative h-full">
                <Image
                  alt=""
                  aria-description="/images/HTM07566.JPG"
                  src="/images/HTM07566.JPG"
                  fill
                  className="object-cover scale"
                />
              </AnimateOnScroll>
              <AnimateOnScroll className="flex-1 relative h-full">
                <Image
                  alt=""
                  aria-description="/images/HTM09667.JPG"
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
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-description="/images/HTM08750.JPG"
                src="/images/HTM08750.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              animationType="fadeInUp"
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-description="/images/HTM08270.JPG"
                src="/images/HTM08270.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              animationType="fadeInUp"
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-description="/images/HTM08827.JPG"
                src="/images/HTM08827.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              animationType="fadeInUp"
              className="flex-1 relative h-full"
            >
              <Image
                alt=""
                aria-description="/images/HTM08244.JPG"
                src="/images/HTM08244.JPG"
                fill
                className="object-cover scale"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
