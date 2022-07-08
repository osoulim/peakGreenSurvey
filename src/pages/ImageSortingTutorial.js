import { useNavigate} from "react-router-dom";

function ImageSortingTutorial() {
  const navigate = useNavigate();

  return(
      <div style={{paddingTop: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: 1000}}>
        <text style={{fontSize: 30}}>
          Welcome to first task tutorial.
        </text>
        <p>In this task, you have five images at the top of the page and need to rank them into three target positions.</p>
        <img src="/images/first_1.png" style={{borderWidth: 3, margin: 10}}/>
        {/*<p>And you have three targets at the bottom of the page, such as below.</p>*/}
        <img src="/images/first_2.png" style={{borderWidth: 3, margin: 10}}/>

        <p>
        Your task is to select the top three brightest(greenest) images and drop them in the target. <br/>
        The first target should have the brightest image(s). The second target should contain the second brightest image(s).
        <br/>
          After choosing the brighter image, drag and drop the image inside the target (see below).
        </p>

        <img src="/images/first_3.gif" style={{borderWidth: 3, margin: 10}}/>

        <p>You also can move images between targets.</p>

        <img src="/images/first_4.gif" style={{borderWidth: 3, margin: 10}}/>

        <p>
          If you can not rank two or more images, you can assign more than one image to each target position by simply dragging multiple images into the same target position (see below).
        </p>

        <img src="/images/first_5.gif" style={{borderWidth: 3, margin: 10}}/>

        <p> It was all you needed to learn before starting the task. </p>

        <div style={{paddingTop: 20, paddingBottom: 150}}>
          <button onClick={() => navigate("/image-sorting/1")} style={{backgroundColor: "#ECB365", padding: 10, color: "#000", borderRadius: 10}}> Let us start the tasts -></button>
        </div>

      </div>
  )
}

export default ImageSortingTutorial;
