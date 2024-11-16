import { useState } from "react";
import Line from "../icons/Line";
import Invitation from "./Invitation";
import style from "./style.module.css";
import { FAMILY_DATA } from "@/constants";
import AnimateOnScroll from "../common/AnimateOnScroll";

enum CardType {
  MAN = 1,
  WOMAN = 2,
}

const Section6 = () => {
  const [type, setType] = useState<CardType>(CardType.MAN);

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg/section6-bg.jpg')",
      }}
      className="mt-10 bg-[#f1f3f4] pb-10"
      id="SECTION6"
    >
      <div className="page-width py-6">
        <AnimateOnScroll animationType="fadeInDown">
          <div className={"section-title scale hover:text-[#BDA4B3]"}>
            Thiệp Mời
          </div>
          <div className="flex justify-center">
            <Line className="w-[100px] md:w-[150px] -mt-3 h-2 fill-[#BB6A07]" />
          </div>
          <div className="section-sub-heading !text-[15px] md:!text-[20px]">
            Trân trọng kính mời!
          </div>
        </AnimateOnScroll>
        <div className="mt-7 flex flex-col gap-3 md:gap-8">
          <div className="flex gap-3">
            {[CardType.MAN, CardType.WOMAN].map((item, index) => (
              <AnimateOnScroll
                animationType={index === 0 ? "fadeInLeft" : "fadeInRight"}
                key={index}
                className="flex-1"
              >
                <div
                  onClick={() => {
                    setType(item);
                  }}
                  className={
                    style["btn-select"] +
                    ` ${type === item ? " !bg-[#EFCB84]" : ""}`
                  }
                >
                  Thiệp cưới nhà {item === CardType.MAN ? "Trai" : "Gái"}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="flex gap-3 md:gap-16 mt-4">
            {[CardType.MAN, CardType.WOMAN].map((item, index) => {
              const isGroom = item === CardType.MAN;
              return (
                <div
                  key={index}
                  className={`${
                    type !== item ? "hidden" : ""
                  } md:flex-1 w-full md:block`}
                >
                  <Invitation
                    family1={
                      isGroom
                        ? FAMILY_DATA.groomFamily
                        : FAMILY_DATA.brideFamily
                    }
                    family2={
                      isGroom
                        ? FAMILY_DATA.brideFamily
                        : FAMILY_DATA.groomFamily
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
