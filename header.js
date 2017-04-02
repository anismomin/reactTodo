//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
class Header extends Component {
	render() {
		return (
			<View style={styles.header}>
				<TextInput
					value={this.props.value}
					onChangeText={this.props.onChange}
					onSubmitEditing={this.props.onAddItems}
					placegolder="What in you mind ?"
					blurOnSubmit={false}
					returnKeyType="done"
					style= {styles.input}
				/>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center"
	},
	input: {
		flex: 1,
		height: 50
	},
});

//make this component available to the app
export default Header;
