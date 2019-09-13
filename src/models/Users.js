exports.list_of_users = () => {

  const users = [
    {
      firstName: 'Jane',
      lastName: 'Taylor',
    },
    {
      firstName: 'Alan',
      lastName: 'Young',
    },
    {
      firstName: 'Bentley',
      lastName: 'Jones',
    },
    {
      firstName: 'Tim',
      lastName: 'Walker',
    },
  ]

  return new Promise((resolve,reject) => {
    resolve(users);
  });
}