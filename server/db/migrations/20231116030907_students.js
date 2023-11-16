export async function up(knex) {
  return knex.schema.createTable('students', (table) => {
    table.increments('student_id')
    table.string('student_name')
    table.string('student_picture')
    table.integer('student_points')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('students')
}
