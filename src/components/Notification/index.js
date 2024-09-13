// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      {children}
      <GrFormClose className="cancel" />
    </div>
  )
}

export default Notification
