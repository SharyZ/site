<template>
  <main data-scroll-container>
    <HomeHero data-scroll-section />
    <HomeCategories data-scroll-section />
    <HomePetitions data-scroll-section />
  </main>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'

export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    })
  },
}
</script>
