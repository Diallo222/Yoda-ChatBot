const chatsData = [
  {
    chatsPeriod: "Today",
    chatList: [
      {
        id: 1,
        userMessage: "What’s the weather like today?",
        assistantMessage: "Today’s weather is sunny with a high of 25°C.",
        timestamp: "10:30 AM",
      },
      {
        id: 2,
        userMessage: "Can you summarize the news for me?",
        assistantMessage:
          "Certainly! Here are some of today’s top headlines...",
        timestamp: "11:45 AM",
      },
    ],
  },
  {
    chatsPeriod: "Yesterday",
    chatList: [
      {
        id: 3,
        userMessage: "Explain quantum mechanics in simple terms.",
        assistantMessage:
          "Quantum mechanics is the branch of physics that studies particles at the atomic and subatomic levels...",
        timestamp: "2:15 PM",
      },
      {
        id: 4,
        userMessage: "Do you have any book recommendations on AI?",
        assistantMessage:
          "Sure! Some great books on AI are 'Superintelligence' by Nick Bostrom and 'Artificial Intelligence: A Guide for Thinking Humans' by Melanie Mitchell.",
        timestamp: "3:05 PM",
      },
    ],
  },
  {
    chatsPeriod: "7 days ago",
    chatList: [
      {
        id: 5,
        userMessage: "Can you help me with JavaScript closures?",
        assistantMessage:
          "Of course! A closure in JavaScript is when a function remembers its lexical scope even if it’s executed outside that scope...",
        timestamp: "9:00 AM",
      },
      {
        id: 6,
        userMessage: "What’s the best way to learn React?",
        assistantMessage:
          "A great way to learn React is by building small projects. Start with the official documentation and try building a simple app...",
        timestamp: "9:30 AM",
      },
      {
        id: 7,
        userMessage: "Tell me a fun fact.",
        assistantMessage:
          "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
        timestamp: "10:45 AM",
      },
    ],
  },
  {
    chatsPeriod: "1 month ago",
    chatList: [
      {
        id: 8,
        userMessage: "What’s the difference between AI and machine learning?",
        assistantMessage:
          "AI is the broader concept of machines being able to perform tasks that normally require human intelligence, while machine learning is a subset of AI that involves training algorithms on data...",
        timestamp: "1:00 PM",
      },
      {
        id: 9,
        userMessage: "How does blockchain work?",
        assistantMessage:
          "Blockchain is a decentralized digital ledger that records transactions across many computers in a way that ensures security and transparency...",
        timestamp: "1:45 PM",
      },
      {
        id: 10,
        userMessage: "Explain recursion.",
        assistantMessage:
          "Recursion is a programming technique where a function calls itself in order to solve a problem. It's often used for problems that can be broken down into similar sub-problems...",
        timestamp: "3:30 PM",
      },
    ],
  },
];

export default chatsData;
