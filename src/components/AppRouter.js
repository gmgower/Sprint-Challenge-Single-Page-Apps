import React from 'react'
import { Switch, Route} from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';

const AppRouter = () => {
    return (
        <div className="page-view ui bottom attached segment active tab">
            <Switch>
                <Route path='/characters' component={CharacterList}/>
                <Route component={WelcomePage} />
            </Switch>
        </div>
    )
}

export default AppRouter
