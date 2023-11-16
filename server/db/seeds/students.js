export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('fruit').del()

  // Inserts seed entries
  await knex('fruit').insert([
    { id: 1, name: 'Pete', points: 0 },
    { id: 2, name: 'Courtney', points: 0 },
    { id: 3, name: 'Teacum', points: 0 },
    { id: 4, name: 'Katie', points: 0 },
    { id: 5, name: 'Joana', points: 0 },
    { id: 6, name: 'Bonnie', points: 0 },
    { id: 7, name: 'Alex', points: 0 },
    { id: 8, name: 'Tayne', points: 0 },
    { id: 9, name: 'Karl', points: 0 },
    { id: 10, name: 'Maddy', points: 0 },
    { id: 11, name: 'Toby', points: 0 },
    { id: 12, name: 'Sam', points: 0 },
    { id: 13, name: 'Mike', points: 0 },
    { id: 14, name: 'Sandra', points: 0 },
    { id: 15, name: 'Murray', points: 0 },
    { id: 16, name: 'Matt', points: 0 },
  ])
}
