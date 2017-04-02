<template>
    <h4>{{ title }}</h4>
</template>
<script>
    export default {
      name: 'Titler',
      props: ['title']
    }
</script>
<style>
    h4 {
        -webkit-margin-after: 0em;
        -webkit-margin-before: 0em;
        -webkit-margin-end: 0px;
        -webkit-margin-start: 0px;
        color: rgba(41, 47, 51, 0.4);
        display: flex;
        flex: 1;
        font-size: 0.75em;
        font-weight: bold;
        justify-content: flex-end;
        padding-bottom: 1.6153846154em;
        padding-top: 6.8461538462em;
        text-transform: uppercase;
    }
</style>