export async function seed(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  await knex('students').insert([
    { student_id: 1, student_name: 'Pete', student_points: 0 },
    { student_id: 2, student_name: 'Courtney', student_points: 0 },
    { student_id: 3, student_name: 'Teancum', student_points: 0 },
    { student_id: 4, student_name: 'Katie', student_points: 0 },
    { student_id: 5, student_name: 'Joana', student_points: 0 },
    { student_id: 6, student_name: 'Bonnie', student_points: 0 },
    { student_id: 7, student_name: 'Alex', student_points: 0 },
    { student_id: 8, student_name: 'Tayne', student_points: 0 },
    { student_id: 9, student_name: 'Karl', student_points: 0 },
    { student_id: 10, student_name: 'Maddy', student_points: 0 },
    { student_id: 11, student_name: 'Toby', student_points: 0 },
    { student_id: 12, student_name: 'Sam', student_points: 0 },
    { student_id: 13, student_name: 'Mike', student_points: 0 },
    { student_id: 14, student_name: 'Sandra', student_points: 0 },
    { student_id: 15, student_name: 'Murray', student_points: 0 },
    { student_id: 16, student_name: 'Matt', student_points: 0 },
  ])
}
