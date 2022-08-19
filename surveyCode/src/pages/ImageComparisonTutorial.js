import { useNavigate} from "react-router-dom";

function ImageComparisonTutorial() {
  const navigate = useNavigate();

  return(
    <div style={{paddingTop: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: 1000}}>
      <text style={{fontSize: 30}}>
        Welcome to second task tutorial.
      </text>
      <p>In this task, you have two images and you should the brighter image such as bellow</p>

      <img src="/images/second_1.gif" style={{borderWidth: 3, margin: 10 }}/>

      <p> After clicking on the chosen image, the border of it will be white. </p>

      <div style={{paddingTop: 20, paddingBottom: 150}}>
        <button onClick={() => navigate("/image-comparison/1")} style={{backgroundColor: "#ECB365", padding: 10, color: "#000", borderRadius: 10}}> Go to the second task -></button>
      </div>

    </div>
  )
}

export default ImageComparisonTutorial;
