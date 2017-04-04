<template>
  <form action="/Header" method="POST" target="hiddenFrame">
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
    <!--<button type="submit">Save Header</button>-->
  </form>
</template>
<script>
  export default {
    name: 'AddHeader'
  }
</script>