export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('students').del()
  await knex('teachers').del()
  // Inserts seed entries
}
