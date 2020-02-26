import React from "react";
import "./Menu.css";

// const title = "Main course";
// const description = "Nice description of main course";
// const price = 10;

const mainCourses = [
  {
    title: "Main course 1",
    description: "Nice description of main course",
    price: 10
  },
  {
    title: "Main course 2",
    description: "Nice description of main course 2",
    price: 15
  },
  {
    title: "Main course 3",
    description: "Nice description of main course 3",
    price: 12
  },
  {
    title: "Main course 4",
    description: "Nice description of main course 4",
    price: 20
  }
];

const Menu = props => {
  return (
    <div>
      <div className="menuHeader">Menu</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {mainCourses.map(course => {
          return (
            <div className="menuItem">
              <h2>{course.title}</h2>
              <h6>{course.description}</h6>
              <h6> ...............{course.price}</h6>
              <div>
                {" "}
                <button
                  className="menuButton"
                  onClick={() => props.handleAddtoOrder(course)}
                >
                  Add to order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
