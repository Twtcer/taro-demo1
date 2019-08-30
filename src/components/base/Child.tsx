import Taro,{Component} from '@tarojs/taro';
import {View,Text,Button} from '@tarojs/components';
class Child extends Component{
    clickHandle(){
        this.props.onchange();
    }
    render(){
        return (
            <View>
                <Button onClick={this.clickHandle}>调用上层事件</Button>
                <Text>子组件: {this.props.name}</Text>
            </View>
        )
    }
}
Child.defaultProps={
    name:"zhangsan",
    onchange:null
}
export default Child;