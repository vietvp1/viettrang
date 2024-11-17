"use client";
import { VTVModal } from "@/components/common/modal";
import MusicWedding from "@/components/MusicWedding";
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
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflowAuto, setIsOverflowAuto] = useState(true);
  const [content, setContent] = useState<any>(null);

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
        {/* <audio
          id="musicPlayer"
          loop
          // autoPlay
          // src="https://procare.one/wp-content/uploads/2024/05/Shane-Filan-Beautiful-In-White.mp3"
          src="/music/ido.mp3"
        ></audio> */}
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
      <MusicWedding />
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
