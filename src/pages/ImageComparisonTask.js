import { useParams, useNavigate} from "react-router-dom";
import tasks from "../questions";
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
        navigate('/submit')
      }
    }


    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: 600}}>
            <div>
                Please choose the brighter image
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: 600}}>
              <div style={{padding: 25, borderWidth: selected === imagesList[0]? 2 : 0, backgroundColor: "#04293A", borderRadius: 20}}>
                <img style={{width: 200}} src={process.env.PUBLIC_URL + imagesList[0]} onClick={() => updateSelected(imagesList[0])}/>
              </div>
              <div style={{padding: 25, borderWidth: selected === imagesList[1]? 2 : 0, backgroundColor: "#04293A", borderRadius: 20}}>
                <img style={{width: 200}} src={process.env.PUBLIC_URL + imagesList[1]} onClick={() => updateSelected(imagesList[1])}/>
              </div>
            </div>

            <div>
              <button style={{backgroundColor: "#ECB365", padding: 10, color: "#000", borderRadius: 10}} onClick={onSubmitForm} disabled={selected === ""}>submit</button>
            </div>

        </div>
    )
}

export default ImageComparisonTask;
