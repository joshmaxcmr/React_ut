import React from 'react';

const Car = ({ children, color }) => {

    const colorInfo = color ? (<p>Couleur: {color} </p>) : (<p>Néant</p>);

    if (children) {
        return (
            <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
                <p>Marque: {children} </p>
                {colorInfo}
            </div>
        )
    } else {
        return <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
            <p>Aucune données!</p>
        </div>
    }


}

export default Car;