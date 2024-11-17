"use client";
import { VTVModal } from "@/components/common/modal";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";
import Section7 from "@/components/section7";
import Section8 from "@/components/section8";
import ThankYou from "@/components/thankyou";
import WeddingGift from "@/components/WeddingGift";
import QR from "@/components/WeddingGift/QR";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflowAuto, setIsOverflowAuto] = useState(true);
  const [content, setContent] = useState<any>(null);

  const userInteracted = useRef(false);

  useEffect(() => {
    const handleUserInteraction = (e: any) => {
      if (e?.target?.id === "playMucsic-btn") {
        userInteracted.current = true;
        return;
      }
      if (userInteracted.current) return;
      userInteracted.current = true;

      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);

      toggleMusic();
    };
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
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

  const onClickImage = (e: any) => {
    if (e.target?.id === "gift-box") {
      setIsOverflowAuto(false);
      setContent(<QR />);
      setIsOpen(true);
      return;
    }

    setIsOverflowAuto(true);
    const ariaDescription = e?.target?.getAttribute("aria-description");
    if (!ariaDescription) return;
    setContent(
      <div className="relative w-[360px] md:w-[650px] h-[70vh]">
        <Image className="object-contain" fill alt="" src={ariaDescription} />
      </div>
    );
    setIsOpen(true);
  };

  return (
    <div>
      <div id="header" className="opacity-60 bg-white h-[54px] w-full">
        <div className="page-width flex items-center h-full">
          <div id="logo" className="w-10 h-10"></div>
        </div>
      </div>
      <div onClick={onClickImage}>
        <audio
          id="musicPlayer"
          loop
          // autoPlay
          src="https://procare.one/wp-content/uploads/2024/05/Shane-Filan-Beautiful-In-White.mp3"
        ></audio>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <WeddingGift />
        <ThankYou />
      </div>

      <div
        id="playMucsic-btn"
        className={`tdk-music cursor-pointer ${isPlaying ? "playing" : ""}`}
        onClick={(e) => {
          toggleMusic();
        }}
      >
        <div style={{ pointerEvents: "none" }} className="tdk-bg-player"></div>
        {/* <div className="tdk-player-text">Phát Nhạc</div> */}

        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tdk-icon-pause"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            style={{ pointerEvents: "none" }}
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
            style={{ pointerEvents: "none" }}
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
        <div className="snowflake text-white" style={{ fontSize: "16px" }}>
          🤍
        </div>
        <div className="snowflake" style={{ fontSize: "14px" }}>
          🤍
        </div>
        <div className="snowflake" style={{ fontSize: "12px" }}>
          🤍
        </div>
      </div>

      {isOpen && (
        <VTVModal
          closeModal={() => {
            setIsOpen(false);
            setContent(null);
          }}
          content={content}
          isOverflowAuto={isOverflowAuto}
        />
      )}
    </div>
  );
}
