<script setup lang="ts">
const { t } = useI18n()
const profile = useProfile()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

type Status = 'idle' | 'sending' | 'success' | 'error'
const status = ref<Status>('idle')

async function onSubmit() {
  status.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="bg-black text-foreground p-6 flex flex-col gap-6">
  <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
    <div class="flex flex-col gap-1">
      <label for="contact-name" class="text-sm text-foreground/60">{{ t('contact.name') }}</label>
      <input
        id="contact-name"
        v-model="form.name"
        type="text"
        required
        class="bg-foreground text-foreground placeholder-foreground/40 border border-foreground/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="contact-email" class="text-sm text-foreground/60">{{ t('contact.email') }}</label>
      <input
        id="contact-email"
        v-model="form.email"
        type="email"
        required
        class="bg-foreground text-foreground placeholder-foreground/40 border border-foreground/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="contact-message" class="text-sm text-foreground/60">{{ t('contact.message') }}</label>
      <textarea
        id="contact-message"
        v-model="form.message"
        rows="5"
        required
        class="bg-foreground text-foreground placeholder-foreground/40 border border-foreground/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
      />
    </div>

    <button
      type="submit"
      :disabled="status === 'sending'"
      class="self-start bg-accent text-black px-4 py-2 hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      {{ status === 'sending' ? t('contact.sending') : t('contact.send') }}
    </button>

    <p v-if="status === 'success'" class="text-accent">{{ t('contact.success') }}</p>
    <p v-else-if="status === 'error'" class="text-red-400">{{ t('contact.error') }}</p>
  </form>

  <div v-if="profile?.social?.linkedin || profile?.social?.github" class="flex items-center gap-4 pt-2 border-t border-foreground/10">
    <a
      v-if="profile?.social?.linkedin"
      :href="profile.social.linkedin"
      target="_blank"
      rel="noopener"
      aria-label="LinkedIn"
      class="text-foreground hover:text-accent transition-colors"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
      </svg>
    </a>
    <a
      v-if="profile?.social?.github"
      :href="profile.social.github"
      target="_blank"
      rel="noopener"
      aria-label="GitHub"
      class="text-foreground hover:text-accent transition-colors"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.103.814 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
  </div>
  </div>
</template>
