import React from "react";
import { Text } from "react-native";
import Header from "@components/atoms/Header";
import Layout from "@components/atoms/Layout";

interface Props {}

class Home extends React.Component<Props> {
	render() {
		return (
			<Layout>
				<Header title="Home" />
				<Text>Hello World</Text>
			</Layout>
		);
	}
}

export default Home;
