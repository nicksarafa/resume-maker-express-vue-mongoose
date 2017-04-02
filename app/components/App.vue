<template>
    <div class="content">
      <titler :title="titles[0]"></titler>
      <add-header></add-header>
      <titler :title="titles[1]"></titler>
      <add-experience></add-experience>
      <titler :title="titles[2]"></titler>
      <add-education></add-education>
      <titler :title="titles[3]"></titler>
      <add-language></add-language>
      <titler :title="titles[4]"></titler>
      <add-skill></add-skill>
      <list-skills></list-skills>
      <titler :title="titles[5]"></titler>
      <add-contact></add-contact>
      <hidden-frame></hidden-frame>
  </div>
</template>
<script>
  import AddSkill from './AddSkill.vue'
  import ListSkills from './ListSkills.vue'
  import AddLanguage from './AddLanguage.vue'
  import AddEducation from './AddEducation.vue'
  import AddExperience from './AddExperience.vue'
  import AddHeader from './AddHeader.vue'
  import HiddenFrame from './HiddenFrame.vue'
  import Titler from './Titler.vue'
  import AddContact from './AddContact.vue'

  export default {
    name: 'app',
    components: {
      HiddenFrame,
      AddHeader,
      AddExperience,
      AddEducation,
      ListSkills,
      AddSkill,
      AddLanguage,
      Titler,
      AddContact,
    },
    data: function () {
      return {
        titles: [
          'General',
          'Work Experience',
          'Education',
          'Language',
          'Skill',
          'Contact',
        ],
      }
    },
  }
</script>
<style>
  body {
    color: rgb(41, 47, 51);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
  }

  input {
    border-bottom: 0.15em solid #EBEDF0;
    border-left: none;
    border-right: none;
    border-top: none;
    font-family: inherit;
    font-size: inherit;
    margin: 1em 0;
    outline: none;
    padding: .5em .5em;
  }

  button {
    appearance: none;
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    line-height: 1em;
    padding: 1em 2em;
  }

  form {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .flex-row {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .content {
    margin-left: auto;
    margin-right: auto;
    width: 610px;
  }
</style>