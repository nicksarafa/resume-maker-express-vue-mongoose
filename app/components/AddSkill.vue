<template>
  <form target="hiddenFrame">
    <input
      autofocus
      autocomplete="off"
      placeholder="Skill"
      name="name"
      type="text"
      @keyup.enter="addSkill"
    >
  </form>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'AddSkill',
    methods: {
      addSkill: function (e) {
        var name = e.target.value
        this.$store.dispatch('ADD_NEW_SKILL', { name })
      },
    },
  }
</script>