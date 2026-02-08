import type { Exercise } from '../../types';

const grade5Exercises: Exercise[] = [
  // ---------------------------------------------------------------------------
  // Exercise 1 — Subject-Verb Agreement
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g5-1',
    section: 'grammar',
    grade: 5,
    title: 'Subject-Verb Agreement',
    description:
      'The verb in a sentence must agree with its subject. A singular subject takes a singular verb, and a plural subject takes a plural verb. For example: "He runs" (singular) but "They run" (plural).',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g5-1-q1',
        type: 'mcq',
        question:
          'Choose the correct verb: "The children ______ in the playground every evening."',
        hint: '"Children" is a plural subject. Plural subjects usually take verbs without an "-s" at the end.',
        explanation:
          '"play" is correct because "children" is plural. We say "The children play" (not "plays"). Singular: "The child plays."',
        options: ['plays', 'play', 'playing', 'is play'],
        correctAnswer: 'play',
      },
      {
        id: 'grammar-g5-1-q2',
        type: 'fill-blank',
        question: 'My father ______ the newspaper every morning. (Fill in the correct form of "read")',
        hint: '"My father" is singular. What form of "read" goes with a singular subject in the present tense?',
        explanation:
          '"reads" is correct because "My father" is a singular subject, and in the present tense we add "-s" to the verb for singular subjects.',
        correctAnswer: 'reads',
      },
      {
        id: 'grammar-g5-1-q3',
        type: 'mcq',
        question:
          'Which sentence has correct subject-verb agreement?',
        hint: 'Check whether the subject is singular or plural, then see if the verb matches.',
        explanation:
          '"The birds sing sweetly in the morning." is correct. "Birds" is plural, so we use "sing" (not "sings").',
        options: [
          'The birds sings sweetly in the morning.',
          'The birds sing sweetly in the morning.',
          'The bird sing sweetly in the morning.',
          'The birds is singing sweetly in the morning.',
        ],
        correctAnswer: 'The birds sing sweetly in the morning.',
      },
      {
        id: 'grammar-g5-1-q4',
        type: 'mcq',
        question:
          'Choose the correct option: "Either Ravi or his friends ______ coming to the party."',
        hint: 'When "either...or" connects two subjects, the verb agrees with the subject closer to it.',
        explanation:
          '"are" is correct because with "either...or", the verb agrees with the nearer subject. "His friends" is plural, so we use "are".',
        options: ['is', 'are', 'was', 'am'],
        correctAnswer: 'are',
      },
      {
        id: 'grammar-g5-1-q5',
        type: 'sentence-builder',
        question: 'Arrange these words to form a sentence with correct subject-verb agreement.',
        hint: 'The subject "Each student" is singular even though it refers to many students.',
        words: ['Each', 'student', 'has', 'a', 'textbook', 'and', 'a', 'notebook.'],
        correctSentence: 'Each student has a textbook and a notebook.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 2 — Conjunctions (and, but, or, because)
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g5-2',
    section: 'grammar',
    grade: 5,
    title: 'Conjunctions: And, But, Or, Because',
    description:
      'Conjunctions are joining words. "And" adds information, "but" shows contrast, "or" gives a choice, and "because" gives a reason.',
    difficulty: 'medium',
    questions: [
      {
        id: 'grammar-g5-2-q1',
        type: 'mcq',
        question:
          'Choose the correct conjunction: "I wanted to play outside, ______ it was raining heavily."',
        hint: 'The two parts of this sentence are in contrast — one part says something, the other says the opposite.',
        explanation:
          '"but" is correct because the sentence shows a contrast: wanting to play vs. it raining.',
        options: ['and', 'but', 'or', 'because'],
        correctAnswer: 'but',
      },
      {
        id: 'grammar-g5-2-q2',
        type: 'fill-blank',
        question:
          'She was late ______ her bus broke down on the way. (Fill in the correct conjunction)',
        hint: 'The second part of the sentence gives a reason for why she was late.',
        explanation:
          '"because" is the correct conjunction. It connects the result (being late) with the reason (bus broke down).',
        correctAnswer: 'because',
      },
      {
        id: 'grammar-g5-2-q3',
        type: 'mcq',
        question:
          'Which conjunction fits best? "Would you like roti ______ rice with your dal?"',
        hint: 'The sentence is offering a choice between two things.',
        explanation:
          '"or" is the correct conjunction because it presents a choice between roti and rice.',
        options: ['and', 'but', 'or', 'because'],
        correctAnswer: 'or',
      },
      {
        id: 'grammar-g5-2-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to form a sentence using the conjunction "and".',
        hint: '"And" joins two equal ideas together.',
        words: ['Neha', 'likes', 'drawing', 'and', 'painting.'],
        correctSentence: 'Neha likes drawing and painting.',
      },
      {
        id: 'grammar-g5-2-q5',
        type: 'mcq',
        question:
          'Which sentence uses "but" correctly?',
        hint: '"But" is used when two parts of a sentence have opposite or contrasting ideas.',
        explanation:
          '"The samosa was spicy but tasty." uses "but" correctly because "spicy" and "tasty" show a contrast.',
        options: [
          'The samosa was spicy but tasty.',
          'The samosa was spicy but hot.',
          'The samosa but was spicy tasty.',
          'But the samosa was spicy tasty.',
        ],
        correctAnswer: 'The samosa was spicy but tasty.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 3 — Complex Sentences
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g5-3',
    section: 'grammar',
    grade: 5,
    title: 'Complex Sentences',
    description:
      'A complex sentence has one main clause (which makes sense on its own) and one or more subordinate clauses (which depend on the main clause). Words like "when", "because", "although", "if", and "while" begin subordinate clauses.',
    difficulty: 'challenging',
    questions: [
      {
        id: 'grammar-g5-3-q1',
        type: 'mcq',
        question:
          'Which is the subordinate clause in this sentence? "When the bell rang, the students rushed out."',
        hint: 'The subordinate clause cannot stand alone as a complete sentence.',
        explanation:
          '"When the bell rang" is the subordinate clause. It begins with "when" and does not make complete sense by itself. "The students rushed out" is the main clause.',
        options: [
          'the students rushed out',
          'When the bell rang',
          'the bell rang',
          'rushed out',
        ],
        correctAnswer: 'When the bell rang',
      },
      {
        id: 'grammar-g5-3-q2',
        type: 'fill-blank',
        question:
          '______ it was a holiday, the shops were closed. (Fill in a suitable word to begin the subordinate clause)',
        hint: 'Think of a word that gives the reason or condition. The shops being closed is a result.',
        explanation:
          '"Since" (or "Because") is correct. It connects the reason (it was a holiday) with the result (shops were closed).',
        correctAnswer: 'Since',
      },
      {
        id: 'grammar-g5-3-q3',
        type: 'mcq',
        question:
          'Choose the correct complex sentence.',
        hint: 'A complex sentence has a main clause and a subordinate clause joined by a conjunction like "although", "if", or "because".',
        explanation:
          '"Although she was tired, Lakshmi finished her homework." is correct. "Although she was tired" is the subordinate clause and "Lakshmi finished her homework" is the main clause.',
        options: [
          'Lakshmi was tired. She finished her homework.',
          'Lakshmi was tired and she finished her homework.',
          'Although she was tired, Lakshmi finished her homework.',
          'Lakshmi finished her homework tired although.',
        ],
        correctAnswer: 'Although she was tired, Lakshmi finished her homework.',
      },
      {
        id: 'grammar-g5-3-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to form a complex sentence.',
        hint: 'Start with the subordinate clause beginning with "If", followed by a comma and the main clause.',
        words: ['If', 'it', 'rains,', 'we', 'will', 'cancel', 'the', 'match.'],
        correctSentence: 'If it rains, we will cancel the match.',
      },
      {
        id: 'grammar-g5-3-q5',
        type: 'mcq',
        question:
          'Which word best completes this complex sentence? "______ you study hard, you will pass the exam."',
        hint: 'The sentence talks about a condition and its result.',
        explanation:
          '"If" is correct because it introduces a condition. "If you study hard" is the condition, and "you will pass the exam" is the result.',
        options: ['Although', 'If', 'Because', 'While'],
        correctAnswer: 'If',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 4 — Direct and Indirect Speech
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g5-4',
    section: 'grammar',
    grade: 5,
    title: 'Direct and Indirect Speech',
    description:
      'Direct speech gives the exact words spoken by a person, written inside quotation marks (" "). Indirect speech (reported speech) tells what the person said without using their exact words.',
    difficulty: 'challenging',
    questions: [
      {
        id: 'grammar-g5-4-q1',
        type: 'mcq',
        question:
          'Which sentence is in direct speech?',
        hint: 'Direct speech uses quotation marks (" ") to show the exact words spoken.',
        explanation:
          'Amma said, "Dinner is ready." is in direct speech because it uses quotation marks to show the exact words Amma spoke.',
        options: [
          'Amma said that dinner was ready.',
          'Amma said, "Dinner is ready."',
          'Amma told us dinner was ready.',
          'Amma announced dinner was ready.',
        ],
        correctAnswer: 'Amma said, "Dinner is ready."',
      },
      {
        id: 'grammar-g5-4-q2',
        type: 'mcq',
        question:
          'Change to indirect speech: The teacher said, "The Earth revolves around the Sun."',
        hint: 'In indirect speech, remove the quotation marks and use "that" after "said". Note: for universal truths, the tense does not change.',
        explanation:
          '"The teacher said that the Earth revolves around the Sun." is correct. Since the Earth revolving around the Sun is a universal truth, the present tense is kept even in indirect speech.',
        options: [
          'The teacher said that the Earth revolves around the Sun.',
          'The teacher said that the Earth revolved around the Sun.',
          'The teacher said the Earth will revolve around the Sun.',
          'The teacher said, the Earth revolves around the Sun.',
        ],
        correctAnswer:
          'The teacher said that the Earth revolves around the Sun.',
      },
      {
        id: 'grammar-g5-4-q3',
        type: 'fill-blank',
        question:
          'Raj said, "I am going to the library." Change to indirect speech: Raj said that ______ was going to the library.',
        hint: 'When changing from direct to indirect speech, "I" becomes "he" or "she" depending on who is speaking.',
        explanation:
          '"he" is correct. In indirect speech, "I" (Raj speaking about himself) changes to "he" because we are now reporting what Raj said.',
        correctAnswer: 'he',
      },
      {
        id: 'grammar-g5-4-q4',
        type: 'mcq',
        question:
          'Which change happens when we convert direct speech to indirect speech?',
        hint: 'Think about what happens to quotation marks, pronouns, and tenses.',
        explanation:
          'When converting direct to indirect speech, quotation marks are removed, the conjunction "that" is usually added, pronouns are changed (I becomes he/she), and the tense often shifts back (present becomes past).',
        options: [
          'We add quotation marks.',
          'We remove quotation marks and may change the tense.',
          'We change the sentence to a question.',
          'Nothing changes.',
        ],
        correctAnswer: 'We remove quotation marks and may change the tense.',
      },
      {
        id: 'grammar-g5-4-q5',
        type: 'sentence-builder',
        question: 'Arrange these words to form a sentence in indirect speech.',
        hint: 'Indirect speech uses "that" and does not use quotation marks. The tense shifts from present to past.',
        words: ['Meera', 'said', 'that', 'she', 'liked', 'reading', 'stories.'],
        correctSentence: 'Meera said that she liked reading stories.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Exercise 5 — Active and Passive Voice
  // ---------------------------------------------------------------------------
  {
    id: 'grammar-g5-5',
    section: 'grammar',
    grade: 5,
    title: 'Active and Passive Voice',
    description:
      'In active voice, the subject does the action: "Ravi kicked the ball." In passive voice, the subject receives the action: "The ball was kicked by Ravi." The focus shifts from the doer to the receiver.',
    difficulty: 'challenging',
    questions: [
      {
        id: 'grammar-g5-5-q1',
        type: 'mcq',
        question:
          'Which sentence is in the active voice?',
        hint: 'In active voice, the subject performs the action. Look for who is doing the action.',
        explanation:
          '"The farmer ploughed the field." is in active voice because the subject (the farmer) is performing the action (ploughed).',
        options: [
          'The field was ploughed by the farmer.',
          'The farmer ploughed the field.',
          'The field has been ploughed.',
          'The ploughing was done by the farmer.',
        ],
        correctAnswer: 'The farmer ploughed the field.',
      },
      {
        id: 'grammar-g5-5-q2',
        type: 'mcq',
        question:
          'Change to passive voice: "Grandma told a beautiful story."',
        hint: 'In passive voice, the object (a beautiful story) becomes the subject, and the original subject (Grandma) comes after "by".',
        explanation:
          '"A beautiful story was told by Grandma." is correct. The object "a beautiful story" becomes the subject, and "told" changes to "was told".',
        options: [
          'A beautiful story is told by Grandma.',
          'A beautiful story was told by Grandma.',
          'Grandma was told a beautiful story.',
          'A beautiful story told by Grandma.',
        ],
        correctAnswer: 'A beautiful story was told by Grandma.',
      },
      {
        id: 'grammar-g5-5-q3',
        type: 'fill-blank',
        question:
          'Active: "The students cleaned the classroom." Passive: "The classroom was ______ by the students."',
        hint: 'In passive voice, we use the past participle of the verb. What is the past participle of "cleaned"?',
        explanation:
          '"cleaned" is the correct answer. The past participle of "clean" is "cleaned". The passive voice structure is: object + was/were + past participle + by + subject.',
        correctAnswer: 'cleaned',
      },
      {
        id: 'grammar-g5-5-q4',
        type: 'sentence-builder',
        question: 'Arrange these words to form a sentence in the passive voice.',
        hint: 'In passive voice, the receiver of the action comes first, followed by "was/were + past participle + by + doer".',
        words: ['The', 'letter', 'was', 'written', 'by', 'Anita.'],
        correctSentence: 'The letter was written by Anita.',
      },
      {
        id: 'grammar-g5-5-q5',
        type: 'mcq',
        question:
          'Which sentence is in the passive voice?',
        hint: 'In passive voice, the subject receives the action rather than performing it.',
        explanation:
          '"The Taj Mahal was built by Shah Jahan." is in passive voice. The subject "The Taj Mahal" receives the action "was built". The doer "Shah Jahan" comes after "by".',
        options: [
          'Shah Jahan built the Taj Mahal.',
          'The Taj Mahal was built by Shah Jahan.',
          'Shah Jahan had built the Taj Mahal.',
          'The Taj Mahal is very beautiful.',
        ],
        correctAnswer: 'The Taj Mahal was built by Shah Jahan.',
      },
    ],
  },
];

export default grade5Exercises;
