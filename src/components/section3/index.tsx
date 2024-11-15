import React from "react";
import style from "./style.module.css";
import Heart from "../icons/Heart";
import Break from "../icons/Break";

const Section3 = () => {
  return (
    <div className="page-width !mt-14" id="SECTION3">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:gap-7">
          <div
            aria-description="/images/chure.JPG"
            className="h-[460px] md:h-[550px] bg-cover bg-top scale md:flex-1"
            style={{ backgroundImage: "url('/images/chure.JPG')" }}
          />
          <div className="md:flex-1">
            <div className={style.infor}>
              <div className="flex-1">
                <div className="text-[15px] mt-4 md:text-[20px]">Chú Rể</div>
                <div className={style.name}>Trần Việt</div>
              </div>
              <div className="flex items-center flex-1">
                <Heart className="h-[40px] w-[40px]" />
                <Heart className="h-[53px] w-[53px] -ml-6 scale-extra" />
              </div>
            </div>
            <Break className="h-[15px] mt-5 md:hidden" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:gap-7">
          <div
            aria-description="/images/HTM06698.JPG"
            className="h-[460px] md:h-[550px] bg-cover bg-top scale md:flex-1"
            style={{ backgroundImage: "url('/images/HTM06698.JPG')" }}
          />
          <div className="md:flex-1">
            <div className={style.infor + " flex-row-reverse"}>
              <div className="flex-1 text-right">
                <div className="text-[15px] mt-4 md:text-[20px] ">Cô Dâu</div>
                <div className={style.name}>Huyền Trang</div>
              </div>
              <div className="flex items-center flex-1 justify-end">
                <Heart className="h-[53px] w-[53px] scale-extra" />
                <Heart className="h-[40px] w-[40px] -ml-6" />
              </div>
            </div>
            <Break className="h-[15px] mt-5 md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
