import React, { useState } from 'react';
import CreditInputs from './CreditInputs';

const Form = () => {

    const [productionState, setProductionState] = useState({
        title: '',
        production_note: '',
    });

    const handleProductionChange = (e) => setProductionState({
        ...productionState,
        [e.target.name]: [e.target.value],
    });

    const blankCredit = { name: '', role: '', bio: '' };
    const [creditState, setCreditState] = useState([
        {...blankCredit},
    ]);

    const addCredit = () => {
        setCreditState([...creditState, {...blankCredit}]);
    };

    const handleCreditChange = (e) => {
        const updatedCredits = [...creditState];
        updatedCredits[e.target.dataset.idx][e.target.className] = e.target.value;
        setCreditState(updatedCredits);
      };

    return (
        <form>            
            <label htmlFor="title">Title</label>   
            <input type="text" name="title" id="title" value={productionState.title} onChange={handleProductionChange} /> 
            <label htmlFor="production_note">Production Note</label> 
            <input type="textarea" name="production_note" id="production_note" value={productionState.production_note} onChange={handleProductionChange} />
            {
                creditState.map((val, idx) => (
                        <CreditInputs
                            key={`credit-${idx}`}
                            idx={idx}
                            creditState={creditState}
                            handleCreditChange={handleCreditChange}
                        />
                ))   
            }
            <input type="button" value="Add New Credit" onClick={addCredit}/>       
            <input type="submit" value="Submit" />        
        </form>
    )
}

export default Form;