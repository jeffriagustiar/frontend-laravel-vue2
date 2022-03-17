<template>
  <div class="home">
    <HeaderC />
    <HeroC />
    <BannerC />
    <InstaC />
    <!-- <PartnerC /> -->
    <FooterC />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderC from '@/components/HeaderC.vue'
import HeroC from '@/components/HeroC.vue'
import BannerC from '@/components/BannerC.vue'
import InstaC from '@/components/InstaC.vue'
// import PartnerC from '@/components/PartnerC.vue'
import FooterC from '@/components/FooterC.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    HeaderC,
    HeroC,
    BannerC,
    InstaC,
    // PartnerC,
    FooterC
  }
}
</script>
