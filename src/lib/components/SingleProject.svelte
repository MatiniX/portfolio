<script lang="ts">
  import type { NeuBgColor } from '$lib/types';

  export let titleBg: NeuBgColor;
  export let title: string;
  export let imgSrc: string;
  export let href: string;
</script>

<article class="border-4 border-black shadow-neu hover:scale-[102%] transition-transform opacity-0">
  <a {href} target="_blank">
    <div class="flex flex-col h-full">
      <div class="px-4 py-2 border-b-4 border-black {titleBg}">
        <h1 class="font-display text-2xl font-bold">{title}</h1>
      </div>
      <div class="w-full h-full">
        <img src={imgSrc} alt="" class="h-full w-full object-cover object-left" />
      </div>
    </div>
  </a>
</article>
