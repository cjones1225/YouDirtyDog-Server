
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {name: 'Rover', owner_id: '1'},
        {name: 'Fido', owner_id: '3'},
        {name: 'Lexi', owner_id: '2'}
      ]);
    });
};
