
exports.up = function(knex) {
  return knex.schema
    .table('qreport', async function (table) {
      table.renameColumn('encoder_id', 'user_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('qreport', async function (table) {
      table.renameColumn('user_id', 'encoder_id');
    })
};
