import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import styles from '../../config/styles';


class List extends Component {
  constructor() {
    super();
    this.state = {
        data: [],
        loading: true,
        refreshing: false,
    }
  }

    componentDidMount() {
    this.makeRequest()
    }

    makeRequest = () => {
    const endpoint = `https://jsonplaceholder.typicode.com/users`;
    fetch(endpoint)
    // if fetch is successful, read our JSON out of the response
        .then(response => response.json())
        .then((data) => {
        this.setState({ 
            data: [...this.state.data, ...data.map(item => ({...item, id: item.id}))],
            loading: false,
            refreshing: false 
        });
        })
        .catch(error => console.log(error));
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        }, () => {
            this.makeRequest();
        })
    }

  render() {
    const isLoading = this.state.loading;
        if(isLoading) {
            return (
                <ActivityIndicator
                    animating 
                    size="large" 
                    color="royalblue" 
                />
            )
        } else {
            return (
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                        <Text style={styles.text}>
                            {item.id}, {item.email}
                        </Text>
                        <Button
                            onPress={() => alert(`This user's name is ${item.name}`)}
                            title='Name'
                            color='#fef77b'
                            />
                        </View>
                    )}
                    keyExtractor={item => `${Math.floor(100000 * Math.random(item.id))}`}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
            )
        }
  }
}

export default List;