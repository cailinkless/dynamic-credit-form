import React from 'react';
import PropTypes from 'prop-types';

// Take in the handleDeleteCredit function
const CreditInputs = ({ idx, creditState, handleCreditChange, handleDeleteCredit }) => {

  const creditId = `name-${idx}`;
  const roleId = `role-${idx}`;
  const bioId = `bio-${idx}`;

  return (
      <div key={`credit-${idx}`}>
        <label htmlFor={creditId}>{`Credit #${idx + 1} Name`}</label>
        <input
          type="text"
          name={creditId}
          data-idx={idx}
          id={creditId}
          className="name" 
          value={creditState[idx].name}
          onChange={handleCreditChange}
        />
        <label htmlFor={roleId}>Role</label>
        <input
          type="text"
          name={roleId}
          data-idx={idx}
          id={roleId}
          className="role"
          value={creditState[idx].role}
          onChange={handleCreditChange}
        />
        <label htmlFor={bioId}>Bio</label>
        <input
          type="text"
          name={bioId}
          data-idx={idx}
          id={bioId}
          className="bio"
          value={creditState[idx].bio}
          onChange={handleCreditChange}
        />
        {/* Make Delete Button */}
        <button data-idx={idx} onClick={handleDeleteCredit}>Delete Credit</button> 
      </div>
    );
};
CreditInputs.propTypes = {
  idx: PropTypes.number,
  creditState: PropTypes.array,
  handleCreditChange: PropTypes.func,
//   Assign handleDeleteCredit a PropType
  handleDeleteCredit: PropTypes.func
};
export default CreditInputs;