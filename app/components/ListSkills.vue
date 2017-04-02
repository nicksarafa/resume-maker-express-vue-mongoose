<template>
    <div class="skill-list">
        <span class="skill">
            <span
                class="skill-title"
                v-for="skill in skills"
                :key="skill._id"
            >
                {{ skill.name }}
                <a
                    class="skill-tag-remove"
                    @click="deleteSkill(skill._id)"
                />
            </span>
        </span>
    </div>
</template>
<script>
    export default {
      name: 'ListSkills',
      props: ['skills'],
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
    .skill-list {
        text-align: start;
    }

    .skill-tag-remove {
        cursor: pointer;
        font-weight: bold;
    }

    .skill a::before {
        content: " X";
    }
</style>