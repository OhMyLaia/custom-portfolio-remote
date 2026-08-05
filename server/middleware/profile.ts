import { laia } from '~~/content/profiles/laia'
import { gabo } from '~~/content/profiles/gabo'
import type { Profile } from '~~/shared/types/profile'

const domainProfileMap: Record<string, Profile> = {
  'laia.localhost': laia,
  'gabo.localhost': gabo
}

const defaultProfile = laia

export default defineEventHandler((event) => {
  const host = (getRequestHost(event) || '').split(':')[0]
  event.context.profile = domainProfileMap[host] ?? defaultProfile
})
