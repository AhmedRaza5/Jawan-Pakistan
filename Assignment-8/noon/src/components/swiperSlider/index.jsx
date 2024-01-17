import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperSlider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperSlider = (props) => {
  return (
    <Swiper style={{width:'100%', maxWidth: props.maxwidth}}
    loop={props.loop}
        autoplay={props.autoplay}
        slidesPerView={1}
        spaceBetween={10}
        pagination={props.pagination}
        breakpoints={props.breakpoints}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.data.map((li,i)=>{
            return(

        <SwiperSlide key={i}>
            <img src={li} alt="BannerImage" width={props.width} />
        </SwiperSlide>
            )
        })}
        
      </Swiper>
  )
}

export default SwiperSlider