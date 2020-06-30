import React, {Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super ()
    this.state = {
      name: "Phil"
    }
    this.loopFilters.bind(this);
  }

  loopFilters () {
    var {filterArr} = this.props
    return filterArr.map((filter, index) => {
      return (
        <div className="filter-box" key={index}>
          <div className="filter">{filter}</div>
          <span className="cross" data-filter={filter} onClick={this.props.removeFilter}>&#10006;</span>
        </div>
      )
    })
  }

  render () {
    return (
      <div id="filter-container" className={this.props.filterArr.length > 0 ? "active" : null}>
        <div className="filters">
          {this.loopFilters()}
        </div>
        <span className="clear" onClick={this.props.clearFilter}>Clear</span>
      </div>
    );
  };
};