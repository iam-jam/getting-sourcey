<template>
  <div class="container">
    <header>
      <g-link to="/">Saucey reviews</g-link>
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<style>
.container {
  max-width: 650px;
  margin: 0 auto;
}
body {
  font-family: Rubik;
}
main {
  padding-bottom: 3rem;
}
header {
  font-family: Pacifico;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
a {
  text-decoration: none;
  color: inherit;
}

h1,
h2 {
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter {
  opacity: 0;
}
</style>