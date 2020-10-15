<template>
  <vs-navbar padding-scroll fixed shadow-scroll center-collapsed>
    <template #left>
      <NuxtLink to="/">
        <img
          src="https://vuesax.com/logos/logo-vuesax-svg-7.svg"
          alt="Logotype"
          width="50px"
        />
      </NuxtLink>
    </template>
    <vs-navbar-item to="/">Barcha murojaatlar</vs-navbar-item>
    <vs-navbar-item to="/">Bu qanday ishlaydi</vs-navbar-item>
    <vs-navbar-item to="/">Bu qanday ishlaydi</vs-navbar-item>
    <vs-navbar-item to="/">Portal haqida</vs-navbar-item>
    <vs-navbar-item to="/">Kop beriladigan savollar</vs-navbar-item>
    <template #right>
      <vs-select v-model="selectedLanguage" placeholder="O'zbekcha">
        <vs-option label="O'zbekcha" value="uz">
          <img src="/flags/flag-of-uzbekistan.svg" width="25px" />
        </vs-option>
        <vs-option label="Русский" value="ru">
          <img src="/flags/flag-of-russia.svg" width="25px" />
        </vs-option>
      </vs-select>
      <vs-button icon flat dark size="large" to="/log-in">
        <i class="bx bx-log-in bx-sm mr-1"></i> Kirish
      </vs-button>
      <vs-button icon gradient color="danger" size="large" to="/sign-up">
        <i class="bx bx-user-plus bx-sm mr-1"></i> Ro'yxatdan o'tish
      </vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: '',
    }
  },
}
</script>
