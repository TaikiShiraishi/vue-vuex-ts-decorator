<template>
  <div>
    <p>{{ count }}</p>
    <button @click="incAsync">incAsync</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CounterActions, CounterGetters } from '@/types/store/counter'

@Component
export default class Counter extends Vue {
  /*
   * Watchers
   */
  get count(): CounterGetters['half'] {
    return this.$store.getters['counter/half']
  }

  /*
   * Methods
   */
  incAsync() {
    const payload: CounterActions['incAsync'] = { amount: 1, delay: 1000 }
    this.$store.dispatch('counter/incAsync', payload)
  }
}
</script>
