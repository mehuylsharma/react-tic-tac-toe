import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <p className="card-title">
                    {this.props.recipe.title}
                </p>
                <div className="card-img-container">
                    <img src={this.props.recipe.image} alt="recipe"></img>
                </div>
                <div className="card-info card-veg">
                    <span className="bold">Vegetarian:</span> {`${this.props.recipe.vegetarian === true ? 'Yes' : 'No'}`}
                </div>
                <div className="card-info card-sustainable">
                    <span className="bold">Storable:</span> {`${this.props.recipe.sustainable === true ? 'Yes' : 'No'}`}
                </div>
                <div className="card-info card-health-score">
                    <span className="bold">Health Score:</span> {this.props.recipe.healthScore}
                </div>
                <div className="card-instructions">
                    <span className="bold">Instructions:</span> {this.props.recipe.instructions}
                </div>
            </div>
        )
    }
}