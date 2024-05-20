<template>
  <h1>Navigation</h1>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink> <br />
    <RouterLink to="/expenses">Go to EXP</RouterLink> <br />
    <RouterLink to="/pokedex">Go to Pokedex</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
