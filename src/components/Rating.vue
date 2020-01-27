<template>
  <div class="rating">
    <span v-for="n in 5" :key="n">
      <span v-if="n <= stars" class="star--checked">★</span>
      <span v-else>☆</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
.star--checked {
  color: darkgoldenrod;
}
</style>