import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FeedbackCard = (props) => {
    const { name, expert, description, image } = props.testimonial;

    return (
        <div className="mb-3 col-lg-4 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded bg-dark">
                <div className="card-body">
                    <img src={image} alt="" />
                    <h5 className="card-title text-light">{name}</h5>
                    <small style={{ color: 'red' }} >Expert In:  {expert}</small>
                    <p style={{ color: 'white' }}> {description}</p>
                </div>
                <div className="card-footer">
                    <h3 className="text-light">Rating</h3>
                    <div className="d-flex align-items-center justify-content-center  text-warning">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;