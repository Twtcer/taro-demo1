import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import './cata.scss'

export default class Cata extends Component {
    constructor() {
        super(...arguments);
        this.state = {  
            cata: [
                { name: '专场', id: 1 },
                { name: '热销', id: 2 },
                { name: '折扣', id: 3 },
                { name: '主食', id: 4 },
                { name: '凉菜', id: 5 },
                { name: '特色菜', id: 6 },
                { name: '家常小炒', id: 7 },
            ],
            selectCata: { name: '专场', id: 1 },
        }
    }

    componentDidMount() {
        //this.setState({selectCata:this.state.cata[0]});
     }
 
    handleClick(value) {
        this.setState({
            current: value
        })
    }

    clickHandle (item)
    {
        if(this.state.selectCata&&this.state.selectCata.id!=item.id)
        { 
            this.setState({
                selectCata:item
            },()=>{
                console.log(this.props.onChangeCata);
                
                this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata);
            }
            );          
        } 
    }

    render() {
        let {cata,selectCata} = this.state;
        return (
            <View className='cata'>{
                cata.map((item,index)=>{
                        return (<Text onClick={this.clickHandle.bind(this,item)} className={'title '+((selectCata && selectCata.id==item.id)?'select':'')} key={item.id}>{item.name}</Text>)
                    })
            }
                {/* <AtTabs
                    current={this.state.current}
                    scroll
                    height='200px'
                    tabDirection='vertical'
                    tabList={[
                        { title: '标签页1' },
                        { title: '标签页2' },
                        { title: '标签页3' },
                        { title: '标签页4' },
                        { title: '标签页5' },
                        { title: '标签页6' },
                    ]}
                    onClick={this.handleClick.bind(this)}>
                    <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                        <View style='font-size:18px;text-align:center;height:200px;'>标签页一的内容</View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                        <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
                        <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
                        <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
                        <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
                    </AtTabsPane>
                    <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
                        <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
                    </AtTabsPane>
                </AtTabs> */}

            </View>
        );
    }
} 