import * as home from './home'
import { menuItems } from './menu'

home.homepage()

home.tab2.addEventListener('click', function(){
    menuItems()
});