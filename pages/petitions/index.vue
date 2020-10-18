<template>
  <div>
    <h1>{{ $t('allPetitionsPage.title') }}</h1>
    <div class="flex">
      <div class="sidebar">
        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <vs-button
              block
              border
              size="large"
              :active="activeSidebarElementIndex == 0"
            >
              <i class="bx bxs-chevron-right"></i>
              {{ $t('allPetitionsPage.sidebar.all') }}
            </vs-button>
          </li>
          <li class="sidebar-list-item">
            <vs-button
              block
              border
              size="large"
              :active="activeSidebarElementIndex == 1"
            >
              <i class="bx bxs-chevron-right"></i>
              {{ $t('allPetitionsPage.sidebar.popular') }}
            </vs-button>
          </li>
          <li class="sidebar-list-item">
            <vs-button
              block
              border
              size="large"
              :active="activeSidebarElementIndex == 2"
            >
              <i class="bx bxs-chevron-right"></i>
              {{ $t('allPetitionsPage.sidebar.discussing') }}
            </vs-button>
          </li>
          <li class="sidebar-list-item">
            <vs-button
              block
              border
              size="large"
              :active="activeSidebarElementIndex == 3"
            >
              <i class="bx bxs-chevron-right"></i>
              {{ $t('allPetitionsPage.sidebar.underConsideration') }}
            </vs-button>
          </li>
          <li class="sidebar-list-item">
            <vs-button
              block
              border
              size="large"
              :active="activeSidebarElementIndex == 4"
            >
              <i class="bx bxs-chevron-right"></i>
              {{ $t('allPetitionsPage.sidebar.expired') }}
            </vs-button>
          </li>
          <li class="sidebar-list-item">
            <vs-button
              block
              border
              size="large"
              :active="activeSidebarElementIndex == 5"
            >
              <i class="bx bxs-chevron-right"></i>
              {{ $t('allPetitionsPage.sidebar.answered') }}
            </vs-button>
          </li>
        </ul>
      </div>
      <div class="w-9/12 p-5">
        <PetitionsList>
          <PetitionsListItem
            v-for="petition in allPetitions"
            :id="petition.id"
            :key="petition.id"
            :category="petition.category"
            :title="petition.title"
            :description="petition.description"
            :views-count="petition.viewsCount"
            :like="petition.like"
            :dislike="petition.dislike"
            :comments-count="petition.commentsCount"
            :author="petition.author"
          />
        </PetitionsList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeSidebarElementIndex: 0,
  }),
  computed: {
    allPetitions() {
      return this.$store.state.petitions.allPetitions
    },
  },
  mounted() {
    this.$store.dispatch('petitions/fetchAllPetitions')
  },
}
</script>

<style lang="postcss" scoped>
.sidebar {
  @apply w-3/12 p-5;
}

.sidebar-list {
  @apply list-none;
}

.sidebar-list-item {
  @apply mb-4;
}
</style>
