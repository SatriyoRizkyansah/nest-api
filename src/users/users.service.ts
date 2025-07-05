import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alicejohnson@gmail.com',
      role: 'USER',
    },
    {
      id: 4,
      name: 'Bob Williams',
      email: 'bobwilliams@gmail.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Charlie Brown',
      email: 'charliebrown@gmail.com',
      role: 'USER',
    },
    {
      id: 6,
      name: 'Diana Prince',
      email: 'dianaprince@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 7,
      name: 'Ethan Hunt',
      email: 'ethanhunt@gmail.com',
      role: 'USER',
    },
    {
      id: 8,
      name: 'Fiona Gallagher',
      email: 'fionagallagher@gmail.com',
      role: 'INTERN',
    },
    {
      id: 9,
      name: 'George Martin',
      email: 'georgemartin@gmail.com',
      role: 'USER',
    },
    {
      id: 10,
      name: 'Hannah Lee',
      email: 'hannahlee@gmail.com',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'USER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'USER';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'USER';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
