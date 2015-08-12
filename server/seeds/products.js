exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(), 

    // Inserts seed entries
    knex('products').insert([
      {
        name: 'Watermelon',
        description: 'Wish to quench thirst while reboosting your body with anti-oxidant lycopene and vitamin-A? Watermelon has everything you need to beat scorching summer heat. Wonderfully delicious and juicy melons are the great source of much-needed water and electrolytes to tame tropical summer temperatures.',
        price: 5.99,
        image: 'watermelon.png',
        nutix_id: '513fceb575b8dbbc2100119f'
      },
      {
        name: 'Orange',
        description: 'Delicious and juicy orange fruit contains an impressive list of essential nutrients, vitamins, minerals for normal growth and development and overall well-being.',
        price: 2.99,
        image: 'orange.png',
        nutix_id: '513fceb575b8dbbc210010bf'
      }
    ])
  );
};
