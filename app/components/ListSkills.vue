<template>
    <div class="skill-list">
        <span class="skill">
            <span class="skill-title" v-for="skill in skills">
                {{ skill.name }}
                <a class="skill-tag-remove"></a>
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
          this.$http.get('/Skill').then((response) => {
            this.skills = response.data
          })
        }
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