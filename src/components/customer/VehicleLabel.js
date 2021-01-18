import React from 'react';
import {Link} from "react-router-dom";
import "../../style/components/customer/Vehicle.css";
import carPic from '../../style/images/icons/car_pic.jpeg'

//значок машины и краткое описание
export function VehicleLabel(props) {
    return (
        <div className="car jumbotron">
            <img  className="car-img-top" alt="машина" width="150px" style={{borderRadius: "50px"}} src={carPic}/>
                <div className="car-body">
                    <h5 className="car-model">{props.cars.model}</h5>
                    <p className="car-description">{props.cars.description}</p>
                    <Link to={ '../vehicle/' + props.cars.id}  className="btn btn-primary">Перейти к машине</Link>
                </div>
        </div>


    );

}
