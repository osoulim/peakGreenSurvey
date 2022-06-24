import { useNavigate} from "react-router-dom";

function ImageSortingTutorial() {
  const navigate = useNavigate();

  return(
      <div style={{paddingTop: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: 1000}}>
        <text style={{fontSize: 30}}>
          Welcome to first task tutorial.
        </text>
        <p>In this task, you have some images at the top part of the page (about 5 images) such as bellow. </p>
        <img src="/images/first_1.png" style={{borderWidth: 3, margin: 10}}/>
        <p>And you have three targets at the bottom of the page such as bellow</p>
        <img src="/images/first_2.png" style={{borderWidth: 3, margin: 10}}/>

        <p>
        Your task is to select top three brightest(greenest) images and drop them in the target. <br/>
        The first target should contain the brightest image(s). The second target should contain the second brightest image(s) and so on.
        <br/>
          After choosing the brighter image, just drag and drop the image inside the target. Such as bellow.
        </p>

        <img src="/images/first_3.gif" style={{borderWidth: 3, margin: 10}}/>

        <p>You also can move images between targets.</p>

        <img src="/images/first_4.gif" style={{borderWidth: 3, margin: 10}}/>

        <p>Don't worry if you can not choose between two or more images, you can have more than one image in each target. <br/>
        So just easily drag the image into the target like bellow.
        </p>

        <img src="/images/first_5.gif" style={{borderWidth: 3, margin: 10}}/>

        <p> It was all you needed to learn before starting the task. </p>

        <div style={{paddingTop: 20, paddingBottom: 150}}>
          <button onClick={() => navigate("/image-sorting/1")} style={{backgroundColor: "#ECB365", padding: 10, color: "#000", borderRadius: 10}}> Go to the first task -></button>
        </div>

      </div>
  )
}

export default ImageSortingTutorial;
