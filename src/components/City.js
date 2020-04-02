import React from "react";

class City extends React.Component {
  state = { city: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state.city);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          {/* Hidden because it's ugly in this App but there for accessibility */}
          <label style={{ visibility: "hidden" }} htmlFor="city">
            City:
          </label>
          <input
            type="text"
            value={this.state.city}
            name="city"
            onChange={e => this.setState({ city: e.target.value })}
          />
        </div>
        {/* If I have time I want to be able to change the city and make another request with this submit button showing up. For now it's hidden and as a "to do". Not part of the reqs for Home Work. */}
        <button className="ui button" style={{ display: "none" }} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default City;
