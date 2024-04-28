import { useMemo, useState } from 'react'

interface ToggleConfig<T = null> {
  data?: T | null
  isOpened?: boolean
}

interface ToggleState<T = null> {
  data: T | null
  isOpened: boolean
}

interface ToggleReturn<T = null> extends ToggleState<T> {
  isClosed: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const useToggle = <T = null>(
  config: ToggleConfig<T> = { data: null, isOpened: false },
): ToggleReturn<T> => {
  const [state, setState] = useState<ToggleState<T>>(() => ({
    isOpened: !!config.isOpened,
    data: config.data ?? null,
  }))

  return useMemo(
    (): ToggleReturn<T> => ({
      data: state.data,
      isOpened: state.isOpened,
      isClosed: !state.isOpened,
      open: () => setState(({ data }) => ({ data, isOpened: true })),
      close: () => setState(() => ({ data: null, isOpened: false })),
      toggle: () =>
        setState(({ isOpened, data }) => ({ data, isOpened: !isOpened })),
    }),
    [state],
  )
}

export { useToggle }
