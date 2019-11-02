const CustomersService = {
  getAllCustomers(knex) {
    return knex.select('*').from('customers');
  },

  getCustomerById(knex, id) {
    return knex
      .from('customers')
      .select('*')
      .where('id', id)
      .first();
  },

  insertCustomer(knex, newCustomer) {
    return knex
      .insert(newCustomer)
      .into('customers')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  deleteCustomer(knex, id) {
    return knex
      .from('customers')
      .where({ id })
      .delete();
  },
};

module.exports = CustomersService