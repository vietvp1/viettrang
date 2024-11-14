"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      toggleMusic();
    }, 2000);
  }, []);

  const toggleMusic = () => {
    const musicPlayer = document.getElementById(
      "musicPlayer"
    ) as HTMLAudioElement;

    if (isPlaying) {
      musicPlayer?.pause();
    } else {
      musicPlayer?.play();
    }
    setIsPlaying(!isPlaying);
  };

  console.log("isPlaying :>> ", isPlaying);

  return (
    <div>
      <div id="header" className="opacity-60 bg-white h-[54px] w-full">
        <div id="logo" className="w-12 h-12"></div>
      </div>
      <div>
        <audio
          id="musicPlayer"
          loop
          autoPlay
          src="https://procare.one/wp-content/uploads/2024/05/Shane-Filan-Beautiful-In-White.mp3"
        ></audio>
        <div id="SECTION1">
          <div className="section-background"></div>
        </div>
        <div id="SECTION2">
          <div className="text-center">
            <img src="https://w.ladicdn.com/s800x500/5c728619c417ab07e5194baa/rbg/save-the-date-wavy-elegant-calligraphy-spelling-for-decoration-of-the-wedding-invitation-vector-20240505051834-r7fok.png" />
            <div className="name flex gap-4 justify-center">
              <div>Trần Viêt</div>
              <div>&</div>
              <div>Huyền Trang</div>
            </div>

            <div>02 - 12 - 2024</div>
            <div className="w-[80px] mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 431.56 33.43"
                fill="#000"
              >
                <path d="M429.72,8.47C295.35-11.42,4.92,9.92,2,10.14a2.17,2.17,0,0,0,.32,4.32c.4,0,6-.45,15.76-1.09C73.81,9.69,265-1.57,387.89,8.23,313.1,8.08,156,8.84,76.64,17.32c-7.46.8-14.29,1.66-20.24,2.6a2.17,2.17,0,0,0-1.82,2.36,2.11,2.11,0,0,0,2.27,1.94c.85,0,32.67-1.71,75.76-3.12,53.15-1.75,123.45-3.13,174-.65-39.73,0-96.34.52-135.93,3.21-19,1.29-34.1,3.08-41.5,5.55a2.17,2.17,0,0,0,.68,4.22l.26,0c.72-.09,73.16-8.67,133.94-1.28a2.17,2.17,0,0,0,.52-4.3c-9.35-1.14-19-1.9-28.59-2.37,57.57-1.17,116.4-.41,117.46-.39a2.13,2.13,0,0,0,2.19-1.95,2.17,2.17,0,0,0-1.75-2.34c-35.58-6.8-115.86-6.7-184-5.07,114.45-4.37,257.5-3,259.51-2.94h0a2.16,2.16,0,0,0,.32-4.3Z"></path>
              </svg>
            </div>
            <div>
              Gặp nhiều người ở thời điểm khác nhau cũng không huy hoàng bằng
              gặp đúng người đúng thời điểm.
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button className="text-white p-1 bg-[#797171]">Thiệp Mời</button>
              <button className="text-white p-1 bg-[#797171]">
                Xác nhận tham dự
              </button>
              <button className="text-white p-1 bg-[#797171]">
                Gửi lời chúc
              </button>
              <button className="text-white p-1 bg-[#797171]">Mừng cưới</button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="playMucsic-btn"
        className="tdk-music cursor-pointer"
        onClick={toggleMusic}
      >
        <div className="tdk-bg-player"></div>
        <div className="tdk-player-text">Phát Nhạc</div>

        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tdk-icon-pause"
            width="26"
            height="26"
            viewBox="0 0 26 26"
          >
            <path d="M 7 5 C 6.449 5 6 5.449 6 6 L 6 20 C 6 20.551 6.449 21 7 21 L 10 21 C 10.551 21 11 20.551 11 20 L 11 6 C 11 5.449 10.551 5 10 5 L 7 5 z M 16 5 C 15.449 5 15 5.449 15 6 L 15 20 C 15 20.551 15.449 21 16 21 L 19 21 C 19.551 21 20 20.551 20 20 L 20 6 C 20 5.449 19.551 5 19 5 L 16 5 z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tdk-icon-play"
            width="26"
            height="26"
            viewBox="0 0 26 26"
          >
            <path d="M20.208,11.857L6.902,5.26C6.499,5.057,6.018,5.079,5.634,5.312c-0.386,0.232-0.619,0.646-0.619,1.09V19.6 c0,0.443,0.233,0.856,0.619,1.089c0.208,0.126,0.444,0.19,0.683,0.19c0.201,0,0.401-0.046,0.586-0.138l13.306-6.599 c0.438-0.218,0.716-0.658,0.716-1.143S20.646,12.075,20.208,11.857z"></path>
          </svg>
        )}
      </div>

      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake" style={{ fontSize: "20px" }}>
          ♥️
        </div>
        <div className="snowflake">❅</div>
        <div className="snowflake" style={{ fontSize: "20px" }}>
          ❤️
        </div>
        <div className="snowflake">❅</div>
        <div className="snowflake" style={{ fontSize: "18px" }}>
          ❤️
        </div>
        <div className="snowflake" style={{ fontSize: "16px" }}>
          ❤️
        </div>
        <div className="snowflake" style={{ fontSize: "15px" }}>
          ❤️
        </div>
        <div className="snowflake" style={{ fontSize: "22px" }}>
          ♥️
        </div>
        <div className="snowflake" style={{ fontSize: "18px" }}>
          ♥️
        </div>
        <div className="snowflake" style={{ fontSize: "15px" }}>
          ♥️
        </div>
      </div>
    </div>
  );
}
