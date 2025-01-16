'use client'
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableComponent from './DraggableComponent';
import DroppableArea from './DroppableArea';

interface ComponentItem {
    component: React.ReactNode;
    type: string;
}

const DragAndDropBuilder: React.FC = () => {
    const [components, setComponents] = useState<ComponentItem[]>([]);

    const handleDrop = (item: ComponentItem) => {
        setComponents([...components, item]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '200px', marginRight: '16px' }}>
                    <h3>Components</h3>
                    <DraggableComponent component={<button>Button</button>} type="button" />
                    <DraggableComponent component={<input placeholder="Input" />} type="input" />
                    <DraggableComponent component={<textarea placeholder="Text Area" />} type="textarea" />
                    <DraggableComponent component={<input type="checkbox" />} type="checkbox" />
                    <DraggableComponent component={<select><option>Option 1</option><option>Option 2</option></select>} type="select" />
                    <DraggableComponent component={<div style={{ padding: '8px', border: '1px solid black' }}>Container</div>} type="container" />
                </div>
                <DroppableArea onDrop={handleDrop} />
            </div>
            <div style={{ marginTop: '16px' }}>
                <h3>Preview</h3>
                <div style={{ border: '1px solid black', padding: '16px' }}>
                    {components.map((item, index) => (
                        <div key={index} style={{ marginBottom: '8px' }}>{item.component}</div>
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default DragAndDropBuilder;
