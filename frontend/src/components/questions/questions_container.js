import Question from './questions';

import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';


// class Game extends React.Component {
//     componentDidMount() {
//         this.props.fetchQuestions("General");
//     }

//     render() {
//         return 
//     }
// }


const mapStateToProps = (state, ownProps) => ({
  // questions: state.entities.questions
  questions: [
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of the following is NOT a quote from the 1942 film Casablanca? ",
      correct_answer: "&quot;Frankly, my dear, I don&#039;t give a damn.&quot;",
      incorrect_answers: [
        "&quot;Here&#039;s lookin&#039; at you, kid.&quot;",
        "&ldquo;Of all the gin joints, in all the towns, in all the world, she walks into mine&hellip;&rdquo;",
        "&quot;Round up the usual suspects.&quot;",
      ],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which one of these was not a beach landing site in the Invasion of Normandy?",
      correct_answer: "Silver",
      incorrect_answers: ["Gold", "Juno", "Sword"],
    },
    {
      category: "Entertainment: Music",
      type: "boolean",
      difficulty: "medium",
      question:
        "Rapper Snoop Dogg&#039;s real name is &#039;Cordozar Calvin Broadus, Jr.&#039;.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Books",
      type: "multiple",
      difficulty: "hard",
      question: "What is Ron Weasley&#039;s middle name?",
      correct_answer: "Bilius",
      incorrect_answers: ["Arthur", "John", "Dominic"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "easy",
      question:
        "In &quot;Super Mario 64&quot;, collecting 100 coins on a level will give you a 1-UP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Art",
      type: "multiple",
      difficulty: "hard",
      question:
        "What year did Albrecht D&uuml;rer create the painting &quot;The Young Hare&quot;?",
      correct_answer: "1502",
      incorrect_answers: ["1702", "1402", "1602"],
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "boolean",
      difficulty: "easy",
      question:
        "The anime &quot;Lucky Star&quot; follows the story of one girl who is unaware she is God.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "In which year did the First World War begin?",
      correct_answer: "1914",
      incorrect_answers: ["1930", "1917", "1939"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "When did the Battle of the Bulge end?",
      correct_answer: "January 25, 1945",
      incorrect_answers: [
        "August 6, 1945",
        "December 7, 1941",
        "December 16, 1944",
      ],
    },
    {
      category: "Entertainment: Books",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?",
      correct_answer: "Fluffy",
      incorrect_answers: ["Spike", "Poofy", "Spot"],
    },
  ],
});

const mapDispatchToProps = dispatch => ({
    fetchQuestions: category => dispatch(fetchQuestions(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);
