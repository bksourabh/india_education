import type { Exercise } from '../../types';

const grade3Writing: Exercise[] = [
  {
    id: 'writing-g3-1',
    section: 'writing',
    grade: 3,
    title: 'Complete the Sentence',
    description:
      'Finish the sentences by adding your own words. Think about what makes sense and sounds right!',
    difficulty: 'easy',
    questions: [
      {
        id: 'writing-g3-1-q1',
        type: 'writing-prompt',
        question:
          'Complete the following sentences with your own words:\n\n1. Every morning, I wake up and ___.\n2. My favourite food is ___ because ___.\n3. When it rains, I like to ___.',
        hint: 'Think about your daily routine, a food you really enjoy, and what you do on a rainy day. There is no wrong answer — just write what comes to your mind!',
        writingGuide: [
          'Read each sentence carefully and think about what word or words would fit.',
          'For sentence 1, think about the first thing you do after waking up — do you brush your teeth, say good morning, or stretch?',
          'For sentence 2, pick a food you love and tell us why — is it tasty, sweet, or does someone special make it for you?',
          'For sentence 3, imagine a rainy day — do you watch the rain, drink chai, or jump in puddles?',
          'Read your completed sentences aloud to check if they sound right.',
        ],
      },
      {
        id: 'writing-g3-1-q2',
        type: 'writing-prompt',
        question:
          'Complete the following sentences with your own words:\n\n1. My best friend is special because ___.\n2. After school, I usually ___.\n3. I feel happy when ___.',
        hint: 'Think about what makes your friend great, what you do when school is over, and the things that make you smile.',
        writingGuide: [
          'Think about your best friend — what do you like about them?',
          'Write about what you do after school — do you play, do homework, or help at home?',
          'Think of a moment that makes you really happy and describe it.',
          'Make sure each sentence is complete and ends with a full stop.',
        ],
      },
    ],
  },
  {
    id: 'writing-g3-2',
    section: 'writing',
    grade: 3,
    title: 'Describe the Picture: A Day at the Park',
    description:
      'Imagine you are looking at a picture of children playing in a park. Write sentences to describe what you see and feel.',
    difficulty: 'easy',
    questions: [
      {
        id: 'writing-g3-2-q1',
        type: 'writing-prompt',
        question:
          'Imagine a picture of a beautiful park with trees, swings, a slide, and children playing. A man is selling ice cream from a cart. Write 3-4 sentences describing what you see in this picture.',
        hint: 'Start by describing what the park looks like. Then talk about what the children are doing. You can also mention the weather or how the park makes you feel.',
        writingGuide: [
          'Start with a sentence about the park itself — what does it look like? Are there big trees, green grass, or colourful flowers?',
          'Write a sentence about the children — what are they doing? Are they on the swings, running, or playing cricket?',
          'Add a sentence about the ice cream seller or anything else interesting in the picture.',
          'End with a sentence about how the park feels — is it noisy, fun, or peaceful?',
          'Read your sentences to make sure they tell a clear story about the picture.',
        ],
      },
    ],
  },
  {
    id: 'writing-g3-3',
    section: 'writing',
    grade: 3,
    title: 'Describe the Picture: My Classroom',
    description:
      'Think about your classroom and describe it in a few sentences. What does it look like? What do you see inside?',
    difficulty: 'medium',
    questions: [
      {
        id: 'writing-g3-3-q1',
        type: 'writing-prompt',
        question:
          'Imagine your classroom. Write 3-4 sentences describing it. You can talk about the desks, the blackboard, the walls, your teacher, and your classmates.',
        hint: 'Close your eyes and picture your classroom. What is the first thing you notice? Describe things from the front of the room to the back.',
        writingGuide: [
          'Start by describing the size of your classroom — is it big or small? Is it bright or cosy?',
          'Write about the things you can see — the blackboard, desks, charts on the wall, or a fan on the ceiling.',
          'Add a sentence about your classmates or teacher — what are they doing?',
          'End with how you feel in your classroom — do you like sitting there? Is it fun?',
        ],
      },
      {
        id: 'writing-g3-3-q2',
        type: 'writing-prompt',
        question:
          'Think about what happens during your favourite period in school. Write 3-4 sentences about it.',
        hint: 'It could be drawing class, games period, lunch break, or any subject you enjoy. Tell us what happens and why you like it!',
        writingGuide: [
          'Name your favourite period — is it art, games, music, or a subject like maths or English?',
          'Describe what you do during this period — do you draw, play, sing, or solve problems?',
          'Write about why you enjoy it — does it make you happy, excited, or relaxed?',
          'Add a sentence about your friends or teacher during that period.',
        ],
      },
    ],
  },
  {
    id: 'writing-g3-4',
    section: 'writing',
    grade: 3,
    title: 'My Favourite Festival',
    description:
      'Write a short paragraph about a festival you love celebrating. Tell us what makes it special!',
    difficulty: 'medium',
    questions: [
      {
        id: 'writing-g3-4-q1',
        type: 'writing-prompt',
        question:
          'Write a short paragraph (3-4 sentences) about your favourite festival. It could be Diwali, Eid, Christmas, Pongal, Holi, Onam, Baisakhi, or any other festival you celebrate.',
        hint: 'Think about what you do during the festival — the food, the clothes, the lights, the fun! Write about what you see, hear, and feel.',
        writingGuide: [
          'Start by naming the festival and saying when it happens — for example, "My favourite festival is Diwali. It comes in October or November."',
          'Describe what your family does to get ready — do you clean the house, make rangoli, buy new clothes, or cook special food?',
          'Write about the best part of the festival — is it the sweets, the fireworks, meeting family, or getting gifts?',
          'End with a sentence about how the festival makes you feel.',
        ],
      },
    ],
  },
  {
    id: 'writing-g3-5',
    section: 'writing',
    grade: 3,
    title: 'About My Family',
    description:
      'Write a small paragraph introducing your family. Who are the people in your family and what do you love about them?',
    difficulty: 'medium',
    questions: [
      {
        id: 'writing-g3-5-q1',
        type: 'writing-prompt',
        question:
          'Write 3-4 sentences about your family. Tell us who is in your family, what they do, and one thing you enjoy doing together.',
        hint: 'You can talk about your parents, grandparents, brothers, sisters, or even your pet! Think about a happy memory with your family.',
        writingGuide: [
          'Start by telling us how many people are in your family — for example, "There are five people in my family."',
          'Name the members and say something short about each one — for example, "My mother is a teacher. My father works in an office."',
          'Write about something you do together — do you eat dinner together, go for walks, or watch TV on Sundays?',
          'End with a sentence about why you love your family.',
        ],
      },
      {
        id: 'writing-g3-5-q2',
        type: 'writing-prompt',
        question:
          'Write 3-4 sentences about a family member who is very special to you. It could be your grandparent, parent, sibling, or anyone else.',
        hint: 'Think about why this person is special — what do they do for you? What do you enjoy doing with them?',
        writingGuide: [
          'Start by naming the person — for example, "My grandmother is very special to me."',
          'Describe what makes them special — are they kind, funny, or do they tell great stories?',
          'Write about something you like to do with them — do you cook together, go for walks, or listen to their stories?',
          'End with how this person makes you feel.',
        ],
      },
    ],
  },
];

export default grade3Writing;
