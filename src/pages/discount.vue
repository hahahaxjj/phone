<template>
    <div class="index">
        <shopping-foot></shopping-foot>
        <discount-header></discount-header>
        <discount-section></discount-section>
        <section-footer></section-footer>
    </div>
</template>

<script>
import ShoppingFoot from "../components/shopping/ShoppingFoot"
import DiscountHeader from "../components/discount/DiscountHeader"
import DiscountSection from "../components/discount/DiscountSection"
import SectionFooter    from  "../components/homepage/SectionFooter";
export default {
    components: {
        ShoppingFoot,
        DiscountHeader,
        DiscountSection,
        SectionFooter
    }
}
</script>

<style>

</style>
