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

// Mock data for previewing ProfessionalExpCard — replace with real profile data later
const mockExperience = [
  {
    dateRange: '2018 — 2024',
    title: 'Lead Engineer',
    company: 'Upstatement',
    companyUrl: 'https://upstatement.com',
    previousRoles: ['Senior Engineer', 'Engineer'],
    description:
      'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of clients. Provide leadership within the engineering department through close collaboration and knowledge shares.',
    tags: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js']
  },
  {
    dateRange: '2015 — 2018',
    title: 'Frontend Developer',
    company: 'Acme Studio',
    previousRoles: [],
    description: 'Built and maintained marketing sites and internal tools for a range of clients.',
    tags: ['Vue', 'SCSS', 'PHP']
  }
]
</script>

<template>
  <div class="flex flex-col gap-10">
    <section id="about">
      <h1 class="text-2xl font-bold">{{ profile?.name }}</h1>
      <p>{{ profile?.tagline }}</p>
      <p>{{ profile?.bio }}</p>
    </section>

    <section id="experience">
      <h2 class="text-xl font-semibold mb-2">Experience</h2>
      <div class="flex flex-col gap-4">
        <ProfessionalExpCard v-for="exp in mockExperience" :key="exp.company" :entry="exp" />
      </div>
    </section>

    <section id="projects">
      <h2 class="text-xl font-semibold mb-2">Projects</h2>
      <p v-if="!profile?.projects.length">No projects yet.</p>
      <ul v-else class="flex flex-col gap-4">
        <li v-for="project in profile.projects" :key="project.title">
          <h3 class="font-semibold">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </section>

    <section id="skills">
      <h2 class="text-xl font-semibold mb-2">Skills</h2>
      <p v-if="!profile?.skills.length">No skills listed yet.</p>
      <ul v-else class="flex flex-wrap gap-2">
        <li v-for="skill in profile.skills" :key="skill.name">{{ skill.name }}</li>
      </ul>
    </section>

    <section id="contact">
      <h2 class="text-xl font-semibold mb-2">Contact</h2>
      <form class="flex flex-col gap-3 max-w-sm" @submit.prevent="submitContact">
        <input v-model="form.name" type="text" name="name" placeholder="Name" required class="border rounded px-3 py-2" />
        <input v-model="form.email" type="email" name="email" placeholder="Email" required class="border rounded px-3 py-2" />
        <textarea v-model="form.message" name="message" placeholder="Message" rows="4" required class="border rounded px-3 py-2" />
        <button type="submit" :disabled="status === 'sending'" class="border rounded px-4 py-2 self-start">Send</button>
      </form>
      <p v-if="status === 'sent'">Thanks, your message has been sent.</p>
      <p v-if="status === 'error'">Something went wrong, please try again.</p>
    </section>
  </div>
</template>
