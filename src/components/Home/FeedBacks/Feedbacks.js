import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';


const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./staf.json')
            .then(res => res.json())
            .then(reviews => {
                setFeedbacks(reviews);
            })
    }, [])

    return (
        <section className="my-5 bg-light" id="feedback">
            <div className="container">
                <h1 className="text-center">Our <span style={{ color: '#ff4d30' }}>Cooker Staf</span></h1>

                <div className="row">
                    {
                        feedbacks.map(feedback => <FeedbackCard testimonial={feedback}></FeedbackCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;