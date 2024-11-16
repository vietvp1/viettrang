import React from "react";
import style from "./style.module.css";
import Heart from "../icons/Heart";
import Break from "../icons/Break";
import AnimateOnScroll from "../common/AnimateOnScroll";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="page-width !mt-14" id="SECTION3">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:gap-7">
          <AnimateOnScroll className="md:flex-1">
            <div
              className="bg-cover bg-top h-[460px] md:h-[550px] scale"
              aria-description="/images/chure.JPG"
              style={{ backgroundImage: "url('/images/chure.JPG')" }}
            />
          </AnimateOnScroll>
          <div className="md:flex-1">
            <div className={style.infor}>
              <AnimateOnScroll className="flex-1">
                <div className="text-[15px] mt-4 md:text-[20px]">Chú Rể</div>
                <div className={style.name}>Trần Việt</div>
              </AnimateOnScroll>
              <AnimateOnScroll
                animationType="fadeInRight"
                className="flex items-center flex-1"
              >
                <Heart className="h-[40px] w-[40px]" />
                <Heart className="h-[53px] w-[53px] -ml-6 scale-extra" />
              </AnimateOnScroll>
            </div>
            <Break className="h-[15px] mt-5 md:hidden" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:gap-7">
          <AnimateOnScroll animationType="fadeInRight" className="md:flex-1">
            <div
              className="bg-cover bg-top h-[460px] md:h-[550px] scale"
              aria-description="/images/HTM06709.JPG"
              style={{ backgroundImage: "url('/images/HTM06709.JPG')" }}
            />
          </AnimateOnScroll>
          <div className="md:flex-1">
            <div className={style.infor + " flex-row-reverse"}>
              <div className="flex-1 text-right">
                <div className="text-[15px] mt-4 md:text-[20px] ">Cô Dâu</div>
                <div className={style.name}>Huyền Trang</div>
              </div>
              <AnimateOnScroll className="flex items-center flex-1 justify-end">
                <Heart className="h-[53px] w-[53px] scale-extra" />
                <Heart className="h-[40px] w-[40px] -ml-6" />
              </AnimateOnScroll>
            </div>
            <Break className="h-[15px] mt-5 md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
