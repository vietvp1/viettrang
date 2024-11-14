import Break from "../icons/Break";
import Line from "../icons/Line";
import style from "./style.module.css";

const Section2 = () => {
  return (
    <div className="page-width" id="SECTION2">
      <div className="text-center">
        <img
          className="mx-auto mt-[-44px]"
          src="https://w.ladicdn.com/s800x500/5c728619c417ab07e5194baa/rbg/save-the-date-wavy-elegant-calligraphy-spelling-for-decoration-of-the-wedding-invitation-vector-20240505051834-r7fok.png"
        />
        <div
          className={`flex -mt-[32px] gap-4 justify-center text-[35px] ${style.name}`}
        >
          <div>Trần Viêt</div>
          <div>&</div>
          <div>Huyền Trang</div>
        </div>
        <div className={style.date}>02 - 12 - 2024</div>
        <div className="w-[80px] mx-auto mt-1">
          <Break />
        </div>
        <div className="mt-4 text-sm leading-[1.6]">
          Gặp nhiều người ở thời điểm khác nhau cũng không huy hoàng bằng gặp
          đúng người đúng thời điểm.
        </div>
        <div className="py-8">
          <Line />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-7 gap-[6px]">
          <button className={style.btn}>Thiệp mời</button>
          <button className={style.btn}>Xác nhận tham dự</button>
          <button className={style.btn}>Gửi lời chúc</button>
          <button className={style.btn}>Mừng cưới</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
