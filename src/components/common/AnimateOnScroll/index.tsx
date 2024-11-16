// components/AnimateOnScroll.tsx
import { motion, MotionProps, MotionStyle } from "framer-motion";

interface AnimateOnScrollProps {
  children?: React.ReactNode;
  animationType?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "fadeIn"
    | "zoomIn"
    | "zoomOut"; // Các kiểu animation hỗ trợ
  duration?: number; // Thời gian animation (giây)
  delay?: number; // Độ trễ animation (giây)
  iterationCount?: number; // Số lần lặp lại animation
  className?: string;
  style?: MotionStyle;
  ease?: "linear";
}

const animationVariants = {
  fadeInUp: {
    initial: { opacity: 0, translateY: "20px" },
    animate: { opacity: 1, translateY: 0 },
  },
  fadeInDown: {
    initial: { opacity: 0, translateY: "-20px" },
    animate: { opacity: 1, translateY: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, translateX: "-20px" },
    animate: { opacity: 1, translateX: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, translateX: "20px" },
    animate: { opacity: 1, translateX: 0 },
  },
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  zoomIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  zoomOut: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
  },
};

const AnimateOnScroll = ({
  children,
  animationType = "fadeInLeft", // Kiểu animation mặc định
  duration = 1,
  delay = 0.2,
  ease = "linear",
  className,
  style,
}: AnimateOnScrollProps) => {
  const { initial, animate } =
    animationVariants[animationType] || animationVariants.fadeInUp;

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{ duration, delay, ease: "linear" }}
      viewport={{ once: true }} // Chạy animation một lần khi vào viewport
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
