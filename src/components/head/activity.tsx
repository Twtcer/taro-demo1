import Taro , { Component } from '@tarojs/taro';
import { View, Text , Image} from '@tarojs/components';

export default class Activity extends Component {

  constructor(){
    super(...arguments)
    this.state = {
      activity:[
        {
          type:'cut',
          info:[{total:38,cut:10},{total:58,cut:20},{total:100,cut:30}]

        }
      ]
    }

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
        <Text>满</Text>
        <Text>满48减10；满58减20；满100减30</Text>
        <Text>3个活动</Text>
      </View>
    );
  }
}
