const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' ,isAdmin: false, show:true, icon: '@/assets/John Doe.svg' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', isAdmin: false, show:true, icon: '@/assets/Jane Smith.svg'},
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', isAdmin: false, show:true, icon: '@/assets/Alice Johnson.svg' },
  { id: 4, name: 'Admin', email: 'example@example.com', isAdmin: true, show:true, icon: '@/assets/admin.svg'},
]

export type users = {
  id: number
  name: string
  email: string
  isAdmin: boolean
  show: boolean
  icon?: string
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
export function getShow(user: users) {
  return user.show
}
export function getUserIcon(user: users) {
  return user.icon
}

export function isAdmin(userId: number | null) {
  const user = userId
  if (user === 4 || user === null) {
    return true
  }
  else {
    return false
  }
}




