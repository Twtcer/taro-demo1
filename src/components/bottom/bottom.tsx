import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './bottom.scss';

import  {getAllFoodInfo,myEvent, getEvent} from '../../utils/utils';
let events = getEvent;

export default class Bottom extends Component {

  config = {
    navigationBarTitleText: ''
  }
  state = {
    num: 0,
    minPrice: 20,
    sendPrice: 4,
    bySelf: true,
    allPrice:0,
  }

  componentWillMount() { }
  componentDidMount() {
    //获取整体的存储的菜品数据进行计算
    //获取计算好的值设置给state
    let { allPrice, allNum } = getAllFoodInfo();
    this.setState({allPrice:allPrice,num:allNum});
   }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    let { num, sendPrice, bySelf, minPrice } = this.state;
    return (
      <View className='bottom'>
        <View className='bottom_body'>
          {num>0 ? <Text className='num'>{num}</Text> : null}
          <Image className='cart' src={require('../../assets/image/bottom/cart_empty.png')}></Image>
          <View className='info'>
            {sendPrice ? <Text >另需配送费￥{sendPrice}</Text> : null}
            |
          {bySelf ? <Text > 支持自取</Text> : null}
          </View>
          <View className='submit'>
            {minPrice ? <Text>￥{minPrice}起送</Text> : null}
          </View>
        </View>
      </View>
    );
  }
}
