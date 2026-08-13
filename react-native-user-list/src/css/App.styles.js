import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 36,
        marginBottom: 10,
    },
    searchInput: {
        backgroundColor: '#fff',
        marginHorizontal: 12,
        marginBottom: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
    errorText: {
        color: '#e74c3c',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    loadMoreBtn: {
        backgroundColor: '#3b82f6',
        marginHorizontal: 40,
        marginVertical: 16,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    loadMoreText: {
        color: '#fff',
        fontWeight: '600',
    },
});