<template>
  <div class="petitions-list-item mb-8">
    <span class="category">{{ category }}</span>
    <h3 class="title">
      <NuxtLink :to="localePath(`/petitions/${id}`)">
        {{ title }}
      </NuxtLink>
    </h3>
    <p class="description">{{ description }}</p>
    <div class="panel">
      <div class="inline-flex items-center">
        <vs-button border size="large">
          <i class="bx bx-like mr-2"></i> {{ like }}
        </vs-button>
        <vs-button danger border size="large">
          <i class="bx bx-dislike mr-2"></i> {{ dislike }}
        </vs-button>
      </div>
      <span
        class="mr-3 inline-flex items-center ml-auto pr-3 py-1 border-r-2 border-gray-500"
      >
        <i class="bx bx-show bx-sm mr-2"></i> {{ viewsCount }}
      </span>
      <span class="inline-flex items-center">
        <i class="bx bx-comment-detail bx-sm mr-2"></i>
        {{ commentsCount }}
      </span>
    </div>
    <div class="inline-flex items-center">
      <vs-avatar>
        <img src="https://vuesax.com/avatars/avatar-6.png" alt="Person" />
      </vs-avatar>
      <span class="flex-grow flex flex-col pl-4">
        <span class="title-font font-medium text-gray-900">
          {{ author }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: () => 0,
      required: true,
    },
    category: {
      type: String,
      default: () => '',
      required: true,
    },
    title: {
      type: String,
      default: () => '',
      required: true,
    },
    description: {
      type: String,
      default: () => '',
      required: true,
    },
    viewsCount: {
      type: Number,
      default: () => 0,
      required: true,
    },
    like: {
      type: Number,
      default: () => 0,
      required: true,
    },
    dislike: {
      type: Number,
      default: () => 0,
      required: true,
    },
    commentsCount: {
      type: Number,
      default: () => 0,
      required: true,
    },
    author: {
      type: String,
      default: () => '',
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.petitions-list-item {
  @apply p-12 flex flex-col items-start;

  @screen md {
    @apply w-1/2;
  }
}

.category {
  @apply inline-block py-1 px-3 rounded-lg bg-primary text-white text-sm font-medium tracking-widest;
}

.title {
  @apply my-2;

  @screen sm {
    @apply text-3xl;
  }
}

.title a {
  @apply text-dark;
}

.description {
  @apply leading-relaxed mb-8;
}

.panel {
  @apply flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full;
}
</style>
