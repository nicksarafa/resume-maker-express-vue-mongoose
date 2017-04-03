<template>
  <div class="skill-list">
    <span v-for="skill in skills" :key="skill._id" class="skill">
      <button class="btn-skill" @click="deleteSkill(skill._id)">{{ skill.name }}</button>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'ListSkills',
    data() {
      return {
        skills: 'skills'
      }
    },
    methods: {
      getAllSkills: function () {
        this.$http.get('/Skill', {
          before(request) {
            if (this.previousRequest) {
              this.previousRequest.abort()
            }
            this.previousRequest = request
          }
        }).then((response) => {
          this.skills = response.data
        }, response => {
          console.log(response)
        })
      },

      deleteSkill: function (id) {
        this.$http.delete('/Skill/' + id)
          .then(response => {
            this.getAllSkills()
          }, response => {
            console.log('Error deleting /Skill/' + id)
          })
      },
    },
    mounted: function() {
      this.getAllSkills()
    }
  }
</script>
<style>
  .btn-skill:hover,
  .btn-skill:focus {
    background: rgba(205, 92, 92, 0.1);
    box-shadow: 0 4px 13px rgba(205, 92, 92, 0.25);
  }
  .skill { margin-right: 0.65em; }
  .skill-list { text-align: start; }
</style>