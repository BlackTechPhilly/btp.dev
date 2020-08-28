import React, { Component } from "react";

export class Purpose extends Component {
  componentDidMount() {
    const element = document.querySelector(".circular_reveal_p");
    const inner = document.querySelector(".circular_reveal_content_p");

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
      <div id="purpose">
        <div className="circular_reveal_p">
          <div className="circular_reveal_content_p">
            <img
              src={require("../../assets/images/purpose_icon.PNG")}
              alt="Purpose icon image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Purpose;
