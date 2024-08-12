<template>
  <div class="flex items-center justify-center custom-height-user text-xl">
    <div class="rounded-lg border border-black">
        <div class="border-b-[1px] p-4">
            <p class="font-semibold mb-2">log in</p>
            <input type="password" placeholder="Password" class="border border-black p-2 rounded-lg"/>
        </div>
        <div class="flex gap-2 text-white text-base p-4">
            <button class="p-2 bg-[#6c757d] rounded-lg">Cancel</button>
            <button class="p-2 bg-[#337ab7] rounded-lg">Log in</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ["User"],
};
</script>
<style>
.custom-height-user {
  height: calc(100vh - 162px);
}
</style>
