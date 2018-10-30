import React, {Component} from 'react';

const lessons = [
    {title: 'Lesson 1: title', description: 'Lesson 1: description'},
    {title: 'Lesson 2: title', description: 'Lesson 2: description'},
    {title: 'Lesson 3: title', description: 'Lesson 3: description'},
    {title: 'Lesson 4: title', description: 'Lesson 4: description'}
];

class Exercise extends Component {

    render() {
        return (<LessonsList/>);
    }
}

class Lesson extends Component {

    render() {
        return (
            lessons.map((lesson, index) => {
                console.log(`${index} - ${lesson.title}`);
                return (
                    <div key={index}>
                        <h1>{lesson.title}</h1>
                        <p>{lesson.description}</p>
                    </div>
                );
            })
        );
    }
}

const LessonsList = (props) => {
    return <Lesson/>;
};


export default Exercise;
