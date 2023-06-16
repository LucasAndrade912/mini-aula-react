import '../css/Title.css'
import PropTypes from 'prop-types'

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default function Title(props) {
  return (
    <h2>
      { props.text }
    </h2>
  )
}