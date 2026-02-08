import type { Exercise } from '../../types';

const grade5Spelling: Exercise[] = [
  {
    id: 'spelling-g5-1',
    section: 'spelling',
    grade: 5,
    title: 'Commonly Misspelled Words',
    description:
      'Even adults get these words wrong! Master the spelling of words that are often misspelled. Pay close attention to tricky letter combinations.',
    difficulty: 'medium',
    questions: [
      {
        id: 'spelling-g5-1-q1',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "needed" or "essential"?',
        hint: 'This word has a tricky double "s" but only one "c". Remember: one Collar and two Sleeves (1 c, 2 s).',
        explanation:
          'The correct spelling is "necessary". A helpful trick: a shirt has one Collar (c) and two Sleeves (ss).',
        options: ['necesary', 'neccessary', 'necessary', 'necessery'],
        correctAnswer: 'necessary',
      },
      {
        id: 'spelling-g5-1-q2',
        type: 'fill-blank',
        question: 'Fill in the missing letters: sep_ _ate (to divide or keep apart)',
        hint: 'Many people wrongly spell this with "er" in the middle. The correct middle letters are "ar".',
        explanation:
          'The word is "separate". Remember: there is "a rat" hiding in sep-A-RAT-e!',
        correctAnswer: 'separate',
      },
      {
        id: 'spelling-g5-1-q3',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means "certain" or "without doubt".',
        hint: 'You might say "I am ___ that the answer is correct." This word ends in "-ite".',
        scrambledWord: 'edifneit',
        correctWord: 'definite',
      },
      {
        id: 'spelling-g5-1-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: dif_er_nt (not the same as something else)',
        hint: 'The missing letters are "f" and "e". Every person in this world is unique and ___.',
        explanation:
          'The word is "different". It has double "f" and ends in "-ent", not "-ant".',
        correctAnswer: 'different',
      },
      {
        id: 'spelling-g5-1-q5',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "to get" or "to be given something"?',
        hint: 'Remember the rule: "i before e, except after c". This word has "c" before "ei".',
        explanation:
          'The correct spelling is "receive". After the letter "c", the "e" comes before "i".',
        options: ['recieve', 'receive', 'receve', 'receeve'],
        correctAnswer: 'receive',
      },
    ],
  },
  {
    id: 'spelling-g5-2',
    section: 'spelling',
    grade: 5,
    title: 'Prefixes: Word Beginnings',
    description:
      'A prefix is a group of letters added to the beginning of a word to change its meaning. Learn to spell words with common prefixes like "un-", "dis-", "re-", and "mis-".',
    difficulty: 'medium',
    questions: [
      {
        id: 'spelling-g5-2-q1',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "to not agree"?',
        hint: 'This word uses the prefix "dis-" added to "agree". Be careful not to add or remove any letters.',
        explanation:
          'The correct spelling is "disagree". The prefix "dis-" means "not" or "opposite of". dis + agree = disagree.',
        options: ['disagree', 'dissagree', 'diagree', 'disargee'],
        correctAnswer: 'disagree',
      },
      {
        id: 'spelling-g5-2-q2',
        type: 'fill-blank',
        question: 'Fill in the missing letters: mis_nder_tand (to understand something wrongly)',
        hint: 'This word combines the prefix "mis-" with "understand". The missing letters are "u" and "s".',
        explanation:
          'The word is "misunderstand". The prefix "mis-" means "wrongly". mis + understand = misunderstand.',
        correctAnswer: 'misunderstand',
      },
      {
        id: 'spelling-g5-2-q3',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means "not possible".',
        hint: 'This word uses the prefix "im-" added to "possible". It has ten letters.',
        scrambledWord: 'msiipelobs',
        correctWord: 'impossible',
      },
      {
        id: 'spelling-g5-2-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: un_omfort_ble (not feeling at ease)',
        hint: 'This word uses the prefix "un-" with "comfortable". The missing letters are "c" and "a".',
        explanation:
          'The word is "uncomfortable". The prefix "un-" means "not". un + comfortable = uncomfortable.',
        correctAnswer: 'uncomfortable',
      },
      {
        id: 'spelling-g5-2-q5',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means "to appear again" or "come back".',
        hint: 'This word uses the prefix "re-" which means "again". Think about what happens when something comes back.',
        scrambledWord: 'eraaprep',
        correctWord: 'reappear',
      },
    ],
  },
  {
    id: 'spelling-g5-3',
    section: 'spelling',
    grade: 5,
    title: 'Suffixes: Word Endings',
    description:
      'A suffix is a group of letters added to the end of a word. Learn to spell words with suffixes like "-ment", "-tion", "-ness", and "-ful". Watch out for spelling changes when suffixes are added!',
    difficulty: 'challenging',
    questions: [
      {
        id: 'spelling-g5-3-q1',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "the system that rules a country"?',
        hint: 'This word comes from "govern" + "-ment". Be careful — nothing is added or removed from "govern" when the suffix joins.',
        explanation:
          'The correct spelling is "government". India has a democratic government. govern + ment = government.',
        options: ['goverment', 'government', 'govermant', 'governmint'],
        correctAnswer: 'government',
      },
      {
        id: 'spelling-g5-3-q2',
        type: 'fill-blank',
        question: 'Fill in the missing letters: edu_a_ion (the process of learning and gaining knowledge)',
        hint: 'India\'s NEP 2020 aims to improve this for all children. The missing letters are "c" and "t".',
        explanation:
          'The word is "education". Education comes from the word "educate" — the "e" is dropped and "-ion" is added.',
        correctAnswer: 'education',
      },
      {
        id: 'spelling-g5-3-q3',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means "the state of being happy".',
        hint: 'This word is formed by adding "-ness" to "happy". Remember: when a word ends in "y", the "y" changes to "i" before adding the suffix.',
        scrambledWord: 'sseapniph',
        correctWord: 'happiness',
      },
      {
        id: 'spelling-g5-3-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: environ_e_t (the natural world around us — air, water, trees)',
        hint: 'Protecting this is very important for our planet. The missing letters are "m" and "n".',
        explanation:
          'The word is "environment". It comes from "environ" (meaning surroundings) + "-ment". We must protect our environment.',
        correctAnswer: 'environment',
      },
      {
        id: 'spelling-g5-3-q5',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "a contest between two or more people or teams"?',
        hint: 'This word ends in "-tion". Schools hold these for sports, debates, and spelling bees.',
        explanation:
          'The correct spelling is "competition". It comes from "compete" + "-ition". compete -> compet + ition = competition.',
        options: ['compitition', 'competion', 'competition', 'competision'],
        correctAnswer: 'competition',
      },
    ],
  },
  {
    id: 'spelling-g5-4',
    section: 'spelling',
    grade: 5,
    title: 'Big Words: Long and Impressive',
    description:
      'Challenge yourself with longer words that will impress your teachers and friends! These words have 8 or more letters and are used in everyday English.',
    difficulty: 'challenging',
    questions: [
      {
        id: 'spelling-g5-4-q1',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means "beyond what is ordinary" or "very remarkable".',
        hint: 'This long word starts with "extra-" and has 13 letters. It means something truly amazing and unusual.',
        scrambledWord: 'rrtxdynaaoeir',
        correctWord: 'extraordinary',
      },
      {
        id: 'spelling-g5-4-q2',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "a large and impressive building"?',
        hint: 'The Taj Mahal is an example of beautiful ___. This word ends in "-ture".',
        explanation:
          'The correct spelling is "architecture". It has a "ch" that sounds like "k". India has stunning architecture from ancient temples to modern buildings.',
        options: ['arcitecture', 'architecture', 'arkitecture', 'architechure'],
        correctAnswer: 'architecture',
      },
      {
        id: 'spelling-g5-4-q3',
        type: 'fill-blank',
        question: 'Fill in the missing letters: inde_end_nce (freedom from the control of others)',
        hint: 'India celebrates this day on 15th August every year. The missing letters are "p" and "e".',
        explanation:
          'The word is "independence". India gained independence from British rule on 15th August 1947.',
        correctAnswer: 'independence',
      },
      {
        id: 'spelling-g5-4-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: tech_o_ogy (the use of science to create machines and devices)',
        hint: 'Computers, phones, and the internet are all examples of this. The missing letters are "n" and "l".',
        explanation:
          'The word is "technology". India is a global leader in information technology.',
        correctAnswer: 'technology',
      },
      {
        id: 'spelling-g5-4-q5',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "the natural world of plants, animals, rivers, and mountains"?',
        hint: 'We study this in Environmental Science (EVS). This word starts with "n" and has a silent "e" at the end — but wait, does it?',
        explanation:
          'The correct spelling is "nature". It is a shorter word but is often misspelled. India has diverse nature — from the Himalayas to the backwaters of Kerala.',
        options: ['nacher', 'nature', 'natur', 'natore'],
        correctAnswer: 'nature',
      },
    ],
  },
  {
    id: 'spelling-g5-5',
    section: 'spelling',
    grade: 5,
    title: 'Words from Around the World',
    description:
      'English borrows words from many languages, including Hindi, Urdu, and other Indian languages! Practise spelling words that connect India to the world.',
    difficulty: 'challenging',
    questions: [
      {
        id: 'spelling-g5-5-q1',
        type: 'mcq',
        question: 'Which is the correct spelling of the word that means "knowledge of events happening in the world"?',
        hint: 'You read this in the paper or watch it on TV. It ends in "-ledge".',
        explanation:
          'The correct spelling is "knowledge". The "k" at the beginning is silent. Reading newspapers builds your knowledge.',
        options: ['knowlege', 'knowledge', 'noledge', 'knowledg'],
        correctAnswer: 'knowledge',
      },
      {
        id: 'spelling-g5-5-q2',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means "the spoken or written words of a country or people".',
        hint: 'India has hundreds of these! Hindi, Tamil, Bengali, and English are all examples. The word has eight letters.',
        scrambledWord: 'gaagunle',
        correctWord: 'language',
      },
      {
        id: 'spelling-g5-5-q3',
        type: 'fill-blank',
        question: 'Fill in the missing letters: comm_ni_ation (the sharing of information between people)',
        hint: 'Talking, writing, and even gestures are forms of this. The missing letters are "u" and "c".',
        explanation:
          'The word is "communication". Good communication skills help us express our thoughts clearly. India is known for its booming telecommunications industry.',
        correctAnswer: 'communication',
      },
      {
        id: 'spelling-g5-5-q4',
        type: 'fill-blank',
        question: 'Fill in the missing letters: cele_ra_ion (a joyful event to mark a special occasion)',
        hint: 'India is a land of festivals and ___s! The missing letters are "b" and "t".',
        explanation:
          'The word is "celebration". From Diwali to Eid, India is always in a mood for celebration.',
        correctAnswer: 'celebration',
      },
      {
        id: 'spelling-g5-5-q5',
        type: 'word-scramble',
        question: 'Unscramble the letters to spell a word that means "a long trip to discover new places".',
        hint: 'Vasco da Gama made one to India. Columbus made one to America. This word has ten letters.',
        scrambledWord: 'oxnpileator',
        correctWord: 'exploration',
      },
    ],
  },
];

export default grade5Spelling;
