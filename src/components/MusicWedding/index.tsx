import React from "react";
import { useEffect, useRef, useState } from "react";

const songs: string[] = [
  // "/music/dubstep-logo-151220.mp3",
  "/music/nothingcut.mp3",
  "/music/ido.mp3",
  "/music/Beautiful-In-White.mp3",
];

const MusicWedding = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  useEffect(() => {
    if (!userInteracted.current) return;
    if (audioRef.current) {
      audioRef.current.play(); // Đảm bảo audio sẽ được phát khi src thay đổi
    }
  }, [currentSongIndex]);

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

  const handleEnded = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  return (
    <>
      <audio
        id="musicPlayer"
        className="hidden"
        ref={audioRef}
        src={songs[currentSongIndex]}
        onEnded={handleEnded}
        controls
      />
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
    </>
  );
};

export default MusicWedding;
