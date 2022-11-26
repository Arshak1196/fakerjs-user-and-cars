import { faker } from '@faker-js/faker';

const createRandomUser = () => {
    return {
        userId: faker.datatype.uuid(),
        userName: faker.name.fullName(),
        address: {
            country: faker.address.country(),
            city: faker.address.city(),
            streetName: faker.address.street(),
            state: faker.address.state()
        },
        age: Math.floor(Math.random()*40)+20,
        phoneNumber: faker.phone.number(),
        occupation:faker.name.jobTitle(),
        vehicle: {
            model: faker.vehicle.model(),
            manufacturer: faker.vehicle.manufacturer(),
            color: faker.vehicle.color(),
            fuel: faker.vehicle.fuel(),
            age:Math.floor(Math.random()*10),
        },

    }
}
export const createUsers = (value, setUser) => {
    const USERS = []
    Array.from({ length: value }).forEach(() => {
        USERS.push(createRandomUser());
    })
    setUser(USERS)
}

