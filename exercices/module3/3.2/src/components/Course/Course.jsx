import React from 'react';
import { Part } from '../Part/Part';
import { Header } from '../Header/Header';

export const Course = ({ course }) => {
    return (
        <div>
            <Header title={course.name} />
            {course.parts.map((p) => (
                <Part key={p.id} props={p} />
            ))}
        </div>
    );
};

