import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import Top from './top';
import Activity from   './activity';

import bgPng from '../../assets/image/base/bg.jpg';
import storeJpg from '../../assets/image/store/store.jpg';
import './head.scss';



export default class Head extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      store: {
        title: '四川老菜馆',
        notice: '欢迎光临，地道四川菜',
        tags: ['味道赞', '量大价优', '地道川菜']
      }
    }
  }
  render() {
    let { store } = this.state;
    return (
      <View className="head">
        <Top />
        <Image className="back" src={bgPng} />
        <View className="store">
          <Image className="store_img" src={storeJpg} />
          <View className="store_text">
            <Text className='title'>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {store.tags.map((item, index) => {
                return <Text className='tags_text' key={index}>{item}</Text>
              })}
            </View>
          </View>
        </View>
              <Activity/>
      </View>
    );
  }
}
