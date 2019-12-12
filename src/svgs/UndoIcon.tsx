import React, { FC } from 'react';

const UndoIcon: FC = (props) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 64 64" {...props}>
      <path d="M35.8,20.9H16.3l5.9-5.9c0.7-0.7,0.7-1.8,0-2.5c-0.7-0.7-1.8-0.7-2.5,0l-7.8,7.8
        c-0.7,0.7-1,1.6-1,2.5c0,1,0.4,1.9,1,2.6l7.8,7.8c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0.7-0.7,0.7-1.8,0-2.5L16,24.5
        h19.8c6.6,0,12,5.4,12,12s-5.4,12-12,12H23c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8h12.8c8.6,0,15.5-7,15.5-15.5
        S44.4,20.9,35.8,20.9z"
      />
    </svg>
  )
}

export default UndoIcon;