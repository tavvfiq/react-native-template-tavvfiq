import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "screens/Home";

const Stack = createStackNavigator();

interface Props {}

const AppStack = (props: Props) => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};

export default AppStack;