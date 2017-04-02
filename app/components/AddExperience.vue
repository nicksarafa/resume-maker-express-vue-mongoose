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
        <input
            name="startMonth"
            type="date"
            placeholder="From Month"
        >
        <input
            name="startYear"
            type="date"
            placeholder="From Year"
        >
        <input
            name="endMonth"
            type="date"
            placeholder="To Month"
        >
        <input
            name="endYear"
            type="date"
            placeholder="To Year"
        >
        <input
            name="description"
            type="text"
            placeholder="Summary"
        >
    </form>
</template>
<script>
    export default {
      name: 'AddExperience',
    }
</script>