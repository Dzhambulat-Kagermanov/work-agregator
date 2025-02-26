import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type TModalSlug = { slug: string }

export interface TUseModals {
  modalsState: Record<
    string,
    {
      mountedState?: boolean
      visibleState?: boolean
      unmountDelay?: number
      unmountStateTimerId?: ReturnType<typeof setTimeout>
    }
  >
  showModal: (params: TModalSlug) => void
  hideModal: (params: TModalSlug) => void
  changeUnmountDelay: (params: { unmountDelay?: number } & TModalSlug) => void
}

export const useModals = create<TUseModals>()(
  devtools((set, get) => ({
    modalsState: {},
    hideModal: ({ slug }) => {
      set((state) => ({
        modalsState: {
          ...state.modalsState,
          [slug]: { ...state.modalsState[slug], visibleState: false },
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
      const unmountStateTimerId = get().modalsState[slug]?.unmountStateTimerId
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
            [slug]: { ...state.modalsState[slug], visibleState: true },
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
  })),
)
