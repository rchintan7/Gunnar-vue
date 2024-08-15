<template>
  <div class="w-full flex px-72">
    <div class="w-[270px] border-x border-black px-4 py-4">
      <div
        class="border-black border rounded flex flex-col justify-center items-center"
      >
        <p class="bg-[#337ab7] text-white p-2 text-center w-full font-semibold">
          Today's photo
        </p>
        <div
          class="h-[150px] w-[8px] border-[1px] border-black rounded-full shadow-2xl mt-4 spin-animation"
        ></div>
        <p class="text-sm py-4">Photos</p>
        <img
          class="py-4 cursor-pointer"
          src="/assets/Content/images/button-download.gif"
          alt="download photo"
        />
        <p class="text-sm py-4">
          See
          <a
            href="/albums"
            class="text-[#980000] hover:text-[#337ab7] hover:underline"
            >more photos</a
          >
        </p>
      </div>

      <div class="my-4">
        <p class="my-2">Contact information</p>
        <p class="text-sm"><i className="fa fa-phone mr-4"></i>010-123 456</p>
      </div>
      <div
        class="border-black border rounded flex flex-col justify-center items-center"
      >
        <p class="bg-[#337ab7] text-white p-2 text-center w-full font-semibold">
          Today's weather
        </p>
        <a
          class="weatherwidget-io w-full p-4"
          href="https://forecast7.com/en/40d71n74d01/new-york/"
          data-label_1="NEW YORK"
          data-label_2="WEATHER"
          data-theme="original"
        >
          NEW YORK WEATHER
        </a>
      </div>
    </div>
    <div class="mx-4 custom-width-home">
      <div
        class="border-black border rounded flex flex-col justify-center items-center my-4"
      >
        <p class="bg-[#337ab7] text-white p-2 font-semibold w-full">Panel 1</p>
        <p class="text-sm p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          euismod orci velit, id tincidunt massa mollis ac. Aliquam volutpat
          facilisis lacinia. Aenean auctor justo non faucibus efficitur. Sed
          mollis, orci faucibus suscipit pellentesque, nunc augue blandit ante,
          eget gravida ex erat sed lectus. Mauris eu congue lacus, gravida
          aliquam ligula. Aenean in diam eget mi tincidunt iaculis. Sed ac mi
          velit. Nam vestibulum, metus id auctor bibendum, purus mi congue urna,
          vitae maximus nibh orci eu orci. Donec viverra nisl diam, pellentesque
          tincidunt risus hendrerit nec. Nulla at magna dui. Mauris nec
          tristique enim. Ut a feugiat odio. Nullam efficitur bibendum lorem.
          Curabitur pharetra risus neque, a molestie quam ultrices at. Etiam
          molestie libero odio. Suspendisse volutpat, justo vitae varius
          facilisis, quam ex placerat orci, sit amet cursus ante mi et purus.
          Vivamus dolor sem, suscipit ut nisl id, malesuada commodo metus. Ut at
          orci non arcu ornare fringilla pharetra non nunc. Suspendisse arcu
          odio, commodo nec porta et, viverra et arcu. Nullam nec lacinia velit.
          Pellentesque commodo fringilla est, sed ullamcorper risus vestibulum
          vitae. Nunc facilisis, eros vitae rhoncus consectetur, velit magna
          interdum felis, quis convallis arcu nisl a lorem. Proin gravida, elit
          non volutpat maximus, urna purus commodo ante, quis viverra lectus
          urna eget nisi.
        </p>
      </div>
      <div
        class="border-black border rounded flex flex-col justify-center items-center my-4"
      >
        <p class="bg-[#337ab7] text-white p-2 font-semibold w-full">Panel 2</p>
        <p class="text-sm p-4">
          Phasellus diam dolor, molestie quis arcu nec, fermentum lobortis ante.
          Nunc sagittis condimentum felis sit amet ultrices. Donec aliquam dolor
          sit amet tempor elementum. Proin auctor justo mi, quis consectetur
          tortor molestie at. Sed aliquet odio turpis, at efficitur justo
          egestas quis. Duis facilisis dui arcu, sit amet ullamcorper lacus
          tristique id. Donec euismod arcu urna, sed pellentesque nibh ornare
          et. Duis sed imperdiet neque. Morbi fermentum scelerisque quam non
          luctus. Vestibulum vehicula sollicitudin nibh, quis hendrerit massa
          ullamcorper a. Quisque posuere euismod elit, nec rutrum tellus
          pellentesque in. Nulla facilisi. Donec fringilla, neque ac vulputate
          rutrum, nisl tortor facilisis urna, ac cursus urna nibh vitae odio.
          Nunc lorem dui, consequat nec ex eget, lobortis pharetra nibh. Nunc
          pretium odio nisl, vel gravida urna tristique at. Mauris ut nibh quis
          lorem vulputate ullamcorper. Quisque condimentum purus vitae massa
          porttitor, in feugiat elit blandit. Praesent lectus tortor, molestie
          nec libero vitae, aliquam aliquam sapien. Quisque blandit iaculis
          mauris eu feugiat. Aenean eget diam quis elit pretium vestibulum.
          Donec velit sapien, commodo eu posuere et, commodo sit amet purus.
          Aliquam erat volutpat. Maecenas non hendrerit ligula, quis feugiat
          risus. Morbi et efficitur mauris. Curabitur ut bibendum elit.
          Pellentesque sit amet cursus nunc. Donec rhoncus et dui at tempus.
          Vestibulum et nibh pulvinar nibh bibendum bibendum non finibus velit.
          Maecenas non odio ultrices, dignissim odio id, ullamcorper tortor.
          Curabitur lacinia arcu et malesuada sollicitudin. Integer sed cursus
          felis. Aenean porta, tortor vel aliquet tempor, neque lectus euismod
          dolor, non dapibus ligula nisl ut nisl.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},
  mounted() {
    if (window.__weatherwidget_init) {
      window.__weatherwidget_init();
    }
  },
};
</script>
<style scoped>
@keyframes spin {
  from {
    transform: rotate(3600deg);
  }
  to {
    transform: rotate(0deg); /* 360 degrees * 10 rotations */
  }
}

.spin-animation {
  animation: spin 2s linear;
}

.custom-height-home {
  height: calc(100vh - 500px);
  overflow-y: auto;
}
.custom-width-home {
  width: calc(100% - 302px);
}
</style>
