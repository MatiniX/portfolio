<script lang="ts">
  import type { NeuBgColor } from '$lib/types';

  const sizes = {
    sm: 'w-10 h-10 p-1',
    md: 'w-16 h-16 p-2',
    lg: 'w-32 h-32 p-4',
  };

  export let icon: string;
  export let bgColor: NeuBgColor;
  export let size: keyof typeof sizes = 'md';
</script>

<i class="{bgColor} {sizes[size]} flex justify-center  border-4 border-black shadow-neu">
  <img src={icon} alt="icon" />
</i>
