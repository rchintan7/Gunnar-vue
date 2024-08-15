<template>
  <header>
    <div
      class="bg-cover bg-center h-[81px] flex items-center justify-around"
      :style="{
        backgroundImage:
          'url(' +
          require('/public/assets/Content/images/BootstrapHeaderComposed.jpg') +
          ')',
      }"
    >
      <!-- <a href="/"> -->
      <div class="flex items-center">
        <a href="/">
          <div
            class="bg-black text-red-600 p-3 flex items-center font-bold text-lg gap-2"
          >
            <img
              src="/logo.png"
              height="40px"
              width="40px"
            />
            <p>VueHomePage</p>
            <img
              src="/assets/Content/images/info.png"
              height="25px"
              width="25px"
            />
          </div>
        </a>
        <div class="bg-[#F1D983] text-black p-2 font-bold ml-4">
          <router-link to="/">Home</router-link>
        </div>
        <div class="bg-[#2F99C3] text-[#980000] p-2 font-bold ml-4">
          <router-link to="/albums">Album</router-link>
        </div>
      </div>
      <!-- </a> -->
      <div class="flex items-center gap-2">
        <a
          href="https://www.google.com/maps/place/Statue+of+Liberty/@40.688969,-113.0657959,4z/data=!4m10!1m2!2m1!1sstaue+of+liberty!3m6!1s0x89c25090129c363d:0x40c6a5770d25022b!8m2!3d40.6892494!4d-74.0445004!15sChFzdGF0dWUgb2YgbGliZXJ0eVoTIhFzdGF0dWUgb2YgbGliZXJ0eZIBE2hpc3RvcmljYWxfbGFuZG1hcmvgAQA!16zL20vMDcycDg?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-1 rounded border border-black bg-[#2F99C3]"
          ><span></span><i className="fas fa-map-marker-alt text-[#980000]"></i
          ><span></span
        ></a>
        <a
          href="/user"
          class="px-2 py-1 rounded border border-black bg-[#2F99C3] cursor-pointer"
          ><span></span><i className="fas fa-user-alt text-[#980000]"></i
          ><span></span
        ></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: ["Header"],
};
</script>
