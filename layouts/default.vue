<template>
  <div id="app">
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/611064db649e0a0a5cd028f3/1fck0junm';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
    </script>
    <!--End of Tawk.to Script-->
    <TemplatesHeader />

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return { }
  },

  mounted () {}
}
</script>

<style>
html{
  min-height: 100vh;
}
</style>
