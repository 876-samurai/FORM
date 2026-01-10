import React from 'react';
export interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}
export declare const Card: React.FC<CardProps>;
