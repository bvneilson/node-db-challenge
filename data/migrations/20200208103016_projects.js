
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .notNullable();
      tbl.text('description', 128);
      tbl.boolean('completed');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.text('description', 128)
        .notNullable();;
      tbl.text('notes', 128);
      tbl.boolean('completed');
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .notNullable();
      tbl.text('description', 128);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
