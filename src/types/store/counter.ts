export interface CounterState {
  count: number
}

export interface CounterGetters {
  half: number
}

export interface CounterMutations {
  inc: {
    amount: number
  }
}

export interface CounterActions {
  incAsync: {
    amount: number
    delay: number
  }
}
