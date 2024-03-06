const getTotalBalanceByGender = (users, gender) => {
  const totalBalanceByGender = users
    .filter((user) => user.gender == gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);
  return totalBalanceByGender;
};

// const allUsers уже объявлен в task-2, поэтому задал массиву объектов другое название

const userList = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(userList, "male")); // 12053

console.log(getTotalBalanceByGender(userList, "female")); // 8863
