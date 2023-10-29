
import './style/App.css';
import Card from './components/card.js'
import React, { useState } from 'react';
import allCards from './assets/cards.json'


function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [cards, setCards] = useState([]);

    const [groceryValue, setGroceriesValue] = useState(0);
    const [travelValue, setTravelValue] = useState(0);
    const [recreationValue, setRecreationValue] = useState(0);


    const toggleSidebar = () => {
        let sidebarContent = document.getElementById('sidebarContent')

        if (isSidebarOpen)
            sidebarContent.classList.add('hidden')
        else
            setTimeout(() => { sidebarContent.classList.remove('hidden') }, 300)

        setIsSidebarOpen(!isSidebarOpen);
    };

    const addBankCards = (btnID) => {
        let newCards = allCards.filter((card) => card.bank == btnID)

        document.getElementById(btnID).disabled = true;
        setCards([...cards, ...newCards]);
    }


    return (
        <div className='app'>
            <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="menu-toggle" onClick={toggleSidebar}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <div id='sidebarContent' class='sidebarContent'>
                    <h1 class=''>Compare Cards</h1>
                    <button id='bank1' class='loadBtn' onClick={() => addBankCards('bank1')}> Load Bank 1's cards</button>
                    <button id='bank2' class='loadBtn' onClick={() => addBankCards('bank2')}> Load Bank 2's cards</button>
                    <button id='bank3' class='loadBtn' onClick={() => addBankCards('bank3')}> Load Bank 3's cards</button>
                </div>
            </div>

            <div class='cardContainer'>
                {
                    cards.map((card, i) => {
                        return <Card key={i} bankCard={card} groceryValue={groceryValue} setGroceriesValue={setGroceriesValue} travelValue={travelValue} setTravelValue={setTravelValue} recreationValue={recreationValue} setRecreationValue={setRecreationValue} />
                    })
                }
            </div>
        </div>
    );
}


export default App;
