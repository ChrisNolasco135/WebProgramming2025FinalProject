
import type { DataListEnvelope } from './dataEnvelopes'
import { api } from './session'

export interface Activity {
  id: number
  name: string
  type: string
  duration: number
  date: string
  caloriesBurned: number
  userId: number
}

export function getAllActivities(): Promise<DataListEnvelope<Activity>> {
  return api('activities')
}

export function get(id: number): Promise<Activity> {
  return api(`activities/${id}`)
}

export function create(activity: Activity): Promise<Activity> {
  return api<DataListEnvelope<Activity>>('activities').then((envelope) => {
    const newActivitiy = { ...activity, id: envelope.total + 1 }
    return api(`users/${newActivitiy.id}`).then(() => newActivitiy)
  })
}

export function update(activity: Activity): Promise<Activity> {
  return api(`users/${activity.id}`).then(() => activity)
}

export function remove(id: number): Promise<void> {
  return api(`activities/${id}`).then(() => undefined)
}


