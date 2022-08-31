import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "./Card.css";

type CardProps = {
    style?: React.CSSProperties,
    children?: any,
    withInnerMargin?: boolean;
};

export const Card = (props: CardProps) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // const innerContainerStyle: React.CSSProperties = {
    //     margin: (props.withInnerMargin ?? true) ? (isMobile ? "15px" : "30px") : undefined,
    // };

    const { style, children } = props;
    return (
        <div className="card-container"
        // style={{ ...style, width: isMobile ? "90%" : style?.width }}
        >
            <div
                className='inner-container'
            // style={{
            //     margin: (props.withInnerMargin ?? true) ? (isMobile ? "15px" : "30px") : undefined,
            // }}
            >
                {children}
            </div>
        </div>
    );
}