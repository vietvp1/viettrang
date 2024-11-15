// components/AnimateOnScroll.tsx
import { motion, MotionProps } from "framer-motion";

type AnimateOnScrollProps = {
  children: React.ReactNode;
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
};

const animationVariants = {
  fadeInUp: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  fadeInDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
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
  className,
}: AnimateOnScrollProps) => {
  const { initial, animate } =
    animationVariants[animationType] || animationVariants.fadeInUp;

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{ duration, delay }}
      viewport={{ once: true }} // Chạy animation một lần khi vào viewport
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
