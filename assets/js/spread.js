const aereasNacional = [
    'Latam',
    'Gol',
    'Azul',
];

const airCompanies = [
    ...aereasNacional, 
    'Delta',
    'United AirLines',
    'Emirates',
];

console.log(airCompanies);

const user = {
    name: "Marianna Magno",
    email: "mmagnosorio@gmail.com",
    password: "M1234!"
};

const {password, ...data} = user;

console.log("Oh meu Deus", data);