<template>
  <div class="row">
    <div class="col-lg-2 col-sm-12 d-flex justify-content-center">
      <div class="text-center m-3">
        <h3 class="text-light">
          Pick a date!
        </h3>
        <Calender />
      </div>
    </div>
    <div class="col-lg-8">
      <div class="card p-2">
        <p> <b>What is? </b>{{ description }}</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <div class="text-center">
      </div>
      <img :src="url" alt="" class="m-2 rounded">
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
export default {
  name: 'CalenderPage',
  setup() {
    return {
      url: computed(() => AppState.pictureUrl),
      description: computed(() => AppState.description)
    }
  }

}
</script>

<style>

</style>
