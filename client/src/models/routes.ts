import { api } from './myFetch'

export interface Route {
  id: number
  name: string
  distance: number
  duration: number
  difficulty: string
  description: string
  startLocation: string
  endLocation: string
}

export function getAllRoutes(): Promise<Route> {
  return api('routes')
}

export function get(id: number): Promise<Route> {
  return api(`routes/${id}`)
}

export function create(route: Route): Promise<Route> {
  return api<Route>('users').then((envelope) => {
    const newUser = { ...route, id: envelope.id + 1 }
    return api(`routes/${newUser.id}`).then(() => newUser)
  })
}

export function update(route: Route): Promise<Route> {
  return api(`routes/${route.id}`).then(() => route)
}

export function remove(id: number): Promise<void> {
  return api(`routes/${id}`).then(() => undefined)
}
