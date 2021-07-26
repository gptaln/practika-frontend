import React from 'react'
import 'normalize.css'
import 'materialize-css'
import {Navigation} from './UI/components/Navigation'
import {Global} from '@emotion/react'
import {getTheme} from './App-styled'
import {useStoreState} from '@proscom/prostore-react'
import {themeStore} from './BLL/models/theme'

const App: React.FC = () => {

    const theme = useStoreState(themeStore)

    return (
        <>
            <Global styles={getTheme(theme)}/>
            <div className="App">
                <Navigation/>
            </div>
        </>
    )

}

export default App
