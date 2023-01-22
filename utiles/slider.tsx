import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";

export const Slider = ({ list }: { list: any }) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            modules={[Navigation]}
            breakpoints={{
                0: {
                    spaceBetween: 5,
                },
                640: {
                    spaceBetween: 15,
                },
            }}
            scrollbar={{ draggable: true }}
            navigation
            className="mySwiper"
            style={{ padding: "10px 0px" }}
            role={"slider"}
        >
            {list}
        </Swiper>
    );
};
