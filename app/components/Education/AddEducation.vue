<template>
  <form>
    <input
      id="schoolName"
      name="schoolName"
      type="text"
      placeholder="School"
      autofocus
    >
    <div class="row">
      <h4>From</h4>
      <div class="inline-dates">
        <select-month selectId="educationStartMonth" selectName="startMonth"></select-month>
        <select-year selectId="educationStartYear" selectName="startYear"></select-year>
      </div>
    </div>
    <div class="row">
      <h4>To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <div class="inline-dates">
        <select-month selectId="educationEndMonth" selectName="endMonth"></select-month>
        <select-year selectId="educationEndYear" selectName="endYear"></select-year>
      </div>
    </div>
    <input
      id="degree"
      name="degree"
      type="text"
      placeholder="Degree"
    >
    <input
      id="fieldOfStudy"
      name="fieldOfStudy"
      type="text"
      placeholder="Field of Study"
    >
    <input
      id="extracurriculars"
      name="extracurriculars"
      type="text"
      placeholder="Extracurricular Activities"
    >
    <textarea
      id="description"
      name="description"
      placeholder="Summary"
      rows="4">
    </textarea>
    <button v-on:click.prevent="addEducation">Save Education</button>
  </form>
</template>
<script>
  import SelectMonth from '../helpers/SelectMonth.vue'
  import SelectYear from '../helpers/SelectYear.vue'

  export default {
    name: 'AddEducation',
    components: {
      SelectMonth,
      SelectYear,
    },
    methods: {
      addEducation: function () {
        const schoolName = document.getElementById('schoolName').value
        const startMonth = document.getElementById('educationStartMonth').value
        const startYear = document.getElementById('educationStartYear').value
        const endMonth = document.getElementById('educationEndMonth').value
        const endYear = document.getElementById('educationEndYear').value
        const degree = document.getElementById('degree').value
        const fieldOfStudy = document.getElementById('fieldOfStudy').value
        const extracurriculars = document.getElementById('extracurriculars').value
        const description = document.getElementById('description').value
        this.$store.dispatch('ADD_EDUCATION', {
          schoolName,
          startMonth,
          startYear,
          endMonth,
          endYear,
          degree,
          fieldOfStudy,
          extracurriculars,
          description,
        })
      }
    }
  }
</script>