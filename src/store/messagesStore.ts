import { create } from 'zustand'

interface IMessagesStore {
  prompt: string[]
  response: string[]
}

export const accountsStore = create<IMessagesStore>()((set, get) => ({
  prompt: [],
  response: []
}))