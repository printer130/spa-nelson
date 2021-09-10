import { lazy } from 'react'
export { Navbar } from './Navbar'
export { Hero } from './Hero'
export { Foo } from './Foo'

export const Description = lazy(() => import('./Description'))
