exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(), 

    // Inserts seed entries
    knex('products').insert([
      {
        name: 'Apricot',
        description: 'Full of fragrance and sweet, golden-orange apricots are another summer season delicacies of Asian origin. These much-prized fruits were first brought to the Europe by Greeks, who named them as “golden eggs of the sun.',
        price: 2.99,
        image: 'apricot.png',
        nutix_id: '513fceb475b8dbbc21000fae'
      },
      {
        name: 'Banana',
        description: 'Enjoy banana fruit; nature\'s own energy-rich food that comes with a safety envelope! Fresh, creamy, and delicious dessert bananas are one of the cheapest and readily available fruits year around.',
        price: 0.49,
        image: 'banana.png',
        nutix_id: '513fceb475b8dbbc21000fd3'
      },
      {
        name: 'Blackberry',
        description: 'Sweet, succulent blackberries are summer delicacies in the northern temperate regions.',
        price: 3.25,
        image: 'blackberry.png',
        nutix_id: '513fceb475b8dbbc21000fda'
      },
      {
        name: 'Blueberry',
        description: 'Sweet, juicy blueberries are rich in natural pro-anthocyanin pigment anti-oxidants. These tiny, round blue-purple berries have long been attributed to the longevity and wellness of indigenous people living around subarctic regions in the Northern hemisphere.',
        price: 2.99,
        image: 'blueberry.png',
        nutix_id: '513fceb475b8dbbc21000fe0'
      },
      {
        name: 'Cantaloupe',
        description: 'Wonderfully delicious with rich flavor, cantaloupes are very low in calories (100 g fruit has just 34 calories) and fats. Nonetheless, the fruit is rich in numerous health promoting poly-phenolic plant derived compounds, vitamins, and minerals that are absolute for optimum health.',
        price: 2.49,
        image: 'cantaloupe.png',
        nutix_id: '513fceb575b8dbbc2100109b'
      },
      {
        name: 'Cherry',
        description: 'Cherries are one of the very low calorie fruits. Nonetheless, they are rich source of phytonutrients, vitamins, and minerals. Both sweet as well as tart cherries are packed with numerous health benefiting compounds that are essential for wellness.',
        price: 1.99,
        image: 'cherry.png',
        nutix_id: '513fceb475b8dbbc21000ffe'
      },
      {
        name: 'Coconut',
        description: 'Coconut is a mature fruit of the cocos nucifera palm. It is one of very versatile and indispensable food item for millions of inhabitants in South and South-East Asia, and Pacific islands. It is one of the most sought-after ingredients in the kitchen since it employed in almost each and every recipe prepared in these parts of the world.',
        price: 3.99,
        image: 'coconut.png',
        nutix_id: '550a09db9e813c232a66d14b'
      },
      {
        name: 'Cranberry',
        description: 'Unique, wild and natural by habitat, cranberries are rich in phyto-nutrients (naturally derived plant compounds), particularly proanthocyanidin antioxidants, which are essential for all-round wellness.',
        price: 1.99,
        image: 'cranberry.png',
        nutix_id: '513fceb475b8dbbc21001009'
      },
      {
        name: 'Date',
        description: 'Dates are one of the most popular fruits packed with an impressive list of essential nutrients, vitamins, and minerals that are required for normal growth, development and overall well-being.',
        price: 0.99,
        image: 'date.png',
        nutix_id: '513fceb475b8dbbc21001013'
      },
      {
        name: 'Fig',
        description: 'Delicious, sweet fig fruit is one of the prime fruits enjoyed since antiquity in the human history. Fig is naturally rich in much health benefiting phyto-nutrients, anti-oxidants and vitamins. Dried figs, indeed, are highly concentrated source of minerals and vitamins. A fully developed fig features bell or pear shape with succulent flesh inside.',
        price: 1.49,
        image: 'fig.png',
        nutix_id: '513fceb475b8dbbc21001016'
      },
      {
        name: 'Grape',
        description: 'One of the popular among everyday fruits, grapes are widely viewed in many cultures as “the queen of fruits" since earlier times. These tiny berries of Europe and Mediterranean regions are the storehouse of numerous health promoting phyto-nutrients such as poly-phenolic antioxidants, vitamins, and minerals.',
        price: 1.99,
        image: 'grape.png',
        nutix_id: '513fceb575b8dbbc21001052'
      },
      {
        name: 'Grapefruit',
        description: 'Refreshing and delicious grapefruit is rich in phytonutrients like lycopene, vitamin A, and beta-carotene. The fruit is well known as "fruit from the paradise" for its unique health-promoting as well as disease preventing properties especially among the health-conscious, fitness enthusiasts.',
        price: 2.99,
        image: 'grapefruit.png',
        nutix_id: '513fceb475b8dbbc21001034'
      },
      {
        name: 'Kiwi',
        description: 'Kiwi fruit is one of the delicious fruits with full of promising health promoting phyto-chemicals, vitamins and minerals. This widely recognized, wonderfully unique fruit is native to eastern Chinese "Shaanxi" province. And for the same reason, this exotic fruit is recognized as the national fruit of China.',
        price: 1.39,
        image: 'kiwi.png',
        nutix_id: '513fceb575b8dbbc21001068'
      },
      {
        name: 'Lemon',
        description: 'Juicy, acidic, yet flavorful, lemon is one of the most widely used citrus fruits worldwide.',
        price: 0.99,
        image: 'lemon.png',
        nutix_id: '513fceb575b8dbbc2100106d'
      },
      {
        name: 'Lime',
        description: 'Lime is a close relative of lemons, but comparatively smaller, possesses thinner skin, and less sour.',
        price: 0.49,
        image: 'lime.png',
        nutix_id: '463d623782ece37e0328e900'
      },
      {
        name: 'Lychee',
        description: 'Delicious and juicy lychee or "Litchi" heralds you the arrival of summer. Besides being sweet and nutritious, these berries bring cooling effect on the human body to beat the scorching summer heat.',
        price: 1.99,
        image: 'lychee.png',
        nutix_id: '5564b44b6996de8b6d3d04d0'
      },
      {
        name: 'Mango',
        description: '“The king of the fruits," mango fruit is one of the most popular, nutritionally rich fruits with unique flavor, fragrance, taste, and heath promoting qualities, making it numero-uno among new functional foods, often labeled as “super fruits."',
        price: 2.49,
        image: 'mango.png',
        nutix_id: '513fceb575b8dbbc2100108f'
      },
      {
        name: 'Nectarine',
        description: 'This novel fruit is appreciated worldwide for its juicy, fragrant aroma, and unique taste. It thought to have originated in China and from where spread to Central Asia and Persia to Europe through ancient silk route.',
        price: 1.29,
        image: 'nectarine.png',
        nutix_id: '513fceb575b8dbbc210010ab'
      },
      {
        name: 'Orange',
        description: 'Delicious and juicy orange fruit contains an impressive list of essential nutrients, vitamins, minerals for normal growth and development and overall well-being.',
        price: 1.49,
        image: 'orange.png',
        nutix_id: '513fceb575b8dbbc210010bf'
      },
      {
        name: 'Peach',
        description: 'Wonderfully delicious peaches are low in calories (100 g just provide 39 calories), and contain no saturated fats. Nonetheless, they are packed with numerous health promoting compounds, minerals, and vitamins.',
        price: 1.99,
        image: 'peach.png',
        nutix_id: '513fceb575b8dbbc210010fb'
      },
      {
        name: 'Pear',
        description: 'Sweet, delicious and rich flavored pears offer crunchiness of apples yet juicy as peach and nectarine. They are widely popular, particularly in the whole of the northern hemisphere, for their unique nutrient qualities.',
        price: 1.49,
        image: 'pear.png',
        nutix_id: '513fceb575b8dbbc21001116'
      },
      {
        name: 'Persimmon',
        description: 'Persimmon fruit is a golden yellow, round or oval, flavorful, smooth textured delicacy from far East Asian origin. Its sweet, delicious flesh is packed with several health promoting nutrients such as vitamins, minerals, and anti-oxidants vital for optimum health.',
        price: 2.99,
        image: 'persimmon.png',
        nutix_id: '513fceb575b8dbbc2100112e'
      },

      {
        name: 'Pineapple',
        description: 'Juicy, deliciously tangy and sweet, pineapple fruit is rich in vitamins, minerals and health benefiting proteolytic compound, bromelain.',
        price: 2.99,
        image: 'pineapple.png',
        nutix_id: '513fceb575b8dbbc21001133'
      },
      {
        name: 'Plum',
        description: 'Plums are low in calories (46 calories per 100 g) and contain no saturated fats; however, they hold numerous health promoting compounds, minerals, and vitamins.',
        price: 1.99,
        image: 'plum.png',
        nutix_id: '513fceb575b8dbbc2100114b'
      },
      {
        name: 'Raspberry',
        description: 'Anti-oxidants rich, delicious raspberry is among the popular berries with highest ORAC values and considered as one of the super fruits.',
        price: 1.99,
        image: 'raspberry.png',
        nutix_id: '513fceb575b8dbbc21001175'
      },
      {
        name: 'Strawberry',
        description: 'Delicious, rich-red, sweet, yet gently tangy strawberries are among the most popular berries. These berries are native to Europe, however, nowadays cultivated in many temperate regions all over the world as an important commercial crop.',
        price: 0.99,
        image: 'strawberry.png',
        nutix_id: '513fceb575b8dbbc21001188'
      },
      {
        name: 'Watermelon',
        description: 'Wish to quench thirst while reboosting your body with anti-oxidant lycopene and vitamin-A? Watermelon has everything you need to beat scorching summer heat. Wonderfully delicious and juicy melons are the great source of much-needed water and electrolytes to tame tropical summer temperatures.',
        price: 5.99,
        image: 'watermelon.png',
        nutix_id: '513fceb575b8dbbc2100119f'
      }
    ])
  );
};
