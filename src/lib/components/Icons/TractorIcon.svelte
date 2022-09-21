<script lang="ts">
  import IconBox from './IconBox.svelte';
  import icon from '$lib/assets/tractor.svg';

  export let top: number;
  export let left: number;
  export let size: 'sm' | 'md' | 'lg';
</script>

<IconBox
  {top}
  {left}
  {size}
  color="bg-neu-red"
  tooltipText="Vodičský preukaz skupiny T"
  tooltipShadow="#F25C5C"
>
  <img src={icon} alt="icon" />
</IconBox>
