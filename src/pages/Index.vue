<template>
  <Layout>
    <article v-for="sauce in $page.sauces.edges" :key="sauce.node.id" class="sauce-list-item">
      <img class="sauce-list-item__image" :src="sauce.node.image" />
      <div>
        <h2><g-link :to="sauce.node.path">{{ sauce.node.name }}</g-link></h2>
        <rating :stars="sauce.node.averageReview " />
        <p>£{{ sauce.node.price }}</p>
      </div>
    </article>
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
query {
  sauces: allSauce {
    edges {
      node {
        id
        path
        name
        image
        price(decimalPlaces: 2)
        averageReview
      }
    }
  }
}
</page-query>


<style>
  .sauce-list-item {
    display: flex;
    padding: 1rem 0;
    border-bottom: 2px solid #eee;
    margin-bottom: 1rem;
  }
  body {
    font-size: 1rem;
  }
  .sauce-list-item__image {
    display: block;
    flex-grow: 0;
    max-width: 100px;
  }
</style>