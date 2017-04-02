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
                <input
                    name="startMonth"
                    type="text"
                    placeholder="Month"
                >
                <input
                    name="startYear"
                    type="text"
                    placeholder="Year"
                >
            </div>
        </div>
        <div class="row">
            <h4>To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
            <div class="inline-dates">
                <input
                    name="endMonth"
                    type="text"
                    placeholder="Month"
                >
                <input
                    name="endYear"
                    type="text"
                    placeholder="Year"
                >
            </div>
        </div>
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