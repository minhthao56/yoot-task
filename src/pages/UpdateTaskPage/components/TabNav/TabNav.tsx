import React from 'react'

export const TabNav = (props:any) => {
    
    return (
        <>
            <div className="nav-tab__header">
            {
                props.tabs.map((tab:any) => {
                            const active = (tab === props.selected ? 'active ' : '' );
                    return (
                        <span key={tab} className={active} onClick={ () => props.setSelected(tab) }>
                        { tab }
                        </span>
                    );
                })
            }
            </div>
            {props.children}
            
        </>
    )
}
