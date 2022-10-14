
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  View,

} from 'react-native';

const window = Dimensions.get('window');


export default class SettingMenu extends Component {


  constructor(props) {
    super(props);

    this.state = {
      itemSelected: '通讯方式',
    };
    this._onClickItem = this._onClickItem.bind(this);

  }


  render() {


    return (
      <ScrollView style={styles.contantStyle}
        showsVerticalScrollIndicator={false}>

        {/*选项菜单*/}
        {this._selectItem('通讯方式')}
        {this._selectItem('设置3G服务IP地址')}
        {this._selectItem('交易地点')}
        {this._selectItem('清空考勤记录')}
        {this._selectItem('初始化设备')}
        {this._selectItem('修改密码')}
        {this._selectItem('关于我们')}
        {this._selectItem('退出')}

      </ScrollView>
    );
  }
  _selectItem(item) {
    return (
      <TouchableOpacity style={styles.itemTextView}
        onPress={() => {
          this._onClickItem(item)
        }}>

        <Text style={[
          styles.itemDefaultColor,
          this.state.itemSelected === item && styles.itemSelectedColor
        ]}  >
          {item}
        </Text>

      </TouchableOpacity>
    )
  }
  _onClickItem(itemTextContant) {
    this.setState({
      itemSelected: itemTextContant,
    });
    //传递数据到右边显示组件
    this.props.onItemSelected(itemTextContant);
  }


};


const styles = StyleSheet.create({

  contantStyle: {
    backgroundColor: 'white',
  },
  itemTextView: {
    height: 60,
    width: window.width / 4,
    justifyContent: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,

  },
  item: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemDefaultColor: {
    color: 'gray',
  },
  itemSelectedColor: {
    color: '#00bfff'
  }
});