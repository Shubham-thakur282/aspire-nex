import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContactBox = (props) => {
    return (
        <div className="col col-xl-4 col-md-6 text-center contact-box">
            <div className="card shadow-sm contact-info" id="location-icon">
                <div className="contact-icon">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <div className="card-body">
                    <h3 className="card-text  align-text-center">{props.heading}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>)
}

export default ContactBox;