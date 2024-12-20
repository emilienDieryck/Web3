import React from 'react';

export const Part = ( { props } ) => {
    return (
        <h4>
            {props.name} {props.exercises}
        </h4>
    );
};
