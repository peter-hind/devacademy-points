export async function seed(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  await knex('comments').insert([
    {
      comment_id: 1,
      comment_content:
        'Compared async functions to figuring out who shot first - Han or Greedo',
      student_id: 3,
      teacher_id: 1,
      points: 20,
    },
    {
      comment_id: 2,
      comment_content:
        'Saw Sam sneak a cheeky vape when he thought nobody was looking!',
      student_id: 12,
      teacher_id: 6,
      points: 10,
    },
    {
      comment_id: 3,
      comment_content: "Katie's cat is so cute!",
      student_id: 4,
      teacher_id: 2,
      points: 15,
    },
    {
      comment_id: 5,
      comment_content: 'Said he loved playing Catan more than his own children',
      student_id: 1,
      teacher_id: 3,
      points: 25,
    },
  ])
}
