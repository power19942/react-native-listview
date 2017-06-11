import React,{Component} from 'react';
import {CardSection} from './common';
import {Text,TouchableWithoutFeedback,View,LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
class ListItem extends Component{
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDesc(){
        const {library,expanded}=this.props;
        if(expanded){
            return(
                <CardSection>
                    <Text style={{flex:1}}>
                        {this.props.library.description}
                    </Text>
                </CardSection>
            )
        }
    }
    render(){
        const {id,title,selectedLibraryId} = this.props.library;+
            console.log(selectedLibraryId);
        return(
            <TouchableWithoutFeedback onPress={()=>{
               this.props.selectLibrary(id);
            }}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

const styles = {
    titleStyle:{
        fontSize:18
    }
};
//this customProps == this.props
const mapStateToProps = (state,customProps) =>{
    const expanded = state.selectedLibraryId === customProps.library.id;
  return {
      selectedLibraryId:state.selectedLibraryId,
      expanded
  }
};

//connect first args in mapStateToProps {null}
export default connect(mapStateToProps,actions)(ListItem);