// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem/index'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} details={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
