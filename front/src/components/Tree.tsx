import React, {FC} from 'react';
import { DndContext } from '@dnd-kit/core';
import Droppable from './Dropable';
import Draggable from './Dragable';
import './Tree.css';
interface Props{

};

const Tree: FC = ()=>{
    return(<div className='treeDiv'>
        <DndContext>
            <Droppable/>
            <Draggable/>
        </DndContext>
    </div>);
};

export default Tree;