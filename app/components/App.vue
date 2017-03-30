<template>
    <div>

      <!-- Header <form /> -->
      <!-- <form /> targets hiddenFrame to prevent uri redirects -->
      <form action="/Header" method="POST" target="hiddenFrame">
        <input
          name="name"
          placeholder="Your Name"
          type="text"
          autofocus
        >
        <input
          name="email"
          placeholder="your@email.com"
          type="email"
        >
        <input
          name="phone"
          placeholder="***-***-****"
          type="tel"
        >
      </form>

      <!-- Experience <form /> -->
      <form action="/Experience" method="POST" target="hiddenFrame">
        <input
          name="organizationName"
          placeholder="Organization Name"
          type="text"
        >
        <input
          name="title"
          placeholder="Title"
          type="text"
        >
        <input
          name="startMonth"
          placeholder="Start Month"
          type="text"
        >
        <input
          name="startYear"
          placeholder="Start Year"
          type="text"
        >
        <input
          name="endMonth"
          placeholder="End Month"
          type="text"
        >
        <input
          name="endYear"
          placeholder="End Year"
          type="text"
        >
        <input
          name="description"
          placeholder="Description"
          type="text"
        >
      </form>

      <!-- Education <form /> -->
      <!-- <form /> targets hiddenFrame to prevent uri redirects -->
      <!-- @todo edit placeholders so we're not completley ripping off LinkedIn' -->
      <form action="/Education" method="POST" target="hiddenFrame">
        <input
          name="schoolName"
          placeholder="School"
          type="text"
          autofocus
        >
        <input
          name="degree"
          placeholder="Degree"
          type="text"
        >
        <input
          name="fieldOfStudy"
          placeholder="Field of Study"
          type="text"
        >
        <input
          name="startYear"
          placeholder="From Year"
          type="text"
        >
        <input
          name="endYear"
          placeholder="To Year (or expected)"
          type="text"
        >
        <input
          name="Description"
          placeholder="Activities and societies"
          type="text"
        >
      </form>

      <!-- Post Languages <form /> -->
      <form action="/Language" method="POST" target="hiddenFrame">
        <input
          name="name"
          placeholder="Language"
          type="text"
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
          placeholder="Skill"
          type="text"
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
    align-self: center;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>