<template>
    <div>
        <navigation></navigation>
        <section>
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
        </section>
        <footer-section></footer-section>
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
  import Navigation from './Navigation.vue'
  import FooterSection from './FooterSection.vue'

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
      Navigation,
      FooterSection,
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
    background-color: rgba(241, 245, 247, .85);
    color: rgb(41, 47, 51);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.5em;
  }

  input {
    background: transparent;
    border-bottom: 0.15em solid #EBEDF0;
    border-left: none;
    border-right: none;
    border-top: none;
    font-family: inherit;
    font-size: inherit;
    margin: 1em 0;
    outline: none;
    padding: .5em 0;
  }

  button {
    border-radius: 0;
    border: 0;
    box-shadow: none;
    color: rgba(41, 47, 51, 0.7);
    cursor: pointer;
    font-size: 0.85em;
    padding: 1em 1.5em;
  }

  button:focus {
    outline: #EBEDF0 auto 0.2em;
  }

  button.preview {
      background: #F6F4EF;
      margin-right: 0.85em;
  }

  button.save {
      background: #EFF6F1;
  }

  form {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    color: rgba(41, 47, 51, 0.4);
    font-size: 0.85em;
    font-weight: normal;
    text-transform: uppercase;
  }

  h4 {
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
    -webkit-margin-end: 0;
    -webkit-margin-start: 0;
    color: rgba(41, 47, 51, 0.4);
    font-size: 0.75em;
    font-weight: bold;
    text-transform: uppercase;
  }

  h4.title {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding-bottom: 1.6153846154em;
    padding-top: 6.8461538462em;
  }

  section {
    margin-left: auto;
    margin-right: auto;
    margin-top: 6.8461538462em;
    max-width: 610px;
  }

  nav {
    align-items: center;
    align-self: stretch;
    background-color: rgba(241, 245, 247, .85);
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    left: 0;
    line-height: 5.8461538462em;
    padding-left: 5.8461538462em;
    padding-right: 5.8461538462em;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
  }

  footer {
    align-items: center;
    align-self: stretch;
    background-color: rgba(241, 245, 247, .85);
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    line-height: 5.8461538462em;
    padding-left: 5.8461538462em;
    padding-right: 5.8461538462em;
  }

  .row {
    align-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
  }

  .inline-dates {
    flex: 1;
    align-content: flex-end;
    display: flex;
    justify-content: space-around;
  }
</style>