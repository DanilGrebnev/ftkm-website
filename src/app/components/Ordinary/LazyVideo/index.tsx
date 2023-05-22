import { withSuspense } from '@HOC/withSuspense'
import { LoadingCircle } from '@UI/LoadingCircle'
import React from 'react'

export const LazyVideo = withSuspense(
    React.lazy(() => import('@components/Ordinary/VideoComponent')),
    <LoadingCircle />
)
