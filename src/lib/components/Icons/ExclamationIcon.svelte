<script lang="ts">
  import IconBox from './IconBox.svelte';
  import icon from '$lib/assets/exlam.svg';

  export let top: number;
  export let left: number;
  export let size: 'sm' | 'md' | 'lg';
</script>

<IconBox {top} {left} {size} color="bg-neu-red" tooltipShadow="#F25C5C" tooltipText="Výkričník">
  <img src={icon} alt="icon" />
</IconBox>
