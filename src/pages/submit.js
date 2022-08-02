import tasks from "../questions";
import {useState} from "react";
import axios from "axios";

function Submit() {
  const [userEmail, emailUpdater] = useState("");
  const [errorMessage, errorUpdater] = useState("");
  const [isDataSubmitted, dataSubmitterUpdater] = useState("error");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function submitData() {
    if (!validateEmail(userEmail)) {
      return errorUpdater("Please enter a valid email address");
    }
    errorUpdater("");
    const result = {};
    for (let i = 0; i < tasks.comparisonTask.questions.length; i++) {
      const itemKey = `comparison_${i+1}`;
      result[itemKey] = JSON.parse(localStorage.getItem(itemKey));
    }
    for (let i = 0; i < tasks.sortingTask.questions.length; i++) {
      const itemKey = `sorting_${i+1}`;
      result[itemKey] = JSON.parse(localStorage.getItem(itemKey));
    }

    console.log(result);

    dataSubmitterUpdater("loading");
    axios.post('https://mjhnwt04sh.execute-api.us-east-2.amazonaws.com/default/surveySaver',
      {userEmail, result},
      ).then(response => {
        if (response.status === 200) {
          dataSubmitterUpdater("done");
        }
        else {
          dataSubmitterUpdater("error");
        }
      }).catch(error => {
          dataSubmitterUpdater("error");
          errorUpdater(error.code === "ERR_BAD_REQUEST" ? error.response.data : error.message);
          console.log(error);
    });

  }

  return(
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: 400, paddingTop: 20}}>
      <h1 style={{fontSize: "4rem"}}>You are almost done!</h1>
      <span>Please fill the form bellow and submit it to finish the survey. The following information will be sent to your email.</span>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'center'}}>
          <span>Your email: </span>
          <input style={{ margin: 10, color: validateEmail(userEmail) ? "black" : "red"}} value={userEmail} type="text" placeholder="your_email@domain.com" onChange={e => emailUpdater(e.target.value)}/>
      </div>
      <span style={{color: "red"}}>{errorMessage}</span>
      <button
        style={{backgroundColor: isDataSubmitted === "done"? "#198754" : "#ECB365", padding: 10, color: "#000", borderRadius: 10}}
        onClick={submitData}
        disabled={isDataSubmitted!=="error"} >
        {isDataSubmitted === "error" ? "Submit information" : (isDataSubmitted === "loading"? "Submitting..." : `Done! Copy and paste your email address into the amazon survey field to get your reward!`) }
      </button>

    </div>
  )
}

export default Submit;
