// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  getActiveUserDetails = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    const reqUser = reviewsList[activeReviewIndex]
    return reqUser
  }

  onLeftArrowClicked = () => {
    const {activeReviewIndex} = this.state

    let i = activeReviewIndex

    if (i > 0) {
      i -= 1
    }

    this.setState({
      activeReviewIndex: i,
    })
  }

  onRightArrowClicked = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    let i = activeReviewIndex

    if (i < reviewsList.length - 1) {
      i += 1
    }

    this.setState({
      activeReviewIndex: i,
    })
  }

  render() {
    const {activeReviewIndex} = this.state

    const activeReviewUserDetails = this.getActiveUserDetails(activeReviewIndex)

    return (
      <div className="app-container">
        <div className="review-container">
          <h1>Reviews</h1>

          <div className="cards-container">
            <button
              type="button"
              onClick={this.onLeftArrowClicked}
              className="arrow-btn"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>

            <div className="card-content-container">
              <img
                src={activeReviewUserDetails.imgUrl}
                alt={activeReviewUserDetails.username}
                className="profile-img"
              />
              <p className="username-txt-style">
                {activeReviewUserDetails.username}
              </p>
              <p>{activeReviewUserDetails.companyName}</p>
              <p>{activeReviewUserDetails.description}</p>
            </div>

            <button
              type="button"
              onClick={this.onRightArrowClicked}
              className="arrow-btn"
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
