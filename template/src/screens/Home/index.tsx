import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "@components/atoms/Header";
import Layout from "@components/atoms/Layout";
import { Mixins } from "@styles/index";

interface Props {}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	welcomeText: {
		fontSize: Mixins.scaleFont(20),
		alignSelf: "center",
	},
});

class Home extends React.Component<Props> {
	render() {
		return (
			<Layout>
				<Header title="Home" />
				<View style={styles.container}>
					<Text style={styles.welcomeText}>This is Home Screen</Text>
				</View>
			</Layout>
		);
	}
}

export default Home;
