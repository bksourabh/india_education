import type { Exercise } from '../../types';

const grade3Exercises: Exercise[] = [
  {
    id: 'reading-g3-1',
    section: 'reading',
    grade: 3,
    title: 'The Clever Crow',
    description: 'Read a short story about a thirsty crow and answer the questions.',
    difficulty: 'easy',
    passage:
      'One hot summer day, a crow was very thirsty. He flew from tree to tree looking for water. ' +
      'At last, he found a pot with a little water at the bottom. His beak could not reach the water. ' +
      'The clever crow had an idea. He picked up small stones one by one and dropped them into the pot. ' +
      'Slowly, the water came up higher and higher. Finally, the crow drank the cool water and flew away happily. ' +
      'He was proud of his smart thinking. The other birds watched in surprise. ' +
      '"What a clever bird!" said a mynah sitting on a neem tree nearby.',
    questions: [
      {
        id: 'reading-g3-1-q1',
        type: 'mcq',
        question: 'Why was the crow flying from tree to tree?',
        hint: 'Think about what the crow needed on a hot day.',
        explanation:
          'The story says it was a hot summer day and the crow was very thirsty, so he was looking for water.',
        options: [
          'He was looking for food',
          'He was looking for water',
          'He was looking for his friends',
          'He was looking for a place to sleep',
        ],
        correctAnswer: 'He was looking for water',
      },
      {
        id: 'reading-g3-1-q2',
        type: 'mcq',
        question: 'What did the crow drop into the pot?',
        hint: 'The crow picked up something small from the ground.',
        explanation:
          'The passage tells us the crow picked up small stones one by one and dropped them into the pot.',
        options: ['Leaves', 'Sticks', 'Small stones', 'Seeds'],
        correctAnswer: 'Small stones',
      },
      {
        id: 'reading-g3-1-q3',
        type: 'mcq',
        question: 'What happened when the stones went into the pot?',
        hint: 'Think about what happens when you put things into water.',
        explanation:
          'When the crow dropped stones into the pot, the water level rose higher and higher so he could drink it.',
        options: [
          'The pot broke',
          'The water came up higher',
          'The water disappeared',
          'The pot fell down',
        ],
        correctAnswer: 'The water came up higher',
      },
      {
        id: 'reading-g3-1-q4',
        type: 'mcq',
        question: 'Which bird was sitting on the neem tree?',
        hint: 'Read the last line of the passage carefully.',
        explanation:
          'The last line says a mynah sitting on a neem tree nearby called the crow clever.',
        options: ['A parrot', 'A sparrow', 'A mynah', 'A pigeon'],
        correctAnswer: 'A mynah',
      },
    ],
  },
  {
    id: 'reading-g3-2',
    section: 'reading',
    grade: 3,
    title: 'My Grandmother\'s Garden',
    description: 'Read about a child\'s visit to their grandmother\'s garden and answer the questions.',
    difficulty: 'easy',
    passage:
      'Every Sunday, I visit my grandmother in her small house near the river. She has a beautiful garden ' +
      'with many flowers. There are red roses, yellow marigolds, and white jasmine. My favourite flowers are ' +
      'the marigolds because they look like little suns. Grandmother also grows tulsi, mint, and curry leaves. ' +
      'She uses them to make tasty food and warm tea. I help her water the plants every morning. ' +
      'She tells me that plants are like children. They need love, water, and sunlight to grow strong. ' +
      'I love spending time in her garden. The butterflies and bees visit the garden too. ' +
      'It is the happiest place I know.',
    questions: [
      {
        id: 'reading-g3-2-q1',
        type: 'mcq',
        question: 'When does the child visit grandmother?',
        hint: 'Look at the very first line of the passage.',
        explanation: 'The passage begins with "Every Sunday, I visit my grandmother."',
        options: ['Every Monday', 'Every Saturday', 'Every Sunday', 'Every Friday'],
        correctAnswer: 'Every Sunday',
      },
      {
        id: 'reading-g3-2-q2',
        type: 'mcq',
        question: 'Which flower is the child\'s favourite?',
        hint: 'The child compares this flower to something bright in the sky.',
        explanation:
          'The child says "My favourite flowers are the marigolds because they look like little suns."',
        options: ['Red roses', 'White jasmine', 'Yellow marigolds', 'Tulsi'],
        correctAnswer: 'Yellow marigolds',
      },
      {
        id: 'reading-g3-2-q3',
        type: 'mcq',
        question: 'What does grandmother use the herbs for?',
        hint: 'Think about what you do with tulsi, mint, and curry leaves.',
        explanation:
          'The passage says grandmother uses tulsi, mint, and curry leaves to make tasty food and warm tea.',
        options: [
          'To make medicine',
          'To make tasty food and warm tea',
          'To sell at the market',
          'To decorate the house',
        ],
        correctAnswer: 'To make tasty food and warm tea',
      },
      {
        id: 'reading-g3-2-q4',
        type: 'mcq',
        question: 'According to grandmother, what do plants need to grow?',
        hint: 'Grandmother compares plants to children.',
        explanation:
          'Grandmother tells the child that plants need love, water, and sunlight to grow strong.',
        options: [
          'Love, water, and sunlight',
          'Music, water, and food',
          'Stones, sand, and mud',
          'Rain, wind, and shade',
        ],
        correctAnswer: 'Love, water, and sunlight',
      },
    ],
  },
  {
    id: 'reading-g3-3',
    section: 'reading',
    grade: 3,
    title: 'The Friendly Elephant',
    description: 'Read about an elephant who lives in a forest and answer the questions.',
    difficulty: 'medium',
    passage:
      'Deep inside the Kaziranga forest, there lived a young elephant named Golu. Golu was the friendliest ' +
      'animal in the forest. Every morning, he walked to the river to drink water and take a mud bath. ' +
      'The mud kept his skin cool in the hot sun. One day, a baby deer got lost and could not find its mother. ' +
      'It was crying near the tall grass. Golu heard the sound and walked over gently. He used his long trunk ' +
      'to smell the air and find the mother deer. He led the baby deer through the forest safely. ' +
      'The mother deer was so happy. She thanked Golu with a soft touch of her nose. ' +
      'From that day, all the animals called Golu "The Kind One."',
    questions: [
      {
        id: 'reading-g3-3-q1',
        type: 'mcq',
        question: 'Where did Golu the elephant live?',
        hint: 'The name of the forest is mentioned in the very first line.',
        explanation: 'The story says Golu lived deep inside the Kaziranga forest.',
        options: [
          'In a zoo',
          'In the Kaziranga forest',
          'In a village',
          'Near the sea',
        ],
        correctAnswer: 'In the Kaziranga forest',
      },
      {
        id: 'reading-g3-3-q2',
        type: 'mcq',
        question: 'Why did Golu take mud baths?',
        hint: 'Think about what mud does on a hot day.',
        explanation:
          'The passage explains that the mud kept his skin cool in the hot sun.',
        options: [
          'Because he liked to play',
          'Because the mud kept his skin cool',
          'Because his mother told him to',
          'Because he wanted to look brown',
        ],
        correctAnswer: 'Because the mud kept his skin cool',
      },
      {
        id: 'reading-g3-3-q3',
        type: 'mcq',
        question: 'How did Golu find the mother deer?',
        hint: 'Elephants have a special body part that helps them smell.',
        explanation:
          'Golu used his long trunk to smell the air and find the mother deer.',
        options: [
          'He used his eyes to look around',
          'He asked other animals',
          'He used his long trunk to smell the air',
          'He followed footprints on the ground',
        ],
        correctAnswer: 'He used his long trunk to smell the air',
      },
      {
        id: 'reading-g3-3-q4',
        type: 'mcq',
        question: 'What did the animals call Golu after he helped the baby deer?',
        hint: 'Read the very last line of the story.',
        explanation:
          'The last line says all the animals called Golu "The Kind One" because he helped the lost baby deer.',
        options: [
          'The Strong One',
          'The Brave One',
          'The Kind One',
          'The Big One',
        ],
        correctAnswer: 'The Kind One',
      },
    ],
  },
  {
    id: 'reading-g3-4',
    section: 'reading',
    grade: 3,
    title: 'A Rainy Day at School',
    description: 'Read about what happens at school on a rainy day and answer the questions.',
    difficulty: 'medium',
    passage:
      'It was a rainy Monday morning. Dark clouds covered the sky and rain fell in big drops. ' +
      'Riya wore her yellow raincoat and carried her red umbrella to school. The playground was full of puddles. ' +
      'The children could not play outside during lunch break. Instead, their teacher, Mrs. Sharma, told them ' +
      'a story about the rain cycle. She explained how water goes up from rivers and oceans to form clouds. ' +
      'Then the clouds bring rain back to the earth. Riya thought it was like magic! After the story, ' +
      'the children drew pictures of rainy days. Riya drew a rainbow with seven colours. ' +
      'When school ended, the rain had stopped and a real rainbow appeared in the sky. ' +
      '"Look! My rainbow came true!" Riya shouted with joy.',
    questions: [
      {
        id: 'reading-g3-4-q1',
        type: 'mcq',
        question: 'What colour was Riya\'s raincoat?',
        hint: 'Riya had two colourful things to keep her dry.',
        explanation: 'The passage says Riya wore her yellow raincoat to school.',
        options: ['Red', 'Blue', 'Yellow', 'Green'],
        correctAnswer: 'Yellow',
      },
      {
        id: 'reading-g3-4-q2',
        type: 'mcq',
        question: 'Why could the children not play outside?',
        hint: 'Think about what the weather was like that day.',
        explanation:
          'It was raining and the playground was full of puddles, so the children could not play outside.',
        options: [
          'The playground was being painted',
          'The playground was full of puddles',
          'The teacher said no',
          'It was too hot outside',
        ],
        correctAnswer: 'The playground was full of puddles',
      },
      {
        id: 'reading-g3-4-q3',
        type: 'mcq',
        question: 'What did Mrs. Sharma tell the children about?',
        hint: 'The teacher explained something about how rain works.',
        explanation:
          'Mrs. Sharma told the children a story about the rain cycle, explaining how water goes up from rivers and oceans to form clouds.',
        options: [
          'A fairy tale',
          'The rain cycle',
          'A funny joke',
          'A story about animals',
        ],
        correctAnswer: 'The rain cycle',
      },
      {
        id: 'reading-g3-4-q4',
        type: 'mcq',
        question: 'What happened when school ended?',
        hint: 'Something beautiful appeared that matched Riya\'s drawing.',
        explanation:
          'When school ended, the rain had stopped and a real rainbow appeared in the sky, just like the one Riya had drawn.',
        options: [
          'It started raining harder',
          'A real rainbow appeared in the sky',
          'The children went swimming',
          'The sun did not come out',
        ],
        correctAnswer: 'A real rainbow appeared in the sky',
      },
    ],
  },
  {
    id: 'reading-g3-5',
    section: 'reading',
    grade: 3,
    title: 'The Mango Tree',
    description: 'Read a story about two friends and a mango tree and answer the questions.',
    difficulty: 'medium',
    passage:
      'Aman and Priya were best friends who lived next door to each other in a small town in Kerala. ' +
      'Between their houses stood a tall mango tree. Every summer, the tree gave sweet, juicy mangoes. ' +
      'Aman loved to climb the tree and pick the mangoes. Priya would stand below and catch them in a basket. ' +
      'One summer, the tree did not give any fruit. The leaves turned yellow and dry. ' +
      'Priya said, "Maybe the tree is thirsty." So every day, the two friends brought buckets of water ' +
      'and poured them around the tree. They also put compost near its roots. After a few weeks, ' +
      'new green leaves appeared. By the next summer, the tree was full of mangoes again. ' +
      'The friends shared the mangoes with their neighbours and everyone was happy.',
    questions: [
      {
        id: 'reading-g3-5-q1',
        type: 'mcq',
        question: 'Where did Aman and Priya live?',
        hint: 'Look for the name of the state mentioned in the passage.',
        explanation:
          'The passage says Aman and Priya lived next door to each other in a small town in Kerala.',
        options: [
          'In a city in Tamil Nadu',
          'In a small town in Kerala',
          'In a village in Rajasthan',
          'In a town in Punjab',
        ],
        correctAnswer: 'In a small town in Kerala',
      },
      {
        id: 'reading-g3-5-q2',
        type: 'mcq',
        question: 'What was wrong with the mango tree one summer?',
        hint: 'The tree looked different from how it usually looked.',
        explanation:
          'The passage says the tree did not give any fruit and the leaves turned yellow and dry.',
        options: [
          'It fell down in a storm',
          'Its leaves turned yellow and dry',
          'Insects ate all the mangoes',
          'It grew too tall',
        ],
        correctAnswer: 'Its leaves turned yellow and dry',
      },
      {
        id: 'reading-g3-5-q3',
        type: 'mcq',
        question: 'What did the friends do to help the tree?',
        hint: 'Priya thought the tree needed something to drink.',
        explanation:
          'The friends brought buckets of water and poured them around the tree. They also put compost near its roots.',
        options: [
          'They cut the yellow leaves',
          'They gave it water and compost',
          'They called a gardener',
          'They planted a new tree',
        ],
        correctAnswer: 'They gave it water and compost',
      },
      {
        id: 'reading-g3-5-q4',
        type: 'mcq',
        question: 'What did the friends do with the mangoes the next summer?',
        hint: 'The friends were kind to the people around them.',
        explanation:
          'The passage says the friends shared the mangoes with their neighbours and everyone was happy.',
        options: [
          'They sold them at the market',
          'They kept all of them',
          'They shared them with their neighbours',
          'They made mango pickle',
        ],
        correctAnswer: 'They shared them with their neighbours',
      },
    ],
  },
];

export default grade3Exercises;
