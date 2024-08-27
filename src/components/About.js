import React, { useState } from "react";

export default function About(props) {
  const [containerStyle, setContainerStyle] = useState({
    background: "#fff",
  });

  const [accordionButton, setAccordionButton] = useState({
    // color: "#A688FA",
    // background: "#474E68",

    color: "#222",
    background: "#fff",
  });
  const [accordionBody, setAccordionBody] = useState({
    color: "#222",
    background: "#fff",
  });

  const [toggleBtnText, setToggleBtnText] = useState("Enable Dark Mode");

  //function to toggleMode
  const toggleMode = () => {
    if (containerStyle.background === "#fff") {
      setContainerStyle({
        background: "#404258",
      });

      setAccordionButton({
        color: "#A688FA",
        background: "#474E68",
      });
      setAccordionBody({
        color: "#fff",
        background: "#50577A",
      });

      setToggleBtnText("Enable Light Mode");
    } else {
      setContainerStyle({
        background: "#fff",
      });

      setAccordionButton({
        color: "#222",
        background: "#fff",
      });
      setAccordionBody({
        color: "#222",
        background: "#fff",
      });

      setToggleBtnText("Enable Dark Mode");
    }
  };
  // let containerStyle = {
  //   color:'red',
  //   background:'#404258'
  //   // background:'#404258'
  // }

  // let accordionBody = {
  //   color: "#fff",
  //   background: "#50577A",
  // };

  // let accordionButton = {
  //   color: "#A688FA",
  //   background: "#474E68",
  // };

  let button = {
    color: "#474E68",
    background: "#A688FA",
  };

  return (
    <div className="container my-4 p-5" style={props.containerStyle}>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={accordionButton}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBody}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={accordionButton}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBody}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                style={accordionButton}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBody}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary mt-3"
        style={button}
        onClick={toggleMode}
      >
        {toggleBtnText}
      </button>
    </div>
  );
}
