<script>
  import github from '$lib/assets/github.svg';

  const year = new Date().getFullYear();
</script>

<footer class=" mt-32 bg-cover bg-bottom">
  <section class="flex flex-col w-3/5 mx-auto relative z-10 h-80 justify-end items-center xl:h-96">
    <div class="mb-2">
      <a href="https://github.com/MatiniX" target="_blank">
        <img
          src={github}
          alt="github"
          class="w-8 h-8 object-contain transform transition hover:scale-105"
        />
      </a>
    </div>
    <span class="mb-4 font-semibold">&copy; Martin Michálik {year}</span>
  </section>
</footer>

<style>
  footer {
    background-image: url(../assets/wave-footer.svg);
  }
</style>
