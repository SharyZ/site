<template>
  <section class="py-10">
    <div class="mb-5">
      <h2 class="section-title">Yangi jamoaviy murojaatlar</h2>
      <petitions-list>
        <petitions-list-item
          v-for="petition in lastPetitions"
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
      </petitions-list>
    </div>
    <div class="mb-5">
      <h2 class="section-title">Ommabop jamoaviy murojaatlar</h2>
      <PetitionsList>
        <PetitionsListItem
          v-for="petition in popularPetitions"
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
    <div class="mb-5">
      <h2 class="section-title">Ko'rib chiqish jarayonida</h2>
      <PetitionsList>
        <PetitionsListItem
          v-for="petition in underConsiderationPetitions"
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
    <div class="mb-5">
      <h2 class="section-title">Ko'rib chiqilgan jamoaviy murojaatlar</h2>
      <PetitionsList>
        <PetitionsListItem
          v-for="petition in reviewedPetitions"
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      lastPetitions: [
        {
          id: 10,
          category: 'Modi soluta',
          title: 'Dicta aspernatur est qui vero reprehenderit',
          description:
            'Dolorum incidunt facilis nulla. Laboriosam, possimus asperiores atque et voluptatum cumque ex quibusdam rerum expedita deleniti harum doloremque sed eos dolorum placeat ipsa minus reiciendis! Possimus, ad? Omnis sunt obcaecati magnam sequi, odio quisquam nesciunt dolores consequatur, vitae voluptates quos autem? Eos nihil quidem labore necess',
          like: 12,
          dislike: 2,
          viewsCount: 6,
          commentsCount: 5,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
        {
          id: 11,
          category: 'Modi optio',
          title: 'Deserunt ipsum impedit amet vitae necessitatibus dignissimos',
          description:
            'Dolorum incidunt facilis nulla. Laboriosam, possimus asperiores atque et voluptatum cumque ex quibusdam rerum expedita deleniti harum doloremque sed eos dolorum placeat ipsa minus reiciendis! Possimus, ad? Omnis sunt obcaecati magnam sequi, odio quisquam nesciunt dolores consequatur, vitae voluptates quos autem? Eos nihil quidem labore necessitatibus.',
          like: 512,
          dislike: 120,
          viewsCount: 2048,
          commentsCount: 50,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
      ],
      popularPetitions: [
        {
          id: 20,
          category: 'Corrupti voluptas',
          title: 'Eos nihil quidem labore necessitatibus odit molestiae',
          description:
            "Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90s, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          like: 64,
          dislike: 20,
          viewsCount: 312,
          commentsCount: 22,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
        {
          id: 21,
          category: 'Dicta possimus amet',
          title:
            'Omnis sunt obcaecati magnam sequi, odio quisquam nesciunt dolores consequatur',
          description:
            "Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90s, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          like: 15,
          dislike: 0,
          viewsCount: 100,
          commentsCount: 0,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
      ],
      underConsiderationPetitions: [
        {
          id: 30,
          category: 'Doloremque sed eos',
          title: 'Sapiente nobis voluptatibus ratione a distinctio facere qui',
          description:
            'Iste minus. Laudantium harum debitis nisi ipsa, repudiandae quae mollitia pariatur, ex sequi aperiam, maiores amet consectetur voluptate. Sapiente nobis voluptatibus ratione a distinctio facere qui. Sequi atque debitis dolore cum fugiat. Dicta possimus amet voluptas veniam repellat corrupti cupiditate sed animi praesentium temporibus! Corrupti voluptas sed recusandae esse',
          like: 83,
          dislike: 96,
          viewsCount: 63,
          commentsCount: 95,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
        {
          id: 31,
          category: 'Bitters hashtag waistcoat fashion axe chia unicorn',
          title:
            'Maxime hic suscipit assumenda quam dolor voluptatem nesciunt maiores?',
          description:
            'Iste minus. Laudantium harum debitis nisi ipsa, repudiandae quae mollitia pariatur, ex sequi aperiam, maiores amet consectetur voluptate. Sapiente nobis voluptatibus ratione a distinctio facere qui. Sequi atque debitis dolore cum fugiat. Dicta possimus amet voluptas veniam repellat corrupti cupiditate sed animi praesentium temporibus! Corrupti voluptas sed recusandae esse.',
          like: 33,
          dislike: 15,
          viewsCount: 62,
          commentsCount: 65,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
      ],
      reviewedPetitions: [
        {
          id: 40,
          category: 'Ex sequi aperiam',
          title: 'Laboriosam, possimus asperiores atque et voluptatum cumque',
          description:
            'Modi debitis ex voluptatem quam voluptate voluptas odio error incidunt distinctio magni sequi nulla tempore? Maxime hic suscipit assumenda quam dolor voluptatem nesciunt maiores? Ipsum animi quam nemo reiciendis aliquid, commodi, amet cum eius nulla minima nesciunt obcaecati cupiditate qui dolores dolor odio doloribus nam consequatur laboriosam culpa quas sapiente facilis.',
          like: 80,
          dislike: 87,
          viewsCount: 43,
          commentsCount: 92,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
        {
          id: 41,
          category: 'Repudiandae quae',
          title:
            'Dolorum incidunt facilis nulla. Laboriosam, possimus asperiores',
          description:
            'Modi debitis ex voluptatem quam voluptate voluptas odio error incidunt distinctio magni sequi nulla tempore? Maxime hic suscipit assumenda quam dolor voluptatem nesciunt maiores? Ipsum animi quam nemo reiciendis aliquid, commodi, amet cum eius nulla minima nesciunt obcaecati cupiditate qui dolores dolor odio doloribus nam consequatur laboriosam culpa quas sapiente facilis.',
          like: 50,
          dislike: 30,
          viewsCount: 31,
          commentsCount: 13,
          author: 'Maxsudov Rovshan Olimjonovich',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.section-title {
  @apply mb-6;
}
</style>
