Vue.component('message', {
    props: ['title', 'body'],
    template: '\
    <article class="message"> \n\
    <div class="message-header"> \n\
        <p>{{title}}</p> \n\
        <button class="delete"></button> \n\
    </div> \n\
    <div class="message-body"><slot/></div> \n\
    </article>'
});

Vue.component('navbar', {
    props: ['logourl',],
    template: '\n\
    <nav class="navbar is-transparent ">\n\
    <div class="navbar-brand">\n\
                    <a class="navbar-item" href="http://bulma.io">\n\
                        <img src="{{logourl}}" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">\n\
                    </a><div class="navbar-burger burger" data-target="navMenuTransparentExample"  v-on:click="toogleNav">\n\
                <span></span>\n\
                <span></span>\n\
                <span></span>\n\
              </div>\n\
            </div>\n\
            <div id="navMenuTransparentExample" class="navbar-menu" v-bind:class="{\'is-active\': navbarActive}">\n\
              <div class="navbar-start">\n\
                <a class="navbar-item " href="http://bulma.io/">\n\
                  Home\n\
                </a>\n\
                <div class="navbar-item has-dropdown is-hoverable">\n\
                  <a class="navbar-link  is-active" href="/documentation/overview/start/">\n\
                    Docs\n\
                  </a>\n\
                  <div class="navbar-dropdown is-boxed">\n\
                    <a class="navbar-item " href="/documentation/overview/start/">\n\
                      Overview\n\
                    </a>\n\
                    <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">\n\
                      Modifiers\n\
                    </a>\n\
                    <a class="navbar-item " href="http://bulma.io/documentation/grid/columns/">\n\
                      Grid\n\
                    </a>\n\
                    <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">\n\
                      Elements\n\
                    </a>\n\
                    \n\
                      <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">\n\
                        Components\n\
                      </a>\n\
\n\
                    <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">\n\
                      Layout\n\
                    </a>\n\
                    <hr class="navbar-divider">\n\
                    <div class="navbar-item">\n\
                      <div>version <p class="has-text-info">0.4.3</p></div>\n\
                    </div>\n\
                  </div>\n\
                </div>\n\
                <div class="navbar-item has-dropdown is-hoverable">\n\
                  <a class="navbar-link " href="http://bulma.io/blog/">\n\
                    Blog\n\
                  </a>\n\
                  <div id="blogDropdown" class="navbar-dropdown is-boxed" data-style="width: 18rem;">\n\
\n\
                      <a class="navbar-item" href="/2017/03/10/new-field-element/">\n\
                        <div class="navbar-content">\n\
                          <p>\n\
                            <small class="has-text-info">10 Mar 2017</small>\n\
                          </p>\n\
                          <p>New field element (for better controls)</p>\n\
                        </div>\n\
                      </a>\n\
\n\
                      <a class="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">\n\
                        <div class="navbar-content">\n\
                          <p>\n\
                            <small class="has-text-info">11 Apr 2016</small>\n\
                          </p>\n\
                          <p>Metro UI CSS grid with Bulma tiles</p>\n\
                        </div>\n\
                      </a>\n\
\n\
                      <a class="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">\n\
                        <div class="navbar-content">\n\
                          <p>\n\
                            <small class="has-text-info">09 Feb 2016</small>\n\
                          </p>\n\
                          <p>Blog launched, new responsive columns, new helpers</p>\n\
                        </div>\n\
                      </a>\n\
\n\
                    <a class="navbar-item" href="http://bulma.io/blog/">\n\
                      More posts\n\
                    </a>\n\\n\
                    <hr class="navbar-divider">\n\
                    <div class="navbar-item">\n\
                      <div class="navbar-content">\n\
                        <div class="level is-mobile">\n\
                          <div class="level-left">\n\
                            <div class="level-item">\n\
                              <strong>Stay up to date!</strong>\n\
                            </div>\n\
                          </div>\n\
                          <div class="level-right">\n\
                            <div class="level-item">\n\
                              <a class="button is-rss is-small" href="http://bulma.io/atom.xml">\n\
                                <span class="icon is-small">\n\
                                  <i class="fa fa-rss"></i>\n\
                                </span>\n\
                                <span>Subscribe</span>\n\
                              </a>\n\
                            </div>\n\
                          </div>\n\
                        </div>\n\
                      </div>\n\
                    </div>\n\
                  </div>\n\
                </div>\n\
              </div>\n\
\n\
              <div class="navbar-end">\n\
                <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">\n\
                  Github\n\
                </a>\n\
                <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">\n\
                  Twitter\n\
                </a>\n\
                <div class="navbar-item">\n\
                  <div class="field is-grouped">\n\
                    <p class="control">\n\
                      <a id="twitter"\n\
                        class="button"\n\
                        data-social-network="Twitter"\n\
                        data-social-action="tweet"\n\
                        data-social-target="http://bulma.io"\n\
                        target="_blank"\n\
                        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&url=http://bulma.io&via=jgthms">\n\
                        <span class="icon">\n\
                          <i class="fa fa-twitter"></i>\n\
                        </span>\n\
                        <span>Tweet</span>\n\
                      </a>\n\
                    </p>\n\
                    <p class="control">\n\
                      <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">\n\
                        <span class="icon">\n\
                          <i class="fa fa-download"></i>\n\
                        </span>\n\
                        <span>Download</span>\n\
                      </a>\n\
                    </p>\n\
                  </div>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </nav>'


});

var app = new Vue({
    el: '#root',
    data: {
        navbarActive: false
    },

    methods: {
        toogleNav: function () {
            this.navbarActive = !this.navbarActive;
        }
    }
});