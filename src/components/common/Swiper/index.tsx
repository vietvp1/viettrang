import cn from "classnames";
import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperProps } from "swiper/react";
import styles from "./Swiper.module.css";

interface IVTSwiper extends React.PropsWithChildren<SwiperProps> {}

const VTSwiper: React.FC<IVTSwiper> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cn(styles.swiperCommon)}>
      <Swiper className={className} {...rest}>
        {children}
      </Swiper>
    </div>
  );
};

export default VTSwiper;
export * from "swiper";
export * from "swiper/modules";
export { SwiperSlide } from "swiper/react";
