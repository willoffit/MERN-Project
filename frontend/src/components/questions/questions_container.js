import { connect } from 'react-redux';
import { fetchQuestions, fetchQuestion } from '../../actions/question_actions';
import Question from './questions';

const mapStateToProps = (state, ownProps) => ({
    questions: state.entities.questions
})

const mapDispatchToProps = dispatch => ({
    fetchQuestions: category => dispatch(fetchQuestions(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);


    // questions: [
    //     { 
    //         "category": "Entertainment: Video Games", 
    //         "type": "multiple", 
    //         "difficulty": "easy", 
    //         "question": "What&#039;s the best selling video game to date?", 
    //         "correct_answer": "Tetris", 
    //         "incorrect_answers": ["Wii Sports", "Minecraft", "Super Mario Bros"] 
    //     }, 
    //     { 
    //         "category": "Entertainment: Books", 
    //         "type": "multiple", 
    //         "difficulty": "medium", 
    //         "question": "What was the pen name of novelist, Mary Ann Evans?", 
    //         "correct_answer": "George Eliot", 
    //         "incorrect_answers": ["George Orwell", "George Bernard Shaw", "George Saunders"] 
    //     }, 
    //     { 
    //         "category": "Entertainment: Musicals & Theatres", 
    //         "type": "multiple", 
    //         "difficulty": "easy", 
    //         "question": "Who wrote the award winning musical &quot;In The Heights&quot;?", 
    //         "correct_answer": "Lin-Manuel Miranda", 
    //         "incorrect_answers": ["Steven Sondheim", "Francis Scott Key", "John Phillips Sousa"] 
    //     }, 
    //     { 
    //         "category": "General Knowledge", 
    //         "type": "multiple", 
    //         "difficulty": "medium", 
    //         "question": "What is the last letter of the Greek alphabet?", 
    //         "correct_answer": "Omega", 
    //         "incorrect_answers": ["Mu", "Epsilon", "Kappa"] 
    //     }, 
    //     { 
    //         "category": "Entertainment: Video Games", 
    //         "type": "multiple", 
    //         "difficulty": "hard", 
    //         "question": "In World of Warcraft lore, which of the following is known as the God of Spiders in the troll&#039;s loa beliefs?", 
    //         "correct_answer": "Elortha no Shadra", 
    //         "incorrect_answers": ["Bwonsamdi", "Hakkar", "Shirvallah"] 
    //     }, 
    //     { 
    //         "category": "Animals", 
    //         "type": "multiple", 
    //         "difficulty": "medium", 
    //         "question": "Which of these species is not extinct?", 
    //         "correct_answer": "Komodo dragon", 
    //         "incorrect_answers": ["Japanese sea lion", "Tasmanian tiger", "Saudi gazelle"] 
    //     }, 
    //     { 
    //         "category": "Entertainment: Video Games", 
    //         "type": "multiple", 
    //         "difficulty": "easy", 
    //         "question": "What year was Super Mario Bros. released?", 
    //         "correct_answer": "1985", 
    //         "incorrect_answers": ["1983", "1987", "1986"] 
    //     }, 
    //     { 
    //         "category": "Entertainment: Comics", 
    //         "type": "multiple", 
    //         "difficulty": "medium", 
    //         "question": "Which &quot;Green Arrow&quot; sidekick commonly wears a baseball cap?", 
    //         "correct_answer": "Roy Harper", 
    //         "incorrect_answers": ["Black Canary", "Emiko Queen", "Dick Grayson"] 
    //     }, 
    //     { 
    //         "category": "Entertainment: Music", 
    //         "type": "boolean", 
    //         "difficulty": "medium", 
    //         "question": "Dave Grohl recorded the Foo Fighters&#039; debut, &quot;Foo Fighters,&quot; by himself.", 
    //         "correct_answer": "True", 
    //         "incorrect_answers": ["False"] 
    //     }, 
    //     { 
    //         "category": "Entertainment: Music", 
    //         "type": "multiple", 
    //         "difficulty": "easy", 
    //         "question": "What 1970&#039;s American ballad referred to the 1959 plane crash as the &quot;the day the music died&quot;?", 
    //         "correct_answer": "American Pie", 
    //         "incorrect_answers": ["Kentucky Rain", "I Will Always Love You", "Rock &#039;n&#039; Roll Suicide"] 
    //     }
    // ]