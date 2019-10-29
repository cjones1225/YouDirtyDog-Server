
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {full_name: 'Melinda Briggs', user_name: 'MBriggs01', password: 'MBriggs01!'},
        { full_name: 'Jeff Star', user_name: 'JStar', password: 'JStar12!'}
      ]);
    });
};
