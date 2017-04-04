<template>
  <form action="/Experience" method="POST" target="hiddenFrame">
    <input
      name="organizationName"
      type="text"
      placeholder="Organization"
      autofocus
    >
    <input
      name="title"
      type="text"
      placeholder="Title"
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
    <textarea
      name="description"
      placeholder="Summary"
      rows="4">
    </textarea>
    <!--<button type="submit"></button>-->
</form>
</template>
<script>
  import SelectMonth from './SelectMonth.vue'
  import SelectYear from './SelectYear.vue'

  export default {
    name: 'AddExperience',
    components: {
      SelectMonth,
      SelectYear,
    },
  }
</script>