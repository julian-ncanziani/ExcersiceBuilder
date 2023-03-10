import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Draggable(){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
      });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;

    return(<div className='conteiner w-25 p-3 bg-info'>
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            button dragable
        </button>
    </div>);
};

export default Draggable;
