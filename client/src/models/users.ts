
import type { DataListEnvelope } from './dataEnvelopes'
import { api } from './session'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  age: number
  gender: string
  height: number
  weight: number
  image: string
  role: string
}

export function getAll(): Promise<DataListEnvelope<User>> {
  return api('users')
}

export function get(id: number): Promise<User> {
  return api(`users/${id}`)
}

export function create(user: User): Promise<User> {
  return api<DataListEnvelope<User>>('users').then((envelope) => {
    const newUser = { ...user, id: envelope.total + 1 }
    return api(`users/${newUser.id}`).then(() => newUser)
  })
}

export function update(user: User): Promise<User> {
  return api(`users/${user.id}`).then(() => user)
}

export function remove(id: number): Promise<void> {
  return api(`users/${id}`).then(() => undefined)
}





