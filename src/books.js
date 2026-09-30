// This is our small, built-in "database": an array of ordinary JavaScript objects.
// Each object uses the same property names so one React component can show any book.
// Chapter headings below are paraphrased topic labels, not quotations from the books.
// Introductions, conclusions and appendices are excluded from numbered chapter counts.
export const starterBooks = [
  {
    id: 'make-it-stick',
    title: 'Make It Stick',
    subtitle: 'The Science of Successful Learning',
    category: 'Learning',
    year: 2014,
    publisher: 'Belknap Press of Harvard University Press',
    isbn: '9780674729018',
    edition: '2014 edition · 8 chapters',
    authors: [
      {
        name: 'Peter C. Brown',
        wiki: 'https://en.wikipedia.org/w/index.php?search=Peter+C.+Brown+Make+It+Stick',
        search: true,
        bio: 'A writer and storyteller who brings the research to life through accounts of learners and teachers.',
      },
      {
        name: 'Henry L. Roediger III',
        wiki: 'https://en.wikipedia.org/wiki/Henry_L._Roediger_III',
        bio: 'A cognitive psychologist known for research on memory and retrieval practice.',
      },
      {
        name: 'Mark A. McDaniel',
        wiki: 'https://en.wikipedia.org/wiki/Mark_McDaniel',
        bio: 'A cognitive psychologist whose research includes learning, memory, and education.',
      },
    ],
    summary:
      'Make It Stick examines why studying can feel productive without producing lasting learning. Brown, Roediger, and McDaniel argue that recalling information, spacing practice, and mixing problem types often work better than repeated rereading. The central distinction is between familiarity in the moment and knowledge you can use later. Effective learning requires effort, feedback, and opportunities to correct mistakes.',
    idea: 'Close the book. Try to remember. Then check what you missed.',
    chapters: [
      {
        title: 'Rethinking effective learning',
        takeaway:
          'Easy, fluent study can mislead you. Judge learning by what you can recall and apply later.',
      },
      {
        title: 'Retrieval as practice',
        takeaway:
          'Use low-stakes self-tests. Attempt an answer before checking your notes, then correct errors.',
      },
      {
        title: 'Spacing and mixing',
        takeaway:
          'Spread study across days and alternate problem types to practice choosing the right approach.',
      },
      {
        title: 'Useful learning challenges',
        takeaway:
          'Some difficulty strengthens learning. Effortful recall and attempted solutions can help when followed by feedback.',
      },
      {
        title: 'Checking your understanding',
        takeaway:
          'Compare your confidence with actual performance. Familiar-looking material is not proof of mastery.',
      },
      {
        title: 'Beyond learning-style labels',
        takeaway:
          'Choose methods that fit the subject and task instead of restricting yourself to one supposed learning style.',
      },
      {
        title: 'Developing your abilities',
        takeaway:
          'Treat ability as something you can develop through strategies, practice, and feedback.',
      },
      {
        title: 'Putting learning into practice',
        takeaway:
          'Build a repeatable routine of retrieval, spaced review, reflection, and mixed practice.',
      },
    ],
    citation:
      'Brown, P. C., Roediger, H. L., III, & McDaniel, M. A. (2014). Make it stick: The science of successful learning. Belknap Press of Harvard University Press.',
    sources: [
      {
        label: 'Harvard University Press — book information',
        url: 'https://www.hup.harvard.edu/books/9780674729018',
      },
      {
        label: 'Wabash Center — edition and chapter listing',
        url: 'https://wabashcenter.wabash.edu/resources/scholarship/make-it-stick-the-science-of-successful-learning',
      },
    ],
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    subtitle: 'Rules for Focused Success in a Distracted World',
    category: 'Focus',
    year: 2016,
    publisher: 'Grand Central Publishing',
    isbn: '9781455586691',
    edition: '2016 edition · 3 chapters + 4 rules',
    authors: [
      {
        name: 'Cal Newport',
        wiki: 'https://en.wikipedia.org/wiki/Cal_Newport',
        bio: 'A computer scientist and author who writes about attention, technology, and the way people work.',
      },
    ],
    summary:
      'Deep Work makes a case for protecting sustained, undistracted attention. Newport argues that demanding work helps people learn difficult skills and produce valuable results, while constant switching consumes attention. The first part explains why depth matters; the second offers four rules for making it a regular practice. The goal is to arrange your schedule, surroundings, and commitments so concentration has room to develop.',
    idea: 'Give your most demanding work a protected place in your day.',
    chapters: [
      {
        title: 'The value of concentrated work',
        takeaway:
          'Focused practice helps you learn demanding skills and produce work that is difficult to replicate.',
      },
      {
        title: 'Why concentration is uncommon',
        takeaway:
          'Visible busyness and constant messages can crowd out meaningful work. Measure useful output.',
      },
      {
        title: 'Meaning through focused effort',
        takeaway:
          'Full engagement with a demanding task can support craftsmanship and a sense of purpose.',
      },
      {
        title: 'Rule 1 · Build a depth routine',
        takeaway:
          'Choose a realistic schedule, a clear task, and a distraction-free setting for your focus sessions.',
      },
      {
        title: 'Rule 2 · Train attention',
        takeaway:
          'Practice staying with a task and tolerate moments of boredom without immediately seeking stimulation.',
      },
      {
        title: 'Rule 3 · Select your digital tools',
        takeaway:
          'Assess tools against your important goals. Keep those whose benefits justify their costs.',
      },
      {
        title: 'Rule 4 · Limit shallow commitments',
        takeaway:
          'Budget routine work, clarify expectations, and protect a firm end to your working day.',
      },
    ],
    citation:
      'Newport, C. (2016). Deep work: Rules for focused success in a distracted world. Grand Central Publishing.',
    sources: [
      {
        label: 'Hachette — publisher description and edition',
        url: 'https://www.hachettebookgroup.com/titles/cal-newport/deep-work/9781455586677/',
      },
      {
        label: 'YES24 — contents for the 2016 edition',
        url: 'https://www.yes24.com/Product/Goods/17910091',
      },
    ],
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    subtitle: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    category: 'Habits',
    year: 2018,
    publisher: 'Avery',
    isbn: '9780735211292',
    edition: '2018 edition · 20 chapters',
    authors: [
      {
        name: 'James Clear',
        wiki: 'https://en.wikipedia.org/wiki/James_Clear',
        bio: 'An author and speaker whose writing explores habits, decision-making, and continuous improvement.',
      },
    ],
    summary:
      'Atomic Habits explains how small, repeated behaviors can accumulate into substantial change. Clear places emphasis on everyday systems and the identity reinforced by repeated actions. His four-part framework addresses the cue, craving, response, and reward behind a habit. By adjusting these conditions, readers can make desired behaviors easier to repeat and unwanted ones harder to maintain.',
    idea: 'Make the next useful action small, visible, and easy to repeat.',
    chapters: [
      {
        title: 'Small improvements accumulate',
        takeaway:
          'Improve repeatable systems; results often arrive after a delay.',
      },
      {
        title: 'Identity and repetition',
        takeaway:
          'Let small actions provide evidence for who you want to become.',
      },
      {
        title: 'The habit cycle',
        takeaway:
          'Examine cues, cravings, responses, and rewards when designing a habit.',
      },
      {
        title: 'Notice existing patterns',
        takeaway: 'List daily behaviors before deciding what to change.',
      },
      {
        title: 'Plan the next action',
        takeaway:
          'Specify when and where; connect a new action to an existing routine.',
      },
      {
        title: 'Arrange your surroundings',
        takeaway: 'Place helpful cues where you will see them.',
      },
      {
        title: 'Reduce exposure to temptation',
        takeaway:
          'Remove distracting cues instead of repeatedly relying on resistance.',
      },
      {
        title: 'Make habits appealing',
        takeaway: 'Pair a needed action with something you enjoy.',
      },
      {
        title: 'Choose supportive company',
        takeaway: 'Join environments where your desired behavior feels normal.',
      },
      {
        title: 'Reframe unwanted habits',
        takeaway: 'Question the benefit you expect from a harmful routine.',
      },
      {
        title: 'Practice through action',
        takeaway: 'Repetition teaches more than endlessly preparing to begin.',
      },
      {
        title: 'Reduce the effort required',
        takeaway:
          'Prepare your environment so the useful choice takes fewer steps.',
      },
      {
        title: 'Begin with two minutes',
        takeaway: 'Shrink the starting action until it is easy to do.',
      },
      {
        title: 'Design future choices',
        takeaway:
          'Use commitments and sensible automation to support your intentions.',
      },
      {
        title: 'Reward useful behavior',
        takeaway: 'Give good habits a satisfying immediate finish.',
      },
      {
        title: 'Keep returning',
        takeaway:
          'Track repetitions if useful; resume promptly after a missed day.',
      },
      {
        title: 'Use accountability',
        takeaway:
          'Agree on clear expectations with someone who supports your goal.',
      },
      {
        title: 'Work with your strengths',
        takeaway: 'Choose practices that fit your abilities and interests.',
      },
      {
        title: 'Find a workable challenge',
        takeaway: 'Stay engaged with tasks just beyond your current comfort.',
      },
      {
        title: 'Review automatic routines',
        takeaway:
          'Reflect and refine so habits do not become unexamined limitations.',
      },
    ],
    citation:
      'Clear, J. (2018). Atomic habits: An easy & proven way to build good habits & break bad ones. Avery.',
    sources: [
      {
        label: 'James Clear — book and framework',
        url: 'https://jamesclear.com/atomic-habits',
      },
      {
        label: 'James Clear — first-chapter resource',
        url: 'https://jamesclear.com/atomic-habits/chapter-1',
      },
    ],
  },
  {
    id: 'tiny-habits',
    title: 'Tiny Habits',
    subtitle: 'The Small Changes That Change Everything',
    category: 'Habits',
    year: 2020,
    publisher: 'Houghton Mifflin Harcourt',
    isbn: '9780358003328',
    edition: '2020 edition · 8 chapters',
    authors: [
      {
        name: 'B. J. Fogg',
        wiki: 'https://en.wikipedia.org/wiki/B._J._Fogg',
        bio: 'A behavior scientist associated with Stanford University and the creator of the Tiny Habits method.',
      },
    ],
    summary:
      'Tiny Habits presents behavior change as a design problem. Fogg explains how motivation, ability, and a prompt must come together for an action to happen. His approach starts with a very small behavior, anchors it to a reliable routine, and uses a positive feeling of success to reinforce it. When a habit fails, the method encourages adjusting the design rather than blaming yourself.',
    idea: 'Start smaller than you think, and celebrate doing it.',
    chapters: [
      {
        title: 'Three conditions for behavior',
        takeaway:
          'Check motivation, ease, and a prompt when an action is not happening.',
      },
      {
        title: 'Match actions to aspirations',
        takeaway:
          'Choose specific behaviors you want to do, rather than depending on fluctuating motivation.',
      },
      {
        title: 'Make the behavior easier',
        takeaway:
          'Reduce time, effort, or complexity until the action fits a difficult day.',
      },
      {
        title: 'Anchor the prompt',
        takeaway:
          'Attach the new action to a precise moment in an existing routine.',
      },
      {
        title: 'Reinforce with positive emotion',
        takeaway: 'Celebrate immediately in a way that feels natural to you.',
      },
      {
        title: 'Let small habits grow',
        takeaway:
          'Expand when it feels manageable while preserving a tiny baseline.',
      },
      {
        title: 'Untangle unwanted behaviors',
        takeaway:
          'Identify specific routines and adjust their prompts or difficulty one at a time.',
      },
      {
        title: 'Support change together',
        takeaway:
          'Help others find workable behaviors without pressure or shame.',
      },
    ],
    citation:
      'Fogg, B. J. (2020). Tiny habits: The small changes that change everything. Houghton Mifflin Harcourt.',
    sources: [
      {
        label: 'Open Library — edition and contents',
        url: 'https://openlibrary.org/isbn/9780358003328',
      },
      {
        label: 'Tiny Habits — official companion toolkit',
        url: 'https://tinyhabits.com/wp-content/uploads/2021/02/The-Official-Tiny-Habits-Toolkit-by-BJ-Fogg-Paperback-Edition.pdf',
      },
    ],
  },
  {
    id: 'smart-notes',
    title: 'How to Take Smart Notes',
    subtitle: 'One Simple Technique to Boost Writing, Learning and Thinking',
    category: 'Learning',
    year: 2017,
    publisher: 'Sönke Ahrens',
    isbn: '9781542866507',
    edition: '2017 first edition · 14 chapters',
    authors: [
      {
        name: 'Sönke Ahrens',
        wiki: 'https://en.wikipedia.org/w/index.php?search=S%C3%B6nke+Ahrens',
        search: true,
        bio: 'A writer and researcher on education and thinking, known for explaining the Zettelkasten note-taking method.',
      },
    ],
    summary:
      'How to Take Smart Notes describes a writing workflow built around an interconnected collection of notes. Ahrens distinguishes quick captures, notes about sources, and carefully written permanent notes. Instead of collecting quotations indefinitely, readers explain ideas in their own words and connect them to existing thinking. Writing then develops from a growing network of arguments, questions, and evidence.',
    idea: 'Write one idea clearly, then connect it to something you already know.',
    chapters: [
      {
        title: 'The slip-box approach',
        takeaway:
          'Use a dependable external system to develop ideas over time.',
      },
      {
        title: 'The writing workflow',
        takeaway:
          'Move from reading to notes, connections, outlines, and drafts.',
      },
      {
        title: 'Simple working tools',
        takeaway:
          'Keep capture, references, permanent notes, and drafting tools understandable.',
      },
      {
        title: 'Workflow considerations',
        takeaway:
          'Understand the process before becoming absorbed in tools or setup.',
      },
      {
        title: 'Writing supports thinking',
        takeaway:
          'Write to discover gaps and clarify arguments, not merely record conclusions.',
      },
      {
        title: 'Simplicity in the system',
        takeaway:
          'Give different note types clear purposes and handle them consistently.',
      },
      {
        title: 'Open-ended development',
        takeaway:
          'Let questions and connections guide projects instead of forcing every insight into a fixed plan.',
      },
      {
        title: 'Learning from feedback',
        takeaway:
          'Make progress visible and let unresolved questions motivate further work.',
      },
      {
        title: 'Separate different tasks',
        takeaway:
          'Give reading, note-making, and revising their own focused attention.',
      },
      {
        title: 'Read actively',
        takeaway:
          'Look for arguments and explain them without leaning on copied phrasing.',
      },
      {
        title: 'Create durable notes',
        takeaway:
          'Write self-contained ideas with enough context and source information to reuse.',
      },
      {
        title: 'Build meaningful links',
        takeaway:
          'Connect notes through agreement, tension, or implications, not just shared keywords.',
      },
      {
        title: 'Develop a draft',
        takeaway:
          'Assemble related notes into an argument, then revise for the reader.',
      },
      {
        title: 'Make the process routine',
        takeaway:
          'Repeat small steps so your collection remains an active thinking tool.',
      },
    ],
    citation:
      'Ahrens, S. (2017). How to take smart notes: One simple technique to boost writing, learning and thinking—for students, academics and nonfiction book writers. Sönke Ahrens.',
    sources: [
      {
        label: 'Sönke Ahrens — author’s book page',
        url: 'https://www.soenkeahrens.de/en/takesmartnotes',
      },
      {
        label: 'Journal of Writing Research — review of the first edition',
        url: 'https://www.jowr.org/jowr/article/download/628/561/509',
      },
    ],
  },
  {
    id: 'mind-for-numbers',
    title: 'A Mind for Numbers',
    subtitle: 'How to Excel at Math and Science (Even If You Flunked Algebra)',
    category: 'Learning',
    year: 2014,
    publisher: 'Jeremy P. Tarcher/Penguin',
    isbn: '9780399165245',
    edition: '2014 edition · 18 chapters',
    authors: [
      {
        name: 'Barbara Oakley',
        wiki: 'https://en.wikipedia.org/wiki/Barbara_Oakley',
        bio: 'An engineering educator and author who explains practical approaches to learning challenging subjects.',
      },
    ],
    summary:
      'A Mind for Numbers offers practical ways to study mathematics and science. Oakley combines focused practice with breaks, retrieval, spaced review, and strategies for procrastination. Understanding grows as related steps become usable mental chunks. The book encourages learners to test their understanding, learn from errors, and avoid treating past difficulty as a permanent limit.',
    idea: 'Practice, pause, and retrieve—understanding needs more than rereading.',
    chapters: [
      {
        title: 'Reconsider your potential',
        takeaway: 'Past difficulty need not determine future learning.',
      },
      {
        title: 'Switch thinking modes',
        takeaway: 'Alternate concentration with restful breaks.',
      },
      {
        title: 'Give ideas time',
        takeaway: 'Start early; practice and sleep support learning.',
      },
      {
        title: 'Build usable chunks',
        takeaway: 'Understand steps, then recall them independently.',
      },
      {
        title: 'Start despite discomfort',
        takeaway: 'Use short timed sessions to begin.',
      },
      {
        title: 'Understand procrastination patterns',
        takeaway: 'Notice triggers and reshape habitual responses.',
      },
      {
        title: 'Practice flexibly',
        takeaway: 'Mix problems to develop adaptable knowledge.',
      },
      {
        title: 'Organize study sessions',
        takeaway: 'Plan manageable tasks and deliberate stopping points.',
      },
      {
        title: 'Maintain productive routines',
        takeaway: 'Focus on the process of showing up.',
      },
      {
        title: 'Use memorable images',
        takeaway: 'Connect abstract ideas to vivid associations.',
      },
      {
        title: 'Strengthen memory connections',
        takeaway: 'Use meaningful groupings and spaced retrieval.',
      },
      {
        title: 'Value different strengths',
        takeaway: 'Careful thinking can compensate for slower progress.',
      },
      {
        title: 'Practice changes capability',
        takeaway: 'Develop understanding through repeated, attentive effort.',
      },
      {
        title: 'Explain abstract concepts',
        takeaway: 'Use analogies while checking their limits.',
      },
      {
        title: 'Learn beyond boundaries',
        takeaway: 'Transfer insights across subjects and experiences.',
      },
      {
        title: 'Check ideas with others',
        takeaway: 'Invite feedback to uncover blind spots.',
      },
      {
        title: 'Prepare for examinations',
        takeaway: 'Practice under realistic conditions and manage time.',
      },
      {
        title: 'Continue experimenting',
        takeaway: 'Adapt useful strategies to your own studies.',
      },
    ],
    citation:
      'Oakley, B. (2014). A mind for numbers: How to excel at math and science (even if you flunked algebra). Jeremy P. Tarcher/Penguin.',
    sources: [
      {
        label: 'Barbara Oakley — official excerpt and table of contents',
        url: 'https://barbaraoakley.com/wp-content/uploads/2016/12/A_Mind_for_Numbers_Oakley_Chs_1-2-1.pdf',
      },
      {
        label: 'Cal State Fullerton — educational overview',
        url: 'https://www.fullerton.edu/learn/_resources/pdfs/articles/Overview%20of%20A%20Mind%20for%20Numbers.pdf',
      },
    ],
  },
  {
    id: 'happiness-trap',
    title: 'The Happiness Trap',
    subtitle: 'Stop Struggling, Start Living',
    category: 'Wellbeing',
    year: 2007,
    publisher: 'Exisle Publishing',
    isbn: '9780908988907',
    edition: '2007 first edition · 33 chapters',
    authors: [
      {
        name: 'Russ Harris',
        wiki: 'https://en.wikipedia.org/w/index.php?search=Russ+Harris+The+Happiness+Trap',
        search: true,
        bio: 'A physician, therapist, and author who teaches acceptance and commitment therapy (ACT).',
      },
    ],
    summary:
      'The Happiness Trap questions the expectation that a worthwhile life must feel happy all the time. Harris introduces acceptance and commitment therapy through ways of relating differently to difficult thoughts and feelings. Its focus is psychological flexibility: noticing experience, making room for discomfort, and taking actions guided by values. These are reading notes about the book, not a personalized treatment plan.',
    idea: 'Make room for your inner experience while moving toward what matters.',
    chapters: [
      {
        title: 'Question happiness myths',
        takeaway: 'Constant happiness is an unrealistic standard.',
      },
      {
        title: 'Recognize avoidance cycles',
        takeaway: 'Short-term escape can narrow life.',
      },
      {
        title: 'Meet the ACT framework',
        takeaway: 'Practice flexibility through awareness and action.',
      },
      {
        title: 'Notice mental narratives',
        takeaway: 'Treat thoughts as mental events.',
      },
      {
        title: 'Allow painful thoughts',
        takeaway: 'Observe rather than automatically obey them.',
      },
      {
        title: 'Adjust defusion practice',
        takeaway: 'Defusion changes your relationship with thoughts.',
      },
      {
        title: 'Observe your inner voice',
        takeaway: 'Notice commentary without debating everything.',
      },
      {
        title: 'Relate to mental images',
        takeaway: 'Recognize images as mind-made experiences.',
      },
      {
        title: 'Move with discomfort',
        takeaway: 'Fear need not steer every choice.',
      },
      {
        title: 'Identify emotional sensations',
        takeaway: 'Notice how feelings appear physically.',
      },
      {
        title: 'Reduce secondary struggle',
        takeaway: 'Fighting feelings can add distress.',
      },
      {
        title: 'Question emotional judgments',
        takeaway: 'Labels can intensify emotional struggle.',
      },
      {
        title: 'Make space for feelings',
        takeaway: 'Observe sensations with openness.',
      },
      {
        title: 'Clarify acceptance',
        takeaway: 'Acceptance does not mean liking discomfort.',
      },
      {
        title: 'Observe changing urges',
        takeaway: 'Urges need not become actions.',
      },
      {
        title: 'Respond to difficult emotions',
        takeaway: 'Return to openness as feelings change.',
      },
      {
        title: 'Return from mental time travel',
        takeaway: 'Reconnect with what is happening now.',
      },
      {
        title: 'Engage in everyday activity',
        takeaway: 'Bring attention to ordinary experiences.',
      },
      {
        title: 'Understand mindful attention',
        takeaway: 'Practice openness and present-moment awareness.',
      },
      {
        title: 'Use breathing as an anchor',
        takeaway: 'Notice breathing without demanding calm.',
      },
      {
        title: 'Check usefulness of thoughts',
        takeaway: 'Ask whether a thought supports action.',
      },
      {
        title: 'Loosen fixed self-stories',
        takeaway: 'Identity stories need not dictate behavior.',
      },
      {
        title: 'Explore the observing perspective',
        takeaway: 'Notice experience beyond descriptive labels.',
      },
      {
        title: 'Identify valued directions',
        takeaway: 'Choose qualities you want to embody.',
      },
      {
        title: 'Ask what matters',
        takeaway: 'Reflect on your important life areas.',
      },
      {
        title: 'Clarify values and goals',
        takeaway: 'Values guide; goals mark destinations.',
      },
      {
        title: 'Take a first step',
        takeaway: 'Translate values into achievable actions.',
      },
      {
        title: 'Notice everyday fulfillment',
        takeaway: 'Engage with the process of living.',
      },
      {
        title: 'Appreciate available experiences',
        takeaway: 'Attend to what life already offers.',
      },
      {
        title: 'Meet barriers to action',
        takeaway: 'Identify obstacles without surrendering direction.',
      },
      {
        title: 'Practice willingness',
        takeaway: 'Allow discomfort while pursuing values.',
      },
      {
        title: 'Keep recommitting',
        takeaway: 'Return after setbacks with practical adjustments.',
      },
      {
        title: 'Build ongoing meaning',
        takeaway: 'Renew valued action in daily life.',
      },
    ],
    citation:
      'Harris, R. (2007). The happiness trap: Stop struggling, start living. Exisle Publishing.',
    sources: [
      {
        label: 'Russ Harris — original-edition contents and excerpt',
        url: 'https://thehappinesstrap.com/wp-content/uploads/2017/06/The_Happiness_Trap_-_Introduction_and_Chapter_one.pdf',
      },
      {
        label: 'Wikipedia — publication history and overview',
        url: 'https://en.wikipedia.org/wiki/The_Happiness_Trap',
      },
      {
        label: 'The Happiness Trap — author resources',
        url: 'https://thehappinesstrap.com/free-resources/',
      },
    ],
  },
];
