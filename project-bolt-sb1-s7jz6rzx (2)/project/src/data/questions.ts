import { ThemeQuestions } from '../types';

// Prize money structure (in rupees)
const PRIZE_MONEY = [
  1000,      // Question 1
  2000,      // Question 2
  5000,      // Question 3
  10000,     // Question 4
  20000,     // Question 5
  40000,     // Question 6
  80000,     // Question 7
  160000,    // Question 8
  1250000,   // Question 9
  2500000    // Question 10
];

export const questions: ThemeQuestions = {
  cricket: [
    {
      id: 1,
      question: "Who was nicknamed 'Yorker King'?",
      options: ["Lasith Malinga", "Jadeja", "Bhuvneshwar Kumar", "Shoaib Akhtar"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[0]
    },
    {
      id: 2,
      question: "Who holds the record for the most wickets taken in Test cricket?",
      options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[1]
    },
    {
      id: 3,
      question: "Who was the first Indian to score a century in IPL history?",
      options: ["Virat Kohli", "Manish Pandey", "Gautam Gambhir", "Rohit Sharma"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[2]
    },
    {
      id: 4,
      question: "Which cricketer made a special appearance in the movie 83?",
      options: ["Sachin Tendulkar", "Sunil Gavaskar", "Kapil Dev", "MS Dhoni"],
      correctAnswer: 2,
      prize: PRIZE_MONEY[3]
    },
    {
      id: 5,
      question: "\"If you believe in yourself, things will fall into place...\" — Who said this?",
      options: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Yuvraj Singh"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[4]
    },
    {
      id: 6,
      question: "Who was the first ever captain to win an IPL final?",
      options: ["Rahul Dravid", "MS Dhoni", "Shane Warne", "Yuvraj Singh"],
      correctAnswer: 2,
      prize: PRIZE_MONEY[5]
    },
    {
      id: 7,
      question: "\"Dhoni finishes off in style, a magnificent strike into the crowd.\" When did Ravi Shastri make this iconic commentary?",
      options: ["MS Dhoni's century", "India's World Cup win", "Sachin's 100th 100", "Virat Kohli's retirement"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[6]
    },
    {
      id: 8,
      question: "What is the name of the oldest cricket club in India, established in 1792?",
      options: ["Bombay Gymkhana", "Calcutta Cricket Club", "Madras Cricket Club", "Parsis Cricket Club"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[7]
    },
    {
      id: 9,
      question: "How many ICC trophies has India won (across all formats)?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 3,
      prize: PRIZE_MONEY[8]
    },
    {
      id: 10,
      question: "In T20s, how many overs does the Powerplay last for?",
      options: ["10", "6", "8", "Depends on captain's decision"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[9]
    }
  ],
  coding: [
    {
      id: 1,
      question: "\"We debug. We debug. We debug forever.\" Which movie is this from?",
      options: ["Dilwale Dulhania Le Jayenge", "Dil Chahta Hai", "Sholay", "3 Idiots"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[0]
    },
    {
      id: 2,
      question: "Scenario: Your code isn't working, and the last thing you tried was this line:\n\nif \"just_try_again()\" not in code:\n    print(\"It's all your fault!\")\n\nWhat happens next?",
      options: [
        "The program breaks because \"just_try_again()\" is a function that doesn't exist",
        "You discover the \"magic\" solution",
        "You get a \"404: Solution Not Found\" error",
        "The code compiles successfully"
      ],
      correctAnswer: 0,
      prize: PRIZE_MONEY[1]
    },
    {
      id: 3,
      question: "Code Snippet:\n\nif (True == \"True\"):\n    print(\"Everything is fine!\")\nelse:\n    print(\"Whoops! Something went wrong.\")\n\nWhat's wrong with the code?",
      options: [
        "You compared a Boolean with a string",
        "True is an undefined variable",
        "It works, but Python doesn't know what is going on either",
        "There is no error in the code"
      ],
      correctAnswer: 0,
      prize: PRIZE_MONEY[2]
    },
    {
      id: 4,
      question: "What does the <title> tag do in an HTML document?",
      options: [
        "It adds a title to the webpage",
        "It creates a clickable link",
        "It defines the body of the webpage",
        "It styles the text"
      ],
      correctAnswer: 0,
      prize: PRIZE_MONEY[3]
    },
    {
      id: 5,
      question: "Which HTML element is used to define a form for user input?",
      options: ["<input>", "<form>", "<button>", "<div>"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[4]
    },
    {
      id: 6,
      question: "Which technology is responsible for the design and layout of web pages?",
      options: ["JavaScript", "HTML", "CSS", "PHP"],
      correctAnswer: 2,
      prize: PRIZE_MONEY[5]
    },
    {
      id: 7,
      question: "Who is known for creating the concept of Object-Oriented Programming (OOP), which helped change the programming world?",
      options: ["Bill Gates", "Bjarne Stroustrup", "Alan Turing", "Dennis Ritchie"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[6]
    },
    {
      id: 8,
      question: "Tech Trivia: Guess the Age! Which tech giant was founded first?",
      options: ["Apple", "Microsoft", "Amazon", "Google"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[7]
    },
    {
      id: 9,
      question: "\"The Eval Button Drama\" — You've just completed your Tesselator coding challenge and hit the \"Eval\" button. What are you expecting?",
      options: [
        "A perfect 100/100",
        "A solid 90/100",
        "A heart-stopping moment when you see 10/100",
        "System error message"
      ],
      correctAnswer: 2,
      prize: PRIZE_MONEY[8]
    },
    {
      id: 10,
      question: "Which programming paradigm emphasizes the use of functions and avoids changing state and mutable data?",
      options: [
        "Object-Oriented Programming",
        "Procedural Programming",
        "Functional Programming",
        "Event-Driven Programming"
      ],
      correctAnswer: 2,
      prize: PRIZE_MONEY[9]
    }
  ],
  riddles: [
    {
      id: 1,
      question: "The more you take, the more you leave behind. What am I?",
      options: ["Time", "Steps", "Age", "Memories"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[0]
    },
    {
      id: 2,
      question: "Forward I'm heavy, but backward I'm not. What am I?",
      options: ["Ton", "Truck", "Rock", "Boulder"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[1]
    },
    {
      id: 3,
      question: "Your mother's brother's only brother-in-law is who?",
      options: ["A soap opera plot", "Your father", "Your secret step-pet", "A guy named Uncle Who?"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[2]
    },
    {
      id: 4,
      question: "A number is such that when you square it and then subtract the number itself, the result is 132. What is the number?",
      options: ["11", "12", "13", "14"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[3]
    },
    {
      id: 5,
      question: "What comes next in this pattern? 2, 12, 30, 56, 90, ?",
      options: ["132", "110", "140", "150"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[4]
    },
    {
      id: 6,
      question: "Tom's father has three sons: Snap, Crackle, and...?",
      options: ["Pop", "Snap Jr.", "Tom", "Rice Krispie"],
      correctAnswer: 2,
      prize: PRIZE_MONEY[5]
    },
    {
      id: 7,
      question: "A man is looking at a portrait. He says, 'Brothers and sisters, I have none, but the man in the picture is my father's son.' Who is the person in the portrait?",
      options: ["His uncle", "His cousin", "Himself", "His son"],
      correctAnswer: 2,
      prize: PRIZE_MONEY[6]
    },
    {
      id: 8,
      question: "Which day would come two days after the day before yesterday, if yesterday was Friday?",
      options: ["Sunday", "Saturday", "Friday", "Monday"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[7]
    },
    {
      id: 9,
      question: "I am a three-digit number. My tens digit is five more than my ones digit. My hundreds digit is eight less than my tens digit. What number am I?",
      options: ["194", "370", "194", "152"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[8]
    },
    {
      id: 10,
      question: "Divide 30 by ½ and add 10. What do you get?",
      options: ["25", "70", "40", "30"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[9]
    }
  ],
  gk: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[0]
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[1]
    },
    {
      id: 3,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Leo Tolstoy"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[2]
    },
    {
      id: 4,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: 3,
      prize: PRIZE_MONEY[3]
    },
    {
      id: 5,
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      prize: PRIZE_MONEY[4]
    },
    {
      id: 6,
      question: "Which city is known as the 'City of Canals'?",
      options: ["Amsterdam", "Venice", "Bangkok", "Thailand"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[5]
    },
    {
      id: 7,
      question: "TACOS are the traditional dish from which country?",
      options: ["Spain", "Mexico", "Brazil", "Argentina"],
      correctAnswer: 1,
      prize: PRIZE_MONEY[6]
    },
    {
      id: 8,
      question: "The sweet RASGULLA originated from?",
      options: ["Kolkata", "Banglore", "Chennai", "Hyderabad"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[7]
    },
    {
      id: 9,
      question: "Which animal has the longest memory?",
      options: ["Elephant", "Peacock", "Tortoise", "Tiger"],
      correctAnswer: 0,
      prize: PRIZE_MONEY[8]
    },
    {
      id: 10,
      question: "How many hearts does an octopus have?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      prize: PRIZE_MONEY[9]
    }
  ]
};

// Convert prize money to formatted string with commas and ₹ symbol
export const formatMoney = (amount: number): string => {
  return '₹' + amount.toLocaleString('en-IN');
};

// Get prize money for a specific question index
export const getPrizeMoney = (index: number): number => {
  return PRIZE_MONEY[index];
};

// Get all prize money amounts for the ladder display
export const getAllPrizeMoney = (): number[] => {
  return [...PRIZE_MONEY].reverse();
};