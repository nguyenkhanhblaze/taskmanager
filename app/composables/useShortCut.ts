export const useShortCut = (callback: () => void) => {
  onMounted(() => {
    const handler = (e: KeyboardEvent) => {
      // Shift + M
      if (e.shiftKey && e.key.toLowerCase() === "m") {
        e.preventDefault()
        callback()
      }
    }

    window.addEventListener("keydown", handler)

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handler)
    })
  })
}
