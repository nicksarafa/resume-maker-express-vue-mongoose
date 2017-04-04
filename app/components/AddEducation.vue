<template>
  <div>
    <form action="/Education" method="POST" target="hiddenFrame" class="educationForm">
      <remove-component></remove-component>
      <input
          name="schoolName"
          type="text"
          placeholder="School"
          autofocus
      >
      <div class="row">
        <h4>From</h4>
        <div class="inline-dates">
          <select-month selectName="startMonth"></select-month>
          <select-year selectName="startYear"></select-year>
        </div>
      </div>
      <div class="row">
        <h4>To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
        <div class="inline-dates">
          <select-month selectName="endMonth"></select-month>
          <select-year selectName="endYear"></select-year>
        </div>
      </div>
      <input
          name="degree"
          type="text"
          placeholder="Degree"
      >
      <input
          name="fieldOfStudy"
          type="text"
          placeholder="Field of Study"
      >
      <input
          name="extracurriculars"
          type="text"
          placeholder="Extracurricular Activities"
      >
      <textarea
          name="description"
          placeholder="Summary"
          rows="4">
    </textarea>
      <!--<button type="submit">Add Education</button>-->
    </form>
  </div>
</template>
<script>
  import SelectMonth from './SelectMonth.vue'
  import SelectYear from './SelectYear.vue'
  import RemoveComponent from './RemoveComponent.vue'

  export default {
    name: 'AddEducation',
    components: {
      RemoveComponent,
      SelectMonth,
      SelectYear,
    },
  }
</script>