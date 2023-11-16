export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('student').del()
  await knex('teachers').del()
  // Inserts seed entries
}
