import React from 'react';
import React, { Component } from "react";

class Toggle extends Component {
  render() {
    return (
      <div className="button">
        <input
          type="button"
          className="toggleSwitch"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }
}