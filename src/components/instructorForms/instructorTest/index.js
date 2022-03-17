// import React, { useState } from "react";
// import Container from "../../container/container";
// import Question from "./question/Question";
// import Answer from "./answer/Answer";
// import "./QuizMain.css";

// // import { Container } from './styles';

// export default function InstructorTest() {
//   const questions = [
//     { 1: 'What US city is known as the "birthplace of jazz"?' },
//     { 2: "What is the capital of Greece?" },
//     { 3: "What planet gave birth to Superman?" },
//   ];

//   const answers = [
//     {
//       1: { 1: "Chicago", 2: "New Orleans", 3: "New York" },
//       2: { 1: "Athens", 2: "Patras", 3: "Kalamata" },
//       3: {
//         1: "Krypton",
//         2: "Mars",
//         3: "Saturn",
//       },
//     },
//   ];
//   const correctAnswers = ["2", "1", "1"];
//   const [correctAnswer, setCorrectAnswer] = useState(0);
//   const [clickedAnswer, setclickedAnswer] = useState(0);
//   const [step, setStep] = useState(1);
//   const [score, setScore] = useState(0);

//   const checkAnswer = (answer) => {
//     if (answer === correctAnswer[step]) {
//       setState({
//         score: score + 1,
//         correctAnswer: correctAnswer[step],
//         clickedAnswer: answer,
//       });
//     } else {
//       this.setState({
//         correctAnswer: 0,
//         clickedAnswer: answer,
//       });
//     }
//   };

//   // method to move to the next question
//   const nextStep = (step) => {
//     this.setState({
//       step: step + 1,
//       correctAnswer: 0,
//       clickedAnswer: 0,
//     });
//   };

//   return (
//     <Container>
//       <div className="Content">
//         {step <= Object.keys(quiestions).length ? (
//           <>
//             <Question question={quiestions[step]} />
//             <Answer
//               answer={answers[step]}
//               step={step}
//               checkAnswer={this.checkAnswer}
//               correctAnswer={correctAnswer}
//               clickedAnswer={clickedAnswer}
//             />
//             <button
//               className="NextStep"
//               disabled={
//                 clickedAnswer && Object.keys(quiestions).length >= step
//                   ? false
//                   : true
//               }
//               onClick={() => this.nextStep(step)}
//             >
//               Next
//             </button>
//           </>
//         ) : (
//           <div className="finalPage">
//             <h1>You have completed the quiz!</h1>
//             <p>
//               Your score is: {score} of {Object.keys(quiestions).length}
//             </p>
//             <p>Thank you!</p>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }
