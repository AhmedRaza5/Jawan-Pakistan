import { Box } from "@mui/material";
import SwiperSlider from "../swiperSlider";

const data = [
  "/img/banner1.jpg",
"/img/banner2.jpg",
"/img/banner3.gif",
"/img/banner4.jpg",
"/img/banner5.jpg",
"/img/banner6.jpg",
"/img/banner7.jpg",
"/img/banner8.jpg"
]

export default function Banner() {
  return (
    <Box sx={{display:'flex', position:'relative', overflow:'hidden'}}>
       <SwiperSlider data={data} maxwidth='70%' loop={true} autoplay={{
            delay: 2500,
          }} width={1000} pagination={{
            clickable: true,
        }} />

      <Box sx={{display:'flex', width:'100%',maxWidth:'30%'}}>
        <img src="/img/banner9.avif" alt="BannerImage" width={1000} height={208}/>
        <img src="/img/banner10.avif" alt="BannerImage" width={1000} height={208}/>
      </Box>
    </Box>
  );
}
