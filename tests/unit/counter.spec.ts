import { CounterMutations, CounterState } from '@/types/store/counter'
import counter from '@/store/modules/counter'
const { mutations } = counter
const { inc } = mutations

describe('mutations', () => {
  it('incAsync', () => {
    const state: CounterState = { count: 0 }
    const payload: CounterMutations['inc'] = { amount: 2 }
    inc(state, payload)
    expect(state.count).toBe(2)
  })
})
