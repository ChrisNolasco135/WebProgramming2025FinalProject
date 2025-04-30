import { api } from './myFetch'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  age: number
  gender: string
  height: number
  weight: number
  icon: string
  role: string
}

export function getAllUsers(): Promise<User> {
  return api('users')
}

export function get(id: number): Promise<User> {
  return api(`users/${id}`)
}

export function create(user: User): Promise<User> {
  return api<User>('users').then((envelope) => {
    const newUser = { ...user, id: envelope.id + 1 }
    return api(`users/${newUser.id}`).then(() => newUser)
  })
}

export function update(user: User): Promise<User> {
  return api(`users/${user.id}`).then(() => user)
}

export function remove(id: number): Promise<void> {
  return api(`users/${id}`).then(() => undefined)
}

export function getImageUrl(user: User): string {
  return new URL(`../assets/${user.icon}`, import.meta.url).href;
}


