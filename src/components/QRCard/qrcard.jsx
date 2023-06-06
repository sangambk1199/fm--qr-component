import PropTypes from 'prop-types';
import './qrcard.css'

const QRCard = (props) => {
    const { img, title, description } = props;

    console.log(props)

    return (
        <div className='qr-card'>
            <div className='qr-card__img'>
                <img src={img} />
            </div>
            <div className="qr-card__body">
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
        </div>
    );
}

QRCard.PropTypes = {
    props: PropTypes.node.isRequired
}

export default QRCard;