import Break from "../icons/Break";
import Line from "../icons/Line";
import style from "./style.module.css";

const Section2 = () => {
  return (
    <div className="page-width" id="SECTION2">
      <div className="text-center">
        <img
          className="mx-auto mt-[-44px] md:mt-[-70px] scale md:w-[700px]"
          src="https://w.ladicdn.com/s800x500/5c728619c417ab07e5194baa/rbg/save-the-date-wavy-elegant-calligraphy-spelling-for-decoration-of-the-wedding-invitation-vector-20240505051834-r7fok.png"
        />
        <div
          className={`flex -mt-[32px] md:-mt-[70px] gap-4 justify-center ${style.name}`}
        >
          <div className="hover:text-[#BDA4B3] scale-extra">Trần Việt</div>
          <div>&</div>
          <div className="hover:text-[#BDA4B3] scale-extra">Huyền Trang</div>
        </div>
        <div className={style.date}>02 - 12 - 2024</div>
        <div className="w-[80px] md:w-[180px] mx-auto mt-1">
          <Break />
        </div>
        <div className="mt-4 text-sm md:text-[19px] leading-[1.6]">
          Gặp nhiều người ở thời điểm khác nhau cũng không huy hoàng bằng gặp
          đúng người đúng thời điểm.
        </div>
        <div className="py-8 md:w-[600px] mx-auto">
          <Line />
        </div>
        {/* <div className="grid md:mt-4 grid-cols-2 md:grid-cols-4 md:gap-7 gap-[6px]">
          <button className={style.btn}>Thiệp mời</button>
          <button className={style.btn}>Xác nhận tham dự</button>
          <button className={style.btn}>Gửi lời chúc</button>
          <button className={style.btn}>Mừng cưới</button>
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
