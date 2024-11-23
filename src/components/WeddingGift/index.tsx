import Image from "next/image";
import Line from "../icons/Line";
import style from "./style.module.css";
import Gift from "../icons/Gift";
import AnimateOnScroll from "../common/AnimateOnScroll";

const WeddingGift = () => {
  return (
    <div className={style.container} id="WeddingGift">
      <div className="page-width">
        <AnimateOnScroll animationType="fadeInUp">
          <div className="section-title scale hover:text-[#BDA4B3]">
            Hộp Mừng Cưới
          </div>
          <div className="flex justify-center">
            <Line className="w-[200px] md:w-[350px] -mt-2 h-2 fill-[#BB6A07]" />
          </div>
          <div className="section-sub-heading !text-[15px] md:!text-[20px]">
            Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như
            đám cưới của chúng tôi.
          </div>
        </AnimateOnScroll>
        <div className="flex justify-center mt-2 md:mt-5 relative">
          {/* <div className="absolute right-[140px] top-[120px]">
            <img src="/images/bg/arrow.png" className="w-[170px] h-[120px]  "/>
          </div> */}
          <div className="relative animate-[tada_2s_infinite_1s]">
            <div className={style.box}>
              <Gift className="w-[70px] h-[70px] md:w-[140px] md:h-[117px]" />
              <div
                id="gift-box"
                className="absolute w-full h-full top-0 left-0"
              ></div>
            </div>
            <img
              src="/images/bg/arrow.png"
              className="w-[80px] h-[60px] md:w-[170px] md:h-[120px] absolute top-0 right-0 translate-x-[120%] translate-y-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingGift;
