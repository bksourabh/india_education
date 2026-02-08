import type { Exercise } from '../../types';

const grade4Exercises: Exercise[] = [
  // ---------------------------------------------------------------------------
  // Exercise 1 — Tenses (Past, Present, Future)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g4-1',
    section: 'grammar',
    grade: 4,
    title: 'Tenses: Past, Present, and Future',
    description:
      'Tenses tell us when an action happens. The present tense is for now, the past tense is for what already happened, and the future tense is for what will happen.',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g4-1-q1',
        type: 'mcq',
        question:
          'Which sentence is in the past tense? ',
        hint: 'Past tense tells us about something that already happened. Look for words like "played", "went", or "ate".',
        explanation:
          '"Anita played kabaddi yesterday." is in the past tense because the action (played) already happened yesterday.',
        options: [
          'Anita plays kabaddi every evening.',
          'Anita played kabaddi yesterday.',
          'Anita will play kabaddi tomorrow.',
          'Anita is playing kabaddi now.',
        ],
        correctAnswer: 'Anita played kabaddi yesterday.',
      },
      {
        id: 'grammar-g4-1-q2',
        type: 'fill-blank',
        question:
          'Tomorrow, we ______ visit the India Gate. (Fill in the correct future tense helping word)',
        hint: 'Future tense uses "will" or "shall" before the main action word.',
        explanation:
          '"will" is the correct answer. "Tomorrow, we will visit the India Gate." The word "will" shows that the action has not happened yet.',
        correctAnswer: 'will',
      },
      {
        id: 'grammar-g4-1-q3',
        type: 'mcq',
        question: 'Change the verb "eat" to the past tense: "I ______ rice and dal for lunch."',
        hint: 'Think about what "eat" becomes when the action is already over.',
        explanation:
          'The past tense of "eat" is "ate". "I ate rice and dal for lunch."',
        options: ['eat', 'eats', 'ate', 'eating'],
        correctAnswer: 'ate',
      },
      {
        id: 'grammar-g4-1-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to make a sentence in the future tense.',
        hint: 'Future tense sentences often begin with the subject, then use "will" before the action word.',
        words: ['We', 'will', 'plant', 'trees', 'on', 'Van', 'Mahotsav.'],
        correctSentence: 'We will plant trees on Van Mahotsav.',
      },
      {
        id: 'grammar-g4-1-q5',
        type: 'mcq',
        question: 'Identify the tense: "The train arrives at the station every morning."',
        hint: 'Does this sentence talk about something that happens regularly right now?',
        explanation:
          'This is the present tense. The word "arrives" shows an action that happens regularly, and "every morning" confirms it is a repeated present action.',
        options: ['Past tense', 'Present tense', 'Future tense'],
        correctAnswer: 'Present tense',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 2 — Pronouns (he, she, it, they)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g4-2',
    section: 'grammar',
    grade: 4,
    title: 'Pronouns: He, She, It, They',
    description:
      'A pronoun is a word that takes the place of a noun. Instead of repeating a name, we use pronouns like he, she, it, they, we, I, and you.',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g4-2-q1',
        type: 'mcq',
        question:
          'Which pronoun replaces "Kavitha" in this sentence? "Kavitha is a good singer."',
        hint: 'Kavitha is a girl, so use the pronoun for a female person.',
        explanation:
          '"She" replaces "Kavitha" because Kavitha is a girl. "She is a good singer."',
        options: ['He', 'She', 'It', 'They'],
        correctAnswer: 'She',
      },
      {
        id: 'grammar-g4-2-q2',
        type: 'fill-blank',
        question:
          'Ramu and Shyam are brothers. ______ go to the same school. (Fill in the correct pronoun)',
        hint: 'Ramu and Shyam are two people. Which pronoun do we use for more than one person?',
        explanation:
          '"They" is the correct pronoun because we are talking about two people (Ramu and Shyam).',
        correctAnswer: 'They',
      },
      {
        id: 'grammar-g4-2-q3',
        type: 'mcq',
        question:
          'Choose the correct pronoun: "The Ganga is a long river. ______ flows through many states."',
        hint: 'A river is not a person, so we use a pronoun for things.',
        explanation:
          '"It" is the correct pronoun for a river. We use "it" for animals, places, and things.',
        options: ['He', 'She', 'It', 'They'],
        correctAnswer: 'It',
      },
      {
        id: 'grammar-g4-2-q4',
        type: 'sentence-builder',
        question:
          'Arrange these words to form a sentence that uses a pronoun.',
        hint: 'The pronoun "He" takes the place of a boy\'s name.',
        words: ['He', 'likes', 'to', 'play', 'tabla.'],
        correctSentence: 'He likes to play tabla.',
      },
      {
        id: 'grammar-g4-2-q5',
        type: 'mcq',
        question:
          'Which sentence uses pronouns correctly?',
        hint: 'Check whether the pronoun matches the person or thing it replaces.',
        explanation:
          '"Priya lost her book. She looked for it everywhere." is correct. "She" replaces "Priya" and "it" replaces "book".',
        options: [
          'Priya lost her book. He looked for it everywhere.',
          'Priya lost her book. She looked for it everywhere.',
          'Priya lost her book. They looked for it everywhere.',
          'Priya lost her book. It looked for she everywhere.',
        ],
        correctAnswer: 'Priya lost her book. She looked for it everywhere.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 3 — Articles (a, an, the)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g4-3',
    section: 'grammar',
    grade: 4,
    title: 'Articles: A, An, and The',
    description:
      'Articles are small but important words. Use "a" before words that begin with a consonant sound, "an" before words that begin with a vowel sound, and "the" when talking about a specific person, place, or thing.',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g4-3-q1',
        type: 'mcq',
        question: 'Choose the correct article: "I saw ______ elephant at the Mysore Zoo."',
        hint: 'Does "elephant" start with a vowel sound or a consonant sound?',
        explanation:
          '"an" is correct because "elephant" starts with a vowel sound (the letter "e"). We use "an" before vowel sounds.',
        options: ['a', 'an', 'the'],
        correctAnswer: 'an',
      },
      {
        id: 'grammar-g4-3-q2',
        type: 'fill-blank',
        question: 'She is ______ honest girl. (Fill in "a" or "an")',
        hint: 'Say the word "honest" out loud. Does it start with an "h" sound or a vowel sound?',
        explanation:
          '"an" is correct because the "h" in "honest" is silent, so the word starts with a vowel sound ("on-est").',
        correctAnswer: 'an',
      },
      {
        id: 'grammar-g4-3-q3',
        type: 'mcq',
        question:
          'Which sentence uses "the" correctly?',
        hint: '"The" is used when we are talking about a specific thing that both the speaker and listener know about.',
        explanation:
          '"Please open the window." uses "the" correctly because it refers to a specific window that both people know about.',
        options: [
          'I want a the mango.',
          'She is the doctor.',
          'Please open the window.',
          'He is an the boy.',
        ],
        correctAnswer: 'Please open the window.',
      },
      {
        id: 'grammar-g4-3-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to form a correct sentence using an article.',
        hint: 'Use "an" before a word that starts with a vowel sound.',
        words: ['Rohan', 'ate', 'an', 'orange', 'after', 'lunch.'],
        correctSentence: 'Rohan ate an orange after lunch.',
      },
      {
        id: 'grammar-g4-3-q5',
        type: 'mcq',
        question: 'Fill in the blank: "______ Sun rises in the east."',
        hint: 'There is only one Sun. We use a special article when something is unique.',
        explanation:
          '"The" is correct because there is only one Sun. We use "the" for things that are unique or one of a kind.',
        options: ['A', 'An', 'The'],
        correctAnswer: 'The',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 4 — Punctuation (Comma, Question Mark, Exclamation Mark)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g4-4',
    section: 'grammar',
    grade: 4,
    title: 'Punctuation: Commas, Question Marks, and Exclamation Marks',
    description:
      'Punctuation marks help us read and understand sentences. A comma (,) shows a small pause, a question mark (?) comes at the end of a question, and an exclamation mark (!) shows strong feelings.',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g4-4-q1',
        type: 'mcq',
        question: 'Which punctuation mark should end this sentence? "What is the capital of India"',
        hint: 'Is this sentence asking something or telling something?',
        explanation:
          'A question mark (?) should end this sentence because it is asking a question. "What is the capital of India?"',
        options: ['.', '?', '!', ','],
        correctAnswer: '?',
      },
      {
        id: 'grammar-g4-4-q2',
        type: 'mcq',
        question:
          'Which sentence uses commas correctly in a list?',
        hint: 'In a list of three or more items, we put commas between items.',
        explanation:
          '"I bought apples, bananas, and mangoes." is correct because commas separate each item in the list.',
        options: [
          'I bought apples bananas and mangoes.',
          'I bought, apples bananas, and mangoes.',
          'I bought apples, bananas, and mangoes.',
          'I, bought apples bananas and, mangoes.',
        ],
        correctAnswer: 'I bought apples, bananas, and mangoes.',
      },
      {
        id: 'grammar-g4-4-q3',
        type: 'fill-blank',
        question:
          'Wow ______ What a beautiful rangoli! (Fill in the correct punctuation mark after "Wow")',
        hint: '"Wow" shows a strong feeling of surprise. What punctuation mark do we use to show strong feelings?',
        explanation:
          'An exclamation mark (!) goes after "Wow" because it is an exclamation showing surprise or excitement. "Wow! What a beautiful rangoli!"',
        correctAnswer: '!',
      },
      {
        id: 'grammar-g4-4-q4',
        type: 'mcq',
        question: 'Where should the comma go in this sentence? "Anu please close the door."',
        hint: 'When we address someone by name, we put a comma after their name.',
        explanation:
          'The comma goes after "Anu" because we are speaking directly to Anu. "Anu, please close the door."',
        options: [
          'Anu please, close the door.',
          'Anu, please close the door.',
          'Anu please close, the door.',
          'Anu please close the, door.',
        ],
        correctAnswer: 'Anu, please close the door.',
      },
      {
        id: 'grammar-g4-4-q5',
        type: 'sentence-builder',
        question: 'Arrange these words and punctuation to make a correct question.',
        hint: 'A question starts with a question word and ends with a question mark.',
        words: ['Where', 'is', 'your', 'homework?'],
        correctSentence: 'Where is your homework?',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 5 — Mixed Revision (Tenses, Pronouns, Articles, Punctuation)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g4-5',
    section: 'grammar',
    grade: 4,
    title: 'Mixed Practice: Tenses, Pronouns, Articles, and Punctuation',
    description:
      'Let us revise everything we have learnt! This exercise mixes questions on tenses, pronouns, articles, and punctuation.',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g4-5-q1',
        type: 'mcq',
        question:
          'Choose the correct sentence.',
        hint: 'Check for the correct article, pronoun, tense, and punctuation all at once.',
        explanation:
          '"She will visit an old temple tomorrow." is correct — "She" is the right pronoun, "will visit" is future tense, "an" is correct before "old" (vowel sound), and the sentence ends with a full stop.',
        options: [
          'She will visit a old temple tomorrow.',
          'She will visit an old temple tomorrow.',
          'Her will visit an old temple tomorrow.',
          'She visit an old temple tomorrow.',
        ],
        correctAnswer: 'She will visit an old temple tomorrow.',
      },
      {
        id: 'grammar-g4-5-q2',
        type: 'fill-blank',
        question:
          'Last Diwali, they ______ diyas all around the house. (Fill in the past tense of "light")',
        hint: 'The past tense of "light" is an irregular verb. Think about what sounds right with "Last Diwali".',
        explanation:
          '"lit" is the past tense of "light". "Last Diwali, they lit diyas all around the house."',
        correctAnswer: 'lit',
      },
      {
        id: 'grammar-g4-5-q3',
        type: 'mcq',
        question:
          'What is wrong with this sentence? "him goes to a market every sunday."',
        hint: 'Check the pronoun, the article, and the capitalization.',
        explanation:
          'There are multiple errors: "him" should be "He", "a" should be "the" (specific market), and "sunday" should be "Sunday". But the most basic error is the pronoun — "him" cannot be used as a subject.',
        options: [
          'The article is wrong.',
          'The pronoun is wrong.',
          'The tense is wrong.',
          'The punctuation is wrong.',
        ],
        correctAnswer: 'The pronoun is wrong.',
      },
      {
        id: 'grammar-g4-5-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to form a correct sentence using an article and a pronoun.',
        hint: 'Start with the pronoun, then use "is" and an article before the noun.',
        words: ['She', 'is', 'the', 'best', 'student', 'in', 'our', 'class.'],
        correctSentence: 'She is the best student in our class.',
      },
      {
        id: 'grammar-g4-5-q5',
        type: 'mcq',
        question: 'Which punctuation mark completes this sentence? "How delicious this biryani is"',
        hint: 'Is this sentence asking a question, or is it showing a strong feeling?',
        explanation:
          'Even though the sentence starts with "How", it is not really asking a question — it is expressing a strong feeling of delight. So it needs an exclamation mark (!). "How delicious this biryani is!"',
        options: ['.', '?', '!', ','],
        correctAnswer: '!',
      },
    ],
  },
];

export default grade4Exercises;
