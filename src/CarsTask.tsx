import React from 'react';

type TopCarsPropsType = {
    manufacturer: string
    model: string
}
type CarsTaskPropsType = {
    cars: TopCarsPropsType[]
}
export const CarsTask = (props: CarsTaskPropsType) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>N</td>
                    <td>manufacturer</td>
                    <td>model</td>
                </tr>
                </thead>

                {props.cars.map((el, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td> {index+1}</td>
                                    <td>{el.manufacturer}</td>
                                    <td>{el.model}</td>
                                </tr>
                            </tbody>
                        )
                    }
                )}


            </table>
        </div>
    );
};

