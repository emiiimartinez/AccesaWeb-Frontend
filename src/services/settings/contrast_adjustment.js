import React from 'react';
import { getI18nText } from '../../docs/i18n/i18n';
const options = [
  {
    label: getI18nText('blackWhite'),
    value: 'blackWhite'
  },
  {
    label: getI18nText('blackYellow'),
    value: 'blackYellow'
  }
];
function Form({ valueContrast, onChangeContrast }) {
  return (
    <div>
      <label>{getI18nText('select-a-contrast')}</label><br/>
      <select value={valueContrast} onChange={e => onChangeContrast(e.target.value)}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

Form.propTypes = {
  onChangeContrast: React.PropTypes.func.isRequired,
  valueContrast: React.PropTypes.string.isRequired
};

function setContrast(value) {
  localStorage.setItem('input.name.contrast', value);
  document.dispatchEvent(new Event('changeInput'));
}
function valueContrast() {
  return localStorage.getItem('input.name.contrast') ? localStorage.getItem('input.name.contrast') : '';
}
function ContrastFunction() {
  return (
    <Form valueContrast={valueContrast()} onChangeContrast={setContrast} />
  );
}
export default {
  name: 'i18n-name',
  description: 'i18n-description',
  icon: 'fa fa-mouse-pointer',
  i18n: {
    en: {
      'name': 'Contrast',
      'description': 'Change contrast'
    },
    es: {
      'name': 'Contraste',
      'description': 'Cambia el contraste'
    }
  },
  contexts: [{ functionComponent: ContrastFunction }]
};