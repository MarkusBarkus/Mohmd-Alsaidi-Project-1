import { StyleSheet } from "react-native";

export const MARGIN = 10;

export const palette = {
    background: '#06962f',
    border: '#acb209',
    text: '#0c0ce0'
};

export default StyleSheet.create({
    header: {
        fontSize: 24,
        fontFamily: 'Bitcount',
        color: palette.text,
        textAlign: 'center'
    },
    list: {
        marginTop: 4,
        borderTopWidth: 4,
        fontFamily: 'Bitcount',
        borderBottomWidth: 4,
        marginBottom: 4,
        borderColor: palette.border,
        backgroundColor: palette.background,
        flex: 1
    },
    app: {
        marginTop: 50,
        backgroundColor: palette.background,
        fontFamily: 'PermanentMarker',
        flex: 1
    },
    list: {
        backgroundColor: palette.background,
        fontFamily: 'PermanentMarker',
        flex: 1
    },
    listItem: {
        margin: MARGIN,
        borderWidth: 2,
        borderRadius: 12,
        fontFamily: 'PermanentMarker',
        borderColor: palette.border,
        padding: 10
    },
    listItemText: {
        fontSize: 24,
        fontFamily: 'PermanentMarker',
        color: palette.text
    },
    inputText: {
        margin: MARGIN,
        borderWidth: 2,
        fontFamily: 'PermanentMarker',
        borderRadius: 12,
        borderColor: palette.border,
        padding: 10,
        fontSize: 24,
        color: palette.text
    },
    button: {
        margin: MARGIN
    }
});