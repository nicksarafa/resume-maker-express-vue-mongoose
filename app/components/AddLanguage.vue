<template>
    <form id="languageForm" target="hiddenFrame" class="row">
        <input
            id="languageNameInput"
            name="name"
            type="text"
            placeholder="Add Language"
            autocomplete="off"
        >
        <select name="proficiency" form="languageForm" id="dropSelectLanguage">
            <option value="">Language</option>
            <option value="Basic">Basic</option>
            <option value="Conversant">Conversant</option>
            <option value="Proficient">Proficient</option>
            <option value="Fluent">Fluent</option>
            <option value="Native or Bilingual">Native or Bilingual</option>
        </select>
        <button type="submit" @click="addLanguage">Add</button>
    </form>
</template>
<script>
    export default {
      name: 'AddLanguage',
      methods: {
        addLanguage() {
          let name = document.getElementById('languageNameInput').value
          let proficiency = document.getElementById('dropSelectLanguage').value
          this.$http.post('/Language', { name, proficiency })
        }
      },
    }
</script>