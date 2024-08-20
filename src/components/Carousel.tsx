import { Component, MouseEvent } from 'react'

interface IProps {
  images: string[]
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: ['https://pets-images.dev-apis.com/pets/none.jpg'],
  }

  handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return
    }

    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      })
    }
  }

  render() {
    const { active } = this.state
    const { images } = this.props
    return (
      <div className="mt-2 flex h-96 items-center justify-around">
        <img
          className="max-h-80 max-w-[45%] lg:max-h-96"
          data-testId="hero"
          src={images[active]}
          alt="animal hero"
        />
        <div className="w-1/2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              data-testId={`thumbnail${index}`}
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
