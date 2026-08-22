<script setup lang="ts">
const profile = useProfile()
useSeoHead('home')
</script>

<template>
  <LandingGabo v-if="profile?.id === 'gabo'" />
  <LandingLaia v-else />
</template>
