<template>
    <form action="/Header" method="POST" target="hiddenFrame">
        <input
            name="name"
            type="text"
            placeholder="Your Name"
            autofocus
        >
        <input
            name="email"
            type="email"
            placeholder="your@email.com"
        >
        <input
            name="phone"
            type="tel"
            placeholder="Phone"
        >
    </form>
</template>
<script>
    export default {
      name: 'AddHeader'
    }
</script>