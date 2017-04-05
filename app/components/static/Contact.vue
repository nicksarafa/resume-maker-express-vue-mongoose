<template>
  <form action="/Contact" method="POST" target="hiddenFrame">
    <input
      name="email"
      type="email"
      placeholder="Email"
    >
    <input
      name="phone"
      type="tel"
      placeholder="Phone"
    >
    <input
      name="website"
      type="text"
      placeholder="Website"
    >
    <input
      name="city"
      type="text"
      placeholder="City"
    >
    <input
      name="state"
      type="text"
      placeholder="State"
    >
    <!--<button type="submit">Save</button>-->
  </form>
</template>
<script>
  export default {
    name: 'Contact'
  }
</script>