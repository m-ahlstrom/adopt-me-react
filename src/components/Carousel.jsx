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
      <div className="flex justify-around items-center h-96 mt-2">
        <img className='max-w-[45%] max-h-96' src={images[active]} alt="animal hero" />
        <div className="w-1/2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? 'w-24 h-24 rounded-[50%] inline-block m-4 cursor-pointer border-2 border-solid opacity-60' : 'w-24 h-24 rounded-[50%] inline-block m-4 cursor-pointer border-2 border-solid'}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
