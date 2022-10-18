import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View,} from "react-native";
import Constants from "expo-constants";
import {getNews} from "./apis";
import Article from "./Article";


export default () => {
    const [isLoading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        setRefreshing(true);
        setArticles(await getNews(1));
        setLoading(false);
        setRefreshing(false);
    };

    // Fetch data on startup.
    useEffect(() => {
        fetchData();
    }, []);

    const renderArticle = ({item}) => <Article item={item}/>;
    const renderDivider = () => <View style={styles.articleSeparator}></View>;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headlines}>Current News</Text>

                {isLoading ? (
                    <View style={styles.center}>
                        <ActivityIndicator size="large" color="#e74c3c"/>
                    </View>
                ) : (
                    <FlatList
                        data={articles}
                        onRefresh={fetchData}
                        refreshing={refreshing}
                        renderItem={renderArticle}
                        keyExtractor={(item) => item.url}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={renderDivider}
                        initialNumToRender={6}
                        onEndReached={fetchData}
                        onEndReachedThreshold={1}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    content: {
        flex: 1,
        padding: 15,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headlines: {
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 50,
        color: "#e74c3c",
    },
    articleSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: "#ed7669",
    },
});
