<template>
  <section>
    <div class="flex flex-wrap -m-4">
      <div
        v-for="category in categories"
        :key="category.id"
        class="xl:w-1/3 md:w-1/2 p-4 w-full"
      >
        <div
          class="border border-gray-400 p-6 rounded-lg hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in"
        >
          <img
            :src="require(`~/assets/${category.pictureUrl}`)"
            :alt="category.name"
            width="75px"
            class="mb-4"
          />
          <h3 class="text-lg mb-2 text-right">
            {{ category.name }}
            <span class="px-3 py-1 bg-primary text-white rounded-full text-sm">
              {{ category.count }}
            </span>
          </h3>
          <p class="leading-tight text-base text-right">
            {{ category.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_1.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 54,
        },
        {
          id: 2,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_2.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 23,
        },
        {
          id: 3,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_3.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 30,
        },
        {
          id: 4,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_4.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 12,
        },
        {
          id: 5,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_5.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 84,
        },
        {
          id: 6,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_6.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 26,
        },
        {
          id: 7,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_7.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 54,
        },
        {
          id: 8,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_8.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 45,
        },
        {
          id: 9,
          name: 'Pot with a plant',
          pictureUrl: 'categories_svg/cat_9.svg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          count: 9,
        },
      ],
    }
  },
}
</script>
