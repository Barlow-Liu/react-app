import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Image,
    Dimensions,
    View,
    Modal,
    Button,
    PixelRatio,
    TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navbar';

import LeftMenu from './SettingMenu.js';//导入 菜单 组件


const window = Dimensions.get('window');


export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectedItem: '通讯方式',
            showRightContant: '通讯方式',

        };


        this._onMenuItemSelected = this._onMenuItemSelected.bind(this);


    }

    render() {

        return (
            <View style={styles.flex}>

                {/*标题栏*/}
                <NavigationBar tintColor='#00bfff' title={{ title: '设置', tintColor: 'white' }} />

                {/*内容*/}
                <View style={[styles.container, styles.flexDirection]}>
                    {/*左侧选择栏*/}
                    <View style={styles.leftMenuStyle}>
                        <LeftMenu onItemSelected={this._onMenuItemSelected} />
                    </View>
                    {/*右侧显示内容*/}
                    <View style={styles.rightContantSyle}>

                        <Text>{this.state.showRightContant}</Text>
                    </View>
                </View>

            </View>
        );
    }

    _onMenuItemSelected(leftContant) {
        this.setState({
            showRightContant: leftContant,
        });

    }
}

const styles = StyleSheet.create({

    flex: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: 'row',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftMenuStyle: {

        borderRightColor: 'grey',
        borderRightWidth: 1,
    },
    rightContantSyle: {
        flex: 1,

    },

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },

});
