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
  export default {
    name: 'AddSkill',
    computed: {
      skills () {
        return this.$store.state.skills
      }
    },
    methods: {
      addSkill (e) {
        var name = e.target.value
        if (name.trim()) {
          this.$http.post('/Skill', { name })
          this.$store.commit('addSkill', { name })
        }
        e.target.value = ''
      },
    },
  }
</script>