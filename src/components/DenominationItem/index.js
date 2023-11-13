import './index.css'

const DenominationList = props => {
  const {eachItem, updateButton} = props
  const {value} = eachItem

  const deletebtn = () => {
    updateButton(value)
  }

  return (
    <ul className="listElement">
      <li>
        <button type="button" onClick={deletebtn}>
          {value}
        </button>
      </li>
    </ul>
  )
}

export default DenominationList
