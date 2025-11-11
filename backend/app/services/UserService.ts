interface User {
  id: number
  name: string
  email: string
  role: string
}

type UserData = Omit<User, 'id'>

class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice Dupont', email: 'alice.dupont@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Martin', email: 'bob.martin@example.com', role: 'User' },
    { id: 3, name: 'Camille Noel', email: 'camille.noel@example.com', role: 'User' },
    { id: 4, name: 'David Moreau', email: 'david.moreau@example.com', role: 'Manager' },
    { id: 5, name: 'Élodie Petit', email: 'elodie.petit@example.com', role: 'User' },
    { id: 6, name: 'Fabien Durand', email: 'fabien.durand@example.com', role: 'User' },
    { id: 7, name: 'Garance Lefebvre', email: 'garance.lefebvre@example.com', role: 'Admin' },
    { id: 8, name: 'Hugo Lambert', email: 'hugo.lambert@example.com', role: 'User' },
    { id: 9, name: 'Inès Fournier', email: 'ines.fournier@example.com', role: 'Manager' },
    { id: 10, name: 'Julien Rousseau', email: 'julien.rousseau@example.com', role: 'User' },
    { id: 11, name: 'Kenza Hamidi', email: 'kenza.hamidi@example.com', role: 'User' },
    { id: 12, name: 'Léo Bernard', email: 'leo.bernard@example.com', role: 'User' },
    { id: 13, name: 'Manon Girard', email: 'manon.girard@example.com', role: 'User' },
    { id: 14, name: 'Nathan Royer', email: 'nathan.royer@example.com', role: 'User' },
    { id: 15, name: 'Olivia Gomez', email: 'olivia.gomez@example.com', role: 'Admin' }
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