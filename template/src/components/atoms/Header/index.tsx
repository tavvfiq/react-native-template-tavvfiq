import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Mixins } from "@styles/index";

interface Props {
	title: string;
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		height: Mixins.scaleSize(60),
		backgroundColor: Colors.WHITE,
		alignItems: "center",
		...Mixins.padding(0, 10, 0, 10),
		...Mixins.boxShadow(Colors.BLACK),
	},
	title: {
		fontWeight: "bold",
		fontSize: Mixins.scaleFont(20),
	},
});

const Header = ({ title }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;
