import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';



export default class FoodList extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        <Text>test</Text>
      </View>
    );
  }
} 