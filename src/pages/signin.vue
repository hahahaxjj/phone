<template>
    <div>
        <signin-header></signin-header>
        <signin-section></signin-section>
        <!--<shopping-bottom></shopping-bottom>-->
      <section-footer></section-footer>
    </div>
</template>

<script>
import SigninHeader from "../components/signin/signinheader"
import SigninSection from "../components/signin/signinsection"
// import ShoppingBottom from "../components/shopping/ShoppingBottom"
import SectionFooter    from  "../components/homepage/SectionFooter";
export default {
    components: {
        SigninHeader,
        SigninSection,
        // ShoppingBottom,
        SectionFooter
    }
}
</script>

<style>

</style>
