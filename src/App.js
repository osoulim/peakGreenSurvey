import { useNavigate} from "react-router-dom";


function App() {
  const navigate = useNavigate();

  return (
    <div className="App" style={{paddingLeft: 120, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", width:1000, height: 1000}}>
      <h2 style={{fontSize: 30, marginTop: 30}}>Welcome to the peak green selection survey</h2>
      <p>
        This study is about people's perception in comparing color and grayscale images captured by remote sensing satellites.
        One of the applications of these images is in smart agriculture for understanding the performance of different fields. To do so, we need to compare the greenness or brightness of images of the field on various days.
      </p>
      <h3 style={{fontSize: 22, marginTop: 30}}>Remote sensing</h3>
      <p> Remote sensing is the process of detecting and monitoring the physical characteristics of an area by measuring
        its reflected and emitted radiation at a distance (typically from satellite or aircraft). Special cameras collect
        remotely sensed images, which help researchers "sense" things about the Earth.
      <a href="https://www.usgs.gov/faqs/what-remote-sensing-and-what-it-used#:~:text=Remote%20sensing%20is%20the%20process,sense%22%20things%20about%20the%20Earth."> [1]</a>
      </p>
      <p style={{marginTop: 10}}>
        Remote sensing also has many applications in smart agriculture. One of these applications is to find how much <b>"green"</b> a field of area is.
      </p>
      <div style={{display: "flex", flexDirection: "row"}}>
        <img src="/images/feild1.jpg" style={{margin: 5}}/>
        <img src="/images/field2.jpg" style={{margin: 5}}/>
      </div>
      <p>
        Pictures of a single field of a farm on two different days.

        Each pixel in these images shows an area of 10m*10m on the land. Which image is greener?  <br/>
        Visual images may not be a good way to measure and compare the greenness of an area because many elements, such as the direction of sunlight or the types of crops, may affect it.<br/>
        Alternatively, we use a normalized vegetation index (<b>NDVI</b>) image to measure the greenness. This metric is created based on near-infrared and red bands of satellite images. The reason for using this metric is that the living plants absorb the red light and reflect the near-infrared, so higher differences between these two bands can better showcase the greenness of the living plants.

      </p>
      <div style={{display: "flex", flexDirection: "row"}}>
        <img src="/images/field1_ndvi.jpg" style={{margin: 5}}/>
        <img src="/images/field2_ndvi.jpg" style={{margin: 5}}/>
      </div>
      <p>These are the NDVI images of the previous field. <b>Each pixel of the image represents an area of 10m*10m on the land. </b>
        The higher values of NDVI are shown as brighter in the image and lower values are shown as darker. <br/>
        But, there is still one question.<br/>
        </p>
      <h1 style={{fontSize: 25}}> Which image is overall brighter (greener)? </h1>
      <p>
        {/*The one with a higher average? The one with a higher maximum? Or some other criteria? <br/>*/}
        {/*<b>We don't know the answer!</b> Your job is to help us find the answer! <br/>*/}

        {/*In this survey, you have one task. <br/>*/}
        Your task in this survey is to compare and select brighter images. <br/>
      </p>

      <div style={{paddingTop: 20, paddingBottom: 150}}>
        <button onClick={() => navigate("/image-sorting/")} style={{backgroundColor: "#ECB365", padding: 10, color: "#000", borderRadius: 10}}> I have read the description, and I am aware of the context of this survey -> </button>
      </div>
    </div>
  );
}

export default App;
