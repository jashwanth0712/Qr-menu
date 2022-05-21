import React from 'react';
class SearchInput extends React.Component{
    state={entry:''}
    render(){
        return(
            <div className='ui segment'>
                <form className='ui form' action=''>
                    <div className='field'>
                        <div className='ui  icon input'>
                            <input 
                            type="text" 
                            placeholder='search...' 
                            onChange={(event)=>this.setState({entry:event.target.value.toUpperCase()})}
                            value={this.state.entry}
                            /*
                            (event)=> console.log(event.target.value)
                            */
                            //onsubmit onclick and other event handlers are also present
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchInput;