<template>
    <div>
      <!-- Header Form -->
      <!-- Form targets hiddenFrame to prevent uri redirects -->
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
        <input
          name="university"
          type="text"
          placeholder="Where did you attend University?"
        >
        <button type="submit">Submit</button>
      </form>

      <!-- Education Form -->
      <!-- Form targets hiddenFrame to prevent uri redirects -->
      <!-- @todo edit placeholders so we're not completley ripping off LinkedIn' -->
      <form action="/Education" method="POST" target="hiddenFrame">
        <input
          name="schoolName"
          type="text"
          placeholder="School"
          autofocus
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
          name="startYear"
          type="date"
          placeholder="From Year"
        >
        <input
          name="endYear"
          type="date"
          placeholder="To Year (or expected)"
        >
        <input
          name="Description"
          type="text"
          placeholder="Activities and societies"
        >
        <button type="submit">Submit</button>
      </form>

      <!-- Post Skill <form /> -->
      <form action="/Skill" method="POST" target="hiddenFrame">
        <input
          name="name"
          type="text"
          placeholder="Skill"
        >
        <button type="Submit">Post New Skill</button>
      </form>

      <!-- Hidden iframe for <from /> to target in order to prevent uri redirects -->
      <iframe name="hiddenFrame" style="display: none"></iframe>

    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  text-align: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
