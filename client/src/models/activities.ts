
import { api } from './myFetch'

export interface Activity {
  id: number
  name: string
  type: string
  duration: number
  date: string
  caloriesBurned: number
  userId: number
}

export function getAllActivities(): Promise<Activity> {
  return api('activities')
}

export function getActivitiesByUserId(userId: number): Promise<Activity> {
  return api(`activities?userId=${userId}`)
}

export function get(id: number): Promise<Activity> {
  return api(`activities/${id}`)
}

export function create(activity: Activity): Promise<Activity> {
  return api<Activity>('activities').then((envelope) => {
    const newActivitiy = { ...activity, id: envelope.id + 1 }
    return api(`users/${newActivitiy.id}`).then(() => newActivitiy)
  })
}

export function update(activity: Activity): Promise<Activity> {
  return api(`users/${activity.id}`).then(() => activity)
}

export function remove(id: number): Promise<void> {
  return api(`activities/${id}`).then(() => undefined)
}


