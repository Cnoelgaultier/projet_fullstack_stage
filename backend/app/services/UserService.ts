interface User {
  id: number
  name: string
  email: string
  role: string
}

type UserData = Omit<User, 'id'>

class UserService {
  private users: User[] = [
    { id: 1, name: "Alice Dupont", email: "alice@exemple.com", role: "Admin" },
    { id: 2, name: "Bob Martin", email: "bob@exemple.com", role: "User" },
  ]
  private nextId = 3

  public getAll(): User[] {
    return this.users
  }

  public create(data: UserData): User {
    const newUser: User = {
      id: this.nextId,
      ...data,
    }
    this.nextId++
    this.users.push(newUser)
    return newUser
  }
}

// Exporte une instance unique (singleton)
export default new UserService()