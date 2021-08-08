import * as React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
	const navigation = useNavigation<homeScreenProp>();
	return (
		<View>
			<Button
				title={"Hello"}
				onPress={() => navigation.navigate("About")}
			></Button>
			<Text>Home Screen</Text>
		</View>
	);
};

export default Home;
