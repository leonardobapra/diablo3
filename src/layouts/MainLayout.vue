<template>
  <div class="container">
    <HeaderBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar/HeaderIndex";
import FooterBar from "@/components/FooterBar/FooterIndex";
export default {
  name: "MainLayout",
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>
