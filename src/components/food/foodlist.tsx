import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import AddCut from '../addcut/addcut';
import './foodlist.scss';


export default class FoodList extends Component {

  constructor() {
    super(...arguments);
    this.state = {
    };
  }

  render() {
    let { selectCata, currentFoodList } = this.props;
    return (
      <View className='foodList'>
        <Text className='cataName'>{selectCata ? selectCata.name : ''}</Text>
        <View className='footItems'>
          {currentFoodList.map((item, index) => {
            return (
              <View className='footItem' key={item.id}>
                <Image className='foodImg' src={require('../../assets/image/store/store.jpg')}></Image>
                <View className='foodInfo'>
                  <Text>{item.title}</Text>
                  <Text>月售：{item.sale}</Text>
                  <Text className='rmb'> ￥ {item.price}</Text>
                  <AddCut food={item}/>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    );
  }
}
