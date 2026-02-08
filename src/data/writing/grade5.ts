import type { Exercise } from '../../types';

const grade5Writing: Exercise[] = [
  {
    id: 'writing-g5-1',
    section: 'writing',
    grade: 5,
    title: 'Essay: My Role Model',
    description:
      'Write a short essay about someone you look up to. It could be a family member, a sportsperson, a freedom fighter, a scientist, or anyone who inspires you.',
    difficulty: 'medium',
    questions: [
      {
        id: 'writing-g5-1-q1',
        type: 'writing-prompt',
        question:
          'Write a short essay (8-10 sentences) about your role model. Explain who they are, what they have done, and why they inspire you.\n\nYour essay should have:\n- An introduction (who is your role model?)\n- A body (what have they done and why do you admire them?)\n- A conclusion (how do they inspire you in your own life?)',
        hint: 'Your role model does not have to be famous. It could be your mother, your grandfather, a teacher, or even a friend who shows great courage or kindness. Think about the qualities you admire most.',
        writingGuide: [
          'Begin with an interesting opening sentence — for example, "Everyone has someone they look up to, and for me, that person is my grandmother." Avoid starting with "My essay is about...".',
          'In the introduction, name your role model and briefly say why they are important to you.',
          'In the body (4-5 sentences), describe what they have done — their achievements, the challenges they have faced, or the kind things they do every day. Use specific examples.',
          'Explain the qualities you admire — are they brave, kind, hardworking, honest, or determined? Give examples to support your points.',
          'In the conclusion, write about how your role model inspires you — do you want to be like them? Have you tried to follow their example in your own life?',
        ],
      },
    ],
  },
  {
    id: 'writing-g5-2',
    section: 'writing',
    grade: 5,
    title: 'Essay: If I Could Change One Thing About the World',
    description:
      'Write a thoughtful essay about one thing you would change to make the world a better place.',
    difficulty: 'challenging',
    questions: [
      {
        id: 'writing-g5-2-q1',
        type: 'writing-prompt',
        question:
          'If you could change one thing about the world, what would it be and why? Write a short essay (8-10 sentences) explaining your choice.\n\nThink about problems you see around you — it could be about the environment, education, kindness, hunger, or anything else you care about.\n\nYour essay should have:\n- An introduction stating what you would change\n- A body explaining why this change is needed and how it would help\n- A conclusion sharing your hope for the future',
        hint: 'There is no wrong answer! Pick something you truly care about. It could be as big as saving the oceans or as personal as making sure every child gets to go to school. What matters is that you explain your idea clearly and with feeling.',
        writingGuide: [
          'Open with a strong sentence that grabs the reader\'s attention — for example, "If I had the power to change one thing about the world, I would make sure that every child could go to school."',
          'Explain why you chose this issue — what have you seen or heard that makes you care about it? Use real examples from your life or things you have read about.',
          'Describe how this change would make the world better — who would it help? How would life be different?',
          'Address what people can do right now to help — even small actions count. This shows you have thought deeply about the issue.',
          'End with a hopeful conclusion — express your belief that change is possible and share what you would like to do when you grow up to help.',
        ],
      },
      {
        id: 'writing-g5-2-q2',
        type: 'writing-prompt',
        question:
          'Now imagine you are giving a short speech to your school assembly about the change you wrote about in your essay. Write 4-5 sentences that you would say to convince your schoolmates to join you in making this change.',
        hint: 'When giving a speech, speak directly to your audience. Use "we" and "us" to make everyone feel included. Be passionate and encouraging!',
        writingGuide: [
          'Start by addressing your audience — "Good morning, friends and teachers."',
          'State the problem clearly in one or two sentences — make it easy for everyone to understand.',
          'Explain what you want everyone to do — suggest a simple action the whole school could take together.',
          'Use persuasive language — "Together, we can...", "Imagine a world where...", "Each one of us has the power to...".',
          'End with an inspiring final sentence that leaves your audience feeling motivated.',
        ],
      },
    ],
  },
  {
    id: 'writing-g5-3',
    section: 'writing',
    grade: 5,
    title: 'Creative Writing: A Day in Someone Else\'s Shoes',
    description:
      'Use your imagination to write a story from a completely different perspective. What would a day be like if you were someone — or something — else?',
    difficulty: 'challenging',
    questions: [
      {
        id: 'writing-g5-3-q1',
        type: 'writing-prompt',
        question:
          'Choose one of the following and write a short story (8-10 sentences) from their perspective. Write as if you ARE that character, using "I" and "my".\n\n1. A stray dog in a busy Indian city\n2. A mango tree in a village courtyard during summer\n3. A postman delivering letters in a hilly area\n4. A kite flying high over the rooftops during Makar Sankranti\n\nDescribe what you see, hear, and feel during one day.',
        hint: 'Pick the character that excites you the most. Think about what their day would be like from morning to evening. What challenges do they face? What makes them happy? Use all five senses to bring your story to life.',
        writingGuide: [
          'Start by introducing yourself as the character — "I am a stray dog, and I live near the tea stall on MG Road." Set the scene with where and when.',
          'Describe the beginning of your day — what do you see when you first wake up or start your routine?',
          'Write about an event or challenge in the middle of the day — does the dog find food? Does the kite get tangled? Does the postman climb a steep hill?',
          'Include sensory details — what do you smell, hear, and feel? The smell of chai, the sound of temple bells, the warmth of the sun.',
          'End with how the day comes to a close — what does the character feel at the end of the day? Are they tired, content, hopeful, or lonely?',
        ],
      },
    ],
  },
  {
    id: 'writing-g5-4',
    section: 'writing',
    grade: 5,
    title: 'Formal Letter: A Request to the Principal',
    description:
      'Learn to write a formal letter by writing to your school principal with a polite request.',
    difficulty: 'medium',
    questions: [
      {
        id: 'writing-g5-4-q1',
        type: 'writing-prompt',
        question:
          'Write a formal letter to your school principal requesting something that would improve your school. You may choose one of the following topics or think of your own:\n\n1. Requesting more books for the school library\n2. Asking for a school garden where students can grow plants\n3. Requesting a clean drinking water facility\n4. Asking for a weekly sports hour for all classes\n\nYour letter should follow this format:\n- Your address and date (top right)\n- The Principal\'s designation and school name (left)\n- Subject line\n- Salutation (Respected Sir/Madam,)\n- Body of the letter (state your request and give reasons)\n- Polite closing (Yours obediently, [Your Name], Class V)',
        hint: 'A formal letter is polite, clear, and to the point. Give good reasons for your request. Explain how it will help not just you but all students in the school.',
        writingGuide: [
          'Start with the proper format — write your address and date on the top right, then the Principal\'s title and school address on the left, followed by the subject line.',
          'Begin the letter with "Respected Sir/Madam," and state your purpose clearly in the first sentence — "I am writing to request...".',
          'In the body, explain why this request is important — give 2-3 reasons. For example, if asking for library books: "Many students want to read but we have very few story books. New books will help us learn new words and improve our English."',
          'Show that you have thought about the practical side — "The books could be donated by parents or bought from the school fund."',
          'Close politely — "I hope you will consider my request. I shall be very grateful." Sign off with "Yours obediently" followed by your name and class.',
        ],
      },
    ],
  },
  {
    id: 'writing-g5-5',
    section: 'writing',
    grade: 5,
    title: 'Informal Letter and Formal Letter: Spot the Difference',
    description:
      'Write both an informal letter to a friend and a formal letter to the editor of a newspaper about the same topic. Learn how tone and style change depending on who you are writing to.',
    difficulty: 'challenging',
    questions: [
      {
        id: 'writing-g5-5-q1',
        type: 'writing-prompt',
        question:
          'Topic: There is too much plastic waste in your neighbourhood.\n\nFirst, write an informal letter (5-6 sentences) to your friend telling them about the plastic problem in your area. Share what you have seen and how you feel about it.\n\nRemember:\n- Use a friendly greeting (Dear ___,)\n- Write in a casual, chatty tone\n- Share your personal feelings\n- End warmly (Your friend, ___)',
        hint: 'When writing to a friend, you can be relaxed and personal. Use expressions like "You won\'t believe what I saw!" or "It really made me sad." Share your feelings openly.',
        writingGuide: [
          'Start with a warm greeting — "Dear Priya," — and jump into the topic naturally, as if you are talking to your friend.',
          'Describe what you have seen — plastic bags in the drain, bottles near the park, or wrappers on the road. Be specific and vivid.',
          'Share how it makes you feel — "It makes me so angry to see the beautiful park covered in plastic."',
          'Mention what you wish could change or what you have tried to do about it.',
          'Close with something friendly — "Let\'s do something about this together! Miss you. Your friend, [Name]."',
        ],
      },
      {
        id: 'writing-g5-5-q2',
        type: 'writing-prompt',
        question:
          'Now write a formal letter (6-8 sentences) to the editor of a local newspaper about the same topic — the plastic waste problem in your neighbourhood.\n\nRemember:\n- Follow formal letter format (address, date, To The Editor, Subject line)\n- Use a respectful and serious tone\n- State the problem clearly with facts\n- Suggest solutions\n- Sign off formally (Yours faithfully, ___)',
        hint: 'A letter to the editor is meant to inform the public and urge action. Keep your language polite but firm. Focus on facts and solutions rather than just personal feelings.',
        writingGuide: [
          'Format the letter correctly — your address and date on the top right, "To, The Editor, [Newspaper Name]" on the left, and a clear subject line like "Subject: Growing Plastic Waste Problem in [Area Name]".',
          'Begin with "Respected Sir/Madam," and state the purpose — "I am writing to draw attention to the increasing plastic waste in our neighbourhood."',
          'Describe the problem with specific details — where is the plastic piling up? How is it affecting the environment, drains, and health of residents?',
          'Suggest 2-3 practical solutions — banning single-use plastic bags, placing more dustbins, organising clean-up drives, or spreading awareness in schools.',
          'End with a strong closing — "I request you to publish this letter so that the authorities and residents take notice. Together, we can make our neighbourhood clean and healthy." Sign off with "Yours faithfully, [Name]".',
        ],
      },
    ],
  },
];

export default grade5Writing;
