export default `const bookmarklet = { name: "bookmakrlet__pixel-to-rem", version: "1.6" };

try {
  // Create unique names
  const component = {
    wrapper: \`\${bookmarklet.name}__wrapper\`,
    close: \`\${bookmarklet.name}__close\`,
    rootLabel: \`\${bookmarklet.name}__root-label\`,
    rootInput: \`\${bookmarklet.name}__root-input\`,
    pixelLabel: \`\${bookmarklet.name}__pixel-label\`,
    pixelInput: \`\${bookmarklet.name}__pixel-input\`,
    pixelCopy: \`\${bookmarklet.name}}__pixel-copy\`,
    remLabel: \`\${bookmarklet.name}__rem-label\`,
    remInput: \`\${bookmarklet.name}__rem-input\`,
    remCopy: \`\${bookmarklet.name}__rem-copy\`
  };

  // Helper functions
  const createElement = (type, className, attributes = {}) => {
    const element = document.createElement(type);
    element.className = className;
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  };

  const copyText = text => {
    try { navigator.clipboard.writeText(text); } 
    catch (err) { console.error("Failed to copy:", err); }
  };

  // Create container
  const container = createElement("div", component.wrapper);
  document.body.appendChild(container);

  // Create close button
  const close = createElement("button", component.close, { type: "button" });
  close.textContent = "Close";
  close.onclick = () => container.remove();
  container.appendChild(close);

  // SVG icon
  const copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>';

  // Create input groups
  const createInputGroup = (labelText, inputId, copyId, copyTitle) => {
    const label = createElement("label", inputId.replace('input', 'label'));
    label.textContent = labelText;
    container.appendChild(label);

    const input = createElement("input", inputId, { type: "number", id: inputId, placeholder: "0" });
    label.appendChild(input);

    if (copyId) {
      const copyBtn = createElement("button", copyId, { type: "button", id: copyId, title: copyTitle });
      copyBtn.innerHTML = copyIcon;
      copyBtn.onclick = () => copyText(\`\${input.value}\${labelText}\`);
      label.appendChild(copyBtn);
    }

    return input;
  };

  // Create inputs
  const rootInput = createInputGroup("root", component.rootInput);
  const pixelInput = createInputGroup("px", component.pixelInput, component.pixelCopy, "Copy Pixel");
  const remInput = createInputGroup("rem", component.remInput, component.remCopy, "Copy Rem");

  // Set initial values
  const rootFontSize = window.getComputedStyle(document.documentElement).fontSize.replace('px', '');
  rootInput.value = rootFontSize;
  pixelInput.value = 10;
  remInput.value = pixelInput.valueAsNumber / rootInput.valueAsNumber;

  // Add event listeners
  const updateValues = source => {
    if (source === rootInput || source === pixelInput) {
      remInput.value = pixelInput.valueAsNumber / rootInput.valueAsNumber;
    } else if (source === remInput) {
      pixelInput.value = remInput.valueAsNumber * rootInput.valueAsNumber;
    }
  };

  for (const input of [rootInput, pixelInput, remInput]) {
    input.addEventListener("input", event => updateValues(event.target));
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") container.remove();
  });

  // Add styles
  const colors = {
    blue: '#b9e7de',
    white: '#ffffff',
    grayLight: '#edece8',
    grayMid: '#6b6b6b',
    grayDark: '#333333',
    black: '#161613'
  };

  const style = document.createElement("style");
  style.textContent = \`
    .\${component.wrapper} {
      width: 100%; letter-spacing: 1px; background-color: \${colors.blue} !important;
      padding: 10px 60px; color: \${colors.black} !important; margin: auto !important;
      position: fixed !important; top: 0 !important; right: 0 !important; left: 0 !important;
      z-index: 2147483647 !important; font-size: 18px !important; font-family: helvetica !important;
      display: flex !important; justify-content: center !important; gap: 2rem !important;
    }
    .\${component.close} {
      position: absolute; left: 0 !important; top: 0 !important; background-color: \${colors.grayLight} !important;
      color: \${colors.black} !important; z-index: 30 !important; padding: 8px !important;
      font-size: 18px !important; height: 100% !important; cursor: pointer !important;
      display: flex !important; justify-content: center !important; align-items: center !important;
      border: 0 !important; font-weight: normal !important; border-right: 2px solid \${colors.black} !important;
    }
    .\${component.close}:hover { background-color: \${colors.white} !important; }
    .\${component.wrapper} label {
      padding: 0 0 0 8px !important; border-top: 2px solid \${colors.grayDark} !important;
      border-left: 2px solid \${colors.grayDark} !important; border-bottom: 2px solid \${colors.grayDark} !important;
      background-color: #eee !important; font-family: monospace !important; letter-spacing: 0.5px !important;
      display: flex !important; align-items: center !important; margin: 0 !important; font-size: inherit !important;
    }
    .\${component.wrapper} input[type='number'] {
      padding: 3px 6px !important; border-top: 0 !important; border-bottom: 0;
      border-right: 2px solid \${colors.grayDark} !important; margin: 0 0 0 8px !important;
      font-size: inherit; height: auto !important; color: \${colors.black} !important;
      background-color: \${colors.white} !important; border-radius: 0 !important; -moz-appearance: textfield;
    }
    .\${component.wrapper} input + button {
      height: 100% !important; border: 0 !important; padding: 0 !important; margin: 0 !important;
      cursor: pointer; border-right: 2px solid \${colors.grayDark} !important;
      background-color: \${colors.grayMid} !important; display: flex !important; align-items: center !important;
    }
    .\${component.wrapper} input::-webkit-outer-spin-button, .\${component.wrapper} input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    .\${component.wrapper} input::placeholder {
      font-weight: bold !important; color: inherit !important;
    }
  \`;
  container.appendChild(style);
  pixelInput.focus();
  console.log(\`\${bookmarklet.name}: \${bookmarklet.version}\`);
} catch (error) {
  console.log(\`\${bookmarklet.name} : \${bookmarklet.version} : \${error}\`);
}`;