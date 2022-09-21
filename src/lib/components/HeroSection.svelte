<script lang="ts">
  import { onMount } from 'svelte';
  import Underline from './svgs/Underline.svelte';
  import anime from 'animejs';

  onMount(() => {
    let timeline = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });

    timeline.add({
      targets: '#welcome',
      translateY: [-100, 0],
      opacity: [0, 1],
    });

    timeline.add(
      {
        targets: '#name',
        translateX: [-300, 0],
        opacity: [0, 1],
      },
      '-=500'
    );

    timeline.add(
      {
        targets: '#sub',
        translateX: [400, 0],
        opacity: [0, 1],
      },
      800
    );

    timeline.add(
      {
        targets: '#text',
        opacity: [0, 1],
        duration: 2000,
      },
      '-=500'
    );

    timeline.add(
      {
        targets: '#path',
        easing: 'easeInOutSine',
        duration: 500,
        keyframes: [
          { clipPath: 'polygon(0 100%, 0 0, 0 0, 0 100%)' },
          { clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)' },
        ],
      },
      1500
    );
  });
</script>

<section class="mt-16 mb-32 flex flex-col gap-4 font-display md:mb-64">
  <h3 id="welcome" class="mb-2 font-bold text-2xl">Ta vitaj, ja som</h3>
  <div class="mb-2 inline-block relative self-start">
    <h1 id="name" class="text-6xl relative z-10 font-bold inline-block md:text-7xl">
      Martin Michálik
    </h1>
    <span id="path" class="absolute top-12 hidden md:block"><Underline /></span>
  </div>

  <h1 id="sub" class="mb-2 relative text-5xl font-semibold md:text-7xl z-20">
    Robím to, že programovanie
  </h1>
  <p id="text" class="md:w-3/4 mt-2 text-2xl font-medium">
    Som mladý junák z malého mesta čo sa venuje programovaňiu či jak se tomu nadáva. Momentálne
    stále študujem a robím popri fušky pre SOFTIP. Také to, že frontend, backend a web sú moja vec
    ale za dobrú páľenku zrobím čokoľvek.
  </p>
</section>
