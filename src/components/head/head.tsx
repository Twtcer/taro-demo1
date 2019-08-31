import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import Top from './top';
import backPng from '../../assets/image/base/back.png';
import storeImg from '../../assets/image/store/store.png';

export default class Head extends Component {
  constructor() {
    super(...arguments);
    this.state={
      store:{
        title: '四川老菜馆',
        notice: '欢迎光临，地道四川菜',
        tags: ['味道赞','量大价优','地道川菜']
      }
    }
   }
  render() {
    return (
      <View className="head">
        <Top />
        <Image className="back" src={backPng} />
        <View className="storeInfo">
          <View className="storeImg" src={storeImg}></View>
          <View className="storeDesc"></View>
        </View>
      </View>
    );
  }
}
