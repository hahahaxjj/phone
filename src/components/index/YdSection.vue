<template>
  <div>
    <section-swiper></section-swiper>
    <section-nav></section-nav>
    <section-buy></section-buy>
    <section-poster></section-poster>
    <section-recommend></section-recommend>
    <section-operation></section-operation>
    <section-feature></section-feature>
    <section-like></section-like>
    <section-footer></section-footer>
  </div>

</template>

<script>
  import SectionSwiper    from  "./SectionSwiper";
  import SectionNav       from  "./SectionNav";
  import SectionBuy       from  "./SectionBuy";
  import SectionPoster    from  "./SectionPoster";
  import SectionRecommend from  "./SectionRecommend";
  import SectionOperation from  "./SectionOperation";
  import SectionFeature   from  "./SectionFeature";
  import SectionLike      from  "./SectionLike";
  import SectionFooter    from  "./SectionFooter"

  export default {
    name: "YdSection",
    mounted () {
      window.addEventListener('scroll', this.handleScroll)

    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
    },
    components: {
      SectionSwiper,
      SectionNav,
      SectionBuy,
      SectionPoster,
      SectionRecommend,
      SectionOperation,
      SectionFeature,
      SectionLike,
      SectionFooter,
    },

    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
