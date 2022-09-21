<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import RandomBox from '$lib/components/RandomBox.svelte';
  import waveTop from '$lib/assets/wave-top.svg';
  import waveSecond from '$lib/assets/wave-2.svg';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<img src={waveTop} alt="" class="absolute  top-0 right-0" />
<Header />
<main class="px-4 lg:w-3/5 lg:px-0 mx-auto relative z-10">
  <HeroSection />
  <Box />
  <RandomBox />
  <Projects />
</main>
<img
  src={waveSecond}
  alt=""
  class="absolute z-0 left-0 w-11/12 top-[72rem] md:top-[100rem] md:w-[65%]"
/>
<Footer />

<style>
</style>
