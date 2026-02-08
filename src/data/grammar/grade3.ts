import type { Exercise } from '../../types';

const grade3Exercises: Exercise[] = [
  // ---------------------------------------------------------------------------
  // Exercise 1 — Nouns (Common & Proper)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g3-1',
    section: 'grammar',
    grade: 3,
    title: 'Nouns: Common and Proper',
    description:
      'Learn the difference between common nouns (general names) and proper nouns (specific names that start with a capital letter).',
    difficulty: 'easy',
    questions: [
      {
        id: 'grammar-g3-1-q1',
        type: 'mcq',
        question: 'Which of the following is a proper noun?',
        hint: 'A proper noun is a specific name and always begins with a capital letter.',
        explanation:
          '"Delhi" is a proper noun because it is the specific name of a city. Words like "city", "river", and "dog" are common nouns.',
        options: ['city', 'Delhi', 'river', 'dog'],
        correctAnswer: 'Delhi',
      },
      {
        id: 'grammar-g3-1-q2',
        type: 'fill-blank',
        question:
          'My friend ______ lives in Mumbai. (Fill in a proper noun — a name for your friend)',
        hint: 'A proper noun is a specific name of a person, place, or thing. It starts with a capital letter.',
        explanation:
          'Any specific name like "Aarav", "Priya", or "Rohan" is a proper noun. Proper nouns always begin with a capital letter.',
        correctAnswer: 'Aarav',
      },
      {
        id: 'grammar-g3-1-q3',
        type: 'mcq',
        question: 'Which word is a common noun?',
        hint: 'A common noun is a general name for a person, place, animal, or thing.',
        explanation:
          '"teacher" is a common noun because it refers to any teacher in general, not one specific person.',
        options: ['Ganga', 'India', 'teacher', 'Diwali'],
        correctAnswer: 'teacher',
      },
      {
        id: 'grammar-g3-1-q4',
        type: 'mcq',
        question:
          'Pick the sentence that uses a proper noun correctly.',
        hint: 'Proper nouns always start with a capital letter.',
        explanation:
          '"Rani goes to Kendriya Vidyalaya." is correct because "Rani" (a person) and "Kendriya Vidyalaya" (a specific school) are proper nouns and begin with capital letters.',
        options: [
          'rani goes to kendriya vidyalaya.',
          'Rani goes to Kendriya Vidyalaya.',
          'Rani goes to kendriya vidyalaya.',
          'rani goes to Kendriya Vidyalaya.',
        ],
        correctAnswer: 'Rani goes to Kendriya Vidyalaya.',
      },
      {
        id: 'grammar-g3-1-q5',
        type: 'sentence-builder',
        question: 'Arrange these words to make a correct sentence about a proper noun.',
        hint: 'Start the sentence with the proper noun (the name of the river).',
        words: ['Ganga', 'is', 'a', 'holy', 'river.'],
        correctSentence: 'Ganga is a holy river.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 2 — Verbs (Action Words)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g3-2',
    section: 'grammar',
    grade: 3,
    title: 'Verbs: Action Words',
    description:
      'Verbs are words that show an action (what someone or something does). Let us find the action words!',
    difficulty: 'easy',
    questions: [
      {
        id: 'grammar-g3-2-q1',
        type: 'mcq',
        question: 'Which word is a verb (action word) in this sentence? "Ravi runs to school every day."',
        hint: 'An action word tells us what someone does.',
        explanation:
          '"runs" is the verb because it tells us the action Ravi is doing.',
        options: ['Ravi', 'runs', 'school', 'day'],
        correctAnswer: 'runs',
      },
      {
        id: 'grammar-g3-2-q2',
        type: 'fill-blank',
        question: 'The birds ______ in the sky. (Use an action word)',
        hint: 'Think about what birds do in the sky.',
        explanation:
          '"fly" is the correct verb. Birds fly in the sky. Other action words like "sing" or "soar" could also work, but "fly" is the most common.',
        correctAnswer: 'fly',
      },
      {
        id: 'grammar-g3-2-q3',
        type: 'mcq',
        question: 'Which of the following is NOT an action word?',
        hint: 'Three of these words show actions. One word is a thing (noun).',
        explanation:
          '"mango" is not an action word — it is a noun (a thing). "eat", "dance", and "write" are all action words (verbs).',
        options: ['eat', 'dance', 'mango', 'write'],
        correctAnswer: 'mango',
      },
      {
        id: 'grammar-g3-2-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to make a correct sentence with an action word.',
        hint: 'Who is doing the action? Start with the person.',
        words: ['Meera', 'reads', 'a', 'storybook.'],
        correctSentence: 'Meera reads a storybook.',
      },
      {
        id: 'grammar-g3-2-q5',
        type: 'mcq',
        question: 'Find the action word: "Amma cooks delicious idli for breakfast."',
        hint: 'What is Amma doing?',
        explanation:
          '"cooks" is the verb because it tells us the action Amma is performing.',
        options: ['Amma', 'cooks', 'delicious', 'breakfast'],
        correctAnswer: 'cooks',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 3 — Adjectives (Describing Words)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g3-3',
    section: 'grammar',
    grade: 3,
    title: 'Adjectives: Describing Words',
    description:
      'Adjectives are words that describe or tell us more about a noun. They answer questions like: What kind? How many? Which one?',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g3-3-q1',
        type: 'mcq',
        question:
          'Which word is an adjective in this sentence? "Sita wore a beautiful sari."',
        hint: 'Which word describes the sari?',
        explanation:
          '"beautiful" is the adjective because it describes the sari — it tells us what kind of sari Sita wore.',
        options: ['Sita', 'wore', 'beautiful', 'sari'],
        correctAnswer: 'beautiful',
      },
      {
        id: 'grammar-g3-3-q2',
        type: 'fill-blank',
        question: 'The ______ mango was very sweet. (Fill in a describing word)',
        hint: 'Think of a word that describes the colour or size of a ripe mango.',
        explanation:
          '"yellow" is a good adjective for a ripe mango. Other describing words like "big" or "ripe" could also work.',
        correctAnswer: 'yellow',
      },
      {
        id: 'grammar-g3-3-q3',
        type: 'mcq',
        question: 'How many adjectives are in this sentence? "The tall, strong tree has green leaves."',
        hint: 'Look for words that describe the tree and the leaves.',
        explanation:
          'There are three adjectives: "tall" and "strong" describe the tree, and "green" describes the leaves.',
        options: ['1', '2', '3', '4'],
        correctAnswer: '3',
      },
      {
        id: 'grammar-g3-3-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to make a sentence with a describing word.',
        hint: 'The describing word should come before the noun it describes.',
        words: ['The', 'clever', 'fox', 'ran', 'fast.'],
        correctSentence: 'The clever fox ran fast.',
      },
      {
        id: 'grammar-g3-3-q5',
        type: 'mcq',
        question: 'Which sentence uses an adjective correctly?',
        hint: 'An adjective usually comes before the noun it describes.',
        explanation:
          '"Raj has a new cricket bat." uses the adjective "new" correctly — it comes before the noun "cricket bat" and describes it.',
        options: [
          'Raj has a cricket bat new.',
          'Raj has a new cricket bat.',
          'New Raj has a cricket bat.',
          'Raj new has a cricket bat.',
        ],
        correctAnswer: 'Raj has a new cricket bat.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 4 — Simple Sentences
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g3-4',
    section: 'grammar',
    grade: 3,
    title: 'Simple Sentences',
    description:
      'A sentence is a group of words that makes complete sense. Every sentence has a subject (who or what) and a predicate (what the subject does).',
    difficulty: 'easy',
    questions: [
      {
        id: 'grammar-g3-4-q1',
        type: 'mcq',
        question: 'Which of the following is a complete sentence?',
        hint: 'A complete sentence tells us who does what. It begins with a capital letter and ends with a full stop.',
        explanation:
          '"The cow eats grass." is a complete sentence. It has a subject (The cow) and a predicate (eats grass), and it starts with a capital letter and ends with a full stop.',
        options: [
          'Eats grass.',
          'The cow.',
          'The cow eats grass.',
          'cow eats',
        ],
        correctAnswer: 'The cow eats grass.',
      },
      {
        id: 'grammar-g3-4-q2',
        type: 'sentence-builder',
        question: 'Arrange these words to make a complete sentence.',
        hint: 'Think about who is doing the action and what the action is.',
        words: ['My', 'grandmother', 'tells', 'lovely', 'stories.'],
        correctSentence: 'My grandmother tells lovely stories.',
      },
      {
        id: 'grammar-g3-4-q3',
        type: 'mcq',
        question: 'What is the subject in this sentence? "The peacock dances in the rain."',
        hint: 'The subject is the person, animal, or thing that does the action.',
        explanation:
          '"The peacock" is the subject because it is the one that dances.',
        options: ['dances', 'The peacock', 'rain', 'in the rain'],
        correctAnswer: 'The peacock',
      },
      {
        id: 'grammar-g3-4-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to form a correct sentence.',
        hint: 'Start with the subject, then the action word, then the rest.',
        words: ['Children', 'play', 'cricket', 'in', 'the', 'park.'],
        correctSentence: 'Children play cricket in the park.',
      },
      {
        id: 'grammar-g3-4-q5',
        type: 'fill-blank',
        question: 'The farmer ______ the field every morning. (Fill in an action word)',
        hint: 'Think about what a farmer does in the field.',
        explanation:
          '"ploughs" is a good action word. The farmer ploughs the field every morning.',
        correctAnswer: 'ploughs',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 5 — Capitalization & Full Stops
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g3-5',
    section: 'grammar',
    grade: 3,
    title: 'Capitalization and Full Stops',
    description:
      'Every sentence must begin with a capital letter and end with a full stop (.). Proper nouns also begin with capital letters.',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g3-5-q1',
        type: 'mcq',
        question: 'Which sentence uses correct capitalization and punctuation?',
        hint: 'Check for a capital letter at the beginning and a full stop at the end.',
        explanation:
          '"We celebrate Republic Day on 26th January." is correct — it starts with a capital letter, the proper nouns "Republic Day" and "January" are capitalized, and it ends with a full stop.',
        options: [
          'we celebrate republic day on 26th january.',
          'We celebrate Republic Day on 26th January.',
          'we celebrate Republic Day on 26th January.',
          'We celebrate republic day on 26th january.',
        ],
        correctAnswer: 'We celebrate Republic Day on 26th January.',
      },
      {
        id: 'grammar-g3-5-q2',
        type: 'fill-blank',
        question:
          'Rewrite with correct capitalization: "my name is anita." What should "my" be changed to?',
        hint: 'The first word of a sentence must begin with a capital letter.',
        explanation:
          'Since "my" is the first word of the sentence, it must be capitalized to "My".',
        correctAnswer: 'My',
      },
      {
        id: 'grammar-g3-5-q3',
        type: 'mcq',
        question: 'How many letters should be capitalized in this sentence? "i live in chennai with my brother arjun."',
        hint: 'Count the first word of the sentence, names of places, and names of people.',
        explanation:
          'Three words need capitals: "I" (first word and the pronoun "I"), "Chennai" (name of a city), and "Arjun" (name of a person). That means 3 letters need to be capitalized.',
        options: ['1', '2', '3', '4'],
        correctAnswer: '3',
      },
      {
        id: 'grammar-g3-5-q4',
        type: 'mcq',
        question: 'Which sentence ends with the correct punctuation?',
        hint: 'A statement (telling sentence) ends with a full stop.',
        explanation:
          '"Taj Mahal is in Agra." ends correctly with a full stop because it is a statement.',
        options: [
          'Taj Mahal is in Agra',
          'Taj Mahal is in Agra.',
          'Taj Mahal is in Agra,',
          'Taj Mahal is in Agra!',
        ],
        correctAnswer: 'Taj Mahal is in Agra.',
      },
      {
        id: 'grammar-g3-5-q5',
        type: 'sentence-builder',
        question:
          'Arrange these words to form a sentence with correct capitalization and a full stop.',
        hint: 'The name of a day always starts with a capital letter.',
        words: ['We', 'go', 'to', 'school', 'on', 'Monday.'],
        correctSentence: 'We go to school on Monday.',
      },
    ],
  },
];

export default grade3Exercises;
