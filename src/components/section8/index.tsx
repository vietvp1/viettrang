import Image from "next/image";
import Line from "../icons/Line";
import AnimateOnScroll from "../common/AnimateOnScroll";

const Section8 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bg/section6-bg.jpg')",
      }}
      className="bg-[#f1f3f4] py-10 md:pb-16"
      id="SECTION8"
    >
      <div className="page-width">
        <AnimateOnScroll animationType="fadeInUp">
          <div className={"section-title scale hover:text-[#BDA4B3]"}>
            Lời Ngỏ
          </div>
          <div className="flex justify-center">
            <Line className="w-[100px] md:w-[150px] -mt-3 h-2 fill-[#BB6A07]" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationType="fadeInLeft">
          <div className="section-sub-heading !text-[14px] md:!text-[20px]">
            Yêu là tìm hạnh phúc của mình trong hạnh phúc của người mình yêu
          </div>
        </AnimateOnScroll>
        <div className="mt-4 md:mt-10 flex flex-col gap-5 md:gap-7 md:flex-row-reverse md:items-center">
          <AnimateOnScroll className="md:flex-1" animationType="fadeInRight">
            <div className="text-[14px] md:text-[19px] md:text-left text-center mx-auto scale  md:leading-8`">
              Cảm ơn bạn đã dành tình cảm cho vợ chồng mình. Chúng mình biết các
              bạn đều đang rất bận, bận với công việc, với cuộc sống và với cả
              gia đình bạn.
              <br />
              Nhưng thực sự sẽ rất tuyệt vời nếu như ngày Hạnh Phúc của chúng
              mình có thêm sự góp mặt của bạn và người thương. Vợ chồng mình rất
              hi vọng sẽ có mặt bạn trong ngày quan trọng này để chứng kiến và
              chia sẽ niềm hạnh phúc này cùng chúng mình.
              <br />
              Một lần nữa, chân thành cảm ơn tất cả các bạn ❤️
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="relative h-[252px] md:h-[320px] md:flex-1">
            <Image
              alt=""
              src="/images/HTM09667.JPG"
              aria-description="/images/HTM09667.JPG"
              fill
              className="object-cover scale rounded-xl"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Section8;
