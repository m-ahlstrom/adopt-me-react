import { Component } from 'react'

class Carousel extends Component {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: ['https://pets-images.dev-apis.com/pets/none.jpg'],
  }

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state
    const { images } = this.props
    return (
      <div className="mt-2 flex h-96 items-center justify-around">
        <img
          className="max-h-80 max-w-[45%] lg:max-h-96"
          src={images[active]}
          alt="animal hero"
        />
        <div className="w-1/2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={
                index === active
                  ? 'm-4 inline-block h-16 w-16 cursor-pointer rounded-[50%] border-2 border-solid opacity-60 lg:h-24 lg:w-24'
                  : 'm-4 inline-block h-16 w-16 cursor-pointer rounded-[50%] border-2 border-solid lg:h-24 lg:w-24'
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
