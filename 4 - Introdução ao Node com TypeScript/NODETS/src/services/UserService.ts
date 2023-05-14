const db = [
  {
    name: 'Jota',
    email: 'jota@email.com',
  },
];

export class UserService {
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    db.push(user);
    console.log('DB attualizado ', db);
  };
  getAlluser = () => {
    return db;
  };
}
