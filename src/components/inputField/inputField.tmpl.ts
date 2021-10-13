export default `
<div 
  class="{{#if mediumMarginHorizontally}}mediumMarginLeft mediumMarginRight {{/if}}
  {{#if vbox}}inputfieldVBox{{else}}inputfieldHBox{{/if}}
  {{#if justifyContentSpaceBetween}}justifyContentSpaceBetween{{/if}}">
  <label for="{{inputFieldId}}" class="{{labelStyle}}">{{inputFieldText}}</label>
  <input 
    placeholder="{{inputFieldPlaceholder}}" 
    id="{{inputFieldId}}" 
    type="{{inputFieldType}}" 
    value="{{inputFieldValue}}" 
    name="{{inputFieldText}}"
    class="{{inpFieldStyle}}"
    {{#if readOnly}}readonly{{/if}}>
  <span class="error-message"></span>
</div>
`;
