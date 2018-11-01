import React from 'react';

import AsyncSelect from 'react-select/lib/Async';
import makeAnimated from 'react-select/lib/animated';

export default class TagSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            fColors: [], /*an array to fill lists options from database when component initially mounts in a parent*/
            sTags:[], /*an array to work with*/

        };

    }
/*fetch selection options from database*/
    componentDidMount() {
        fetch('http://localhost:3000/admin/tags/')
            .then(response => response.json())
            .then(data => {
                this.setState({fColors: data});
            })
            .catch(err => console.log('error getting post'))
    }

    componentDidUpdate() {

        }
    /*a method to search avaliable options in a dropdown based on user input in search-field*/
    filterTags = (inputValue: string) =>
        this.state.fColors.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    /*a method that actualy loads tags to select from to drop-down list*/
    promiseOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(this.filterTags(inputValue));
            }, 1000);
        });
    /*a method for handling user input in tag-search-field*/
    handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };
    /*a method for setting component's state to deal with tag-filtering*/
    handleTagsToState = (options) => {
        if (options.length) {
            this.setState({
                sTags:options});
        }
        this.props.updateSelectedTags(options)/*a prop that gives this component's active selected tags to it's parent component <PostsItemList>*/
    }


    render() {
        return (
            <div className={'stylewrapper center db di w-60 cf'}>
                    <div className={'f6 f5-l input-reset bn fl black-80 bg-white pa1 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'}>
                       <AsyncSelect
                        isMulti
                        closeMenuOnSelect={false}
                        cacheOptions
                        components={makeAnimated()}
                        defaultOptions
                        loadOptions={this.promiseOptions}
                        className='tagSelect'
                        id='tagSelect'
                        type={'submit'}
                        onChange={this.handleTagsToState}
                        onInputChange={this.handleInputChange}/>
                    </div>
            </div>
        );
    }
}