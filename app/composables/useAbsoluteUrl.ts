export function useAbsoluteUrl() {
  const { origin } = useRequestURL()
  return (path?: string) => (path ? new URL(path, origin).toString() : origin)
}
