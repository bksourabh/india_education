import type { Exercise } from '../../types';

const grade5Exercises: Exercise[] = [
  {
    id: 'reading-g5-1',
    section: 'reading',
    grade: 5,
    title: 'The Great Wall of India',
    description: 'Read about the historic Kumbhalgarh Fort wall and answer the questions.',
    difficulty: 'medium',
    passage:
      'When people talk about long walls, most think of the Great Wall of China. But did you know that ' +
      'India has the second-longest wall in the world? The wall of Kumbhalgarh Fort in Rajasthan stretches ' +
      'for about 36 kilometres across the Aravalli Hills. It was built in the fifteenth century by Rana Kumbha, ' +
      'a powerful ruler of the Mewar kingdom. The wall is so wide at some points that eight horses could ride ' +
      'side by side on top of it. Building such a massive wall was not easy. Thousands of workers laboured for ' +
      'many years, carrying heavy stones up steep hills. The wall was designed to protect the fort and the ' +
      'people living inside from enemy attacks. It has seven large gates and many watchtowers where soldiers ' +
      'stood guard day and night. Inside the fort walls, there were over 360 temples, showing how important ' +
      'religion and art were to the people of Mewar. The wall also protected farms and water sources, allowing ' +
      'the people inside to survive even during long sieges. Today, Kumbhalgarh Fort is a UNESCO World Heritage ' +
      'Site and a popular tourist destination. Visitors from around the world come to walk along the ancient ' +
      'wall and admire the breathtaking views of the Aravalli Hills.',
    questions: [
      {
        id: 'reading-g5-1-q1',
        type: 'mcq',
        question: 'How long is the wall of Kumbhalgarh Fort?',
        hint: 'The passage gives the length in kilometres.',
        explanation:
          'The passage states that the wall of Kumbhalgarh Fort stretches for about 36 kilometres across the Aravalli Hills.',
        options: [
          'About 16 kilometres',
          'About 26 kilometres',
          'About 36 kilometres',
          'About 46 kilometres',
        ],
        correctAnswer: 'About 36 kilometres',
      },
      {
        id: 'reading-g5-1-q2',
        type: 'mcq',
        question: 'Who built the wall of Kumbhalgarh Fort?',
        hint: 'He was a ruler of the Mewar kingdom in the fifteenth century.',
        explanation:
          'The passage says the wall was built in the fifteenth century by Rana Kumbha, a powerful ruler of the Mewar kingdom.',
        options: [
          'Emperor Akbar',
          'Rana Pratap',
          'Rana Kumbha',
          'Maharana Udai Singh',
        ],
        correctAnswer: 'Rana Kumbha',
      },
      {
        id: 'reading-g5-1-q3',
        type: 'mcq',
        question: 'How wide was the wall at some points?',
        hint: 'The passage uses animals to describe the width.',
        explanation:
          'The passage says the wall is so wide at some points that eight horses could ride side by side on top of it.',
        options: [
          'Wide enough for two elephants',
          'Wide enough for eight horses side by side',
          'Wide enough for four carts',
          'Wide enough for ten soldiers in a row',
        ],
        correctAnswer: 'Wide enough for eight horses side by side',
      },
      {
        id: 'reading-g5-1-q4',
        type: 'mcq',
        question: 'What does the large number of temples inside the fort tell us about the people of Mewar?',
        hint: 'The passage directly connects the temples to what was important to the people.',
        explanation:
          'The passage says there were over 360 temples inside the fort walls, showing how important religion and art were to the people of Mewar.',
        options: [
          'They were very wealthy',
          'Religion and art were very important to them',
          'They had many different rulers',
          'They did not care about defence',
        ],
        correctAnswer: 'Religion and art were very important to them',
      },
      {
        id: 'reading-g5-1-q5',
        type: 'mcq',
        question: 'Why could the people inside the fort survive long sieges?',
        hint: 'Think about what people need to live \u2014 food and something to drink.',
        explanation:
          'The passage explains that the wall also protected farms and water sources, allowing the people inside to survive even during long sieges.',
        options: [
          'They had a secret tunnel to escape',
          'The wall protected farms and water sources inside',
          'They received supplies from friendly kingdoms',
          'The enemies always gave up after a few days',
        ],
        correctAnswer: 'The wall protected farms and water sources inside',
      },
    ],
  },
  {
    id: 'reading-g5-2',
    section: 'reading',
    grade: 5,
    title: 'Saving the Ganges',
    description: 'Read about the challenges facing the Ganges river and efforts to clean it, then answer the questions.',
    difficulty: 'challenging',
    passage:
      'The Ganges, known as Ganga in India, is one of the most important rivers in the world. It flows for ' +
      'about 2,525 kilometres from the Gangotri glacier in the Himalayas to the Bay of Bengal. For millions ' +
      'of Indians, the river is sacred and is often called "Ganga Maa" or Mother Ganga. People use its water ' +
      'for drinking, farming, bathing, and religious ceremonies. However, the Ganges is facing serious problems. ' +
      'Every day, millions of litres of untreated sewage and industrial waste are dumped into the river. Plastic ' +
      'bags, bottles, and other garbage choke its waters. In some areas, the water has become so polluted that ' +
      'fish and river dolphins can no longer survive. The Indian government launched the Namami Gange programme ' +
      'to clean and protect the river. The programme builds sewage treatment plants, removes solid waste from ' +
      'the riverbanks, and educates people about keeping the river clean. Scientists are also working to restore ' +
      'the population of the Gangetic dolphin, which is India\'s national aquatic animal. Cleaning the Ganges ' +
      'is not just the government\'s job. Every citizen can help by not throwing waste into rivers, using less ' +
      'plastic, and supporting conservation efforts. If we all work together, we can give the Ganges a chance ' +
      'to flow clean and healthy once more.',
    questions: [
      {
        id: 'reading-g5-2-q1',
        type: 'mcq',
        question: 'Where does the Ganges originate?',
        hint: 'Look for the starting point of the river mentioned in the passage.',
        explanation:
          'The passage states that the Ganges flows from the Gangotri glacier in the Himalayas to the Bay of Bengal.',
        options: [
          'From a lake in Tibet',
          'From the Gangotri glacier in the Himalayas',
          'From the Western Ghats',
          'From the Aravalli Hills',
        ],
        correctAnswer: 'From the Gangotri glacier in the Himalayas',
      },
      {
        id: 'reading-g5-2-q2',
        type: 'mcq',
        question: 'What are the main causes of pollution in the Ganges?',
        hint: 'The passage mentions two main types of waste being dumped.',
        explanation:
          'The passage says millions of litres of untreated sewage and industrial waste are dumped into the river every day, along with plastic and garbage.',
        options: [
          'Too many boats and ships',
          'Untreated sewage, industrial waste, and plastic garbage',
          'Natural soil erosion only',
          'Chemicals used in religious ceremonies',
        ],
        correctAnswer: 'Untreated sewage, industrial waste, and plastic garbage',
      },
      {
        id: 'reading-g5-2-q3',
        type: 'mcq',
        question: 'What is the Namami Gange programme?',
        hint: 'The government started this to address the river\'s problems.',
        explanation:
          'The passage explains that the Namami Gange programme was launched by the Indian government to clean and protect the river by building sewage treatment plants, removing waste, and educating people.',
        options: [
          'A programme to build dams on the Ganges',
          'A programme to clean and protect the Ganges',
          'A programme to build bridges across the Ganges',
          'A programme to use the Ganges for electricity',
        ],
        correctAnswer: 'A programme to clean and protect the Ganges',
      },
      {
        id: 'reading-g5-2-q4',
        type: 'mcq',
        question: 'What is India\'s national aquatic animal?',
        hint: 'Scientists are trying to restore the population of this animal.',
        explanation:
          'The passage mentions that scientists are working to restore the population of the Gangetic dolphin, which is India\'s national aquatic animal.',
        options: [
          'The Bengal tiger',
          'The Indian crocodile',
          'The Gangetic dolphin',
          'The Olive Ridley turtle',
        ],
        correctAnswer: 'The Gangetic dolphin',
      },
      {
        id: 'reading-g5-2-q5',
        type: 'mcq',
        question: 'According to the passage, what can ordinary citizens do to help clean the Ganges?',
        hint: 'The last part of the passage talks about what everyone can do.',
        explanation:
          'The passage says every citizen can help by not throwing waste into rivers, using less plastic, and supporting conservation efforts.',
        options: [
          'Build their own sewage treatment plants',
          'Stop using the river completely',
          'Not throw waste into rivers, use less plastic, and support conservation',
          'Move away from areas near the river',
        ],
        correctAnswer: 'Not throw waste into rivers, use less plastic, and support conservation',
      },
    ],
  },
  {
    id: 'reading-g5-3',
    section: 'reading',
    grade: 5,
    title: 'The Life of Mary Kom',
    description: 'Read about the inspiring journey of the boxing champion Mary Kom and answer the questions.',
    difficulty: 'medium',
    passage:
      'Mangte Chungneijang Mary Kom, known to the world as Mary Kom, is one of India\'s greatest sports ' +
      'champions. She was born on 24 November 1982 in Kangathei, a small village in the state of Manipur ' +
      'in northeast India. Her family was poor, and as a child, she helped her parents work on their farm. ' +
      'Mary Kom became interested in boxing after watching the boxer Dingko Singh win a gold medal at the ' +
      '1998 Asian Games. She began training secretly because her father disapproved of girls boxing. When ' +
      'he found out, he was angry at first, but he later became her biggest supporter after seeing her win ' +
      'her first state championship. Mary Kom went on to become a six-time World Amateur Boxing Champion, ' +
      'a record that very few boxers in the world have matched. She also won a bronze medal at the 2012 ' +
      'London Olympics, becoming the first Indian woman boxer to win an Olympic medal. Despite facing many ' +
      'challenges, including poverty, injuries, and balancing her career with raising her three sons, Mary Kom ' +
      'never gave up. The Indian government honoured her with the Padma Bhushan and the Rajiv Gandhi Khel ' +
      'Ratna award. Her story teaches us that with courage, hard work, and determination, anyone can achieve ' +
      'greatness, no matter where they come from.',
    questions: [
      {
        id: 'reading-g5-3-q1',
        type: 'mcq',
        question: 'Where was Mary Kom born?',
        hint: 'Her village is in a state in northeast India.',
        explanation:
          'The passage says Mary Kom was born in Kangathei, a small village in the state of Manipur in northeast India.',
        options: [
          'In Imphal, the capital of Manipur',
          'In Kangathei, a small village in Manipur',
          'In Guwahati, Assam',
          'In Shillong, Meghalaya',
        ],
        correctAnswer: 'In Kangathei, a small village in Manipur',
      },
      {
        id: 'reading-g5-3-q2',
        type: 'mcq',
        question: 'What inspired Mary Kom to take up boxing?',
        hint: 'She was inspired by watching another boxer\'s success in an international event.',
        explanation:
          'The passage says Mary Kom became interested in boxing after watching the boxer Dingko Singh win a gold medal at the 1998 Asian Games.',
        options: [
          'Her father taught her boxing as a child',
          'She watched Dingko Singh win gold at the 1998 Asian Games',
          'Her school coach encouraged her to try boxing',
          'She saw a boxing match on television when she was five',
        ],
        correctAnswer: 'She watched Dingko Singh win gold at the 1998 Asian Games',
      },
      {
        id: 'reading-g5-3-q3',
        type: 'mcq',
        question: 'Why did Mary Kom train secretly at first?',
        hint: 'A family member did not agree with her choice of sport.',
        explanation:
          'The passage explains that Mary Kom began training secretly because her father disapproved of girls boxing.',
        options: [
          'There was no boxing gym in her village',
          'She was too young to join the team',
          'Her father disapproved of girls boxing',
          'She wanted to surprise everyone at a competition',
        ],
        correctAnswer: 'Her father disapproved of girls boxing',
      },
      {
        id: 'reading-g5-3-q4',
        type: 'mcq',
        question: 'What historic achievement did Mary Kom make at the 2012 London Olympics?',
        hint: 'She was the first Indian woman to accomplish something at the Olympics in her sport.',
        explanation:
          'The passage says Mary Kom won a bronze medal at the 2012 London Olympics, becoming the first Indian woman boxer to win an Olympic medal.',
        options: [
          'She won a gold medal in boxing',
          'She became the first Indian woman boxer to win an Olympic medal',
          'She carried the Indian flag at the opening ceremony',
          'She defeated the reigning world champion',
        ],
        correctAnswer: 'She became the first Indian woman boxer to win an Olympic medal',
      },
      {
        id: 'reading-g5-3-q5',
        type: 'mcq',
        question: 'How many times did Mary Kom win the World Amateur Boxing Championship?',
        hint: 'The passage mentions a specific number that very few boxers have matched.',
        explanation:
          'The passage states that Mary Kom became a six-time World Amateur Boxing Champion, a record very few boxers have matched.',
        options: [
          'Three times',
          'Four times',
          'Five times',
          'Six times',
        ],
        correctAnswer: 'Six times',
      },
    ],
  },
  {
    id: 'reading-g5-4',
    section: 'reading',
    grade: 5,
    title: 'The Thar Desert: A Living Landscape',
    description: 'Read about the Thar Desert ecosystem and the people who call it home, then answer the questions.',
    difficulty: 'challenging',
    passage:
      'The Thar Desert, also called the Great Indian Desert, covers an area of about 200,000 square kilometres ' +
      'across the western part of Rajasthan and parts of Gujarat, Punjab, and Haryana. Unlike many deserts ' +
      'around the world, the Thar is not completely empty. It is one of the most densely populated deserts ' +
      'on Earth. Millions of people live here, and they have developed remarkable ways to survive in the harsh ' +
      'environment. Water is the most precious resource in the Thar. Rainfall is very low, often less than ' +
      '250 millimetres per year. To cope with this, communities have built ingenious water harvesting systems. ' +
      'Stepwells called "baoris" and underground tanks called "tankas" collect and store rainwater for use ' +
      'during the dry months. The desert is also home to unique wildlife. The Great Indian Bustard, one of ' +
      'the heaviest flying birds in the world, is found here, though it is now critically endangered with ' +
      'fewer than 150 left in the wild. Blackbucks, chinkaras, and desert foxes also roam the sandy landscape. ' +
      'The Thar is rich in culture as well. The annual Pushkar Camel Fair and the Desert Festival in Jaisalmer ' +
      'attract visitors from around the globe. Traditional folk music, bright textiles, and intricate mirror ' +
      'work embroidery are all part of the vibrant desert culture. However, the Thar faces threats from ' +
      'overgrazing, deforestation, and expanding agriculture, which are causing the desert to grow larger ' +
      'each year in a process known as desertification.',
    questions: [
      {
        id: 'reading-g5-4-q1',
        type: 'mcq',
        question: 'What makes the Thar Desert different from many other deserts?',
        hint: 'Think about how many people live in most deserts compared to the Thar.',
        explanation:
          'The passage states that unlike many deserts around the world, the Thar is one of the most densely populated deserts on Earth, with millions of people living there.',
        options: [
          'It has no sand dunes',
          'It is one of the most densely populated deserts on Earth',
          'It receives heavy rainfall every year',
          'It is the largest desert in the world',
        ],
        correctAnswer: 'It is one of the most densely populated deserts on Earth',
      },
      {
        id: 'reading-g5-4-q2',
        type: 'mcq',
        question: 'What are "baoris" and "tankas"?',
        hint: 'These structures help people deal with the biggest challenge in the desert.',
        explanation:
          'The passage explains that baoris are stepwells and tankas are underground tanks. Both are ingenious water harvesting systems used to collect and store rainwater.',
        options: [
          'Types of desert animals',
          'Traditional musical instruments',
          'Water harvesting systems that collect and store rainwater',
          'Types of sand dunes in the desert',
        ],
        correctAnswer: 'Water harvesting systems that collect and store rainwater',
      },
      {
        id: 'reading-g5-4-q3',
        type: 'mcq',
        question: 'Why is the Great Indian Bustard critically endangered?',
        hint: 'The passage mentions how few of these birds remain.',
        explanation:
          'The passage says the Great Indian Bustard is critically endangered with fewer than 150 left in the wild, though it does not give a specific reason for the decline. The bird\'s critically low numbers define its endangered status.',
        options: [
          'It has migrated to other countries',
          'Fewer than 150 are left in the wild',
          'It cannot survive in hot weather',
          'It has been moved to zoos for protection',
        ],
        correctAnswer: 'Fewer than 150 are left in the wild',
      },
      {
        id: 'reading-g5-4-q4',
        type: 'mcq',
        question: 'What is desertification?',
        hint: 'The passage connects it to the desert growing in size.',
        explanation:
          'The passage explains that overgrazing, deforestation, and expanding agriculture are causing the desert to grow larger each year, and this process is known as desertification.',
        options: [
          'The process of planting trees in the desert',
          'The process of the desert growing larger due to human activities',
          'The process of building new cities in the desert',
          'The process of animals adapting to desert life',
        ],
        correctAnswer: 'The process of the desert growing larger due to human activities',
      },
      {
        id: 'reading-g5-4-q5',
        type: 'mcq',
        question: 'Which cultural events and traditions of the Thar Desert are mentioned in the passage?',
        hint: 'Look for names of festivals and types of art mentioned in the passage.',
        explanation:
          'The passage mentions the Pushkar Camel Fair, the Desert Festival in Jaisalmer, traditional folk music, bright textiles, and intricate mirror work embroidery as part of the vibrant desert culture.',
        options: [
          'Kite flying festival and pottery making',
          'Pushkar Camel Fair, Desert Festival, folk music, and mirror work embroidery',
          'Holi celebrations and sand castle competitions',
          'Horse racing and carpet weaving',
        ],
        correctAnswer: 'Pushkar Camel Fair, Desert Festival, folk music, and mirror work embroidery',
      },
    ],
  },
  {
    id: 'reading-g5-5',
    section: 'reading',
    grade: 5,
    title: 'India\'s Space Journey',
    description: 'Read about India\'s achievements in space exploration and answer the questions.',
    difficulty: 'challenging',
    passage:
      'India\'s journey into space is one of the most inspiring stories in modern science. The Indian Space ' +
      'Research Organisation, known as ISRO, was founded in 1969 by the visionary scientist Dr. Vikram ' +
      'Sarabhai, who is often called the father of the Indian space programme. In the early days, ISRO had ' +
      'very limited resources. Scientists transported rocket parts on bicycles and bullock carts to the launch ' +
      'site in Thumba, Kerala. Despite these humble beginnings, ISRO has achieved remarkable success. In 2008, ' +
      'India launched Chandrayaan-1, its first mission to the Moon. This spacecraft made a groundbreaking ' +
      'discovery: it found evidence of water molecules on the Moon\'s surface, a finding that excited ' +
      'scientists around the world. In 2014, India became the first country in Asia to successfully send ' +
      'a spacecraft to Mars on its very first attempt. The Mars Orbiter Mission, nicknamed "Mangalyaan," ' +
      'was remarkable not only for its success but also for its low cost. The entire mission cost about ' +
      '450 crore rupees, which was less than the budget of many Hollywood films. In 2023, Chandrayaan-3 ' +
      'successfully landed near the Moon\'s south pole, making India the first country to achieve this feat. ' +
      'ISRO also plays a vital role in everyday life. Its satellites help with weather forecasting, ' +
      'communication in remote areas, mapping natural resources, and disaster management. ISRO\'s success ' +
      'proves that scientific excellence does not require unlimited money \u2014 it requires vision, ' +
      'teamwork, and determination.',
    questions: [
      {
        id: 'reading-g5-5-q1',
        type: 'mcq',
        question: 'Who founded ISRO and what is he known as?',
        hint: 'The passage mentions a visionary scientist and his title.',
        explanation:
          'The passage says ISRO was founded in 1969 by Dr. Vikram Sarabhai, who is often called the father of the Indian space programme.',
        options: [
          'Dr. A.P.J. Abdul Kalam, the Missile Man of India',
          'Dr. Vikram Sarabhai, the father of the Indian space programme',
          'Dr. Homi Bhabha, the father of nuclear science',
          'Dr. C.V. Raman, the father of Indian physics',
        ],
        correctAnswer: 'Dr. Vikram Sarabhai, the father of the Indian space programme',
      },
      {
        id: 'reading-g5-5-q2',
        type: 'mcq',
        question: 'What important discovery did Chandrayaan-1 make?',
        hint: 'The spacecraft found something essential for life on the Moon\'s surface.',
        explanation:
          'The passage says Chandrayaan-1 made a groundbreaking discovery: it found evidence of water molecules on the Moon\'s surface.',
        options: [
          'It found a new mountain on the Moon',
          'It found evidence of water molecules on the Moon\'s surface',
          'It discovered a new crater on the Moon',
          'It found signs of life on the Moon',
        ],
        correctAnswer: 'It found evidence of water molecules on the Moon\'s surface',
      },
      {
        id: 'reading-g5-5-q3',
        type: 'mcq',
        question: 'What was special about India\'s Mars Orbiter Mission?',
        hint: 'India achieved something on its first try that other Asian countries had not done, and it was very affordable.',
        explanation:
          'The passage says India became the first country in Asia to successfully send a spacecraft to Mars on its very first attempt, and the mission cost only about 450 crore rupees, less than many Hollywood film budgets.',
        options: [
          'It was the fastest spacecraft to reach Mars',
          'India was the first Asian country to reach Mars on its first attempt, at a very low cost',
          'It carried astronauts to orbit Mars',
          'It landed a rover on the surface of Mars',
        ],
        correctAnswer: 'India was the first Asian country to reach Mars on its first attempt, at a very low cost',
      },
      {
        id: 'reading-g5-5-q4',
        type: 'mcq',
        question: 'What historic achievement did Chandrayaan-3 accomplish?',
        hint: 'No other country had landed a spacecraft in this specific area of the Moon before.',
        explanation:
          'The passage says Chandrayaan-3 successfully landed near the Moon\'s south pole, making India the first country to achieve this feat.',
        options: [
          'It was the first spacecraft to orbit the Moon',
          'It brought Moon rocks back to Earth',
          'It landed near the Moon\'s south pole, a first for any country',
          'It took the first colour photographs of the Moon',
        ],
        correctAnswer: 'It landed near the Moon\'s south pole, a first for any country',
      },
      {
        id: 'reading-g5-5-q5',
        type: 'mcq',
        question: 'How do ISRO\'s satellites help in everyday life?',
        hint: 'The passage lists several practical uses of satellites.',
        explanation:
          'The passage says ISRO\'s satellites help with weather forecasting, communication in remote areas, mapping natural resources, and disaster management.',
        options: [
          'By providing free internet to all citizens',
          'By weather forecasting, communication, mapping resources, and disaster management',
          'By launching tourists into space',
          'By delivering packages to remote villages',
        ],
        correctAnswer: 'By weather forecasting, communication, mapping resources, and disaster management',
      },
    ],
  },
];

export default grade5Exercises;
