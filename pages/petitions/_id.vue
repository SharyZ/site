<template>
  <div class="flex flex-col">
    <div>
      <div class="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center h-full w-full"
          src="https://dummyimage.com/1200x500/CBD5E0/000000"
        />
      </div>
      <h1 class="my-6">{{ petition.title }}</h1>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <vs-avatar class="inline-flex items-center justify-center">
            <img src="https://vuesax.com/avatars/avatar-6.png" alt="Person" />
          </vs-avatar>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
              {{ petition.author }}
            </h2>
            <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
            <ul class="list-none">
              <li>
                Yo'nalish:
                <NuxtLink :to="localePath('/')" class="text-primary underline">
                  {{ petition.category }}
                </NuxtLink>
              </li>
              <li>
                <i class="bx bx-calendar"></i>
                Sana: <strong>{{ petition.createdAt }}</strong>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
        >
          <p class="leading-relaxed text-lg mb-4">
            {{ petition.description }}
          </p>
          <div class="flex items-center">
            <div class="inline-flex items-center">
              <vs-button border size="large">
                <i class="bx bx-like mr-2"></i> {{ petition.like }}
              </vs-button>
              <vs-button danger border size="large">
                <i class="bx bx-dislike mr-2"></i> {{ petition.dislike }}
              </vs-button>
            </div>
            <span
              class="mr-3 inline-flex items-center ml-auto pr-3 py-1 border-r-2 border-gray-500"
            >
              <i class="bx bx-show bx-sm mr-2"></i> {{ petition.viewsCount }}
            </span>
            <span class="inline-flex items-center">
              <i class="bx bx-comment-detail bx-sm mr-2"></i>
              {{ petition.commentsCount }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = await params.id

    return {
      id,
    }
  },
  computed: {
    petition() {
      return this.$store.state.petitions.petition
    },
  },
  mounted() {
    this.$store.dispatch('petitions/loadPetition', this.id)
  },
}
</script>
