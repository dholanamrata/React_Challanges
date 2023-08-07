import React from 'react';
import { useImmer } from 'use-immer'; // Import useImmer
import Background from './Background.jsx';
import Box from './Box.jsx';

const initialPosition = {
    x: 0,
    y: 0
};

export default function Canvas() {
    const [shape, setShape] = useImmer({ // Use useImmer here
        color: 'orange',
        position: initialPosition
    });

    function handleMove(dx, dy) {
        // Use the draft object provided by useImmer to modify state
        setShape(draft => {
            draft.position.x += dx;
            draft.position.y += dy;
        });
    }
    //   The handleMove function is called when the box is moved.It uses the setShape 
    // function provided by useImmer to update the state immutably.It takes the current shape 
    // state as a draft and modifies the position property to move the box by the specified 
    // change in dx(horizontal) and dy(vertical)


    function handleColorChange(e) {
        setShape(draft => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}
