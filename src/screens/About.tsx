import * as React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type aboutScreenProp = StackNavigationProp<RootStackParamList, "About">;

const About = () => {
	const navigation = useNavigation<aboutScreenProp>();
	return (
		<View>
			<Text>About Screen</Text>
			<Button title={"Hello"} onPress={() => navigation.navigate("Home")}>
				Hello
			</Button>
		</View>
	);
};

export default About;
