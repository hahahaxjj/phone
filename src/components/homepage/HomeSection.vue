<template>
  <div>
    <section-center></section-center>
    <section-nav></section-nav>
    <section-footer></section-footer>
  </div>

</template>

<script>
  import SectionCenter    from  "./SectionCenter"
  import SectionNav       from  "./SectionNav";
  import SectionFooter    from  "./SectionFooter";


  export default {
    name: "HomeSection",
    props:["lists"],

    components: {
      SectionCenter,
      SectionNav,
      SectionFooter,

    },

    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
