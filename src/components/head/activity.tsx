import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './activity.scss';

export default class Activity extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      activity: [
        {
          type: 'cut',
          info: [
            { total: 38, cut: 10 },
            { total: 58, cut: 20 },
            { total: 100, cut: 30 }
          ]
        }
      ]
    }

  }

  getActivityType(type) {
    switch (type) {
      case 'cut':
        {
          return '减';
          break;
        }
      default:
        return '减';
        break;
    }
  }

  activityDesFormatter(arr) {
    // console.log(JSON.stringify(arr));
    let data = arr.map((item, index) => `满${item.total}减${item.cut}`).join(';');
    // console.log(data);
    return data;
  }

  render() {
    let {activity} = this.state; 
    let first = activity[0];
    return (
      <View className='activity'>
        <Text className='type'>{this.getActivityType(first.typs)}</Text>
        <Text className='activityDes'>{this.activityDesFormatter(first.info)}</Text>
        <Text className='activityLength'>{first.info.length}个活动</Text>
      </View>
    );
  }
}
