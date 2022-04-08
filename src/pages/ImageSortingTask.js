import {useParams} from "react-router-dom";


function ImageSortingTask() {
  const {questionId} = useParams();

  return(
      <div>
        <text className='bg-gray-100 text-gray-900'>
          Welcome to sorting {questionId}
        </text>
      </div>
  )
}

export default ImageSortingTask;
