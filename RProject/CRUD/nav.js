import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ContactUs from '../Demo/contactUs';
import ViewList from './ViewList';
import Main from './Main';
import Apps from '../Demo/count'

const Screens = {
    Home:Main,
    RegistrationForm:ContactUs,
    List:ViewList,
    Counter:Apps,
    
}

const HomeStack = createStackNavigator(Screens);

export default createAppContainer(HomeStack);