import type { Profile } from '~~/shared/types/profile'

export function useProfile() {
  const profile = useState<Profile | null>('profile', () => null)

  if (import.meta.server) {
    const event = useRequestEvent()
    if (event?.context.profile) {
      profile.value = event.context.profile as Profile
    }
  }

  return profile
}
