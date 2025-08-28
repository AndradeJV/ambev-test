import { faker } from '@faker-js/faker'

export default new (class FakerFix {
  name() {
    return faker.person.firstName() + ' ' + faker.person.lastName()
  }

  email() {
    return faker.internet.email().toLowerCase()
  }

  password() {
    return faker.internet.password({ length: 8 })
  }
})()
