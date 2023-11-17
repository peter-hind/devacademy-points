export async function up(knex) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('teacher_id')
    table.string('teacher_name')
    table.string('favorite_thing')
    table.string('teacher_picture')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('teachers')
}
