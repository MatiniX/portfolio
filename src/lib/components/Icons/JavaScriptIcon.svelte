<script lang="ts">
  import IconBox from './IconBox.svelte';
  import icon from '$lib/assets/javascript.svg';

  export let top: number;
  export let left: number;
  export let size: 'sm' | 'md' | 'lg';
</script>

<IconBox
  {top}
  {left}
  {size}
  color="bg-neu-yellow-light"
  tooltipText="JavaScript"
  tooltipShadow="#FFF500"
>
  <img src={icon} alt="icon" />
</IconBox>
