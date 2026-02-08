import type { Exercise } from '../../types';

const grade4Spelling: Exercise[] = [
  {
    id: 'spelling-g4-1',
    section: 'spelling',
    grade: 4,
    title: 'Silent Letters: The Quiet Ones',
    description:
      'Some English words have letters you can see but cannot hear! Learn to spell words with silent letters like "k" in knife and "w" in write.',
    difficulty: 'medium',
    questions: [
      {
        id: 'spelling-g4-1-q1',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means a person who fights in armour?',
        hint: 'This word has a silent "k" at the beginning. Think of brave warriors from storybooks.',
        explanation:
          'The correct spelling is "knight". The "k" is silent — we say "nite". Knights were brave warriors who rode horses.',
        options: ['night', 'knight', 'knite', 'nighht'],
        correctAnswer: 'knight',
      },
      {
        id: 'spelling-g4-1-q2',
        type: 'fill-blank',
        question: 'Fill in the missing letters: k_i_e (a sharp tool used for cutting)',
        hint: 'This word starts with a silent "k". You use it to cut fruits and vegetables.',
        explanation:
          'The word is "knife". The "k" is silent in "knife" — we pronounce it as "nife".',
        correctAnswer: 'knife',
      },
      {
        id: 'spelling-g4-1-q3',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means to hit gently on a door.',
        hint: 'This word has a silent "k" at the start. You do this on a door before entering.',
        scrambledWord: 'kcnko',
        correctWord: 'knock',
      },
      {
        id: 'spelling-g4-1-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: lis_en (to pay attention with your ears)',
        hint: 'The missing letter is "t", but you do not hear it when you say the word!',
        explanation:
          'The word is "listen". The "t" is silent in "listen" — we say "lissen". Good listeners pay attention in class.',
        correctAnswer: 'listen',
      },
      {
        id: 'spelling-g4-1-q5',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means the joint in your hand between your fingers and wrist?',
        hint: 'This word has a silent "k" and a silent "c". You crack these when you stretch your fingers.',
        explanation:
          'The correct spelling is "knuckle". Both the "k" at the start is silent.',
        options: ['nuckle', 'knucle', 'knuckle', 'nuckell'],
        correctAnswer: 'knuckle',
      },
    ],
  },
  {
    id: 'spelling-g4-2',
    section: 'spelling',
    grade: 4,
    title: 'Double Letters: Twice the Fun',
    description:
      'Some words have two of the same letter right next to each other! Practise spelling words with double letters like "tt" in butter and "pp" in happy.',
    difficulty: 'medium',
    questions: [
      {
        id: 'spelling-g4-2-q1',
        type: 'fill-blank',
        question: 'Fill in the missing letters: bu_ _er (a yellow spread you put on bread)',
        hint: 'This word has double "t" in the middle. It is made from cream or milk.',
        explanation:
          'The word is "butter". It has a double "t". Butter is used in parathas and toast.',
        correctAnswer: 'butter',
      },
      {
        id: 'spelling-g4-2-q2',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means feeling joy.',
        hint: 'This word has a double "p". It is the opposite of sad.',
        scrambledWord: 'pahyp',
        correctWord: 'happy',
      },
      {
        id: 'spelling-g4-2-q3',
        type: 'mcq',
        question: 'Which is the correct spelling of a round, red fruit often used in salads?',
        hint: 'This word has a double letter. Think of the fruit used in making chutney and curry.',
        explanation:
          'The correct spelling is "tomato". Be careful — this one does NOT have double letters! Not every word that sounds like it has doubles actually does.',
        options: ['tomatto', 'tomato', 'tomatoe', 'toomato'],
        correctAnswer: 'tomato',
      },
      {
        id: 'spelling-g4-2-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: ki_ _en (a baby cat)',
        hint: 'This word has a double "t". These tiny animals are soft and playful.',
        explanation:
          'The word is "kitten". It has a double "t". Kittens are young cats that love to play.',
        correctAnswer: 'kitten',
      },
      {
        id: 'spelling-g4-2-q5',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means a flying insect that makes honey.',
        hint: 'This word has a double "e". It is yellow and black and lives in a hive.',
        scrambledWord: 'elbbum',
        correctWord: 'bumble',
      },
    ],
  },
  {
    id: 'spelling-g4-3',
    section: 'spelling',
    grade: 4,
    title: 'Describing Words: Adjectives',
    description:
      'Learn to spell words that describe people, places, and things. These are called adjectives, and they make your writing more colourful!',
    difficulty: 'medium',
    questions: [
      {
        id: 'spelling-g4-3-q1',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means very pretty or pleasing to look at.',
        hint: 'This is a long word with a silent "eau" sound. Think of a sunset or a garden.',
        scrambledWord: 'fuibateul',
        correctWord: 'beautiful',
      },
      {
        id: 'spelling-g4-3-q2',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means full of colour?',
        hint: 'Think of a Holi celebration with many colours. This word ends in "-ful".',
        explanation:
          'The correct spelling is "colourful". It is made from "colour" + "ful" (note: only one "l" at the end).',
        options: ['colorful', 'colourful', 'colorfull', 'colourfull'],
        correctAnswer: 'colourful',
      },
      {
        id: 'spelling-g4-3-q3',
        type: 'fill-blank',
        question: 'Fill in the missing letters: dif_i_ult (not easy to do)',
        hint: 'This word has two missing letters: "f" and "c". When something is hard, we say it is ___.',
        explanation:
          'The word is "difficult". It has double "f" and ends in "-cult". Some maths problems can be difficult!',
        correctAnswer: 'difficult',
      },
      {
        id: 'spelling-g4-3-q4',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means the opposite of weak.',
        hint: 'Elephants and wrestlers are this. The word has six letters.',
        scrambledWord: 'rongst',
        correctWord: 'strong',
      },
      {
        id: 'spelling-g4-3-q5',
        type: 'fill-blank',
        question: 'Fill in the missing letters: w_nder_ul (something amazing and delightful)',
        hint: 'When you see something great, you say "How ___!" The missing letters are "o" and "f".',
        explanation:
          'The word is "wonderful". It comes from "wonder" + "ful". The Taj Mahal is a wonderful monument.',
        correctAnswer: 'wonderful',
      },
    ],
  },
  {
    id: 'spelling-g4-4',
    section: 'spelling',
    grade: 4,
    title: 'School and Learning Words',
    description:
      'Practise spelling words you come across at school every day. From subjects to things in your classroom, these words are important to know!',
    difficulty: 'medium',
    questions: [
      {
        id: 'spelling-g4-4-q1',
        type: 'mcq',
        question: 'Which is the correct spelling of the subject where you learn about numbers?',
        hint: 'This subject uses addition, subtraction, and multiplication. It starts with "m".',
        explanation:
          'The correct spelling is "mathematics". Many students just call it "maths"!',
        options: ['mathmatics', 'mathematics', 'mathamatics', 'methematics'],
        correctAnswer: 'mathematics',
      },
      {
        id: 'spelling-g4-4-q2',
        type: 'fill-blank',
        question: 'Fill in the missing letters: sci_ _ce (the subject where you learn about nature and experiments)',
        hint: 'This word has a silent "c" in the middle. You do experiments in this subject.',
        explanation:
          'The word is "science". The "c" after "s" at the start makes an "s" sound, and the second "c" is soft.',
        correctAnswer: 'science',
      },
      {
        id: 'spelling-g4-4-q3',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell the place where books are kept for reading and borrowing.',
        hint: 'Your school has one of these rooms. It is a quiet place full of books.',
        scrambledWord: 'rlibyra',
        correctWord: 'library',
      },
      {
        id: 'spelling-g4-4-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: tea_ _er (the person who helps you learn at school)',
        hint: 'This word ends in "-cher". This person writes on the blackboard and explains lessons.',
        explanation:
          'The word is "teacher". Our teachers work hard to help us learn and grow.',
        correctAnswer: 'teacher',
      },
    ],
  },
  {
    id: 'spelling-g4-5',
    section: 'spelling',
    grade: 4,
    title: 'Indian Heritage Words',
    description:
      'Spell words connected to Indian culture, festivals, and everyday life. These words celebrate the rich heritage of our country!',
    difficulty: 'medium',
    questions: [
      {
        id: 'spelling-g4-5-q1',
        type: 'mcq',
        question: 'Which is the correct spelling of the word for a market or shopping area in a town?',
        hint: 'Every town in India has one. It is a place with many shops where people buy things.',
        explanation:
          'The correct spelling is "market". Indian markets are lively and colourful places.',
        options: ['markit', 'market', 'marcket', 'markeet'],
        correctAnswer: 'market',
      },
      {
        id: 'spelling-g4-5-q2',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means a celebration or special occasion.',
        hint: 'Diwali, Eid, and Christmas are all examples of this. The word has eight letters.',
        scrambledWord: 'vtfsleai',
        correctWord: 'festival',
      },
      {
        id: 'spelling-g4-5-q3',
        type: 'fill-blank',
        question: 'Fill in the missing letters: vil_ _ge (a small area in the countryside where people live)',
        hint: 'Many people in India live in these small communities. Farmers often live here.',
        explanation:
          'The word is "village". Millions of Indians live in villages across the country.',
        correctAnswer: 'village',
      },
      {
        id: 'spelling-g4-5-q4',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means a person who grows crops.',
        hint: 'This person works in the fields and grows the food we eat. India is called a land of these people.',
        scrambledWord: 'mrefar',
        correctWord: 'farmer',
      },
      {
        id: 'spelling-g4-5-q5',
        type: 'fill-blank',
        question: 'Fill in the missing letters: tra_ _tion (a belief or custom passed down through generations)',
        hint: 'India has many of these from different cultures. The missing letters are "d" and "i".',
        explanation:
          'The word is "tradition". India is known for its rich traditions in art, music, dance, and food.',
        correctAnswer: 'tradition',
      },
    ],
  },
];

export default grade4Spelling;
