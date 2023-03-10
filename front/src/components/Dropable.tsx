import {useDroppable} from '@dnd-kit/core';

function Droppable(){
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable-1'
    });
    const style = {
        color: isOver ? 'green': undefined
    };

    return(
        <div ref={setNodeRef} className="conteiner w-75 p-3 bg-light" style={style}>
            <p>Droppable</p>
        </div>
    );
};

export default Droppable;