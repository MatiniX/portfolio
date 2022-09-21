<script lang="ts">
  import anime from 'animejs';
  import { onMount } from 'svelte';

  onMount(() => {
    anime({
      targets: 'nav a',
      opacity: [0, 1],
      translateY: [-100, 0],
      duration: 500,
      delay: anime.stagger(100, { start: 1800 }),
    });
  });
</script>

<header class="hidden my-8 justify-center z-20 relative lg:flex">
  <nav class="flex gap-4 font-display font-bold text-xl">
    <a href="#about" class="px-2 py-1 bg-gradient-to-r red"> O mne </a>
    <a href="#skills" class="px-2 py-1 bg-gradient-to-r blue">Čo viem</a>
    <a href="#projects" class="px-2 py-1 bg-gradient-to-r purple">Moje veci</a>
  </nav>
</header>

<style>
  a {
    background-size: 200% 100%;
    background-image: linear-gradient(to left, red 50%, black 50%);
    transition: background-position 300ms;
  }

  a:hover {
    background-position: -100% 0;
  }

  .red {
    background-image: linear-gradient(to left, #f25c5c 50%, #f2d335 50%);
  }

  .blue {
    background-image: linear-gradient(to left, #39dbff 50%, #f2d335 50%);
  }

  .purple {
    background-image: linear-gradient(to left, #ce79f2 50%, #f2d335 50%);
  }
</style>
