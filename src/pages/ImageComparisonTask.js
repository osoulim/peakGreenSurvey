import { useParams } from "react-router-dom";

function ImageComparisonTask() {
  const {questionId} = useParams();
  console.log("questionId:", questionId);
  return(
      <div>
        Image Comparison task: {questionId}
      </div>
  )
}

export default ImageComparisonTask;
