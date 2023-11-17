import User from './models/user'

export default function doesUserContainName(user, searchString: string) {
  for (const key in user) {
    if (Object.prototype.hasOwnProperty.call(user, key)) {
      const propertyValue = user[key]

      if (
        typeof propertyValue === 'string' &&
        propertyValue.includes(searchString)
      ) {
        return true
      }
    }
  }

  return false
}
