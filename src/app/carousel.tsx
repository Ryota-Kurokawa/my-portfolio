import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// カルーセルにする画像のソースをリストにします
const images = ['/Flutter.png','/logo-logomark.png','/supabase-logo-DCC676FFE2-seeklogo.com.png','/swiftui-128x128_2x.png']

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3} //一度に表示するスライドの数
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

export default Slider
