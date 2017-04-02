//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './header';
import Footer from './footer';
// create a component
class App extends Component {

constructor(props){
	super(props);
	this.state = {
		value : '',
		items : []
	}
	this.hanldeAddItem = this.hanldeAddItem.bind(this);
}

hanldeAddItem(value){
	if(!this.state.value) return;
	const newItems = [
		... this.state.items,
		{
			key: Date().now(),
			value : this.state.value,
			complete: false
		}
	]
	this.setState = ({
		 items: newItems,
		 value: ""
	})
}


	render() {
		return (
			<View style={styles.container}>
				<Header 
					value={this.state.value}
					onAddItem={this.hanldeAddItem}
					onChange={()=> this.setState({ value	})}
				/>
				<View style={styles.content}>
					<Text>App</Text>
				</View>
				<Footer />
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
	content: {
		flex: 1
	},
});

//make this component available to the app
export default App;
