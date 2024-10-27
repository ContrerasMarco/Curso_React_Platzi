import React from 'react';
import { Todoicono } from './Todoicono';

function IconDelete({onDelete}) {
  return ( <Todoicono type="delete" 
    color="gray"
    onClick={onDelete} />
);
}

export { IconDelete };
