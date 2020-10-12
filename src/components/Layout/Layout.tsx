import React from 'react'
import { StyledLayout } from './styles'

const Layout: React.FC = ({children}) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}

export default Layout
