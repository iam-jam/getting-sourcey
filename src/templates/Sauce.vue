<template>
  <Layout>
    <section>
      <article class="sauce">
        <h1>{{ $page.sauce.name }}</h1>
        <rating :stars="$page.sauce.averageReview " />
        <img class="sauce__image" :src="$page.sauce.image" />
        <p>£{{ $page.sauce.price }}</p>
      </article>
    </section>

    <section>
      <h2>Reviews</h2>
      <article
        class="review-list-item"
        v-for="review in $page.sauce.belongsTo.edges"
        :key="review.node.id"
      >
        <img class="review-list-item__image" :src="review.node.user.image" />
        <div>
          <rating :stars="review.node.stars" />
          <p class="review-list-item__date">{{ review.node.date }}</p>
          <h3>{{ review.node.review }}</h3>
        </div>
      </article>
    </section>

    <section v-if="$page.sauce.relatedSauces.length > 0">
      <h2>Other sauces you might like...</h2>
      <article
        class="related-sauce-item"
        v-for="sauce in $page.sauce.relatedSauces"
        :key="sauce.id">
        <h3><g-link :to="sauce.path">{{ sauce.name }}</g-link></h3>
        </article>
    </section>
  </Layout>
</template>

<script>
import Rating from '@/components/Rating'
export default {
  components: {
    Rating
  }
}
</script>

<page-query>
query ($id: ID!) {
  sauce(id: $id) {
    name
    image
    price
    averageReview
    relatedSauces {
      name
      image
      path
    }
    belongsTo(
      filter: { typeName: { eq: Review } }
      sortBy: "date"
      order: DESC
    ) {
      edges {
        node {
          ... on Review {
            user {
              name
              image
            }
            date(format: "YYYY-MM-DD")
            stars
            review
          }
        }
      }
    }
  }
}
</page-query>

<style>
.sauce {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sauce__image {
  max-width: 300px;
  height: auto;
  margin-bottom: 2rem;
}
.review-list-item {
  display: flex;
  padding: 1rem 0;
  margin-bottom: 1rem;
}
.review-list-item__image {
  max-width: 100px;
  height: auto;
  flex-grow: 0;
  margin-right: 1rem;
}
.review-list-item__date {
  font-size: 0.9em;
}
</style>