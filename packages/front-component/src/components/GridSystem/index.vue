<template>
  <div class="container-fluid">
    <section class="page-hero">
      <p>
        A grid system based on the flex display property made by <a
          class="link-primary"
          href="http://flexboxgrid.com/"
        >Flexbox Grid</a>.
      </p>
      <p>Version 6.3.1</p>
    </section>

    <!-- start -->
    <section class="page-section">
      <h2>Responsive</h2>
      <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md &amp; lg viewport widths.</p>
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div class="box-row" />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-8 col-lg-10">
          <div class="box-row" />
        </div>
        <div class="col-xs-6 col-sm-3 col-md-2 col-lg-1">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div class="box-row" />
        </div>
        <div class="col-xs-12 col-sm-9 col-md-10 col-lg-11">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-10 col-sm-6 col-md-8 col-lg-10">
          <div class="box-row" />
        </div>
        <div class="col-xs-2 col-sm-6 col-md-4 col-lg-2">
          <div class="box-row" />
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>&lt;div class="row">
    &lt;div class="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
        &lt;div class="box">Responsive&lt;/div>
    &lt;/div>
&lt;/div></code></pre>
      </section>
    </section>
    <section class="page-section">
      <br>
      <h2>Fluid</h2>
      <p>Percent based widths allow fluid resizing of columns and rows.</p>
      <div class="row">
        <div class="col-xs-12">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-1">
          <div class="box-row" />
        </div>
        <div class="col-xs-11">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <div class="box-row" />
        </div>
        <div class="col-xs-10">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3">
          <div class="box-row" />
        </div>
        <div class="col-xs-9">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4">
          <div class="box-row" />
        </div>
        <div class="col-xs-8">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-5">
          <div class="box-row" />
        </div>
        <div class="col-xs-7">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <div class="box-row" />
        </div>
        <div class="col-xs-6">
          <div class="box-row" />
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>.col-xs-6 {
  flex-basis: 50%;
}       </code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Simple Syntax</h2>
      <p>All you need to remember is row, column, content.</p>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet"
        ><code>&lt;div class="row">
    &lt;div class="col-xs-12">
        &lt;div class="box">12&lt;/div>
    &lt;/div>
&lt;/div></code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Offsets</h2>
      <p>Offset a column</p>
      <div class="row">
        <div class="col-xs-offset-11 col-xs-1">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-10 col-xs-2">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-9 col-xs-3">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-8 col-xs-4">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-7 col-xs-5">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-6 col-xs-6">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-5 col-xs-7">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-4 col-xs-8">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-3 col-xs-9">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-10">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-1 col-xs-11">
          <div class="box-row" />
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>&lt;div class="row">
    &lt;div class="col-xs-offset-3 col-xs-9">
        &lt;div class="box">offset&lt;/div>
    &lt;/div>
&lt;/div></code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Auto Width</h2>
      <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>
      <div class="row">
        <div class="col-xs">
          <div class="box-row" />
        </div>
        <div class="col-xs">
          <div class="box-row" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs">
          <div class="box-row" />
        </div>
        <div class="col-xs">
          <div class="box-row" />
        </div>
        <div class="col-xs">
          <div class="box-row" />
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>&lt;div class="row">
    &lt;div class="col-xs">
        &lt;div class="box">auto&lt;/div>
    &lt;/div>
&lt;/div></code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Nested Grids</h2>
      <p>Nest grids inside grids inside grids.</p>
      <div class="row">
        <div class="col-xs-7">
          <div class="box box-container">
            <div class="row">
              <div class="col-xs-9">
                <div class="box-first box-container">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="box-nested" />
                    </div>
                    <div class="col-xs-8">
                      <div class="box-nested" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-3">
                <div class="box-first box-container">
                  <div class="row">
                    <div class="col-xs">
                      <div class="box-nested" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-5">
          <div class="box box-container">
            <div class="row">
              <div class="col-xs-12">
                <div class="box-first box-container">
                  <div class="row">
                    <div class="col-xs-6">
                      <div class="box-nested" />
                    </div>
                    <div class="col-xs-6">
                      <div class="box-nested" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>&lt;div class="row">
    &lt;div class="col-xs">
        &lt;div class="box">
            &lt;div class="row">
                &lt;div class="col-xs">
                    &lt;div class="box">auto&lt;/div>
                &lt;/div>
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div></code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Alignment</h2>
      <p>Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column</p>
      <h4><code>.start-</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row start-xs">
              <div class="col-xs-6">
                <div class="box-nested" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet"
        ><code>&lt;div class="row start-xs">
    &lt;div class="col-xs-6">
        &lt;div class="box">
            start
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
      <h4><code>.center-</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row center-xs">
              <div class="col-xs-6">
                <div class="box-nested" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>&lt;div class="row center-xs">
    &lt;div class="col-xs-6">
        &lt;div class="box">
            start
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
      <h4><code>.end-</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row end-xs">
              <div class="col-xs-6">
                <div class="box-nested" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>&lt;div class="row end-xs">
    &lt;div class="col-xs-6">
        &lt;div class="box">
            end
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
      <p>Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.</p>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row center-xs end-sm start-lg">
              <div class="col-xs-6">
                <div class="box-nested" />
              </div>
            </div>
          </div>
        </div>
      </div>Example
      <section class="code-preview">
        <pre
          id="html"
          class="code-snippet display-on"
        ><code>&lt;div class="row center-xs end-sm start-lg">
    &lt;div class="col-xs-6">
        &lt;div class="box">
            All together now
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
      <h4><code>.top-</code></h4>
      <div class="row top-xs">
        <div class="col-xs-6">
          <div class="box-large" />
        </div>
        <div class="col-xs-6">
          <div class="box" />
        </div>
      </div>
      <section class="code-preview has-tab">
        <pre
          id="html-0"
          class="code-snippet"
        ><code>&lt;div class="row top-xs">
    &lt;div class="col-xs-6">
        &lt;div class="box">
            top
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
        <pre
          id="sass-0"
          class="code-snippet display-off"
        ><code>
.top-xs {
    -ms-flex-align: start;
    -webkit-box-align: start;
    align-items: flex-start;
}
        </code></pre>
      </section>
      <h4><code>.middle-</code></h4>
      <div class="row middle-xs">
        <div class="col-xs-6">
          <div class="box-large" />
        </div>
        <div class="col-xs-6">
          <div class="box" />
        </div>
      </div>
      <section class="code-preview has-tab">
        <pre
          id="html-1"
          class="code-snippet"
        ><code>&lt;div class="row middle-xs">
    &lt;div class="col-xs-6">
        &lt;div class="box">
            center
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
      <h4><code>.bottom-</code></h4>
      <div class="row bottom-xs">
        <div class="col-xs-6">
          <div class="box-large" />
        </div>
        <div class="col-xs-6">
          <div class="box" />
        </div>
      </div>
      <section class="code-preview">
        <pre
          id="html-2"
          class="code-snippet"
        ><code>&lt;div class="row bottom-xs">
    &lt;div class="col-xs-6">
        &lt;div class="box">
            bottom
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Distribution</h2>
      <p>Add classes to distribute the contents of a row or column.</p>
      <h4><code>.around-</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row around-xs">
              <div class="col-xs-2">
                <div class="box-nested" />
              </div>
              <div class="col-xs-2">
                <div class="box-nested" />
              </div>
              <div class="col-xs-2">
                <div class="box-nested" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview has-tab">
        <pre
          id="html-3"
          class="code-snippet"
        ><code>&lt;div class="row around-xs">
    &lt;div class="col-xs-2">
        &lt;div class="box">
            around
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2">
        &lt;div class="box">
            around
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2">
        &lt;div class="box">
            around
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
      <h4><code>.between-</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row between-xs">
              <div class="col-xs-2">
                <div class="box-nested" />
              </div>
              <div class="col-xs-2">
                <div class="box-nested" />
              </div>
              <div class="col-xs-2">
                <div class="box-nested" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview has-tab">
        <pre
          id="html-4"
          class="code-snippet"
        ><code>&lt;div class="row between-xs">
    &lt;div class="col-xs-2">
        &lt;div class="box">
            between
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2">
        &lt;div class="box">
            between
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2">
        &lt;div class="box">
            between
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Reordering</h2>
      <p>Add classes to reorder columns.</p>
      <h4><code>.first-</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row">
              <div class="col-xs-2">
                <div class="box-first">
                  1
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  2
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  3
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  4
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  5
                </div>
              </div>
              <div class="col-xs-2 first-xs">
                <div class="box-nested">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview has-tab">
        <pre
          id="html-5"
          class="code-snippet"
        ><code>&lt;div class="row">
    &lt;div class="col-xs-2">
        &lt;div class="box">
            1
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2">
        &lt;div class="box">
            2
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2 first-xs">
        &lt;div class="box">
            3
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
      <h4><code>.last-</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row">
              <div class="col-xs-2 last-xs">
                <div class="box-nested">
                  1
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  2
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  3
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  4
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  5
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-first">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview has-tab">
        <pre
          id="html-6"
          class="code-snippet"
        ><code>&lt;div class="row">
    &lt;div class="col-xs-2 last-xs">
        &lt;div class="box">
            1
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2">
        &lt;div class="box">
            2
        &lt;/div>
    &lt;/div>
    &lt;div class="col-xs-2">
        &lt;div class="box">
            3
        &lt;/div>
    &lt;/div>
&lt;/div>
        </code></pre>
      </section>
    </section>
    <section class="page-section">
      <h2>Reversing</h2>
      <h4><code>.reverse</code></h4>
      <div class="row">
        <div class="col-xs-12">
          <div class="box box-container">
            <div class="row reverse">
              <div class="col-xs-2">
                <div class="box-nested">
                  1
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-nested">
                  2
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-nested">
                  3
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-nested">
                  4
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-nested">
                  5
                </div>
              </div>
              <div class="col-xs-2">
                <div class="box-nested">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="code-preview has-tab">
        <pre
          id="html-7"
          class="code-snippet"
        ><code>&lt;div class=&quot;row reverse&quot;&gt;
    &lt;div class=&quot;col-xs-2&quot;&gt;
        &lt;div class=&quot;box&quot;&gt;
            1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-xs-2&quot;&gt;
        &lt;div class=&quot;box&quot;&gt;
            2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-xs-2&quot;&gt;
        &lt;div class=&quot;box&quot;&gt;
            3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
        </code></pre>
      </section>
    </section>
    <!-- end -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.page-nav {
  box-sizing: border-box;
  position: fixed;
  padding: 0.5rem;
  width: 100%;
  background: 0 0;
}
.page {
  z-index: 0;
  background: #eee;
}
.wrap {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
}
.page-section {
  padding-top: 3rem;
  margin-bottom: 3rem;
}
.page-features {
  width: 100%;
  background: #001a33;
  overflow: scroll;
}
.menu-button {
  position: fixed;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 1;
  box-sizing: border-box;
  padding: 0.45rem;
  height: 3rem;
  width: 3rem;
  background: #fff;
  border: 1px solid transparent;
  user-select: none;
}
.menu-button:hover {
  border: 1px solid #007fff;
  border-radius: 2px;
}
.menu-button:active {
  background: #eee;
  border: 1px solid transparent;
}
.open {
  transform: translate3d(-15rem, 0, 0);
}
.menu-button-icon {
  width: 2rem;
  height: 2rem;
}
.hero {
  box-sizing: border-box;
  padding: 2rem;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 2px;
}
.hero-headline {
  font-size: 3rem;
  white-space: nowrap;
  margin-bottom: 0;
}
.hero-copy {
  font-size: 1rem;
  margin-bottom: 0;
  padding: 0 2rem;
  text-align: center;
}
.slide-menu {
  display: block;
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 250px;
}
.menu {
  box-sizing: border-box;
  padding-bottom: 5rem;
  background: #001a33;
}
.menu-header {
  box-sizing: border-box;
  padding: 3rem 3rem 0;
  color: #eee;
}
.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu-list-item {
  height: 3rem;
  line-height: 3rem;
  font-size: 1rem;
  color: #007fff;
  background: 0 0;
  transition: all 0.2s ease-in;
}
.menu-link {
  box-sizing: border-box;
  padding-left: 3rem;
  display: block;
  color: #007fff;
  transition: color 0.2s ease-in;
}
.menu-link:hover {
  color: #3298ff;
  border-bottom: 0;
}
.link-top {
  align-self: flex-end;
}
.button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: 11rem;
  padding: 0 4rem;
  margin: 1rem;
  height: 3rem;
  line-height: 3rem;
  border: 1px solid #007fff;
  border-radius: 2px;
  color: #007fff;
  font-size: 1.25rem;
  transition: background-color, 0.15s;
}
.button:hover {
  background: #39f;
  border-color: #39f;
  color: #fff;
  text-shadow: 0 1px #007fff;
}
.button:active {
  background: #007fff;
  color: #fff;
  border-top: 2px solid #06c;
}
.box,
.box-first,
.box-large,
.box-nested,
.box-row {
  position: relative;
  box-sizing: border-box;
  min-height: 1rem;
  margin-bottom: 0;
  background: #007fff;
  border: 1px solid #fff;
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  color: #fff;
}
.box-row {
  margin-bottom: 1rem;
}
.box-first {
  background: #06c;
  border-color: #007fff;
}
.box-nested {
  background: #036;
  border-color: #007fff;
}
.box-large {
  height: 8rem;
}
.box-container {
  box-sizing: border-box;
  padding: 0.5rem;
}
.page-footer {
  box-sizing: border-box;
  padding-bottom: 3rem;
}
.tag {
  color: #000;
  font-weight: 400;
}
.end {
  text-align: end;
}
.invisible-xs {
  display: none;
  visibility: hidden;
}
.visible-xs {
  display: block;
  visibility: visible;
}

@media only screen and (min-width: 48rem) {
  body {
    font-size: 16px;
  }
  .slide-menu {
    width: 25%;
  }
  .open {
    transform: translate3d(0, 0, 0);
  }
  .hero-headline {
    font-size: 6rem;
    margin-bottom: 2rem;
  }
  .hero-copy {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  .box,
  .box-first,
  .box-large,
  .box-nested,
  .box-row {
    padding: 1rem;
  }
  .invisible-md {
    display: none;
    visibility: hidden;
  }
  .visible-md {
    display: block;
    visibility: visible;
  }
}
</style>
