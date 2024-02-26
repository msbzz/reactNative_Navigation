import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../paginas/Home";
import Login from "../paginas/Login";
import Cadastro from "../paginas/Cadastro";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListaPets from "../paginas/ListaPets";
import Mensagem from "../paginas/Mensagem";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes(){
    return(
        <Tab.Navigator>
        <Tab.Screen name='Lista de Pets' component={ListaPets}/>
        <Tab.Screen name='Mensagem' component={Mensagem}/>
    </Tab.Navigator>
    )

}

export default function Navigation(){
    return(
    <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitle:'',headerShown:false}}>
            <Stack.Screen name='Home'  component={Home}/>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Stack.Screen name='Tab' component={TabRoutes} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}