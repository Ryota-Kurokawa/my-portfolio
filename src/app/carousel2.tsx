import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// カルーセルにする画像のソースをリストにします
const images = ['/nextjs-icon-512x309-yynfidez.png','/Rails.png','/clang.png', '/file_type_css_icon_130661.png','/golang_official_logo_icon_169092.png','/html.png']

const Slider2 = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={5} //一度に表示するスライドの数
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image src={src} layout="responsive" width={50} height={50} alt="test_image" />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider2
