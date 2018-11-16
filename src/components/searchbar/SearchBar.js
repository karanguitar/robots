import React, {Component} from 'react';

class SearchBar extends Component{

    
    render(){
        
        return (
            <div className="pa2">
                <input type="text"
                    className="pa3 ba b-green bg-lightest-blue"
                    onChange={this.props.handleChange}
    
                />
            </div>
        );
    }
}

export default SearchBar;
