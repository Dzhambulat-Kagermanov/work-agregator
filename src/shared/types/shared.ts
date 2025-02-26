import { type ReactNode, type JSX, type Dispatch, type FC, type SetStateAction } from 'react'

export type TClassName = { className?: string }
export type TChildren = { children: Readonly<ReactNode> }
export type TChildrenGen<T> = { children: Readonly<T> }
export type TTag = keyof JSX.IntrinsicElements
export type TIcon = {
  fill?: string
  stroke?: string
} & TClassName
export type TState<T> = Dispatch<SetStateAction<T>>

type FCWithGenerics<P = {}> = FC<P>
type DynamicTagProps<T extends keyof JSX.IntrinsicElements, P = {}> = {
  tag: T
} & JSX.IntrinsicElements[T] &
  P
export type TDynamicTagProps<T = {}> = FCWithGenerics<DynamicTagProps<keyof JSX.IntrinsicElements, T>>
