import React, { useReducer } from "react";

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive"
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
    case "BATCH":
    case "COURSE":
    case "IMAGE":
    case "RATING":
    case "STATUS": {
      return {
        ...state,
        [payload.id]: payload.type == "checkbox" ? payload.checked ? "active" : "inactive" : payload.value
      }
    }

    case "RESET": {
      return {
        name: "",
        batch: "",
        course: "",
        image: "",
        rating: 0,
        status: "inactive"
      }
    }

    default:
      console.error("No type find")
  }
};

export const AddStudent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e, type) {
    dispatch({ type: type, payload: e.target })
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form" onSubmit={handleSubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name :</label>
            <input type="text" id="name" placeholder="enter name here"
              onChange={(e) => {
                handleChange(e, "NAME")
              }} />
            {/* Provide Input tag Here */}
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch :</label>
            <input type="text" id="batch" placeholder="enter batch here" onChange={(e) => {
              handleChange(e, "BATCH")
            }} />
            {/* Provide Input tag Here */}
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course :</label>
            <input type="text" id="course" placeholder="enter course here" onChange={(e) => {
              handleChange(e, "COURSE")
            }} />
            {/* Provide Input tag Here */}
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image :</label>
            <input type="text" id="image" placeholder="enter image here" onChange={(e) => {
              handleChange(e, "IMAGE")
            }} />
            {/* Provide Input tag Here */}
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating :</label>
            <select name="" data-testid="rating-select" id="rating" onChange={(e) => {
              handleChange(e, "RATING")
            }} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {/* Provide Select tag Here */}
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
              <input type="checkbox" name="" id="status" onChange={(e) => {
                handleChange(e, "STATUS")
              }} />
              {/* Provide checkbox Here */}
              <label>Active</label>

            </div>
          </div>

          <button type="submit" value="" onClick={(e) => {
            handleChange(e, "RESET")
          }} >Add student</button>
          {/* Provide Button to submit Here */}
        </form>
      </div >
    </div >
  );
};
