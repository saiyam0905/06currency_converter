// components/InputBox.js
import React from 'react';

const InputBox = ({ label, amount, currencyOptions, onCurrencyChange, selectCurrency, onAmountChange, amountDisable }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        disabled={amountDisable}
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;
