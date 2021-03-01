import { CounterActions, CounterGetters, CounterMutations, CounterState } from '@/types/store/counter'
import { DefineActions, DefineGetters, DefineMutations } from 'vuex-type-helper'

const state: CounterState = {
  count: 0,
}

const getters: DefineGetters<CounterGetters, CounterState> = {
  half: (state) => state.count / 2,
}

const mutations: DefineMutations<CounterMutations, CounterState> = {
  inc(state, { amount }) {
    state.count += amount
  },
}

const actions: DefineActions<CounterActions, CounterState, CounterMutations, CounterGetters> = {
  incAsync({ commit }, { amount, delay }) {
    setTimeout(() => {
      commit('inc', { amount })
    }, delay)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
