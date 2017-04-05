<template>
  <div class="row">
    <input
      id="languageNameInput"
      name="name"
      type="text"
      placeholder="Add Language"
      autocomplete="off"
      style="flex: 1;"
      v-on:keyup.enter="addLanguage"
    >
    <select
      name="proficiency"
      id="dropSelectLanguage"
      v-on:change="addLanguage">
        <option value="">Level</option>
        <option value="Basic">Basic</option>
        <option value="Conversant">Conversant</option>
        <option value="Proficient">Proficient</option>
        <option value="Fluent">Fluent</option>
        <option value="Native or Bilingual">Native or Bilingual</option>
    </select>
  </div>
</template>
<script>
  export default {
    name: 'AddLanguage',
    methods: {
      addLanguage() {
        let name = document.getElementById('languageNameInput').value
        let proficiency = document.getElementById('dropSelectLanguage').value
        this.$store.dispatch('ADD_LANGUAGE', { name, proficiency })
      }
    },
  }
</script>