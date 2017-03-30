<template>
    <div>

      <!-- Header <form /> -->
      <!-- <form /> targets hiddenFrame to prevent uri redirects -->
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

      <!-- Education <form /> -->
      <!-- <form /> targets hiddenFrame to prevent uri redirects -->
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
      </form>

      <!-- Post Languages <form /> -->
      <form action="/Language" method="POST" target="hiddenFrame">
        <input
          name="name"
          type="text"
          placeholder="Language"
        >
        <select>
          <option value="Basic">Basic</option>
          <option value="Conversant">Conversant</option>
          <option value="Proficent">Proficent</option>
          <option value="Fluent">Fluent</option>
          <option value="Native or Bilingual">Native or Bilingual</option>
        </select>
      </form>

      <!-- Post Skill <form /> -->
      <form action="/Skill" method="POST" target="hiddenFrame">
        <input
          name="name"
          type="text"
          placeholder="Skill"
        >
      </form>

      <!-- Hidden iframe for <from /> to target in order to prevent uri redirects -->
      <iframe name="hiddenFrame" style="display: none"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: {},
    methods: {},
  }
</script>

<style>
  body {
    font-size: 13px;
    text-align: center;
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
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;
  }

  form > input {
    display: block;
  }
</style>
