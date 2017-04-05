<template>
  <form target="hiddenFrame">
    <input
      autofocus
      autocomplete="off"
      placeholder="Skill"
      name="name"
      type="text"
      v-on:keyup.enter="addSkill"
    >
  </form>
</template>
<script>
  export default {
    name: 'AddSkill',
    methods: {
      addSkill: function (e) {
        const name = e.target.value
        this.$store.dispatch('ADD_NEW_SKILL', { name })
        e.target.value = ''
      },
    },
  }
</script>