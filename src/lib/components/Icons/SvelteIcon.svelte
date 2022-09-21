<script lang="ts">
  import IconBox from './IconBox.svelte';
  import icon from '$lib/assets/svelte.svg';

  export let top: number;
  export let left: number;
  export let size: 'sm' | 'md' | 'lg';
</script>

<IconBox {top} {left} {size} color="bg-neu-orange" tooltipText="Svelte" tooltipShadow="#F2A341">
  <img src={icon} alt="icon" />
</IconBox>
