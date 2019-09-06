import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Cata from './cata';
import FoodList from './foodlist';

import './food.scss'

export default class Food extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }],
            current: 0,
            foodList: [],
            currentFoodList:[]
        };
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }

    changeCata(selectCata) {
        if(!this.state.foodList.some(i=>i.pid==selectCata.id))
        {
            let list = this.state.foodList.concat(this.getData(selectCata));
            this.setState({foodList:list},()=>{});
        }
        else    {
            let data = this.state.foodList.filter(i=>i.pid==selectCata.id);   
            this.setState({currentFoodList:data});
        }
    } 

    render() {
        let { current, tabList,currentFoodList } = this.state;
        return (
            <View>
                <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={current} index={0} >
                        <View className='foodBody'>
                            <Cata onChangeCata={this.changeCata.bind(this)}/>
                            <FoodList />
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={1}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={2}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
                    </AtTabsPane>
                </AtTabs>
            </View>
        );
    }
} 