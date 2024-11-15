import { useEffect, useRef, useState } from "react";
import Heart from "../icons/Heart";
import Line from "../icons/Line";
import style from "./style.module.css";
import moment from "moment-timezone";
import { FAMILY_DATA } from "@/constants";
import EventWedding from "./EventWedding";

interface ISection7 {}

const Section7: React.FC<ISection7> = () => {
  return (
    <div id="SECTION7" className={style.container}>
      <div className="page-width pt-6 pb-12">
        <div className={"section-title scale hover:text-[#BDA4B3]"}>
          Sự Kiện Cưới
        </div>
        <div className="flex justify-center">
          <Line className="w-[100px] md:w-[150px] -mt-3 h-2 fill-[#BB6A07]" />
        </div>
        <div className="section-sub-heading !text-[15px] md:!text-[20px]">
          Cùng đếm ngược thời gian cùng chúng tôi nhé!
        </div>
        <div className="mt-7 flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="md:flex-1">
            <EventWedding
              endTime={"10:00 02-12-2024"}
              title="nhà Trai"
              address={FAMILY_DATA.groomFamily.address2}
              datetime="10:00 Thứ Hai, ngày 02-12-2024"
              mapUrl="https://maps.app.goo.gl/CWxRk1xZcGqBwEfQA"
            />
          </div>
          <div className="md:flex-1">
            <EventWedding
              endTime={"11:00 02-12-2024"}
              title="nhà Gái"
              address={FAMILY_DATA.brideFamily.address2}
              datetime="11:00 Thứ Hai, ngày 02-12-2024"
              mapUrl="https://maps.app.goo.gl/ga66WELDvuFHvLpHA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
