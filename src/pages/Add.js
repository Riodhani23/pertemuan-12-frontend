import React from 'react';
import AddMovie from '../components/AddMovie/AddMovie';

const ADD = (props) => {
    const {item, setItem} = props
    return (
        <div>
            <AddMovie movies={item} setMovies={setItem}/>
        </div>
    );
}

export default ADD;
