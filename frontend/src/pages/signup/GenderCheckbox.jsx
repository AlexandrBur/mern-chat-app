import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-5 mt-3">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className="label-text">Муж</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 ${selectedGender === 'female' ? 'selected' : ''}`}>
          <span className="label-text">Жен</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
