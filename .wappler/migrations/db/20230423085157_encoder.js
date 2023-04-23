
exports.up = function(knex) {
  return knex.schema
    .table('qreport', async function (table) {
      table.string('encoder_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('qreport', async function (table) {
      table.dropColumn('encoder_id');
    })
};
