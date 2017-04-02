<!-- @todo edit placeholders so we're not completley ripping off LinkedIn' -->
<template>
    <form action="/Education" method="POST" target="hiddenFrame" class="educationForm">
        <input
            name="schoolName"
            type="text"
            placeholder="School"
            autofocus
        >
        <input
            name="startYear"
            type="text"
            placeholder="From"
        >
        <input
            name="endYear"
            type="text"
            placeholder="To"
        >
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
            placeholder="extracurriculars"
        >
        <button type="submit">Add Education</button>
    </form>
</template>
<script>
    export default {
      name: 'AddEducation',
    }
</script>