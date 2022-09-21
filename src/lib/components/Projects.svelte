<script lang="ts">
  import SingleProject from '$lib/components/SingleProject.svelte';
  import dtt from '$lib/assets/dtt.png';
  import yourtodo from '$lib/assets/your-todo.png';
  import noisegenerator from '$lib/assets/noise-generator.png';
  import { inview } from 'svelte-inview';
  import anime from 'animejs';
</script>

<h1 id="projects" class="mb-8 heading-lg scroll-m-8">Zopár mojich vlastných fušiek:</h1>
<div
  use:inview={{ unobserveOnEnter: true, rootMargin: '24px' }}
  on:enter={(event) => {
    if (event.detail.inView) {
      anime({
        targets: 'article',
        opacity: [0, 1],
        duration: 2000,
        delay: anime.stagger(300),
      });
    }
  }}
  class="grid grid-cols-1 auto-rows-fr gap-8 md:grid-cols-3"
>
  <SingleProject
    imgSrc={dtt}
    title="Dodge The Things"
    titleBg="bg-neu-red"
    href="https://play.google.com/store/apps/details?id=io.MartinMichalik.DodgetheThings"
  />
  <SingleProject
    imgSrc={yourtodo}
    title="Your Todo"
    titleBg="bg-neu-green"
    href="https://github.com/MatiniX/your-todo"
  />
  <SingleProject
    imgSrc={noisegenerator}
    title="Noise Generator"
    titleBg="bg-neu-orange"
    href="https://github.com/MatiniX/Noise-Generator"
  />
</div>
