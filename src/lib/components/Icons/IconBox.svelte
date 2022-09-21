<script lang="ts">
  import { fade } from 'svelte/transition';
  import { range } from '$lib/utils/math-extensions';
  import type { PopperOptions } from 'svelte-popperjs';
  import { createPopperActions } from 'svelte-popperjs';
  const [popperRef, popperContent] = createPopperActions({
    placement: 'bottom',
    strategy: 'fixed',
  });

  const extraOpts: PopperOptions<any> = {
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  };

  const sizes = {
    sm: 'w-8 h-8 p-1',
    md: 'w-16 h-16 p-2',
    lg: 'w-32 h-32 p-4',
  };

  export let top: number;
  export let left: number;
  export let color:
    | 'bg-neu-purple'
    | 'bg-neu-green'
    | 'bg-neu-yellow'
    | 'bg-neu-orange'
    | 'bg-neu-red'
    | 'bg-neu-yellow-light'
    | 'bg-neu-blue';
  export let size: 'sm' | 'md' | 'lg';
  export let tooltipText: string;
  export let tooltipShadow: string;
  export let className: string = '';

  const rotation = range(-30, 30);
  const hoverRotation = rotation > 0 ? -5 : 5;
  let timeout: NodeJS.Timeout;
  let showTooltip = false;
</script>

<div
  use:popperRef
  on:mouseenter={() => {
    timeout = setTimeout(() => {
      showTooltip = true;
    }, 500);
  }}
  on:mouseleave={() => {
    clearTimeout(timeout);
    showTooltip = false;
  }}
  class={`${sizes[size]} ${color} absolute border-4 border-black flex justify-center transition ${className}`}
  style="top: {top}px; left: {left}px; rotate: {rotation}deg; --hoverRoatation: {hoverRotation}deg"
>
  <slot />
</div>
{#if showTooltip}
  <div
    id="tooltip"
    use:popperContent={extraOpts}
    transition:fade={{ duration: 200 }}
    style="box-shadow: 4px 4px 0 0 {tooltipShadow};"
  >
    {tooltipText}
  </div>
{/if}

<style>
  div {
    box-shadow: 4px 4px 0 0;
  }

  div:hover {
    transform: rotate(var(--hoverRoatation));
  }

  #tooltip {
    background: black;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
  }
</style>
