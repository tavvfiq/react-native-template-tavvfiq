import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

interface Props {
	children: React.ReactNode;
}

const styles = StyleSheet.create({
	layout: {
		flexDirection: "column",
		flex: 1,
	},
});

const Layout = ({ children }: Props) => {
	return (
		<>
			<StatusBar />
			<View style={styles.layout}>{children}</View>
		</>
	);
};

export default Layout;
