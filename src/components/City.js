import React from "react";

class City extends React.Component {
  state = {
    city: "Paris",
    divClass: "",
    buttonClass: "",
    buttonDisplay: "none"
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state.city);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className={this.state.divClass}>
          <label style={{ visibility: "hidden" }} htmlFor="city">
            City:
          </label>
          <input
            type="text"
            value={this.state.city}
            name="city"
            onChange={e =>
              this.setState({
                city: e.target.value
              })
            }
            onFocus={e =>
              this.setState({
                divClass: "ui action input",
                buttonClass: "ui icon button",
                buttonDisplay: "block"
              })
            }
            onBlur={e =>
              this.setState({
                divClass: "",
                buttonClass: "",
                buttonDisplay: "none"
              })
            }
          />
          <button
            className={this.state.buttonClass}
            style={{ display: this.state.buttonDisplay }}
            type="submit"
          >
            <i className="search icon"></i>
          </button>
        </div>

        {/* If I have time I want to be able to change the city and make another request with this submit button showing up. For now it's hidden and as a "to do". Not part of the reqs for Home Work. */}
      </form>
    );
  }
}

export default City;
