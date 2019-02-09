import { useStaticRendering } from 'mobx-react'
import CounterStore from './features/counter'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

export class RootStore {
  public counter: CounterStore

  constructor(initialData?: any) {
    this.counter = new CounterStore()
  }
}

let store: RootStore | null = null

export function initializeStore(initialData?: any) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new RootStore(initialData)
  }
  if (store === null) {
    store = new RootStore(initialData)
  }
  return store
}
