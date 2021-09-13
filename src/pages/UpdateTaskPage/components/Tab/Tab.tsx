import React from 'react'

export const Tab = (props:any) => {
    if (props.isSelected) {
        return (
          <>
            {props.children }
          </>
        );
    }
    return null
}
