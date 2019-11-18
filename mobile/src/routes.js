import {creatAppContainer, createSwitchNavigator} from 'react-native'

import Login from './pages/Login'
import Book from './pages/Book'
import List from './pages/List'

const Routes = creatAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
)

export default Routes;