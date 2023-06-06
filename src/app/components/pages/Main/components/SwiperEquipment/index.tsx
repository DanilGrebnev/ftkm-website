import { SwiperComponet } from '@UI/Swiper'
import img1 from '@images/equipment/1.webp'
import img2 from '@images/equipment/2.webp'
import img3 from '@images/equipment/3.webp'
import img4 from '@images/equipment/4.webp'
import img5 from '@images/equipment/5.webp'
import img6 from '@images/equipment/6.webp'
import { v4 } from 'uuid'

import s from './s.module.scss'

export const SwiperEquipment = () => {
    const images = [img1, img2, img3, img4, img5, img6].map(src => (
        <img
            key={v4()}
            alt="ВолгГТУ оборудование"
            className={s.img}
            src={src}
        />
    ))

    return (
        <section className={s.SwiperEquipment}>
            <h2>Обрудование кафедры</h2>
            <SwiperComponet
                navigation
                pagination
                slidesPerView={1}
                spaceBetween={20}
                maxWdth="lg"
            >
                {images}
            </SwiperComponet>
        </section>
    )
}
