import React from 'react';

const AdobeAfterEffectsSolidIcon = ({
    size = undefined,
    color = '#000000',
    strokeWidth = 2,
    background = 'transparent',
    opacity = 1,
    rotation = 0,
    shadow = 0,
    flipHorizontal = false,
    flipVertical = false,
    padding = 0
}) => {
    const transforms = [];
    if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
    if (flipHorizontal) transforms.push('scaleX(-1)');
    if (flipVertical) transforms.push('scaleY(-1)');

    const viewBoxSize = 24 + (padding * 2);
    const viewBoxOffset = -padding;
    const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                opacity,
                transform: transforms.join(' ') || undefined,
                filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
                backgroundColor: background !== 'transparent' ? background : undefined
            }}
        >
            <path fill="currentColor" fill-rule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zm-3.5-1a.75.75 0 0 1-.75.75H16A2.75 2.75 0 0 1 13.25 14v-2a2.75 2.75 0 1 1 5.5 0v1a.75.75 0 0 1-.75.75h-3.25V14c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 1 .75.75m-1-3.75V12a1.25 1.25 0 1 0-2.5 0v.25zM5.298 15.736a.75.75 0 1 0 1.404.527l.943-2.513h2.71l.943 2.513a.75.75 0 1 0 1.404-.527l-3-8a.75.75 0 0 0-1.404 0zm4.495-3.486H8.207L9 10.136z" clip-rule="evenodd" />
        </svg>
    );
};

export default AdobeAfterEffectsSolidIcon;