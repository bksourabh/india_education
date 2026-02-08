import type { Exercise } from '../../types';

const grade4Exercises: Exercise[] = [
  {
    id: 'reading-g4-1',
    section: 'reading',
    grade: 4,
    title: 'The Water Cycle',
    description: 'Read about how water moves through nature and answer the questions.',
    difficulty: 'medium',
    passage:
      'Have you ever wondered where rain comes from? The answer lies in a process called the water cycle. ' +
      'It begins when the sun heats the water in rivers, lakes, and oceans. The heat turns the water into ' +
      'tiny droplets of vapour that rise up into the sky. This is called evaporation. As the vapour goes ' +
      'higher, the air becomes colder. The cold air turns the vapour back into tiny water droplets. ' +
      'These droplets come together to form clouds. This process is called condensation. When the clouds ' +
      'become heavy with water, the droplets fall back to the earth as rain, snow, or hail. This is called ' +
      'precipitation. The rainwater flows into rivers and streams, which carry it back to the oceans. ' +
      'Then the cycle begins all over again. In India, the monsoon season brings most of our yearly rainfall. ' +
      'Farmers depend on the monsoon to grow crops like rice, wheat, and sugarcane.',
    questions: [
      {
        id: 'reading-g4-1-q1',
        type: 'mcq',
        question: 'What causes water to turn into vapour?',
        hint: 'Something in the sky provides the energy needed.',
        explanation:
          'The passage states that the sun heats the water in rivers, lakes, and oceans, turning it into vapour. This process is called evaporation.',
        options: [
          'The wind blows on the water',
          'The sun heats the water',
          'The moon pulls the water up',
          'The clouds soak up the water',
        ],
        correctAnswer: 'The sun heats the water',
      },
      {
        id: 'reading-g4-1-q2',
        type: 'mcq',
        question: 'What is condensation?',
        hint: 'This happens when vapour meets cold air high up in the sky.',
        explanation:
          'The passage explains that condensation is when cold air turns vapour back into tiny water droplets, which come together to form clouds.',
        options: [
          'Water turning into vapour',
          'Rain falling from clouds',
          'Vapour turning back into water droplets to form clouds',
          'Rivers flowing into the ocean',
        ],
        correctAnswer: 'Vapour turning back into water droplets to form clouds',
      },
      {
        id: 'reading-g4-1-q3',
        type: 'mcq',
        question: 'What are the three forms of precipitation mentioned in the passage?',
        hint: 'Precipitation is what falls from heavy clouds.',
        explanation:
          'The passage says that when clouds become heavy, droplets fall back to earth as rain, snow, or hail.',
        options: [
          'Rain, fog, and dew',
          'Rain, snow, and hail',
          'Snow, sleet, and mist',
          'Rain, thunder, and lightning',
        ],
        correctAnswer: 'Rain, snow, and hail',
      },
      {
        id: 'reading-g4-1-q4',
        type: 'mcq',
        question: 'Why is the monsoon important for Indian farmers?',
        hint: 'Think about what crops need to grow.',
        explanation:
          'The passage says farmers depend on the monsoon to grow crops like rice, wheat, and sugarcane, because it brings most of the yearly rainfall.',
        options: [
          'It makes the weather cooler',
          'It helps them grow crops like rice, wheat, and sugarcane',
          'It fills their swimming pools',
          'It cleans the roads and streets',
        ],
        correctAnswer: 'It helps them grow crops like rice, wheat, and sugarcane',
      },
      {
        id: 'reading-g4-1-q5',
        type: 'mcq',
        question: 'What is the correct order of the water cycle?',
        hint: 'Follow the journey of water from the beginning of the passage.',
        explanation:
          'The passage describes the cycle as: evaporation (water to vapour), condensation (vapour to clouds), precipitation (rain falls down), and then water flows back to rivers and oceans.',
        options: [
          'Condensation, precipitation, evaporation',
          'Precipitation, evaporation, condensation',
          'Evaporation, condensation, precipitation',
          'Condensation, evaporation, precipitation',
        ],
        correctAnswer: 'Evaporation, condensation, precipitation',
      },
    ],
  },
  {
    id: 'reading-g4-2',
    section: 'reading',
    grade: 4,
    title: 'The Festival of Lights',
    description: 'Read about the celebration of Diwali and answer the questions.',
    difficulty: 'medium',
    passage:
      'Diwali, also known as Deepavali, is one of the most celebrated festivals in India. The word ' +
      '"Deepavali" comes from Sanskrit and means "a row of lights." The festival usually falls in the ' +
      'months of October or November. People celebrate it for five days. Before Diwali, families clean ' +
      'their homes and decorate them with colourful rangoli patterns and flowers. They buy new clothes ' +
      'and prepare delicious sweets like laddoo, barfi, and gulab jamun. On the main day, people light ' +
      'clay lamps called diyas and place them around their homes and on windowsills. The warm glow of ' +
      'diyas is believed to welcome Goddess Lakshmi, who brings wealth and good fortune. Children enjoy ' +
      'lighting sparklers and watching fireworks light up the night sky. Families visit relatives and ' +
      'exchange gifts and sweets. Diwali teaches us that light always wins over darkness and good always ' +
      'wins over evil. It is a time of joy, togetherness, and new beginnings.',
    questions: [
      {
        id: 'reading-g4-2-q1',
        type: 'mcq',
        question: 'What does the word "Deepavali" mean?',
        hint: 'The meaning comes from Sanskrit and is related to something bright.',
        explanation:
          'The passage says the word "Deepavali" comes from Sanskrit and means "a row of lights."',
        options: [
          'A festival of colours',
          'A row of lights',
          'A night of sweets',
          'A time of music',
        ],
        correctAnswer: 'A row of lights',
      },
      {
        id: 'reading-g4-2-q2',
        type: 'mcq',
        question: 'What do families do before Diwali?',
        hint: 'Think about how families prepare their homes.',
        explanation:
          'The passage says families clean their homes and decorate them with colourful rangoli patterns and flowers before Diwali.',
        options: [
          'They go on a holiday trip',
          'They clean and decorate their homes',
          'They plant new trees',
          'They paint the outside walls only',
        ],
        correctAnswer: 'They clean and decorate their homes',
      },
      {
        id: 'reading-g4-2-q3',
        type: 'mcq',
        question: 'Why do people light diyas during Diwali?',
        hint: 'A special goddess is believed to visit homes.',
        explanation:
          'The passage explains that the warm glow of diyas is believed to welcome Goddess Lakshmi, who brings wealth and good fortune.',
        options: [
          'To keep insects away',
          'To welcome Goddess Lakshmi',
          'Because there is no electricity',
          'To cook food outside',
        ],
        correctAnswer: 'To welcome Goddess Lakshmi',
      },
      {
        id: 'reading-g4-2-q4',
        type: 'mcq',
        question: 'Which sweets are mentioned in the passage?',
        hint: 'Look for the names of Indian sweets in the passage.',
        explanation:
          'The passage mentions that people prepare delicious sweets like laddoo, barfi, and gulab jamun.',
        options: [
          'Jalebi, rasgulla, and kheer',
          'Laddoo, barfi, and gulab jamun',
          'Halwa, payasam, and sandesh',
          'Kulfi, rabri, and peda',
        ],
        correctAnswer: 'Laddoo, barfi, and gulab jamun',
      },
      {
        id: 'reading-g4-2-q5',
        type: 'mcq',
        question: 'What is the main message of Diwali according to the passage?',
        hint: 'Think about what light and darkness represent.',
        explanation:
          'The passage says Diwali teaches us that light always wins over darkness and good always wins over evil.',
        options: [
          'Sweets are important in our lives',
          'We should always buy new clothes',
          'Light wins over darkness and good wins over evil',
          'Fireworks make everyone happy',
        ],
        correctAnswer: 'Light wins over darkness and good wins over evil',
      },
    ],
  },
  {
    id: 'reading-g4-3',
    section: 'reading',
    grade: 4,
    title: 'The Little Explorer of Ladakh',
    description: 'Read about a young girl\'s adventure in the mountains and answer the questions.',
    difficulty: 'medium',
    passage:
      'Tenzin was a ten-year-old girl who lived in a small village in Ladakh, high up in the Himalayan ' +
      'mountains. Her village was surrounded by snow-capped peaks and clear blue lakes. Every summer, ' +
      'Tenzin helped her father take their yaks to graze in the high meadows. One morning, while walking ' +
      'along a narrow mountain path, Tenzin spotted something unusual. A snow leopard was sitting on a ' +
      'rock, watching them quietly. Tenzin\'s heart beat fast, but she stayed calm. Her father had taught ' +
      'her that snow leopards are shy animals and rarely harm people. They watched the beautiful creature ' +
      'for a few minutes before it silently disappeared behind the rocks. That evening, Tenzin told her ' +
      'mother about the leopard. Her mother smiled and said, "The snow leopard is the guardian of these ' +
      'mountains. Seeing one means the mountains are healthy." Tenzin felt lucky and promised to always ' +
      'protect the animals and mountains of her homeland.',
    questions: [
      {
        id: 'reading-g4-3-q1',
        type: 'mcq',
        question: 'Where is Tenzin\'s village located?',
        hint: 'The passage mentions a famous mountain range.',
        explanation:
          'The passage says Tenzin lived in a small village in Ladakh, high up in the Himalayan mountains.',
        options: [
          'Near the sea in Goa',
          'In the desert of Rajasthan',
          'High up in the Himalayan mountains in Ladakh',
          'In the forests of Assam',
        ],
        correctAnswer: 'High up in the Himalayan mountains in Ladakh',
      },
      {
        id: 'reading-g4-3-q2',
        type: 'mcq',
        question: 'What did Tenzin help her father do every summer?',
        hint: 'They took their animals to a special place.',
        explanation:
          'The passage says Tenzin helped her father take their yaks to graze in the high meadows every summer.',
        options: [
          'Sell wool at the market',
          'Take their yaks to graze in the high meadows',
          'Build a new house',
          'Catch fish in the lake',
        ],
        correctAnswer: 'Take their yaks to graze in the high meadows',
      },
      {
        id: 'reading-g4-3-q3',
        type: 'mcq',
        question: 'Why did Tenzin stay calm when she saw the snow leopard?',
        hint: 'Her father had told her something important about these animals.',
        explanation:
          'Tenzin stayed calm because her father had taught her that snow leopards are shy animals and rarely harm people.',
        options: [
          'She had seen many leopards before',
          'The leopard was very far away',
          'Her father had taught her they are shy and rarely harm people',
          'She was too scared to move',
        ],
        correctAnswer: 'Her father had taught her they are shy and rarely harm people',
      },
      {
        id: 'reading-g4-3-q4',
        type: 'mcq',
        question: 'What did Tenzin\'s mother say about the snow leopard?',
        hint: 'Her mother connected the leopard to the health of their home.',
        explanation:
          'Tenzin\'s mother said the snow leopard is the guardian of the mountains and seeing one means the mountains are healthy.',
        options: [
          'It is a dangerous wild animal',
          'It brings bad luck to the village',
          'It is the guardian of the mountains',
          'It should be caught and kept in a zoo',
        ],
        correctAnswer: 'It is the guardian of the mountains',
      },
    ],
  },
  {
    id: 'reading-g4-4',
    section: 'reading',
    grade: 4,
    title: 'How Silk is Made',
    description: 'Read about the fascinating process of making silk in India and answer the questions.',
    difficulty: 'medium',
    passage:
      'India is one of the largest producers of silk in the world. But do you know how silk is made? ' +
      'The story of silk begins with a tiny creature called the silkworm. Silkworms are actually not ' +
      'worms at all \u2014 they are caterpillars of the silk moth. Farmers in states like Karnataka, ' +
      'Andhra Pradesh, and West Bengal raise silkworms on trays filled with fresh mulberry leaves. ' +
      'The silkworms eat the leaves day and night and grow quickly. After about a month, each silkworm ' +
      'spins a cocoon around itself using a single thread of silk. This thread can be up to 900 metres ' +
      'long! Workers carefully collect the cocoons and place them in hot water to loosen the silk threads. ' +
      'Then they unwind the threads and twist several together to make a stronger yarn. This yarn is woven ' +
      'on looms to create beautiful silk fabric. Indian silk sarees, especially from Varanasi and ' +
      'Kanchipuram, are famous around the world for their bright colours and detailed designs.',
    questions: [
      {
        id: 'reading-g4-4-q1',
        type: 'mcq',
        question: 'What are silkworms actually?',
        hint: 'The passage says they are not really worms.',
        explanation:
          'The passage explains that silkworms are actually not worms at all \u2014 they are caterpillars of the silk moth.',
        options: [
          'A type of earthworm',
          'Caterpillars of the silk moth',
          'A type of spider',
          'Baby butterflies',
        ],
        correctAnswer: 'Caterpillars of the silk moth',
      },
      {
        id: 'reading-g4-4-q2',
        type: 'mcq',
        question: 'What do silkworms eat?',
        hint: 'Farmers keep the silkworms on trays with a specific type of leaf.',
        explanation:
          'The passage says farmers raise silkworms on trays filled with fresh mulberry leaves, which the worms eat day and night.',
        options: [
          'Banana leaves',
          'Neem leaves',
          'Mulberry leaves',
          'Mango leaves',
        ],
        correctAnswer: 'Mulberry leaves',
      },
      {
        id: 'reading-g4-4-q3',
        type: 'mcq',
        question: 'How long can a single silk thread from one cocoon be?',
        hint: 'The number is surprisingly large for such a small creature.',
        explanation:
          'The passage states that the silk thread from a single cocoon can be up to 900 metres long.',
        options: [
          'Up to 9 metres',
          'Up to 90 metres',
          'Up to 900 metres',
          'Up to 9000 metres',
        ],
        correctAnswer: 'Up to 900 metres',
      },
      {
        id: 'reading-g4-4-q4',
        type: 'mcq',
        question: 'Why are cocoons placed in hot water?',
        hint: 'The workers need to get the thread out of the cocoon.',
        explanation:
          'The passage says workers place cocoons in hot water to loosen the silk threads so they can be unwound.',
        options: [
          'To clean the silk',
          'To loosen the silk threads',
          'To kill the bacteria',
          'To make the cocoons bigger',
        ],
        correctAnswer: 'To loosen the silk threads',
      },
      {
        id: 'reading-g4-4-q5',
        type: 'mcq',
        question: 'Which Indian cities are famous for silk sarees?',
        hint: 'One city is in Uttar Pradesh and the other is in Tamil Nadu.',
        explanation:
          'The passage says Indian silk sarees from Varanasi and Kanchipuram are famous around the world.',
        options: [
          'Mumbai and Delhi',
          'Jaipur and Hyderabad',
          'Varanasi and Kanchipuram',
          'Kolkata and Chennai',
        ],
        correctAnswer: 'Varanasi and Kanchipuram',
      },
    ],
  },
  {
    id: 'reading-g4-5',
    section: 'reading',
    grade: 4,
    title: 'The Secret of the Banyan Tree',
    description: 'Read a story about children who discover something special about an old tree and answer the questions.',
    difficulty: 'medium',
    passage:
      'In the centre of Arjun\'s village in Maharashtra stood a huge banyan tree. The villagers said it ' +
      'was more than two hundred years old. Its long roots hung down from the branches like curtains, and ' +
      'its shade covered almost the entire village square. One afternoon, Arjun and his friends Meera and ' +
      'Kabir were playing near the tree when Meera noticed something carved into the trunk. It was a small ' +
      'map! The map showed a path leading from the tree to the old well behind the village temple. Excited, ' +
      'the three friends followed the path. Behind the well, they found a flat stone with words carved in ' +
      'Marathi. Their teacher, Mr. Patil, helped them read it. The stone told the story of how their ' +
      'village was founded two hundred years ago by a brave woman named Savitribai. She had planted the ' +
      'banyan tree on the very first day. The children were thrilled. They told the whole village, and ' +
      'everyone decided to hold a celebration to honour Savitribai and the great banyan tree.',
    questions: [
      {
        id: 'reading-g4-5-q1',
        type: 'mcq',
        question: 'How old was the banyan tree said to be?',
        hint: 'The villagers told stories about the tree\'s age.',
        explanation:
          'The passage says the villagers said the banyan tree was more than two hundred years old.',
        options: [
          'About fifty years old',
          'More than one hundred years old',
          'More than two hundred years old',
          'About five hundred years old',
        ],
        correctAnswer: 'More than two hundred years old',
      },
      {
        id: 'reading-g4-5-q2',
        type: 'mcq',
        question: 'What did Meera notice on the tree trunk?',
        hint: 'Something was carved into the bark of the tree.',
        explanation:
          'Meera noticed a small map carved into the trunk of the banyan tree.',
        options: [
          'A bird\'s nest',
          'A small map',
          'Someone\'s name',
          'A drawing of an animal',
        ],
        correctAnswer: 'A small map',
      },
      {
        id: 'reading-g4-5-q3',
        type: 'mcq',
        question: 'Where did the map lead the children?',
        hint: 'The path went to a place near the village temple.',
        explanation:
          'The map showed a path leading from the tree to the old well behind the village temple.',
        options: [
          'To a hidden cave',
          'To the old well behind the village temple',
          'To a treasure buried in the forest',
          'To the river bank',
        ],
        correctAnswer: 'To the old well behind the village temple',
      },
      {
        id: 'reading-g4-5-q4',
        type: 'mcq',
        question: 'In which language were the words on the stone written?',
        hint: 'The village is in Maharashtra. Think about the language spoken there.',
        explanation:
          'The passage says the children found a flat stone with words carved in Marathi, the language of Maharashtra.',
        options: ['Hindi', 'Tamil', 'Marathi', 'Bengali'],
        correctAnswer: 'Marathi',
      },
      {
        id: 'reading-g4-5-q5',
        type: 'mcq',
        question: 'Who founded the village and planted the banyan tree?',
        hint: 'The stone told the story of a brave person.',
        explanation:
          'The stone told the story of how the village was founded two hundred years ago by a brave woman named Savitribai, who planted the banyan tree on the first day.',
        options: [
          'Mr. Patil the teacher',
          'Arjun\'s grandfather',
          'A brave woman named Savitribai',
          'A king from long ago',
        ],
        correctAnswer: 'A brave woman named Savitribai',
      },
    ],
  },
];

export default grade4Exercises;
