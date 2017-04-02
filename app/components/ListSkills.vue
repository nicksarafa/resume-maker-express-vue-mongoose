<template>
    <ul>
        <li v-for="skill in skills">{{ skill }}</li>
    </ul>
</template>
<script>
    export default {
      name: 'ListSkills',
      props: ['skills'],
      data: {
        skills: [1, 2, 3],
      },
      created: function() {
        this.$http.get('/Skill').then((response) => {
          response.data.forEach(function(object) {
            object.completed = false
          })
          this.skills = response.data
        }, (response) => {
          alert(response);
        })
      }
    }
</script>