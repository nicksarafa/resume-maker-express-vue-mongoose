<template>
  <div>
    <div
      v-for="experience in experiences"
      :id="experience._id"
      :key="experience._id"
      class="list-item"
      v-on:click="deleteExperience">
        {{ experience.organizationName }}
        {{ experience.title }}
        {{ experience.startMonth }}
        {{ experience.endYear }}
        {{ experience.endMonth }}
        {{ experience.endYear }}
        {{ experience.description }}
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ListExperiences',
    computed: mapState(['experiences']),
    methods: {
      deleteExperience: function (e) {
        const targetId = e.currentTarget.id
        this.$store.dispatch('DELETE_EXPERIENCE', targetId)
      }
    },
    mounted: function () {
      this.$store.dispatch('LOAD_EXPERIENCE_LIST')
    },
  }
</script>
