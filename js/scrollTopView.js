
import React from 'react';
import ReactDOM from 'react-dom';
import { templates } from 'core/js/reactHelpers';

class ScrollTopView extends Backbone.View {

  className() {
    return 'scrolltop';
  }

  initialize() {
    this.render();
  }

  render() {
    ReactDOM.render(<templates.scrollTop {...this.model.toJSON()} />, this.el);
  }

};

export default ScrollTopView;
