import Adapt from 'core/js/adapt';
import ScrollTopView from './ScrollTopView';

class ScrollTop extends Backbone.Controller {

  initialize() {
    this.listenTo(Adapt, 'pageView:postRender menuView:postRender', this.onPageRender);
  }

  onPageRender(view) {
    if (this.scrollTop) this.scrollTop.remove();

    const config = Adapt.course.get('_scrollTop');
    if (!config || !config._isEnabled) return;

    const model = new Backbone.Model(config);
    this.scrollTop = new ScrollTopView({ model });

    this.scrollTop.$el.insertAfter(view.$el);
  }
};
export default new ScrollTop();
