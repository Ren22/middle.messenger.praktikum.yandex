import inputField from './inputField.tmpl';
import Handlebars from 'handlebars';
import './inputField.less'

const compiled = Handlebars.compile(inputField);

export default (
  inputFieldId, 
  inputFieldText, 
  inputFieldPlaceholder, 
  inputFieldType='text'
) => compiled(
  { 
    inputFieldId: inputFieldId,
    inputFieldText: inputFieldText,
    inputFieldPlaceholder: inputFieldPlaceholder,
    inputFieldType: inputFieldType
  }
)