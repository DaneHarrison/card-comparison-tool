import '../style/card.css'
import Tooltip from './tooltip.js';
import SwitchSection from './SwitchSection.js'
import next from '../assets/chevron.svg'
import React, { useState } from 'react';

const MultiViewCard = ({ bankCard, groceryValue, setGroceriesValue, travelValue, setTravelValue, recreationValue, setRecreationValue }) => {
    const [showAltView, setShowAltView] = useState(false);

    return (
        <div class='container'>
            <div class='card'>
                <div class='header'>
                    <div class="cardSummary">
                        <picture>
                            <div class='imgSummary' style={{ backgroundColor: bankCard.color }} />
                        </picture>

                        <div class='summaryTxt'>
                            <h2 class='test blueText hover'> {bankCard.cardName}<img src={next} /></h2>

                            <ul>
                                {
                                    bankCard.tags && bankCard.tags.map((tag, i) => {
                                        return <li class='perkType'>{tag}</li>
                                    })
                                }
                            </ul>

                            {bankCard.welcomeOffer &&
                                <div>
                                    <p>
                                        <strong>Welcome offer: </strong>
                                        <span>You deserve to be </span>
                                        <Tooltip text={bankCard.welcomeOffer}>rewarded!</Tooltip>
                                    </p>
                                </div>
                            }
                        </div>
                    </div>

                    <hr />

                    <div class='tabs' onClick={() => setShowAltView(!showAltView)}><span className={showAltView ? '' : 'exagerate'}>.</span><span className={showAltView ? 'exagerate' : ''}>.</span></div>
                    <SwitchSection bankCard={bankCard} showAltView={showAltView} setShowAltView={setShowAltView} groceryValue={groceryValue} setGroceriesValue={setGroceriesValue} grocerySavings={bankCard.savings.food} travelValue={travelValue} setTravelValue={setTravelValue} travelSavings={bankCard.savings.travel} recreationValue={recreationValue} setRecreationValue={setRecreationValue} recreationalSavings={bankCard.savings.recreation} />

                    <div class='footer'>
                        <button class='applyBtn'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MultiViewCard;