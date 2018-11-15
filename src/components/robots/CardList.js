import React, { Component } from 'react';
import Card from './Card'


class CardList extends Component {
    


    render() {
        const robots = this.props.robots
        const robotList = robots.map((robot) =>{
           return <Card key={robot.id} name={robot.name} email={robot.email} />
        })

        return (
            <div>
                {robotList}
            </div>
        );
    }
}

export default CardList;
