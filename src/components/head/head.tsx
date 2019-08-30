import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import Top from './top';

export default class Head extends Component {

  render() {
    return (
      <View className="head">
        <Top>
        </Top> 
        <Text>头部head</Text>
      </View> 
    );
  }
} 