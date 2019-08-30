import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';

import backPng from '../../assets/image/base/back.png'
import searchPng from '../../assets/image/base/search.png'
import collectPng from '../../assets/image/base/collect.png'
import tuanPng from '../../assets/image/base/tuan.png'

import './top.scss'

export default class Top extends Component {

  render() {
    return (
      <View className="top">
        <View className="left"><Image src={backPng} className='img'></Image> </View>
        <View className="right">
          <Image src={searchPng} className='img'></Image>
          <Image src={collectPng} className='img'></Image>
          <Image src={tuanPng} className='img'></Image>
        </View>
      </View>
    );
  }
} 