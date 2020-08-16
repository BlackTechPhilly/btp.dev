import React, { Component } from "react";

export class Support extends Component {
  componentDidMount() {
    const element = document.querySelector(".circular_reveal_s");
    const inner = document.querySelector(".circular_reveal_content_s");

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
      <div id="support">
        <div className="circular_reveal_s">
          <div className="circular_reveal_content_s">
            <img
              // src={require ('../../assets/images/support.jpg')}
              src={require("../../assets/images/support_icon.PNG")}
              alt="Support icon image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
