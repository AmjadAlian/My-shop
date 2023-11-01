import React, { useEffect, useState } from 'react'

export default function Pizza() {
    let [pizza, setPizza] = useState([]);
    let [carrot, setCarrot] = useState([]);
    let [tomato, setTomato] = useState([]);
/* pizza section*/
    const getPizza = async () => {
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let pizzaData = await response.json();
        setPizza(pizzaData.recipes)
        
    }
    /*carrot section */
    const getCarrot = async () => {
        let CarrotResponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=carrot");
        let CarrotData = await CarrotResponse.json();
        setCarrot(CarrotData.recipes)
        console.log(CarrotData);
    }
    /*tomato section */
    const getTomato = async () => {
        let TomatoResponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=tomato");
        let TomatoData = await TomatoResponse.json();
        setCarrot(TomatoDatarecipes)
        console.log(TomatoData);
    }
    useEffect(() => {getCarrot(); }, []);
    useEffect(() => {getPizza(); }, []);
    useEffect(() => {getTomato(); }, []);
    return (
        <>
        <div className='pizza-section  my-5'>
            <h2 className='text-center '> Pizza </h2>
        <div className='row'>
            {pizza.map((element) =>{
                return <div className='col-md-3 mt-5' key={element.recipe_id}>
                    <h2 className='fs-5 '>{element.title}</h2>
                    <img src ={element.image_url} alt="" className='img-fluid' />
                    
                </div>
            })}
        </div>
        </div>
        <div className="carrot-section">
        <h2 className='text-center  pb-4'> Carrot</h2>
        <div className='row'>
            {carrot.map((Celement) =>{
                return <div className='col-md-3' key={Celement.recipe_id}>
                    <h2 className='fs-5 mt-5'>{Celement.title}</h2>
                    <img src ={Celement.image_url} alt="" className='img-fluid' />
                    
                </div>
            })}
        </div>
        </div>
        <div className="Tomato-section my-5">
        <h2 className='text-center  pb-4'> Tomato</h2>
        <div className='row'>
            {carrot.map((Telement) =>{
                return <div className='col-md-3 mt-5' key={Telement.recipe_id}>
                    <h2 className='fs-5 '>{Telement.title}</h2>
                    <img src ={Telement.image_url} alt="" className='img-fluid' />
                    
                </div>
            })}
        </div>
        </div>
        </>
    )
}
