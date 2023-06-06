import { Container } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { v4 as uuidv4 } from 'uuid'

import { ISwiperComponet } from './interface'
import s from './s.module.scss'

export const SwiperComponet: React.FC<ISwiperComponet> = ({
    src,
    maxWdth = 'xl',
    style,
    slidesPerView = 1,
    spaceBetween = 50,
    children,
}) => {
    return (
        <Container
            style={style}
            maxWidth={maxWdth}
        >
            <Swiper
                className={s.Swiper}
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
            >
                {children?.map(el => (
                    <SwiperSlide
                        className={s.SwiperSlide}
                        key={uuidv4()}
                    >
                        {el}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}
