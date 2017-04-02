<!-- @todo edit placeholders so we're not completley ripping off LinkedIn' -->
<template>
    <form action="/Education" method="POST" target="hiddenFrame" class="educationForm">
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
        <input
            name="description"
            type="text"
            placeholder="Summary"
        >
        <button type="submit">Add Education</button>
    </form>
</template>
<script>
    import SelectMonth from './SelectMonth.vue'
    import SelectYear from './SelectYear.vue'

    export default {
      name: 'AddEducation',
      components: {
        SelectMonth,
        SelectYear,
      },
    }
</script>