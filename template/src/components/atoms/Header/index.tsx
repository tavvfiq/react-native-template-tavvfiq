import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Mixins } from "@styles/index";

interface Props {
	title: string;
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 1,
		height: Mixins.scaleSize(50),
	},
});

const Header = ({ title }: Props) => {
	return (
		<View style={styles.container}>
			<Text>{title}</Text>
		</View>
	);
};

export default Header;
