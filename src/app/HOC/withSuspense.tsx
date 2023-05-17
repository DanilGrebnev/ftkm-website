import { BigSkeleton } from '@UI/BigSkeleton'
import { ComponentType, Suspense } from 'react'

export const withSuspense = (Component: ComponentType<any>) => {
    return (props: any) => {
        return (
            <Suspense fallback={<BigSkeleton />}>
                <Component {...props} />
            </Suspense>
        )
    }
}
