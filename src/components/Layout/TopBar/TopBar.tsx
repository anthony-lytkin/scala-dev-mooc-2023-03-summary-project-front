import React from 'react'
import { TopBarApplicationName, TopBarInner } from './styles/TopBar'
import { appName } from '../../../core/constants/global'

const TopBar: React.FC = () => {

    return (
        <TopBarInner>
            <TopBarApplicationName>{appName}</TopBarApplicationName>
        </TopBarInner>
    );

}

export default React.memo(TopBar)