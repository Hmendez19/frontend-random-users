import React from "react";
import { FooterProps } from "../../../Interfaces/FooterProps";

const Footer: React.FC<FooterProps> = ({title,classNames}) => {
    return (
        <footer className={`${classNames['template__footer']}`}>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__text">
                        <p>© {(new Date()).getFullYear()} {title}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;