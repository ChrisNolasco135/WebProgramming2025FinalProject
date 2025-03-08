const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' ,isAdmin: false },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', isAdmin: false },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', isAdmin: false },
  { id: 4, name: 'Admin', email: 'example@example.com', isAdmin: true },
]

export type users = {
  id: number
  name: string
  email: string
  isAdmin: boolean
}

export function getUsers() {
  return users
}

export function getUserById(id: number) {
  return users.find(user => user.id === id)
}

export function getUserId(user: users) {
  return user.id
}
export function getUserName(user: users) {
  return user.name
}
export function getUserEmail(user: users) {
  return user.email
}
export function getUserIsAdmin(user: users) {
  return user.isAdmin
}

export function isAdmin(userId: number) {
  const user = userId
  if (user === 4 || user === null) {
    return true
  }
  else {
    return false
  }
}




