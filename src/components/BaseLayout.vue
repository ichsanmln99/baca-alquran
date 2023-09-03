<template>
  <div class="bg-base-200">
    <div class="max-w-lg w-full bg-base-100 mx-auto min-h-screen shadow-2xl">
      <slot name="navbar"></slot>

      <div class="md:p-4 md:pb-16 p-2 pb-16">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
