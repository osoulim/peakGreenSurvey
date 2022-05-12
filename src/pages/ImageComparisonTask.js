import { useParams } from "react-router-dom";
import tasks from "../questions"

function ImageComparisonTask() {
    const {questionId} = useParams();

    const {comparisonTask: {questions}} = tasks;
    const imagesList = questions[parseInt(questionId) - 1].images;

    console.log("questionId:", questionId);
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: 600}}>
            <div>
                Comparison question: {questionId}
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: 600}}>
                <img src={process.env.PUBLIC_URL + imagesList[0]}/>
                <img src={process.env.PUBLIC_URL + imagesList[1]}/>
            </div>

        </div>
    )
}

export default ImageComparisonTask;
