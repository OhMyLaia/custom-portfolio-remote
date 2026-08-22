<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="laia" class="relative isolate left-1/2 right-1/2 -mx-[50vw] w-screen flex flex-col items-center text-center overflow-visible px-4 py-6 scroll-mt-24 md:flex-row md:justify-center md:gap-4 md:px-12 md:text-left lg:px-24">
    <div class="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-visible" aria-hidden="true">
      <!-- top-left: brand secondary/accent (teal) -->
      <svg
        class="blob-float-slow absolute top-12 -left-10 w-56 h-56 text-brand-secondary/90 md:-top-1 md:-left-3 md:w-80 md:h-80 lg:w-96 lg:h-96"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M28.7,-44.1C43.5,-35.1,66.2,-37.8,75.6,-30.6C84.9,-23.4,80.9,-6.2,76.4,9.5C71.8,25.1,66.7,39.2,57.8,50.8C48.9,62.3,36.2,71.3,23.4,71.2C10.6,71,-2.4,61.7,-13.5,54.5C-24.6,47.4,-33.9,42.4,-38.8,34.7C-43.7,27.1,-44.3,16.8,-50.4,4.5C-56.4,-7.8,-68,-22.1,-68,-34.9C-68.1,-47.7,-56.6,-59,-43.4,-68.7C-30.1,-78.5,-15.1,-86.6,-4.1,-80.3C6.9,-73.9,13.8,-53.1,28.7,-44.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <!-- top-right: brand primary (deep plum) -->
      <svg
        class="blob-float absolute -top-4 -right-20 w-72 h-72 text-brand-primary/70 md:top-4 md:-right-10 md:w-[450px] md:h-[450px] lg:-right-16 lg:w-[550px] lg:h-[550px]"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M36.4,-64.2C43.3,-52.2,42.2,-35.5,43.5,-22.8C44.7,-10.1,48.2,-1.3,48,7.6C47.9,16.6,44.1,25.7,37.9,33C31.8,40.3,23.4,45.7,12.9,52.9C2.4,60,-10.2,68.9,-21.1,67.6C-32,66.4,-41.1,54.9,-52,44.1C-62.8,33.2,-75.5,22.9,-79.9,9.8C-84.4,-3.3,-80.7,-19.2,-70,-27.6C-59.4,-36,-41.9,-36.9,-29,-46.2C-16.2,-55.5,-8.1,-73.1,3.3,-78.2C14.8,-83.4,29.5,-76.2,36.4,-64.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <!-- bottom-left: brand cream, round and big -->
      <svg
        class="blob-float absolute top-[38%] -left-14 w-64 h-64 text-brand-cream md:top-auto md:-left-1 md:w-[450px] md:h-[450px] md:-bottom-20 lg:w-[550px] lg:h-[550px] lg:-bottom-28"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M53.2,1.5C53.2,28.2,26.6,56.3,-2,56.3C-30.6,56.3,-61.2,28.2,-61.2,1.5C-61.2,-25.2,-30.6,-50.5,-2,-50.5C26.6,-50.5,53.2,-25.2,53.2,1.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <!-- bottom-right: brand secondary/accent (teal), lighter tint for variety -->
      <svg
        class="blob-float-slow absolute -bottom-16 -right-14 w-72 h-72 md:-bottom-10 md:w-[550px] md:h-[550px] md:-right-20 lg:w-[650px] lg:h-[650px] lg:-right-28 lg:-bottom-48 text-brand-secondary/40"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M59.9,-62.2C73.9,-46,78.8,-23,72.9,-5.9C67,11.2,50.4,22.5,36.4,25.1C22.5,27.7,11.2,21.7,-1.9,23.5C-14.9,25.4,-29.9,35.1,-42.5,32.5C-55,29.9,-65.3,14.9,-62.3,2.9C-59.4,-9.1,-43.3,-18.2,-30.7,-34.4C-18.2,-50.6,-9.1,-73.9,7,-80.8C23,-87.8,46,-78.4,59.9,-62.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <!-- xl+ only: fills the extra width so the composition doesn't thin out on wide screens -->

      <!-- mid-left: brand secondary/accent (teal), lower opacity -->
      <!-- <svg
        class="hidden xl:block blob-float-slow absolute top-1/3 left-[28%] w-72 h-72 text-brand-primary/70"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M36.4,-64.2C43.3,-52.2,42.2,-35.5,43.5,-22.8C44.7,-10.1,48.2,-1.3,48,7.6C47.9,16.6,44.1,25.7,37.9,33C31.8,40.3,23.4,45.7,12.9,52.9C2.4,60,-10.2,68.9,-21.1,67.6C-32,66.4,-41.1,54.9,-52,44.1C-62.8,33.2,-75.5,22.9,-79.9,9.8C-84.4,-3.3,-80.7,-19.2,-70,-27.6C-59.4,-36,-41.9,-36.9,-29,-46.2C-16.2,-55.5,-8.1,-73.1,3.3,-78.2C14.8,-83.4,29.5,-76.2,36.4,-64.2Z"
          transform="translate(100 100)"
        />
      </svg> -->
      <!-- mid-right: brand cream, lower opacity -->
      <svg
        class="hidden xl:block blob-float absolute top-[62%] right-[28%] w-64 h-64 text-surface/70"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M28.7,-44.1C43.5,-35.1,66.2,-37.8,75.6,-30.6C84.9,-23.4,80.9,-6.2,76.4,9.5C71.8,25.1,66.7,39.2,57.8,50.8C48.9,62.3,36.2,71.3,23.4,71.2C10.6,71,-2.4,61.7,-13.5,54.5C-24.6,47.4,-33.9,42.4,-38.8,34.7C-43.7,27.1,-44.3,16.8,-50.4,4.5C-56.4,-7.8,-68,-22.1,-68,-34.9C-68.1,-47.7,-56.6,-59,-43.4,-68.7C-30.1,-78.5,-15.1,-86.6,-4.1,-80.3C6.9,-73.9,13.8,-53.1,28.7,-44.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <!-- bottom-center accent: brand primary, subtle -->
      <!-- <svg
        class="hidden xl:block blob-float-slow absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-40 text-brand-cream/90"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M53.2,1.5C53.2,28.2,26.6,56.3,-2,56.3C-30.6,56.3,-61.2,28.2,-61.2,1.5C-61.2,-25.2,-30.6,-50.5,-2,-50.5C26.6,-50.5,53.2,-25.2,53.2,1.5Z"
          transform="translate(100 100)"
        />
      </svg> -->
    </div>
<h1 class="items-center md:flex-shrink-0">
  <img src="/images/laia/laiaMLerma-logo-lettering.svg" alt="Laia M. Lerma" class="relative w-full max-w-sm mx-auto my-4 md:mx-0 md:max-w-xs lg:max-w-md xl:max-w-lg" />
</h1>
    <div class="relative flex flex-col items-center gap-6 max-w-sm md:max-w-none md:min-w-0 md:flex-1 lg:items-start lg:mt-10">
      <p class="md:break-words md:[hyphens:auto] lg:break-normal lg:[hyphens:none] text-black text-5xl text-start text-pretty mt-5 md:mt-0 md:text-6xl xl:text-8xl">
        {{ t('home.description') }}
      </p>
      <NuxtLink
        to="/contact"
        class="flex w-full items-center justify-center gap-2 bg-black text-foreground px-6 py-5 text-2xl font-semibold uppercase tracking-wider transition-all hover:opacity-90 md:py-4 md:text-xl md:hover:pl-8 lg:w-auto lg:mt-10"
      >
        {{ t('home.cta') }}
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-14px) rotate(4deg);
  }
}

@keyframes blob-float-slow {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(12px) rotate(-3deg);
  }
}

.blob-float {
  animation: blob-float 4.5s ease-in-out infinite;
}

.blob-float-slow {
  animation: blob-float-slow 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .blob-float,
  .blob-float-slow {
    animation: none;
  }
}
</style>
