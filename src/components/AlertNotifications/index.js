// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="alert">Alert Notifications</h1>
    <Notification>
      <div className="notfication-align-container">
        <AiFillCheckCircle className="success-icon" />
        <div className="notification-status">
          <h1 className="heading color">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notfication-align-container">
        <RiErrorWarningFill className="error-icon" />
        <div className="notification-status">
          <h1 className="heading error-color">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notfication-align-container">
        <MdWarning className="warning-icon" />
        <div className="notification-status">
          <h1 className="heading warning-color">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notfication-align-container">
        <MdInfo className="info-icon" />
        <div className="notification-status">
          <h1 className="heading info-color">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
