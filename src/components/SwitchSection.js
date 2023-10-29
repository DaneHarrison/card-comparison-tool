import '../style/SwitchSection.css';

const SwitchSection = ({ bankCard, showAltView, setShowAltView, groceryValue, setGroceriesValue, grocerySavings, travelValue, setTravelValue, travelSavings, recreationValue, setRecreationValue, recreationalSavings }) => {
    const MAX_VAL = 2000
    const MIN_VAL = 0


    const handleSliderChange = (e, setValue) => {
        setValue(e.target.value);
    };


    return (
        <div className="stretch" onClick={() => setShowAltView(!showAltView)}>
            {showAltView ? (
                <div className="column">
                    <div className="slider-container">
                        <label htmlFor="groceriesSlider">Groceries: ${groceryValue} per month</label>
                        <input type="range" min={MIN_VAL} max={MAX_VAL} value={groceryValue} className="slider" onClick={(e) => e.stopPropagation()} onDrag={(e) => handleSliderChange(e, setGroceriesValue)} onChange={(e) => handleSliderChange(e, setGroceriesValue)} />
                        <div class='spacebetween'>
                            <span>{MIN_VAL}</span>
                            <span>{MAX_VAL}</span>
                        </div>
                    </div>
                    <div className="slider-container">
                        <label htmlFor="travelSlider">Travel: ${travelValue} per month</label>

                        <input type="range" min={MIN_VAL} max={MAX_VAL} value={travelValue} className="slider" onClick={(e) => e.stopPropagation()} onDrag={(e) => handleSliderChange(e, setTravelValue)} onChange={(e) => handleSliderChange(e, setTravelValue)} />
                        <div class='spacebetween'>
                            <span>{MIN_VAL}</span>
                            <span>{MAX_VAL}</span>
                        </div>
                    </div>
                    <div className="slider-container">
                        <label htmlFor="recreationSlider">Recreation: ${recreationValue} per month</label>
                        <input type="range" min={MIN_VAL} max={MAX_VAL} value={recreationValue} className="slider" onClick={(e) => e.stopPropagation()} onDrag={(e) => handleSliderChange(e, setRecreationValue)} onChange={(e) => handleSliderChange(e, setRecreationValue)} />
                        <div class='spacebetween'>
                            <span>{MIN_VAL}</span>
                            <span>{MAX_VAL}</span>
                        </div>
                    </div>
                    {grocerySavings || travelSavings || recreationalSavings ?
                        <h3 class='savings'>Savings: ${(groceryValue * grocerySavings + travelValue * travelSavings + recreationValue * recreationalSavings).toFixed(2)}</h3> : null
                    }

                </div>
            ) : (
                <div className="flexEvenly">
                    <div class='centerTxt'>
                        <span class='cardProperty'>{bankCard.annualFee}</span>
                        <br />
                        <span>annual fee</span>
                    </div>
                    <div class='centerTxt'>
                        <span class='cardProperty'>{bankCard.purchaseInterest}</span>
                        <br />
                        <span>for purchases</span>
                    </div>
                    <div class='centerTxt'>
                        <span class='cardProperty'>{bankCard.advanceInterest}</span>
                        <br />
                        <span>for cash advances</span>
                    </div>
                </div>
            )}
        </div>
    );
};


export default SwitchSection;