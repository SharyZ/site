<template>
  <vs-navbar
    v-model="activePage"
    padding-scroll
    fixed
    shadow-scroll
    center-collapsed
  >
    <template #left>
      <NuxtLink :to="localePath('/')">
        <img
          src="https://vuesax.com/logos/logo-vuesax-svg-7.svg"
          alt="Logotype"
          width="50px"
        />
      </NuxtLink>
    </template>
    <vs-navbar-item
      id="petitions"
      :active="activePage == 'petitions'"
      :to="localePath('/petitions')"
    >
      {{ $t('nav.allPetitions') }}
    </vs-navbar-item>
    <vs-navbar-item
      id="howItWorks"
      :active="activePage == 'howItWorks'"
      :to="localePath('/how-it-works')"
    >
      {{ $t('nav.howItWorks') }}
    </vs-navbar-item>
    <vs-navbar-item
      id="about"
      :active="activePage == 'about'"
      :to="localePath('/about')"
    >
      {{ $t('nav.about') }}
    </vs-navbar-item>
    <vs-navbar-item
      id="faq"
      :active="activePage == 'faq'"
      :to="localePath('/faq')"
    >
      {{ $t('nav.faq') }}
    </vs-navbar-item>
    <template #right>
      <vs-button
        v-if="currentLanguage === 'uz'"
        :to="switchLocalePath('ru')"
        dark
        shadow
      >
        <img src="/flags/flag-of-russia.svg" alt="Русский" width="25px" />
      </vs-button>
      <vs-button v-else :to="switchLocalePath('uz')" dark shadow>
        <img src="/flags/flag-of-uzbekistan.svg" alt="O'zbekcha" width="25px" />
      </vs-button>

      <vs-button icon flat dark size="large" :to="localePath('/log-in')">
        <i class="bx bx-log-in bx-sm mr-1"></i>
        {{ $t('nav.login') }}
      </vs-button>
      <vs-button
        icon
        gradient
        color="danger"
        size="large"
        :to="localePath('/sign-up')"
      >
        <i class="bx bx-user-plus bx-sm mr-1"></i>
        {{ $t('nav.signup') }}
      </vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {
  data() {
    return {
      activePage: '',
    }
  },
  computed: {
    currentLanguage() {
      const locale = this.$i18n.locale

      return locale
    },
  },
}
</script>
