import React from 'react';
import { useDrop } from 'react-dnd';

const ItemType = 'COMPONENT';

interface DroppableAreaProps {
    onDrop: (item: { component: React.ReactNode; type: string }) => void;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ onDrop }) => {
    const [, drop] = useDrop(() => ({
        accept: ItemType,
        drop: (item: { component: React.ReactNode; type: string }) => onDrop(item),
    }));

    const dropRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (dropRef.current) {
            drop(dropRef.current);
        }
    }, [drop]);

    return <div ref={dropRef} style={{ border: '2px dashed black', minHeight: '400px', padding: '16px' }}>Drop components here</div>;
};

export default DroppableArea;