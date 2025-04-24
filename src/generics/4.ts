

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export default  function createOrUpdateUser (initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
})