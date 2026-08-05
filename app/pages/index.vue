<script setup lang="ts">
const profile = useProfile()
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
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows="4" />
        <button type="submit">Send</button>
      </form>
    </section>
  </div>
</template>
