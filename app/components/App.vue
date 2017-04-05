<template>
  <div>
    <navigation></navigation>
    <section>
      <titler :title="titles[0]"></titler>
      <add-header></add-header>

      <titler :title="titles[1]"></titler>
      <add-experience v-for="n in workCount" :key="n"></add-experience>
      <button class="add" @click.prevent="workCount++">Add Work</button>

      <titler :title="titles[2]"></titler>
      <add-education v-for="n in educationCount" :key="n"></add-education>
      <button class="add" @click.prevent="educationCount++">Add Education</button>

      <titler :title="titles[4]"></titler>
      <add-skill v-for="n in skillCount" :key="n"></add-skill>
      <list-skills></list-skills>

      <titler :title="titles[3]"></titler>
      <add-language v-for="n in languageCount" :key="n"></add-language>
      <button class="add" @click.prevent="languageCount++">Add Language</button>

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
    data() {
      return {
        educationCount: 1,
        languageCount: 1,
        skillCount: 1,
        workCount: 1,
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
  * {
    -webkit-transition: all 0.2s ease;
    -moz-transition:    all 0.2s ease;
    -ms-transition:     all 0.2s ease;
    -o-transition:      all 0.2s ease;
  }

  :focus { outline: -webkit-focus-ring-color none; }

  body {
    background: rgba(241, 245, 247, .85);
    color: rgba(41, 47, 51, 0.8);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 2.5em;
  }

  button {
    background: rgba(241, 245, 247, .85);
    border-radius: 0;
    border: 0;
    box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.10);
    color: rgba(41, 47, 51, 0.6);
    cursor: pointer;
    font-size: inherit;
    font-weight: bold;
    flex: 1;
    padding: 1em 1.5em;
    outline: none;
    transition: all 0.4s ease-in-out;
  }

  button:focus,
  button:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    outline: none;
  }

  button:focus { outline: #EBEDF0 auto 0.2em; }
  button.add { margin-top: 1em; }
  button.remove {
    align-self: flex-end;
    background-color: #c9cccf;
    border-radius: 2em;
    color: #fff;
    font-size: 1.4em;
    height: 1em;
    line-height: 0.1em;
    margin-right: -1.25em;
    margin-top: -0.5em;
    padding: 0;
    width: 1em;
  }
  button.preview { margin-right: 0.85em; }
  button.save {}

  footer {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    line-height: 5.8461538462em;
    padding-left: 5.8461538462em;
    padding-right: 5.8461538462em;
  }

  form {
    align-items: stretch;
    border: 0.1em solid rgba(206, 206, 206, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3em;
    padding: 0 1em;
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
    justify-content: flex-start;
    padding-top: 8.8461538462em;
  }

  .inline-dates {
    align-items: center;
    align-content: flex-end;
    display: flex;
    flex: 1;
    height: 4em;
    justify-content: space-around;
  }

  input {
    background: transparent;
    border: none;
    font-family: inherit;
    font-size: inherit;
    height: 3em;
    outline: none;
    padding: 0;
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
    z-index: 1;
  }

  option {
    background-color: rgba(241, 245, 247, .85);
    color: inherit;
    display: block;
    font-size: 1em;
    font-weight: normal;
    min-height: 1.2em;
    padding: 1em;
    white-space: pre;
  }

  option, select { cursor: pointer; }

  .row {
    align-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
  }

  section {
    align-items: stretch;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 610px;
    width: 610px;
  }

  select {
    background-color: transparent;
    border-color: transparent;
    border-image: initial;
    border-radius: 0;
    border-style: none;
    border-width: 0;
    color: inherit;
    font-size: 1em;
    font-weight: normal;
    height: 4em;
  }

  .btn-skill {
    margin-right: 0.65em;
    margin-top: 0.65em;
  }

  .btn-skill:hover,
  .btn-skill:focus {
    background: rgba(205, 92, 92, 0.1);
    box-shadow: 0 4px 13px rgba(205, 92, 92, 0.25);
  }

  textarea {
    -webkit-appearance: textarea;
    -webkit-rtl-ordering: logical;
    background-color: transparent;
    border: none;
    cursor: auto;
    flex-direction: column;
    font: inherit;
    line-height: 1.5em;
    margin: 1em 0;
    padding: 0;
    resize: auto;
    user-select: text;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>