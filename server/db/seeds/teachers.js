export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('fruit').del()

  // Inserts seed entries
  await knex('fruit').insert([
    { id: 1, name: 'Jatin', favorite_thing: 'Star Wars' },
    { id: 2, name: 'Jen', favorite_thing: 'Cats' },
    { id: 3, name: 'David', favorite_thing: 'Board Games' },
    { id: 4, name: 'DaviD', favorite_thing: 'Avatar' },
    { id: 5, name: 'Gerard', favorite_thing: 'Ghosts' },
    { id: 6, name: 'Joseph', favorite_thing: 'Vaping' },
  ])
}
