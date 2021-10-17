import React from 'react';
import { useSpring, animated } from 'react-spring';


const NewItem = () => {
    const props = useSpring({ number: 15, from: { number: 0 } });
    const propsTwo = useSpring({ number: 20, from: { number: 0 } });
    const propsThree = useSpring({ number: 10, from: { number: 0 } });

    return (
        <section className="my-5 container">
            <div className="row " >
                <div className="col-md-5 mb-3 bg-dark text-light ">
                    <img className="img-fluid" src="https://image.freepik.com/free-photo/healthy-hearty-salad-tuna-green-beans-tomatoes-eggs-potatoes-black-olives-close-up-bowl-table_2829-4485.jpg" alt="" />
                </div>
                <div className="col-md-6 mb-2 ">
                    <h4 className="fw-bolder w-50">New Item</h4>
                    <h3 className="fw-bolder w-50 text-danger">You start the engine and your adventure begins</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quis aliquam assumenda possimus ea ipsum rerum et laudantium exercitationem voluptatem incidunt est cumque dolor commodi culpa delectus eaque ut sequi placeat, atque tempora omnis neque quod. Sequi earum odio eius quisquam voluptate architecto non dolores, corrupti hic vero repudiandae.</p>
                    <hr />

                </div>
            </div>
            <div className="d-flex justify-content-between bg-dark m-3">
                <div className="overflow-hidden w-50 h-50">
                    <h6 style={{ color: 'white' }}>Breakfast Item</h6>
                    <img className=
                        "w-50 h-50 p-2" src="https://image.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg" alt="" />
                    <animated.span style={{ fontSize: '4em' }}>{props.number}</animated.span>
                </div>
                <div className="overflow-hidden w-50 h-50">
                    <h6 style={{ color: 'white' }}>Lunch Item</h6>
                    <img className=
                        "w-50 h-50 p-2 " src="https://image.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25887.jpg" alt="" />
                    <animated.span style={{ fontSize: '4em' }}>{propsTwo.number}</animated.span>
                </div>
                <div className="overflow-hidden w-50 h-50">
                    <h6 style={{ color: 'white' }}>Dinner Item</h6>
                    <img className=
                        "w-50 h-50 p-2" src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?size=338&ext=jpg" alt="" />
                    <animated.span style={{ fontSize: '4em' }}>{propsThree.number}</animated.span>
                </div>
            </div>

        </section>
    );
};

export default NewItem;