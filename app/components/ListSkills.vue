<template>
    <ul>
        <li v-for="skill in skills">{{ skill.name }}&nbsp;</li>
    </ul>
</template>
<script>
    export default {
      name: 'ListSkills',
      props: ['skills'],
      created: function() {
        this.$http.get('/Skill').then((response) => {
          this.skills = response.data
        })
      }
    }
</script>