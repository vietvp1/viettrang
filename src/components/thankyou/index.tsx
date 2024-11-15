import Image from "next/image";
import React from "react";

const ThankYou = () => {
  return (
    <div id="thankyou" className="pt-8 md:pt-16 text-center">
      <div className="page-width">
        <div className="relative w-[315px] md:w-[595px] md:h-[217px] h-[155px] mx-auto">
          <Image
            alt=""
            src="/images/bg/thankyou.jpg"
            aria-description="/images/bg/thankyou.jpg"
            fill
            className="object-cover scale"
          />
        </div>
        <div className="font-[VVZOQmVuWHVhblCLlRURg] text-[20px] md:text-[32px] scale-extra hover:text-[#BB6A07] md:mt-5">
          Trần Việt & Huyền Trang
        </div>
        <div className="flex justify-center mt-2 md:mt-5">
          <div className="relative animate-[tada_2s_infinite_1s]">
            <div className="relative w-[135px] h-[135px] md:w-[300px] md:h-[300px]">
              <Image
                alt=""
                src="/images/HTM08827.JPG"
                aria-description="/images/HTM08827.JPG"
                fill
                className="object-cover scale rounded-full border-2 border-red-500"
              />
              <div className="absolute md:-right-[30px] md:-bottom-[40px] -right-[20px] -bottom-[18px]">
                <div className="relative md:w-[210px] md:h-[210px] w-[100px] h-[100px]">
                  <Image
                    alt=""
                    src="/images/bg/flower.png"
                    aria-description="/images/bg/flower.png"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-quicksand text-[13px] md:text-[16px] bg-[#DCDCDC] py-[6px] md:py-2 mt-7 md:mt-10">
          Happy Wedding - Trần Việt & Huyền Trang
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
