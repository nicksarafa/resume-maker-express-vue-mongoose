<template>
  <div>
    <div
      v-for="education in educations"
      :id="education._id"
      :key="education._id"
      class="list-item"
      v-on:click="deleteEducation">
        {{ education.schoolName }}
        {{ education.startMonth }}
        {{ education.startYear }}
        {{ education.endMonth }}
        {{ education.endYear }}
        {{ education.degree }}
        {{ education.fieldOfStudy }}
        {{ education.extracurriculars }}
        {{ education.description }}
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ListEducations',
    computed: mapState(['educations']),
    methods: {
      deleteEducation: function (e) {
        const targetId = e.currentTarget.id
        this.$store.dispatch('DELETE_EDUCATION', targetId)
      }
    },
    mounted: function () {
      this.$store.dispatch('LOAD_EDUCATION_LIST')
    },
  }
</script>
