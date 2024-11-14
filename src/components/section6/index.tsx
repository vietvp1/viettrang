import { useState } from "react";
import Line from "../icons/Line";
import Invitation from "./Invitation";
import style from "./style.module.css";

enum CardType {
  MAN = 1,
  WOMAN = 2,
}

const data = {
  groomFamily: {
    title: "Nhà Trai",
    name: "Trần Văn Việt",
    fatherName: "Trần Văn Dũng",
    motherName: "Nguyễn Thị Oanh",
    address1: `Hồi Cương - Ngũ Kiên\nVĩnh Tường - Vĩnh Phúc`,
    address2: `Hồi Cương - Ngũ Kiên - Vĩnh Tường - Vĩnh Phúc`,
    time: "16 GIỜ 30",
    dayOfWeek: "CHỦ NHẬT",
    date: "01",
    month: "12",
    year: "2024",
    lunar: "( Nhằm ngày 01 tháng 11 năm Giáp Thìn )",
  },
  brideFamily: {
    title: "Nhà Gái",
    name: "Đỗ Thị Huyền Trang",
    fatherName: "Đỗ Trung Tưởng",
    motherName: "Trần Thị Tuất",
    address1: `Duy Bình - Vĩnh Ninh\nVĩnh Tường - Vĩnh Phúc`,
    address2: `Duy Bình - Vĩnh Ninh - Vĩnh Tường - Vĩnh Phúc`,
    time: "16 GIỜ 30",
    dayOfWeek: "CHỦ NHẬT",
    date: "01",
    month: "12",
    year: "2024",
    lunar: "( Nhằm ngày 01 tháng 11 năm Giáp Thìn )",
  },
};

const Section6 = () => {
  const [type, setType] = useState<CardType>(CardType.MAN);

  console.log("type :>> ", type);

  return (
    <div className="mt-10 bg-[#f1f3f4]" id="SECTION6">
      <div className="page-width py-6">
        <div className={"section-title scale hover:text-[#BDA4B3]"}>
          Thiệp Mời
        </div>
        <div className="flex justify-center">
          <Line className="w-[100px] -mt-3 h-2 fill-[#BB6A07]" />
        </div>
        <div className="text-[#BB6A07] text-[15px] text-center w-[326px] mx-auto mt-2 scale">
          Trân trọng kính mời!
        </div>
        <div className="mt-7 flex flex-col gap-3 md:gap-8">
          <div className="flex gap-3">
            {[CardType.MAN, CardType.WOMAN].map((item, index) => (
              <div key={index} className="flex-1">
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
              </div>
            ))}
          </div>
          <div className="flex gap-3 md:gap-16">
            {[CardType.MAN, CardType.WOMAN].map((item, index) => {
              const isGroom = item === CardType.MAN;
              return (
                <div
                  key={index}
                  className={`${
                    type !== item ? "hidden md:block md:opacity-0" : ""
                  } md:flex-1 w-full`}
                >
                  <Invitation
                    family1={isGroom ? data.groomFamily : data.brideFamily}
                    family2={isGroom ? data.brideFamily : data.groomFamily}
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
