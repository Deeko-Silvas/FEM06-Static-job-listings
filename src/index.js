import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Filter from './filter';
import Card from './card';
import jobData from "./data";
// import * as serviceWorker from './serviceWorker';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      jobData,
      filterArr: [],
      filteredJobs: jobData
    }
    this.addFilter = this.addFilter.bind(this)
    this.removeFilter = this.removeFilter.bind(this)
    this.clearFilter = this.clearFilter.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }

  addFilter (event) {
    this.setState({
      filterArr: [...this.state.filterArr, event.target.textContent]
    }, () => {
      this.filteredData()
    })
  }

  removeFilter (event) {
    this.setState({
      filterArr: this.state.filterArr.filter(item => item !== event.target.getAttribute("data-filter"))
    }, () => {
      this.filteredData()
    })
  }

  clearFilter () {
    this.setState({
      filterArr: []
    }, () => {
      this.filteredData()
    })
  }

  filteredData () {
    if (this.state.filterArr.length === 0) {
      this.setState({
        filteredJobs: jobData
      })
    } else {
      let newArr = this.state.jobData.filter(job => {
        return this.state.filterArr.every(skill => {
          return job.role === skill || job.level === skill || job.languages.includes(skill) || job.tools.includes(skill)
        })
      })
      this.setState({
        filteredJobs: newArr
      })
    }
  }

  render () {
    return (
      <div>
        <header></header>
        <main>
          <Filter removeFilter={this.removeFilter} clearFilter={this.clearFilter} filterArr={this.state.filterArr} />
          <div id="card-main-container" className={this.state.filterArr.length > 0 ? "filtered" : null} >
            <Card addFilter={this.addFilter} filteredJobs={this.state.filteredJobs} />
          </div>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.livfordev.co.uk">Phil Livermore</a>.
          </div>
        </main>
      </div>
    )
  }
}

const app = document.getElementById('root');
ReactDOM.render(<App />, app);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
