import Image from "next/image";
import React from "react";
import style from "../style.module.css";

const QR = () => {
  return (
    <div className="relative w-[380px] md:w-[415px]">
      <div className="text-center">
        <div className="flex justify-center -mt-4">
          <div className="relative animate-[tada_2s_infinite_1s] w-[54px] h-[54px]">
            <Image
              src="/images/favicon.png"
              alt=""
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>
        <div className="font-dancing text-[40px] font-bold">Hộp mừng cưới</div>
        <div className="font-roboto">
          Cảm ơn tất cả các tình cảm mà các em, các bạn,
          <br />
          các anh các chị đã dành cho Việt & Trang
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <div className={style["qr-box"]}>
          <div className="font-baloo text-[18px]">
            MỪNG CƯỚI ĐẾN <br />
            CHÚ RỂ
          </div>
          <div className={style["qr-image"]}>
            <Image
              alt=""
              src="/images/bg/viet-qr.png"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[14px] mt-3">
            <div>Ngân hàng: TPBank</div>
            <div>STK : 0424 4285 001</div>
            <div>Tên : Trần Văn Việt</div>
          </div>
          <div className="flex gap-2 mt-4">
            <a
              href="/images/bg/viet-qr.png"
              target="_blank"
              className={
                style["qr-action-btn"] + " scale-extra hover:bg-[#D4DADC]"
              }
            >
              Tải ảnh QR
            </a>
            <div
              className={
                style["qr-action-btn"] + " scale-extra hover:bg-[#D4DADC]"
              }
              onClick={(e: any) => {
                navigator.clipboard.writeText("04244285001");
                e.target.innerText = "Copied";
                setTimeout(() => {
                  e.target.innerText = "Copy STK";
                }, 5000);
              }}
            >
              Copy STK
            </div>
          </div>
          <a
            target="_blank"
            href="https://www.facebook.com/viettv3"
            className="text-[#022ED0] text-xs underline inline-block mt-3 mb-2 cursor-pointer"
          >
            Gửi ảnh phong bì đến chú rể
          </a>
        </div>
        <div className={style["qr-box"]}>
          <div className="font-baloo text-[18px]">
            MỪNG CƯỚI ĐẾN <br />
            CÔ DÂU
          </div>
          <div className={style["qr-image"]}>
            <Image
              alt=""
              src="/images/bg/trang-qr.png"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[14px] mt-3">
            <div>Ngân hàng: VietinBank</div>
            <div>STK : 105872053182</div>
            <div className="whitespace-nowrap">Tên : Đỗ Thị Huyền Trang</div>
          </div>
          <div className="flex gap-2 mt-4">
            <a
              href="/images/bg/viet-qr.png"
              target="_blank"
              className={
                style["qr-action-btn"] + " scale-extra hover:bg-[#D4DADC]"
              }
            >
              Tải ảnh QR
            </a>
            <div
              className={
                style["qr-action-btn"] + " scale-extra hover:bg-[#D4DADC]"
              }
              onClick={(e: any) => {
                navigator.clipboard.writeText("105872053182");
                e.target.innerText = "Copied";
                setTimeout(() => {
                  e.target.innerText = "Copy STK";
                }, 5000);
              }}
            >
              Copy STK
            </div>
          </div>
          <a
            target="_blank"
            href="https://www.facebook.com/nhon.trang.1848"
            className="text-[#022ED0] text-xs underline inline-block mt-3 mb-2 cursor-pointer"
          >
            Gửi ảnh phong bì đến cô dâu
          </a>
        </div>
      </div>
    </div>
  );
};

export default QR;
