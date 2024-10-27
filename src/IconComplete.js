import React from 'react';
import { Todoicono } from './Todoicono'

function IconComplete( {completados, onComplete}) {
  return ( <Todoicono type="check" 
    color={completados ? 'green' : 'gray'} 
    onClick={onComplete}/>
  );
  }

export { IconComplete };
