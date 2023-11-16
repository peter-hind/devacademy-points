export async function seed(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  await knex('teachers').insert([
    { teacher_id: 1, teacher_name: 'Jatin', favorite_thing: 'Star Wars' },
    { teacher_id: 2, teacher_name: 'Jen', favorite_thing: 'Cats' },
    { teacher_id: 3, teacher_name: 'David', favorite_thing: 'Board Games' },
    { teacher_id: 4, teacher_name: 'DaviD', favorite_thing: 'Avatar' },
    { teacher_id: 5, teacher_name: 'Gerard', favorite_thing: 'Ghosts' },
    { teacher_id: 6, teacher_name: 'Joseph', favorite_thing: 'Vaping' },
  ])
}
