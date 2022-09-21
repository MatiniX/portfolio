<script lang="ts">
  import IconBox from './IconBox.svelte';
  import icon from '$lib/assets/docker.svg';

  export let top: number;
  export let left: number;
  export let size: 'sm' | 'md' | 'lg';
</script>

<IconBox
  {top}
  {left}
  {size}
  color="bg-neu-blue"
  tooltipText="Docker"
  tooltipShadow="#39DBFF"
  className="p-0"
>
  <img src={icon} alt="icon" />
</IconBox>
