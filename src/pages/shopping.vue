<template>
<div class="index">
    <yd-header></yd-header>
    <shopping-section></shopping-section>
    <shoppingyw></shoppingyw>
    <shopping-foot></shopping-foot>
    <section-footer></section-footer>
</div>

</template>

<script>
//底部
import YdHeader  from  "../components/index/YdHeader"
import ShoppingSection from "../components/shopping/ShoppingSection"
import ShoppingFoot from "../components/shopping/ShoppingFoot"
import Shoppingyw from "../components/shopping/Shoppingyw"
import SectionFooter    from  "../components/homepage/SectionFooter";
export default {
    components: {
        YdHeader,
        ShoppingFoot,
        ShoppingSection,
        Shoppingyw,
        SectionFooter
    }
}
</script>

<style>

</style>
