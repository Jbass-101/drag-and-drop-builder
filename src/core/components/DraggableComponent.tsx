import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = 'COMPONENT';

interface DraggableComponentProps {
    component: React.ReactNode;
    type: string;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ component, type }) => {
    const [, drag] = useDrag(() => ({
        type: ItemType,
        item: { component, type },
    }));

    const dragRef = React.useRef<HTMLDivElement>(null);
    drag(dragRef);

    return <div ref={dragRef} style={{ padding: '8px', border: '1px solid black', margin: '4px' }}>{component}</div>;
};

export default DraggableComponent;