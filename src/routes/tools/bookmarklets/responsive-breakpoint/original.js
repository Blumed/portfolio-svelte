;(function () {  
    htmlMarkup();
   getDimensions();

    // window.resize event listener
    window.addEventListener("resize", function (timeout, delay) {
      // clear the timeout
      clearTimeout(timeout);
      // start timing for event "completion"
      timeout = setTimeout(getDimensions, delay);
    });
    // window.resize callback function
    function getDimensions() {
      let screenWidth = document.getElementById('screen-width');
      return (screenWidth.innerText = window.innerWidth.toString());
    }

    function htmlMarkup() {
      const config = {
        xxl: {
          background: "red",
          maxWidth: "1400px",
          text: 'xxl'
        },
        xl: {
          background: "blue",
          maxWidth: "1200px",
          text: 'xl'
        },
        lg: {
          background: "green",
          maxWidth: "992px",
          text: 'lg'
        },
        md: {
          background: "black",
          maxWidth: "768px",
          text: 'md'
        },
        sm: {
          background: "orange",
          maxWidth: "576px",
          text: 'sm'
        },
        xs: {
          background: "purple",
          maxWidth: "400px",
          text: 'xs'
        },
        static: {
          wrap: 'width: 100%;letter-spacing:1px;background-color:purple;text-align:right;font-family:helvetica !important;font-weight:100;line-height:20px;color:white;margin:auto;top:0;right:0;left:0;position:fixed;z-index:2147483647;font-size:18px;height:36px;text-rendering:optimizeLegibility;',
          panel: 'position: absolute;padding: 3px 0;margin: 0 auto;width: 100%;right: 0;left: 0;top:0;bottom:0;',
          font: 'font-size: inherit;color:inherit;font-weight:100;'
        }
      };

      function label(size, text, breakpoint) {
        const label = document.createElement('p');
        label.setAttribute('style', 'margin: 0;padding: 5px; color: inherit;font-weight: inherit;');
        label.setAttribute('title', `breakpoint: ${breakpoint}`);
        label.textContent = text;
        size.appendChild(label);
      }

      const container = document.createElement('div');
      container.className = 'xxxxxx_wraper_xxxxx';
      container.setAttribute('style', config.static.wrap);
      document.body.appendChild(container);

      const close = document.createElement('button');
      close.setAttribute('type', 'button');
      close.className = 'xxxxxx_close_xxxxx';
      close.setAttribute('style', `position:absolute;left:30px;top:8px !important;background-color:white;border-radius:50%;color:black;z-index:30;font-size:15px;font-weight:100;width:20px;height:20px;cursor:pointer;display:flex;justify-content:center;align-items:center;border:1px solid black;`);
      close.onclick =       function removeBookmarklet() {
        container.remove();
      }
      container.appendChild(close);

      const closeText = document.createElement('span');
      closeText.setAttribute('style', 'margin-top:-3px;')
      closeText.textContent = `x`;
      close.appendChild(closeText);

      const xxl = document.createElement('section');
      xxl.className = 'xxxxxx_xxl_xxxxx';
      xxl.setAttribute('style', `max-width:${config.xxl.maxWidth};background-color:${config.xxl.background};${config.static.panel}z-index: 1;${config.static.font}`);
      label(xxl, config.xxl.text, config.xxl.maxWidth);
      container.appendChild(xxl);

      const xl = document.createElement('section');
      xl.className = 'xxxxxx_xl_xxxxx';
      xl.setAttribute('style', `max-width:${config.xl.maxWidth};background-color:${config.xl.background};${config.static.panel}z-index: 2;${config.static.font}`);
      label(xl, config.xl.text, config.xl.maxWidth);
      container.appendChild(xl);

      const lg = document.createElement('section');
      lg.className = 'xxxxxx_lg_xxxxx';
      lg.setAttribute('style', `max-width:${config.lg.maxWidth};background-color:${config.lg.background};${config.static.panel}z-index: 3;${config.static.font}`);
      label(lg, config.lg.text, config.lg.maxWidth);
      container.appendChild(lg);

      const md = document.createElement('section');
      md.className = 'xxxxxx_md_xxxxx';
      md.setAttribute('style', `max-width:${config.md.maxWidth};background-color:${config.md.background};${config.static.panel}z-index: 4;${config.static.font}`);
      label(md, config.md.text, config.md.maxWidth);
      container.appendChild(md);

      const sm = document.createElement('section');
      sm.className = 'xxxxxx_sm_xxxxx';
      sm.setAttribute('style', `max-width:${config.sm.maxWidth};background-color:${config.sm.background};${config.static.panel}z-index: 5;${config.static.font}`);
      label(sm, config.sm.text, config.sm.maxWidth);
      container.appendChild(sm);

      const xs = document.createElement('section');
      xs.className = 'xxxxxx_xs_xxxxx';
      xs.setAttribute('style', `max-width:${config.xs.maxWidth};background-color:${config.xs.background};${config.static.panel}z-index: 6;${config.static.font}`);
      label(xs, config.xs.text, config.xs.maxWidth);
      container.appendChild(xs);

      const dimensions = document.createElement('section');
      dimensions.className = 'xxxxxx_display_xxxxx';
      dimensions.setAttribute('style', `width:200px;height:100%;margin:0 auto;position:relative;text-align:center;color:inherit;padding-top: 10px;letter-spacing:inherit;z-index:7;${config.static.font}`);
      container.appendChild(dimensions);

      const screenWidth = document.createElement('span');
      screenWidth.setAttribute('style', config.static.font);
      screenWidth.setAttribute('id', 'screen-width');
      dimensions.appendChild(screenWidth);
    }
}());