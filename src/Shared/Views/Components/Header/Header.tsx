import React from 'react';
import { HeaderProp } from '../../../Interfaces/HeaderProp';

const Header: React.FC<HeaderProp> = ({title,classNames,children}) => {
    return (
        <header className={`${classNames['template__header']}`}>
            <div className={`${classNames['container']}`}>
                <span className={`${classNames['template__brand']}`}>{title}</span>
                {children}
            </div>
        </header>
    );
};

export default Header;