<template>
  <div class="lg:flex lg:flex-col lg:min-h-dvh">
    <Navbar />

    <main class="max-w-3xl mx-auto px-4 flex flex-col gap-10 pb-6 pt-0 md:pt-6 lg:flex-1 lg:min-h-0">
      <slot />
    </main>

    <Footer />
  </div>
</template>
