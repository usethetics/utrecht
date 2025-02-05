// https://github.com/formio/formio.js/blob/c107d1ae4989bc5bbc6dcc706bcaf2476130c83f/src/templates/bootstrap/radio/form.ejs

export default `<div
  class="utrecht-form-field-radio utrecht-form-field-radio--distanced"
  data-class="form-radio radio"
  ref="radioGroup"
  role="{{ctx.component.type === 'selectboxes' ? 'group' : 'radiogroup'}}"
  aria-required="{{ctx.input.component.validate.required}}"
  aria-labelledby="l-{{ctx.instance.id}}-{{ctx.component.key}}"
  {% if (ctx.component.description) { %}
    aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"
  {% } %}
>
  {% ctx.values.forEach(function(item) { %}
  <div class="form-check{{ctx.inline ? '-inline' : ''}}" ref="wrapper">
    <label class="utrecht-form-label utrecht-form-label--radio" data-class="form-check-label label-position-{{ ctx.component.optionsLabelPosition }}" for="{{ctx.id}}{{ctx.row}}-{{item.value}}">
      {% if (ctx.component.optionsLabelPosition === 'left' || ctx.component.optionsLabelPosition === 'top') { %}
      <span>{{ctx.t(item.label, { _userInput: true })}}</span>
      {% } %}
      <{{ctx.input.type}}
        ref="input"
        {% for (var attr in ctx.input.attr) { %}
        {{attr}}="{{ctx.input.attr[attr]}}"
        {% } %}
        value="{{item.value}}"
        {% if (ctx.value && (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { %}
          checked=true
        {% } %}
        {% if (item.disabled) { %}
          disabled=true
        {% } %}
        id="{{ctx.id}}{{ctx.row}}-{{item.value}}"
        role="{{ctx.component.type === 'selectboxes' ? 'checkbox' : 'radio'}}"
      >
      {% if (!ctx.component.optionsLabelPosition || ctx.component.optionsLabelPosition === 'right' || ctx.component.optionsLabelPosition === 'bottom') { %}
      <span>{{ctx.t(item.label, { _userInput: true })}}</span>
      {% } %}
    </label>
  </div>
  {% }) %}
</div>`;
