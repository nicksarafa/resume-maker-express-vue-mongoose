<template>
  <div>
    <div
      v-for="skill in skills"
      :id="skill._id"
      :key="skill._id"
      class="list-item"
      v-on:click="deleteSkill">
        {{ skill.name }}
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ListSkills',
    computed: mapState(['skills']),
    methods: {
      deleteSkill: function (e) {
        const targetId = e.currentTarget.id
        this.$store.dispatch('DELETE_SKILL', targetId)
      }
    },
    mounted: function () {
      this.$store.dispatch('LOAD_SKILL_LIST')
    },
  }
</script>