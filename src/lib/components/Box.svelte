<script>
  // @ts-nocheck

  import icon from '$lib/assets/exlam.svg';
  import SimpleIcon from './SimpleIcon.svelte';
  import { inview } from 'svelte-inview';

  let isInView;
</script>

<div
  id="about"
  class="scroll-m-24"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  <div
    class="{isInView
      ? 'opacity-100'
      : 'opacity-0'} mb-32 flex flex-col gap-4 p-4 bg-white border-4 border-black shadow-neu md:p-8 md:mb-64 transition-opacity duration-500"
  >
    <div class="flex items-center gap-4 mx-auto md:mx-0">
      <SimpleIcon bgColor="bg-neu-red" {icon} size="sm" />
      <h3 class="font-bold font-display text-5xl">Niečo o mne</h3>
    </div>
    <p class="font-semibold text-xl">
      Nazdar volám sa Martin a som mladý chalan z podpoľania, ktorý sa venuje programovaniu. K tejto
      srande som sa dostal keď som mal 13-14 rokov. Hral som sa hry a tak ma zaujímalo čo z tým
      všetkým stojí. A bác, že vraj Unity Engine a dáky C# a tak nejako to začalo. Zo začiatku som
      sa týmto veciam venoval len tak zo srandy keď as mi chcelo. Neskôr som sa dostal k web
      developmentu a ostatným srandám, ktorého sa toho týkajú a už to išlo, ako keď cestou dole
      kopcom na traktore vytlačíte spojku.
    </p>
    <p class="font-semibold text-xl">
      No a ta teraz vlastne študujem na strednej škole a robím bokom pre SOFTIP
    </p>
  </div>
</div>
