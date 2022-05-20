import { useParams, useNavigate} from "react-router-dom";
import tasks from "../questions"
import {useState} from "react";

function ImageComparisonTask() {
    const navigate = useNavigate();
    const {questionId} = useParams();
    const [selected, updateSelected] = useState("");

    const {comparisonTask: {questions}} = tasks;
    const imagesList = questions[parseInt(questionId) - 1].images;

    function onSubmitForm() {
      localStorage.setItem(`comparison_${questionId}`, JSON.stringify({chosen: selected}));
      if (parseInt(questionId)+1 <= questions.length) {
        navigate(`/image-comparison/${parseInt(questionId)+1}`)
      } else {
        navigate('/done')
      }
    }


    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: 600}}>
            <div>
                Comparison question: {questionId}
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: 600}}>
                <img src={process.env.PUBLIC_URL + imagesList[0]} onClick={() => updateSelected(imagesList[0])}/>
                <img src={process.env.PUBLIC_URL + imagesList[1]} onClick={() => updateSelected(imagesList[1])}/>
            </div>

            <div>
              <button onClick={onSubmitForm} disabled={selected === ""}>submit</button>
            </div>

        </div>
    )
}

export default ImageComparisonTask;
