export async function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('comment_id')
    table.string('comment_content')
    table.integer('student_id')
    table.integer('teacher_id')
    table.integer('points')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('comments')
}
