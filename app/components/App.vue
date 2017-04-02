<template>
    <div class="content">
      <!-- Header <form /> -->
      <!-- <form /> targets hiddenFrame to prevent uri redirects -->
      <h3>Basic</h3>
      <form action="/Header" method="POST" target="hiddenFrame">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          autofocus
        >
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
        >
        <input
          name="phone"
          type="tel"
          placeholder="***-***-****"
        >
      </form>

      <!-- Experience <form /> -->
      <!-- <form /> targets hiddenFrame to prevent uri redirects -->
      <h3>Experience</h3>
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

      <add-education></add-education>
      <add-language></add-language>
      <add-skill></add-skill>
      <list-skills></list-skills>

      <!-- Hidden iframe for <from /> to target in order to prevent uri redirects -->
      <iframe name="hiddenFrame" style="display: none"></iframe>
  </div>
</template>

<script>
  import AddSkill from './AddSkill.vue'
  import ListSkills from './ListSkills.vue'
  import AddLanguage from './AddLanguage.vue'
  import AddEducation from './AddEducation.vue'

  export default {
    components: {
      AddEducation, ListSkills,
      AddSkill,
      AddLanguage,
    },
    name: 'app',
  }
</script>

<style>

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }

  input {
    margin: 1em 0;
    font-family: inherit;
    font-size: inherit;
    padding: .5em 1em;
    border: none;
    border-bottom: 0.2em solid #4fc08d;
    outline: none;
  }

  button {
    cursor: pointer;
    display: inline-block;
    padding: 1em 2em;
    line-height: 1em;
    appearance: none;
    box-shadow: none;
    border-radius: 0;
  }

  form {
    align-items: stretch;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h3 {
    padding-left: 1em;
  }

  .flex-row {
    flex-direction: row;
    align-items: center;
  }

  .content {
    margin-left: auto;
    margin-right: auto;
    width: 610px;
  }

</style>
