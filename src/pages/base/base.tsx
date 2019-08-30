import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './base.scss'

import Child from '../../components/base/Child';

export default class Base extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '基本操作'
  }

  state = {
    name: '第一次'
  }

  componentWillMount() { }

  componentDidMount() {
    // this.setState({name:"bob"});
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  click() {
    this.setState({ name: "单击事件,第二次" }, () => { console.log(this.state.name); });
  }

  change(){ 
    this.setState({name:"父组件调用子组件"},()=>{console.log('父组件调用子组件更新成功');});
  }

  render() {
    return (
      <View className='base'>
        <Button onClick={this.click}>click事件绑定</Button>
        <Text>父页面: {this.state.name}</Text> 
        <Child name={this.state.name} onchange={this.change.bind(this)} />
      </View> 
    )
  }
}
