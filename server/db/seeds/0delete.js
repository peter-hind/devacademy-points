export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('students').del()
  await knex('teachers').del()
  await knex('comments').del()
  // Inserts seed entries
}
