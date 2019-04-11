import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
//import '@polymer/iron-ajax/iron-ajax.js';
//<iron-ajax auto="" url="https://test.sparqlist.glyconavi.org/api/GlycoSample_Disease_List_chart" handle-as="json" last-response="{{diseaseresultdata}}"></iron-ajax>

class IdSearch extends PolymerElement {
  static get template() {
    return html`
<style type="text/css">
</style>
<div class="globalNavSearch">
  <form on-submit="handleSubmit">
    <input type="text" placeholder="Accession Number" name="aNum" on-submit="handleSubmit" id="aNum"/>
  </form>
</div>
selection: {{selection}}
`;
  }
  static get properties() {
    return {
      selection: {
        notify: true,
        type: String,
        value: function() {
          return new String();
        }
      }
    };
  }

  ready() {
    super.ready();
    console.log("ready");
  }
  handleClick(e) {
    console.log('click');
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    console.log(e);
    
    // GoogleChart chart = this.shadowRoot.getElementById("selectionchart");
    // console.log(chart);
    
    // console.log(this.selection);
    this.selection=this.shadowRoot.getElementById("aNum").value;
  }
  _handleAjaxPostError(e) {
    console.log('error: ' + e);
  }
}

customElements.define('gtc-wc-id-search', IdSearch);
