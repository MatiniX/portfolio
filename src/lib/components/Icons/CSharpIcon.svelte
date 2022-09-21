<script lang="ts">
  import IconBox from './IconBox.svelte';
  import icon from '$lib/assets/csharp.svg';

  export let top: number;
  export let left: number;
  export let size: 'sm' | 'md' | 'lg';
</script>

<IconBox {top} {left} {size} color="bg-neu-purple" tooltipText="C#" tooltipShadow="#CE79F2">
  <img src={icon} alt="icon" />
</IconBox>
