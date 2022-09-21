<script lang="ts">
  import IconBox from './IconBox.svelte';
  import icon from '$lib/assets/react.svg';

  export let top: number;
  export let left: number;
  export let size: 'sm' | 'md' | 'lg';
</script>

<IconBox {top} {left} {size} color="bg-neu-blue" tooltipText="ReactJS" tooltipShadow="#39DBFF">
  <img src={icon} alt="icon" />
</IconBox>
