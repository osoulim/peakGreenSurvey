import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import tasks from "../questions";

function ImageSortingTask() {
  const {questionId} = useParams();
  const {sortingTask: {questions}} = tasks;
  const imagesList = questions[parseInt(questionId) - 1].images;

  const [imagesOrder, updateImagesOrder] = useState(imagesList);
  const [firstList, updateFirstList] = useState([]);
  const [secondList, updateSecondList] = useState([]);
  const [thirdList, updateThirdList] = useState([]);

  const updateFunctions = {
    images: updateImagesOrder,
    first: updateFirstList,
    second: updateSecondList,
    third: updateThirdList,
  };

  function handleOnDragEnd(result) {
    console.log(result);
    if (!result.destination) return;

    let sourceItems;
    if (result.source.droppableId === "images") {
      sourceItems = Array.from(imagesOrder);
    } else if (result.source.droppableId === "first") {
      sourceItems = Array.from(firstList);
    } else if (result.source.droppableId === "second") {
      sourceItems = Array.from(secondList);
    } else if (result.source.droppableId === "third") {
      sourceItems = Array.from(thirdList);
    }
    const [reorderedItem] = sourceItems.splice(result.source.index, 1);

    let destItems;
    if (result.destination.droppableId === result.source.droppableId) {
      destItems = sourceItems;
    } else if (result.destination.droppableId === "images") {
      destItems = Array.from(imagesOrder);
    } else if (result.destination.droppableId === "first") {
      destItems = Array.from(firstList);
    } else if (result.destination.droppableId === "second") {
      destItems = Array.from(secondList);
    } else if (result.destination.droppableId === "third") {
      destItems = Array.from(thirdList);
    }

    destItems.splice(result.destination.index, 0, reorderedItem);

    updateFunctions[result.source.droppableId](sourceItems);
    updateFunctions[result.destination.droppableId](destItems);
  }


  return(
      <div>
        <h1 className='bg-gray-100 text-gray-900'>
          Welcome to sorting: {questionId}
        </h1>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="images" direction="horizontal">
            {(provided) => (
                <div
                    style={{display: "flex", minHeight:250, padding: 20, alignItems: "center", justifyContent: "center", borderWidth:1}}
                    className="imagesList" {...provided.droppableProps} ref={provided.innerRef}>
                  { imagesOrder.map((imageAddress, index) =>
                      (
                          <Draggable key={imageAddress} draggableId={imageAddress} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <img src={process.env.PUBLIC_URL + imageAddress}/>
                                </div>
                            )}
                          </Draggable>
                      ))
                  }
                </div>
            )}
          </Droppable>

          <div style={{display: "flex", justifyContent: "space-around", paddingTop: 10, paddingBottom: 10, borderWidth:1}}>
            <Droppable droppableId="first" direction="horizontal">
              {(provided) => (
                  <div style={{minWidth: 250, minHeight:250, display: "flex", alignItems: "center", justifyContent: "center", padding: 5, borderWidth:1}}
                       className="firstList" {...provided.droppableProps} ref={provided.innerRef}>
                    { firstList.map((imageAddress, index) =>
                        (
                            <Draggable key={imageAddress} draggableId={imageAddress} index={index}>
                              {(provided) => (
                                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <img src={process.env.PUBLIC_URL + imageAddress}/>
                                  </div>
                              )}
                            </Draggable>
                        ))
                    }
                  </div>
              )}
            </Droppable>

            <Droppable droppableId="second" direction="horizontal">
              {(provided) => (
                  <div style={{minWidth: 250, minHeight:250, display: "flex", alignItems: "center", justifyContent: "center", padding: 5, borderWidth:1}}
                       className="secondList" {...provided.droppableProps} ref={provided.innerRef}>
                    { secondList.map((imageAddress, index) =>
                        (
                            <Draggable key={imageAddress} draggableId={imageAddress} index={index}>
                              {(provided) => (
                                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <img src={process.env.PUBLIC_URL + imageAddress}/>
                                  </div>
                              )}
                            </Draggable>
                        ))
                    }
                  </div>
              )}
            </Droppable>

            <Droppable droppableId="third" direction="horizontal">
              {(provided) => (
                  <div style={{minWidth: 250, minHeight:250, display: "flex", alignItems: "center", justifyContent: "center", padding: 5, borderWidth:1}}
                       className="thirdList" {...provided.droppableProps} ref={provided.innerRef}>
                    { thirdList.map((imageAddress, index) =>
                        (
                            <Draggable key={imageAddress} draggableId={imageAddress} index={index}>
                              {(provided) => (
                                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <img src={process.env.PUBLIC_URL + imageAddress}/>
                                  </div>
                              )}
                            </Draggable>
                        ))
                    }
                  </div>
              )}
            </Droppable>
          </div>


        </DragDropContext>


      </div>
  )
}

export default ImageSortingTask;
