let DataService = function () {
    this.recipes = [
        {
            id: 1,
            name: 'Chicken Curry',
            icon: 'Chicken-52.png',
            description: 'A flavour packed spicy Indian dish that has existed in one form or another for thousands of years!',
            feeds: 4,
            ingredients: [
                {
                    name: 'Onion',
                    quantity: '1 large'
                },
                {
                    name: 'Chicken',
                    quantity: '1kg'
                },
                {
                    name: 'Cooking Oil',
                    quantity: '4 tbsp'
                },
                {
                    name: 'Finger Chillies',
                    quantity: '8'
                },
                {
                    name: 'Salt',
                    quantity: '1 tsp'
                },
                {
                    name: 'Chili Powder',
                    quantity: '2 tsp'
                },
                {
                    name: 'Turmeric',
                    quantity: '2 tsp'
                },
                {
                    name: 'Garam Masala',
                    quantity: '1 tsp'
                },
                {
                    name: 'Ground Cumin',
                    quantity: '1 tsp'
                },
                {
                    name: 'Paprika',
                    quantity: '2 tsp'
                },
                {
                    name: 'Cinnamon',
                    quantity: '1 tsp'
                },
                {
                    name: 'Garlic Powder',
                    quantity: '1 tsp'
                },
                {
                    name: 'Ginger Powder',
                    quantity: '1 tsp'
                },
                {
                    name: 'Water',
                    quantity: 'Enough for the pan'
                },
                {
                    name: 'Rice (or Naan bread, or some other side)',
                    quantity: 'Enough for 4'
                }
            ],
            steps: [
                {
                    step: '1',
                    icon: 'Small Axe-52.png',
                    description: 'Chop the onions.'
                },
                {
                    step: '2',
                    icon: 'Gas-52.png',
                    description: 'Heat oil in a reasonably sized pan.'
                },
                {
                    step: '3',
                    icon: 'Onion Filled-50.png',
                    description: 'Brown the onions, covering them in salt once they are in the pan.'
                },
                {
                    step: '4',
                    icon: 'Kitchen-52.png',
                    description: 'Cooking the chicken in the pan.'
                },
                {
                    step: '5',
                    icon: 'Chili Pepper-52.png',
                    description: 'Once the chicken has cooked, turn the heat down and add all of the spices to the pan.'
                },
                {
                    step: '6',
                    icon: 'Water-52.png',
                    description: 'Add enough water to the pan to prevent the curry from burning for 1 hour.'
                },
                {
                    step: '7',
                    icon: 'Sack of Flour-52.png',
                    description: 'Before the curry has finished cooking, prepare your side dish.'
                },
                {
                    step: '8',
                    icon: 'Happy-52.png',
                    description: 'Once the curry and side dishes are prepared, server together and enjoy.'
                }
            ]
        },
        {
            id: 2,
            name: 'Spaghetti',
            icon: 'Spaghetti-52.png',
            description: 'Classic italian dish',
            feeds: 1,
            ingredients: [
                {
                    name: 'Spaghetti',
                    quantity: 'some'
                },
                {
                    name: 'Water',
                    quantity: 'enough'
                }
            ],
            steps: [
                {
                    step: '1',
                    icon: 'Clenched Fist-52.png',
                    description: 'Take a handful of spaghetti.'
                },
                {
                    step: '2',
                    icon: 'Viking Helmet-52.png',
                    description: 'Snap spaghetti in half like a barbarian and place in boiling water.'
                },
                {
                    step: '3',
                    icon: 'Time-48.png',
                    description: 'Wait some time.'
                },
                {
                    step: '4',
                    icon: 'Spoon-48.png',
                    description: 'Drain water and eat from pan.  Fork and spook optional.'
                }
            ]
        },
        {
            id: 3,
            name: 'Pizza',
            icon: 'Pizza Filled-50.png',
            description: 'Manna from heaven.',
            feeds: 5000,
            ingredients: [
                {
                    name: 'A telephone',
                    quantity: 'at least 1'
                },
                {
                    name: 'Monies',
                    quantity: 'About a tenner should do it'
                }
            ],
            steps: [
                {
                    step: '1',
                    icon: 'Shake Phone Filled-50.png',
                    description: 'Phone a pizza place.'
                },
                {
                    step: '2',
                    icon: 'Time-48.png',
                    description: 'Wait about half an hour.'
                },
                {
                    step: '3',
                    icon: 'Gremlin-52.png',
                    description: 'Pay the Pizza gremlin'
                },
                {
                    step: '4',
                    icon: 'Beer-52.png',
                    description: 'Enjoy!'
                }
            ]
        }
    ];
};

export {DataService};