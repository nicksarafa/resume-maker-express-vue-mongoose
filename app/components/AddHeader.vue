<template>
  <form action="/Header" method="POST" target="hiddenFrame">
    <input
      name="name"
      type="text"
      placeholder="Full Name"
      autofocus
    >
    <input
      name="about"
      type="text"
      placeholder="About you"
    >
    <button type="submit">Save Header</button>
  </form>
</template>
<script>
  export default {
    name: 'AddHeader'
  }
</script>