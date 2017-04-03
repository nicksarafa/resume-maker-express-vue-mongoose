<template>
  <form action="/Header" method="POST" target="hiddenFrame">
    <input
      name="name"
      type="text"
      placeholder="Full Name"
      autofocus
    >
    <input
      name="title"
      type="text"
      placeholder="Your title"
    >
    <input
      name="about"
      type="text"
      placeholder="About you"
    >
  </form>
</template>
<script>
  export default {
    name: 'AddHeader'
  }
</script>