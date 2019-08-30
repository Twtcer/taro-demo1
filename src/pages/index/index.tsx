import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text ,Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state={
    name: 'bob'
  }

  componentWillMount () { }

  componentDidMount () { 
    // this.setState({name:"bob"});
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  click()
  {
      this.setState({name:"lisi"},()=>{  console.log(this.state.name);}); 
  }
  render () {
    return (
      <View className='index'>
       <Button onClick={this.click}>click事件绑定</Button>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
