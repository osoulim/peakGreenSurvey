import { useNavigate} from "react-router-dom";


function App() {
  const navigate = useNavigate();

  return (
    <div className="App" style={{paddingLeft: 120, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", width:1000, height: 1000}}>
      <h2 style={{fontSize: 30, marginTop: 30}}>Welcome to peak green selection survey</h2>
      <p>
        This is a research obout the functionality of people minds in selecting the greenest satellite images of a farm. <br/>
      </p>
      <h3 style={{fontSize: 22, marginTop: 30}}>Remote sensing</h3>
      <p> Remote sensing is the process of detecting and monitoring the physical characteristics of an area by measuring
        its reflected and emitted radiation at a distance (typically from satellite or aircraft). Special cameras collect
        remotely sensed images, which help researchers "sense" things about the Earth.
      <a href="https://www.usgs.gov/faqs/what-remote-sensing-and-what-it-used#:~:text=Remote%20sensing%20is%20the%20process,sense%22%20things%20about%20the%20Earth.">[1]</a>
      </p>
      <p style={{marginTop: 10}}>
        Remote sensing also has many applications in smart agriculture. One of these applications is to find how much <b>"green"</b> a field of area is.
      </p>
      <div style={{display: "flex", flexDirection: "row"}}>
        <img src="/images/feild1.jpg" style={{margin: 5}}/>
        <img src="/images/field2.jpg" style={{margin: 5}}/>
      </div>
      <p>
        Pictures of a single farm in two different day. Which one is greener? <br/>
        Visual images are not a good measure to determine the greenness of an area, because many things
        such as the direction of sunlight or type of the plant may affect it. <br/>
        In this order, we use the <b>NDVI</b> image to see the amount of greenness.
        This measure is created based on near-infrared and red bands of satellite images. The reason of using this measurement is that
        the living plants absorbing the red light and reflecting the near-infrared, so higher differences between these two bands can show
        the greenness of the living plants.
      </p>
      <div style={{display: "flex", flexDirection: "row"}}>
        <img src="/images/field1_ndvi.jpg" style={{margin: 5}}/>
        <img src="/images/field2_ndvi.jpg" style={{margin: 5}}/>
      </div>
      <p>These are the NDVI images of the previous field. <b>Each pixel of image represents an area of 10m*10m on the land.</b>
        The <b> higher values of NDVI are shown brighter</b> and <b>lower values are shown darker</b> in the image. <br/>
        But, there is still one question.<br/>
        </p>
      <h1 style={{fontSize: 25}}> Which image is overly brighter (greener)? </h1>
      <p>
        The one with higher average? the one with higher maximum? or some other criteria? <br/>
        <b>We don't know the answer!</b> Your job is to help us find the answer! <br/>

        In this survey, you have two tasks. <br/>
        First, to select the 3 brightest(greenest) images based on your opinion. <br/>
        Second, to choose the brighter(greener) image among two images.
      </p>

      <div style={{paddingTop: 20, paddingBottom: 150}}>
        <button onClick={() => navigate("/image-sorting/")} style={{backgroundColor: "#ECB365", padding: 10, color: "#000", borderRadius: 10}}> I have read the description and I am aware of the context of this survey -> </button>
      </div>
    </div>
  );
}

export default App;
