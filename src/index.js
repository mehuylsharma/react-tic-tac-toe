import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Card from './Components/card';
import './stylesheets/card.css';
import Controller from './Components/controller';
import './stylesheets/controller.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dishes : [],
      healthSB : {},
      tastySB : {}
    }
    this.key = 'c2be40e62d8b42cabf73edbefecf6d47';
  }

  async componentDidMount() {
    //let fetchData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${this.key}`);
    /*
    let fetchData = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${this.key}`);
    let results = await fetchData.json();
    this.setState({ dishes: results.recipes}); 
    let fetchHealthySB = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?minProtein=30&maxCarbs=30&maxFat=5&apiKey=${this.key}`);
    let fetchTastySB = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?maxProtein=30&minCarbs=50&minFat=10&apiKey=${this.key}`);
    let healthSBResults = await fetchHealthySB.json();
    let tastySBResults = await fetchTastySB.json(); */

    let healthSBResults = {
      id: 4, 
      title: 'Mummy ki kadhi',
      vegetarian: true,
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
      healthScore: 100,
      sustainable: true 
    }

    let tastySBResults = {
      id: 5, 
      title: 'Ishu ka Cake',
      vegetarian: false,
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
      healthScore: 2,
      sustainable: false
    }
    
    this.setState({ dishes : [
        {
          id: 0,
          title: 'Layered Poppy Seed Pastries',
          vegetarian: true,
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
          instructions: 'No instruct',
          healthScore: 40,
          sustainable: true
        },
        {
          id: 1,
          title: 'Layered Poppy Seed Pastries',
          vegetarian: true,
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
          instructions: 'No instruct',
          healthScore: 40,
          sustainable: true
        },
        {
          id: 2,
          title: 'Layered Poppy Seed Pastries',
          vegetarian: true,
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
          instructions: 'No instruct',
          healthScore: 40,
          sustainable: true
        }
      ],
      healthSB : healthSBResults/* [Math.floor(Math.random()*6)] */,
      tastySB : tastySBResults/* [Math.floor(Math.random()*6)] */
    })
    console.log(this.state.healthSB)
  }

  render() {
    return (
      <div>
        <div className="healthSB">
          <Card key={this.state.healthSB.id} recipe={this.state.healthSB} />
        </div>
        <div className="main-content">
          {this.state.dishes.map(recipe => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className="controller"></div>
        <div className="tastySB">
          <Card key={this.state.tastySB.id} recipe={this.state.tastySB} />
        </div>
        <div className="controller">
          <Controller />
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
