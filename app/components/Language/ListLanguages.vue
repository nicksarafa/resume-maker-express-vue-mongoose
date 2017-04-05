<template>
  <div class="skill-list">
    <div
      v-for="language in languages"
      :id="language._id"
      :key="language._id"
      class="list-item"
      v-on:click="deleteLanguage">
        <span> {{ language.name }} </span>
        <br>
        <span>{{ language.proficiency }}</span>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ListLanguages',
    computed: mapState(['languages']),
    methods: {
      deleteLanguage: function (e) {
        const targetId = e.currentTarget.id
        this.$store.dispatch('DELETE_LANGUAGE', targetId)
      }
    },
    mounted: function () {
      this.$store.dispatch('LOAD_LANGUAGE_LIST')
    },
  }
</script>