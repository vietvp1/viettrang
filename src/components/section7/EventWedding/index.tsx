import Heart from "@/components/icons/Heart";
import moment from "moment-timezone";
import { useEffect, useRef, useState } from "react";
import style from "../style.module.css";

interface IEventWedding {
  endTime?: string;
  title: string;
  datetime: string;
  address: string;
  mapUrl: string;
}

const EventWedding: React.FC<IEventWedding> = ({
  endTime,
  title,
  datetime,
  address,
  mapUrl,
}) => {
  const [{ days, hours, minutes, seconds }, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const countDownRef = useRef<any>();

  useEffect(() => {
    if (!endTime) {
      return;
    }
    countDownRef.current = setInterval(() => {
      createCountdown();
    }, 1000);

    return () => clearInterval(countDownRef.current);
  }, [endTime]);

  const createCountdown = () => {
    const currentTime = Date.now();
    const timeleftNumber =
      moment(endTime, "HH:mm DD-MM-YYYY").toDate().getTime() - currentTime;
    const convertToMinute = 1000 * 60;
    const convertToHour = convertToMinute * 60;
    const convertToDay = convertToHour * 24;
    const days = Math.floor(timeleftNumber / convertToDay);
    const hours = Math.floor((timeleftNumber % convertToDay) / convertToHour);
    const minutes = Math.floor(
      (timeleftNumber % convertToHour) / convertToMinute
    );
    const seconds = Math.floor((timeleftNumber % convertToMinute) / 1000);

    if (days < 0) {
      clearInterval(countDownRef.current);
      return;
    }
    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className={style["event-container"]}>
      <div className="flex justify-center">
        <Heart className="fill-[#D76E80] w-8 h-8 md:w-[50px] md:h-[50px] scale-extra" />
      </div>
      <div className="font-exo font-bold text-xl text-[#797171] mt-1 md:mt-3 md:text-[25px]">
        Lễ Cưới {title}
      </div>
      <div className="flex md:gap-2 gap-[10px] justify-center mt-[14px] md:mt-6">
        <div className={style["countdown-box"]}>
          <div className="font-bold text-[25px] md:text-[40px]">{days}</div>
          <div className="font-sriracha md:-mt-[10px] text-[13px] md:text-[16px]">
            Ngày
          </div>
        </div>
        <div className={style["countdown-box"]}>
          <div className="font-bold text-[25px] md:text-[40px]">{hours}</div>
          <div className="font-sriracha md:-mt-[10px] text-[13px] md:text-[16px]">
            Giờ
          </div>
        </div>
        <div className={style["countdown-box"]}>
          <div className="font-bold text-[25px] md:text-[40px]">{minutes}</div>
          <div className="font-sriracha md:-mt-[10px] text-[13px] md:text-[16px]">
            Phút
          </div>
        </div>
        <div className={style["countdown-box"]}>
          <div className="font-bold text-[25px] md:text-[40px]">{seconds}</div>
          <div className="font-sriracha md:-mt-[10px] text-[13px] md:text-[16px]">
            Giây
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="font-niramit text-[18px] text-[#5E5E5E] font-bold">
          {datetime}
        </div>
        <div className="text-[13px]">
          ( Nhằm ngày 02 tháng 11 năm Giáp Thìn )
        </div>
        <div className="uppercase font-niramit text-[18px] text-[#5E5E5E] font-bold mt-3">
          TẠI: TƯ GIA {title}
        </div>
        <div className="font-philosopher text-[16px] md:text-[18px] text-[#5E5E5E] tracking-tight">
          {address}
        </div>
        <div className="mt-3 md:mt-4 flex justify-center">
          <a
            target="_blank"
            href={mapUrl || "#"}
            className={style.btn + " scale-extra"}
          >
            Xem bản đồ
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventWedding;
