<template>
  <div class="skill-list">
    <button
      v-for="skill in skills"
      :id="skill._id"
      :key="skill._id"
      class="btn-skill"
      v-on:click="deleteSkill">
        {{ skill.name }}
    </button>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'ListSkills',
    computed: mapState(['skills']),
    mounted: function () {
      this.$store.dispatch('LOAD_SKILL_LIST')
    },
    methods: {
      deleteSkill: function (e) {
        const targetId = e.currentTarget.id
        this.$store.dispatch('DELETE_SKILL', targetId)
      }
    },
  }
</script>