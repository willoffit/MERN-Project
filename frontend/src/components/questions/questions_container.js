import Question from './questions';

import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import { editUser } from '../../actions/user_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  // questions: state.entities.questions,
  questions: [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What does a funambulist walk on?",
      correct_answer: "A Tight Rope",
      incorrect_answers: ["Broken Glass", "Balls", "The Moon"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "hard",
      question: "What year was Queen Elizabeth II born?",
      correct_answer: "1926",
      incorrect_answers: ["1923", "1929", "1930"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "The Sun rises from the North.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Five dollars is worth how many nickles?",
      correct_answer: "100",
      incorrect_answers: ["50", "25", "69"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question: "Pluto is a planet.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which American-owned brewery led the country in sales by volume in 2015?",
      correct_answer: "D. G. Yuengling and Son, Inc",
      incorrect_answers: [
        "Anheuser Busch",
        "Boston Beer Company",
        "Miller Coors",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What zodiac sign is represented by a pair of scales?",
      correct_answer: "Libra",
      incorrect_answers: ["Aries", "Capricorn", "Sagittarius"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "What was the name given to Japanese military dictators who ruled the country through the 12th and 19th Century?",
      correct_answer: "Shogun",
      incorrect_answers: ["Ninja", "Samurai", "Shinobi"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "hard",
      question: "The word &quot;abulia&quot; means which of the following?",
      correct_answer: "The inability to make decisions",
      incorrect_answers: [
        "The inability to stand up",
        "The inability to concentrate on anything",
        "A feverish desire to rip one&#039;s clothes off",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "hard",
      question:
        "In &quot;Resident Evil 3&quot;, how many inventory slots does Jill have at the start of the game?",
      correct_answer: "10",
      incorrect_answers: ["6", "8", "12"],
    },
  ],
  group: {
    _id: "5f51c0e42053ca2c0d652ce5",
    name: "Midnight Club",
    members: ["5f51c1312ea2e52c39b1046e"]
  },
  users: {
    "5f51c1312ea2e52c39b1046e": {date: "2020-09-04T04:23:13.186Z",
    email: "user8742828035@username.com",
    password: "$2a$10$Js0KDlL490Vh9ElkOBI6Buj82dxMuqCzSpfu3A6qwm6V1pluYqEky",
    scores: { "Sports": Array(0), "Geography": Array(0), "History": Array(0), "Film": Array(0), "General Knowledge": Array(0) },
    username: "username8742828035",
    _id: "5f51c1312ea2e52c39b1046e"}
  },
  // users: state.entities.users,
  // user: state.entities.users["5f501a5bf22e47df39371e32"],
  user: state.entities.users[state.session.user.id],
  // group: state.entities.groups[state.entities.users[state.session.user.id].group],
  // questions: state.entities.questions
});

const mapDispatchToProps = dispatch => ({
    fetchQuestions: category => dispatch(fetchQuestions(category)),
    editUser: user => dispatch(editUser(user)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);

//   questions: [
//     {
//       category: "Entertainment: Film",
//       type: "multiple",
//       difficulty: "medium",
//       question:
//         "Which of the following is NOT a quote from the 1942 film Casablanca? ",
//       correct_answer: "&quot;Frankly, my dear, I don&#039;t give a damn.&quot;",
//       incorrect_answers: [
//         "&quot;Here&#039;s lookin&#039; at you, kid.&quot;",
//         "&ldquo;Of all the gin joints, in all the towns, in all the world, she walks into mine&hellip;&rdquo;",
//         "&quot;Round up the usual suspects.&quot;",
//       ],
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "easy",
//       question:
//         "Which one of these was not a beach landing site in the Invasion of Normandy?",
//       correct_answer: "Silver",
//       incorrect_answers: ["Gold", "Juno", "Sword"],
//     },
//     {
//       category: "Entertainment: Music",
//       type: "boolean",
//       difficulty: "medium",
//       question:
//         "Rapper Snoop Dogg&#039;s real name is &#039;Cordozar Calvin Broadus, Jr.&#039;.",
//       correct_answer: "True",
//       incorrect_answers: ["False"],
//     },
//     {
//       category: "Entertainment: Books",
//       type: "multiple",
//       difficulty: "hard",
//       question: "What is Ron Weasley&#039;s middle name?",
//       correct_answer: "Bilius",
//       incorrect_answers: ["Arthur", "John", "Dominic"],
//     },
//     {
//       category: "Entertainment: Video Games",
//       type: "boolean",
//       difficulty: "easy",
//       question:
//         "In &quot;Super Mario 64&quot;, collecting 100 coins on a level will give you a 1-UP.",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//     {
//       category: "Art",
//       type: "multiple",
//       difficulty: "hard",
//       question:
//         "What year did Albrecht D&uuml;rer create the painting &quot;The Young Hare&quot;?",
//       correct_answer: "1502",
//       incorrect_answers: ["1702", "1402", "1602"],
//     },
//     {
//       category: "Entertainment: Japanese Anime & Manga",
//       type: "boolean",
//       difficulty: "easy",
//       question:
//         "The anime &quot;Lucky Star&quot; follows the story of one girl who is unaware she is God.",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "In which year did the First World War begin?",
//       correct_answer: "1914",
//       incorrect_answers: ["1930", "1917", "1939"],
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "When did the Battle of the Bulge end?",
//       correct_answer: "January 25, 1945",
//       incorrect_answers: [
//         "August 6, 1945",
//         "December 7, 1941",
//         "December 16, 1944",
//       ],
//     },
//     {
//       category: "Entertainment: Books",
//       type: "multiple",
//       difficulty: "easy",
//       question:
//         "What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?",
//       correct_answer: "Fluffy",
//       incorrect_answers: ["Spike", "Poofy", "Spot"],
//     },
//   ],