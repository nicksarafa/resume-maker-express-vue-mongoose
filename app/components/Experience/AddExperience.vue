<template>
  <form>
    <input
      id="experienceOrganizationName"
      name="organizationName"
      type="text"
      placeholder="Organization"
      autofocus
    >
    <input
      id="experienceTitle"
      name="title"
      type="text"
      placeholder="Title"
    >
    <div class="row">
      <h4>From</h4>
      <div class="inline-dates">
        <select-month selectId="experienceStartMonth" selectName="startMonth"></select-month>
        <select-year selectId="experienceStartYear" selectName="startYear"></select-year>
      </div>
    </div>
    <div class="row">
      <h4>To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      <div class="inline-dates">
        <select-month selectId="experienceEndMonth" selectName="endMonth"></select-month>
        <select-year selectId="experienceEndYear" selectName="endYear"></select-year>
      </div>
    </div>
    <textarea
      id="experienceDescription"
      name="description"
      placeholder="Summary"
      rows="4">
    </textarea>
    <button type="submit" v-on:click.prevent="addExperience"></button>
</form>
</template>
<script>
  import SelectMonth from '../helpers/SelectMonth.vue'
  import SelectYear from '../helpers/SelectYear.vue'

  export default {
    name: 'AddExperience',
    components: {
      SelectMonth,
      SelectYear,
    },
    methods: {
      addExperience: function () {
        const organizationName = document.getElementById('experienceOrganizationName').value
        const title = document.getElementById('experienceTitle').value
        const startMonth = document.getElementById('experienceStartMonth').value
        const startYear = document.getElementById('experienceStartYear').value
        const endMonth = document.getElementById('experienceEndMonth').value
        const endYear = document.getElementById('experienceEndYear').value
        const description = document.getElementById('experienceDescription').value
        this.$store.dispatch('ADD_EXPERIENCE', {
          organizationName,
          title,
          startMonth,
          startYear,
          endMonth,
          endYear,
          description,
        })
      }
    }
  }
</script>