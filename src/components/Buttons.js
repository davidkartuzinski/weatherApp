import React from "react";

// I could have created a single button component and then integrated two instances but semantic-ui has a nice double button CSS styling and my app will only have two different buttons being used.  These two and a singular button eventually to submit another city.

class Buttons extends React.Component {
  render() {
    return (
      <footer
        className="ui two bottom attached buttons"
        styles={{ flexShrink: "0" }}
      >
        <button className="ui active button primary">Weather</button>
        <button className="ui button secondary">Sunrise/Sunset</button>
      </footer>
    );
  }
}

export default Buttons;
