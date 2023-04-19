
exports.up = function(knex) {
  return knex.schema
    .createTable('qreport', async function (table) {
      table.increments('qreport_id');
      table.string('qdocument_code');
      table.string('qrevision_no');
      table.string('qeffectivity');
      table.string('qquarter');
      table.string('qname_office');
      table.string('qstrategic_goals');
      table.string('qsuccess_indicatortarget');
      table.string('qalloted_budget');
      table.string('qdivision_accountable');
      table.string('qactual_accomplishment');
      table.string('qaccomplish_rate');
      table.string('qrating');
      table.string('qremarks');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('qreport')
};
