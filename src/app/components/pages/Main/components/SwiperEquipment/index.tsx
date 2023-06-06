import { SwiperComponet } from '@UI/Swiper'
import img1 from '@images/equipment/1.webp'
import img2 from '@images/equipment/2.webp'
import img3 from '@images/equipment/3.webp'
import img4 from '@images/equipment/4.webp'
import img5 from '@images/equipment/5.webp'
import img6 from '@images/equipment/6.webp'

import s from './s.module.scss'

export const SwiperEquipment = () => {
    return (
        <section className={s.SwiperEquipment}>
            <h2>Обрудование кафедры</h2>
            <SwiperComponet
                slidesPerView={1}
                spaceBetween={20}
                maxWdth="lg"
                src={[img1, img2, img3, img4, img5, img6]}
            />
        </section>
    )
}
