<script setup lang="ts">
const profile = useProfile()

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submitContact() {
  status.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'sent'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div>
    <section id="about">
      <h1>{{ profile?.name }}</h1>
      <p>{{ profile?.tagline }}</p>
      <p>{{ profile?.bio }}</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p v-if="!profile?.projects.length">No projects yet.</p>
      <ul v-else>
        <li v-for="project in profile.projects" :key="project.title">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <p v-if="!profile?.skills.length">No skills listed yet.</p>
      <ul v-else>
        <li v-for="skill in profile.skills" :key="skill.name">{{ skill.name }}</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <form @submit.prevent="submitContact">
        <input v-model="form.name" type="text" name="name" placeholder="Name" required />
        <input v-model="form.email" type="email" name="email" placeholder="Email" required />
        <textarea v-model="form.message" name="message" placeholder="Message" rows="4" required />
        <button type="submit" :disabled="status === 'sending'">Send</button>
      </form>
      <p v-if="status === 'sent'">Thanks, your message has been sent.</p>
      <p v-if="status === 'error'">Something went wrong, please try again.</p>
    </section>
  </div>
</template>
