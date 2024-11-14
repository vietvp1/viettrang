import React from "react";
import style from "./style.module.css";

type IFamily = {
  name: string;
  title: string;
  fatherName: string;
  motherName: string;
  address1: string;
  address2: string;
  time: string;
  dayOfWeek: string;
  date: string;
  month: string;
  year: string;
  lunar: string;
};

interface IInvitation {
  family1: IFamily;
  family2: IFamily;
}

const Invitation: React.FC<IInvitation> = ({ family1, family2 }) => {
  return (
    <div className={style.container}>
      <div className="flex gap-[1px] w-full">
        <div className="flex-1 text-center relative after:absolute after:border-r-[1px] after:h-[72%] after:right-0 after:top-[10px] after:border-black">
          <div className={style.title}>{family1.title}</div>
          <div className="text-[13px] font-bold mt-1">
            Bố: {family1.fatherName}
          </div>
          <div className="text-[13px] font-bold">Mẹ: {family1.motherName}</div>
          <div className="text-[13px] whitespace-pre-line">
            {family1.address1}
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className={style.title}>{family2.title}</div>
          <div className="text-[13px] font-bold mt-1">
            Bố: {family2.fatherName}
          </div>
          <div className="text-[13px] font-bold">Mẹ: {family2.motherName}</div>
          <div className="text-[13px] whitespace-pre-line">
            {family2.address1}
          </div>
        </div>
      </div>
      <div className="text-[15px] text-center mt-3">
        <div className="font-bold">TRÂN TRỌNG KÍNH MỜI</div>
        <div className="mt-1">Bạn + người thương</div>
        <div className="text-[13px] w-[280px] mx-auto mt-[6px]">
          TỚI DỰ BỮA CƠM THÂN MẬT VÀ CHUNG VUI CÙNG GIA ĐÌNH MÌNH
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-1">
        <div className="font-dancing text-[30px] text-[#E83B30] font-bold">
          {family1.name}
        </div>
        <div className="flex items-end">
          <div className={style["heart-red"]}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 91.46"
              enable-background="new 0 0 100 91.46"
              xmlSpace="preserve"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              fill="#FF2E5C"
            >
              <path
                d="M49.999,91.46c3.944-3.943,26.458-26.47,40.533-40.543c12.61-12.611,12.341-30.992,0.876-42.395
	C79.943-2.884,61.404-2.834,49.999,8.632C38.595-2.834,20.056-2.884,8.591,8.522C-2.874,19.925-3.142,38.306,9.467,50.917
	C23.541,64.99,46.058,87.517,49.999,91.46z"
              ></path>
            </svg>
          </div>
          <div className={style["heart-rose"]}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 91.46"
              enable-background="new 0 0 100 91.46"
              xmlSpace="preserve"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              fill="#EA6C88"
            >
              <path
                d="M49.999,91.46c3.944-3.943,26.458-26.47,40.533-40.543c12.61-12.611,12.341-30.992,0.876-42.395
	C79.943-2.884,61.404-2.834,49.999,8.632C38.595-2.834,20.056-2.884,8.591,8.522C-2.874,19.925-3.142,38.306,9.467,50.917
	C23.541,64.99,46.058,87.517,49.999,91.46z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="font-dancing text-[30px] text-[#E83B30] font-bold">
          {family2.name}
        </div>
      </div>
      <div className="text-center mt-1">
        <div>ĐƯỢC TỔ CHỨC VÀO HỒI</div>
        <div className="font-bold text-[14px]">{family1.time}</div>
        <div className="flex gap-2 justify-center items-center -mt-4">
          <div className="font-bold text-[14px] border-y border-black px-3 py-[2px]">
            {family1.dayOfWeek}
          </div>
          <div className="font-dancing text-[#E83B30] font-bold text-[45px]">
            {family1.date}
          </div>
          <div className="font-bold text-[14px] border-y border-black px-3 py-[2px]">
            {family1.month} - {family1.year}
          </div>
        </div>
        <div className="font-niramit -mt-3 text-[14px]">{family1.lunar}</div>
        <div className="text-[#5E5E5E] text-[14px] mt-3">
          <div className="font-niramit uppercase">
            TẠI: TƯ GIA {family1.title}
          </div>
          <div className="font-itim">{family1.address2}</div>
          <div className="underline mt-1 font-dancing text-[18px] font-bold">
            Rất hân hạnh được đón tiếp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
