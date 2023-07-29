interface User {
    email: string;
    password: string;
  }

let users: User[] = [];

export function register(body: User): User {
    const user = users.find(({ email }) => email === body.email);
    if(user) throw new Error('User already registered');

    users.push(body);
    return body;
}

export function login(body: { email: string; password: string }): User {
    const user = users.find(({ email }) => email === body.email);
    if(!user) throw new Error('User not found');
    if(user.password != body.password) throw new Error('incorrect password');

    return user;
}