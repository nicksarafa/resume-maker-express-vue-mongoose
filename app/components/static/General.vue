<template>
  <form action="/General" method="POST" target="hiddenFrame">
    <input
      name="name"
      type="text"
      placeholder="Full Name"
      autofocus
    >
    <textarea
      name="about"
      placeholder="About you"
      rows="4">
    </textarea>
  </form>
</template>
<script>
  export default {
    name: 'General'
  }
</script>