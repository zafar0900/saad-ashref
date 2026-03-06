import React from 'react'

const LightMode = ({children,className}) => {
  return (
    <div className={`light-theme new-color min-vh-100 ${className}`}>
        {children}
    </div>
  )
}

export default LightMode;