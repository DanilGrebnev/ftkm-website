import { Container } from '@mui/material'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { v4 as uuidv4 } from 'uuid'

import { ISwiperComponet } from './interface'
import s from './s.module.scss'

export const SwiperComponet: React.FC<ISwiperComponet> = ({
    maxWdth = 'xl',
    style,
    slidesPerView = 1,
    spaceBetween = 50,
    children,
    navigation = true,
    pagination,
}) => {
    return (
        <Container
            style={style}
            maxWidth={maxWdth}
        >
            <Swiper
                className={s.Swiper}
                modules={[Pagination, Navigation]}
                pagination={pagination && { clickable: true }}
                navigation={navigation}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
            >
                {children?.map(child => (
                    <SwiperSlide
                        className={s.SwiperSlide}
                        key={uuidv4()}
                    >
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}
