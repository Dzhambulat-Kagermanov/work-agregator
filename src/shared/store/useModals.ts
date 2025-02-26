import { create } from 'zustand'

export type TModalSlug = { slug: string }

export interface TUseModals {
  modalsState: Record<
    string,
    {
      mountedState?: boolean
      transitionState?: boolean
      unmountDelay?: number
      unmountStateTimerId?: ReturnType<typeof setTimeout>
    }
  >
  showModal: (params: TModalSlug) => void
  hideModal: (params: TModalSlug) => void
  changeUnmountDelay: (params: { unmountDelay?: number } & TModalSlug) => void
}

export const useModals = create<TUseModals>()((set, get) => ({
  modalsState: {},
  hideModal: ({ slug }) => {
    set((state) => ({
      modalsState: {
        ...state.modalsState,
        [slug]: { ...state.modalsState[slug], transitionState: false },
      },
    }))
    const unmountStateTimerId = setTimeout(() => {
      set((state) => ({
        modalsState: {
          ...state.modalsState,
          [slug]: { ...state.modalsState[slug], mountedState: false },
        },
      }))
      set((state) => ({
        modalsState: {
          ...state.modalsState,
          [slug]: {
            ...state.modalsState[slug],
            unmountStateTimerId: undefined,
          },
        },
      }))
    }, get().modalsState[slug].unmountDelay || 0)

    set((state) => ({
      modalsState: {
        ...state.modalsState,
        [slug]: { ...state.modalsState[slug], unmountStateTimerId },
      },
    }))
  },
  showModal: ({ slug }) => {
    const unmountStateTimerId = get().modalsState[slug].unmountStateTimerId
    if (unmountStateTimerId !== undefined) {
      clearTimeout(unmountStateTimerId)
      set((state) => ({
        modalsState: {
          ...state.modalsState,
          [slug]: {
            ...state.modalsState[slug],
            unmountStateTimerId: undefined,
          },
        },
      }))
    }
    setTimeout(() => {
      set((state) => ({
        modalsState: {
          ...state.modalsState,
          [slug]: { ...state.modalsState[slug], transitionState: true },
        },
      }))
    }, 0)
    set((state) => ({
      modalsState: {
        ...state.modalsState,
        [slug]: { ...state.modalsState[slug], mountedState: true },
      },
    }))
  },
  changeUnmountDelay: ({ unmountDelay, slug }) => {
    set((state) => ({
      modalsState: {
        ...state.modalsState,
        [slug]: { ...state.modalsState[slug], unmountDelay },
      },
    }))
  },
}))
