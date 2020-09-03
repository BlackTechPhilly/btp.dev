import React, { Component } from "react";

export class Inclusion extends Component {
  componentDidMount() {
    const element = document.querySelector(".circular_reveal");
    const inner = document.querySelector(".circular_reveal_content");

    const easing = 0.3;
    const outScale = 0.6;
    const inScale = 1;

    let targetScale = outScale;
    let elementScale = targetScale;
    let innerScale = 1 / elementScale;

    element.addEventListener("pointerover", () => {
      targetScale = inScale;
    });

    element.addEventListener("pointerout", () => {
      targetScale = outScale;
    });

    const update = () => {
      elementScale += (targetScale - elementScale) * easing;
      innerScale = 1 / elementScale;

      element.style.transform = `scale(${elementScale})`;
      inner.style.transform = `scale(${innerScale})`;

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

  render() {
    return (
      <div id="inclusion">
        <div className="circular_reveal">
          <div className="circular_reveal_content">
            <img
              alt="Inclusion icon"
              src={require("../../assets/images/inclusion_icon.PNG")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Inclusion;
