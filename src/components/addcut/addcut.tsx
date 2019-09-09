import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { getFoodCount, setFoodCount } from '../../utils/utils';
import './addcut.scss';

export default class AddCut extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      num: 0
    }
  }

  config = {
    navigationBarTitleText: ''
  }

  state = {
    num: 0
  }

  componentWillMount() { }
  componentDidMount() {
    let count = getFoodCount(this.props.food);
    this.setState({ num: count });

  }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }

  CutFood() {
    if (this.props.food) {
      if (this.state.num > 0) {
        setFoodCount(this.props.food, this.state.num,"cut",()=>{
          let count = getFoodCount(this.props.food);
           this.setState({ num: count });
        });
      }
    }
  }

  AddFood() {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.num,"add",()=>{
        let count = getFoodCount(this.props.food);
        this.setState({ num: count });
      });
    }
  }

  render() {
    let {num} = this.state;
    let hideClass = num>0?"":"hide";
    return (
      <View className='option'>
        <Image onClick={this.CutFood.bind(this)} className={'optionImg '+hideClass} src={require('../../assets/image/addcut/cut.png')}></Image>
        <Text className={'foodNum '+hideClass}>{this.state.num}</Text>
        <Image onClick={this.AddFood.bind(this)} className='optionImg' src={require('../../assets/image/addcut/add.png')}></Image>
      </View>
    );
  }
}
