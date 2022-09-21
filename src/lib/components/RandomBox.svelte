<script lang="ts">
  import type { Point } from '$lib/types/Point';
  import { generatePoints } from '$lib/utils/poisson-disc-sampling';
  import { onMount } from 'svelte';
  import { inview } from 'svelte-inview';
  import JavaScriptIcon from './Icons/JavaScriptIcon.svelte';
  import TypeScriptIcon from './Icons/TypeScriptIcon.svelte';
  import CSharpIcon from './Icons/CSharpIcon.svelte';
  import Html5Icon from './Icons/HTML5Icon.svelte';
  import Css3Icon from './Icons/CSS3Icon.svelte';
  import ReactIcon from './Icons/ReactIcon.svelte';
  import TractorIcon from './Icons/TractorIcon.svelte';
  import SvelteIcon from './Icons/SvelteIcon.svelte';
  import DockerIcon from './Icons/DockerIcon.svelte';
  import GitIcon from './Icons/GitIcon.svelte';
  import { fade, fly } from 'svelte/transition';

  let headingInView: boolean;
  let boxInView: boolean;
  let boundingBox: HTMLDivElement;
  let boxes = [
    JavaScriptIcon,

    TypeScriptIcon,
    CSharpIcon,
    Html5Icon,
    Css3Icon,
    ReactIcon,
    TractorIcon,
    SvelteIcon,
    DockerIcon,
    GitIcon,
  ];

  let points: Point[];

  onMount(() => {
    const xMax = boundingBox.clientWidth;
    const yMax = boundingBox.clientHeight;

    points = generatePoints(120, xMax, yMax, 100);
  });
</script>

<div
  id="skills"
  class="scroll-m-24"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-15%' }}
  on:enter={(event) => {
    headingInView = event.detail.inView;
  }}
>
  <h1
    class="{headingInView
      ? 'translate-x-0 opacity-100'
      : '-translate-x-64 opacity-0'} mb-2 heading-lg transition duration-500 ease-in-out md:mb-16"
  >
    Veci, s ktorými viem narábať:
  </h1>
</div>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:enter={(event) => {
    boxInView = event.detail.inView;
  }}
>
  <div
    bind:this={boundingBox}
    class="{boxInView
      ? 'opacity-100'
      : 'opacity-0'} relative mb-32  h-screen w-4/5 transition-opacity duration-500 delay-300  md:w-full md:mb-64"
  >
    {#if points}
      {#each boxes as Icon, index}
        <svelte:component this={Icon} top={points[index].y} left={points[index].x} size="md" />
      {/each}
    {/if}
  </div>
</div>
