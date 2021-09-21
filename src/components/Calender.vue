<template>
  <div class="calender">
    <form>
      <input class="mx-2" type="date" id="Test_DatetimeLocal" v-model="state.date">
    </form>
    <button class="btn btn-success m-2" type="submit" @click="getPicture()">
      Get a Spacey Pic!
    </button>
  </div>
</template>

<script>
import { picturesService } from '../services/PictureService.js'
import { reactive } from '@vue/reactivity'
import { logger } from '../utils/Logger.js'
export default {
  name: 'Calender',
  setup() {
    const state = reactive({
      date: ''
    })
    return {
      state,
      async getPicture() {
        try {
          await picturesService.getPicture(state.date)
        } catch (error) {
          logger.log(error.message, 'error')
        }
      }
    }
  }

}
</script>

<style>

</style>
