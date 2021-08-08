var css = ":host {\n  width: 37px;\n}\n\n#m {\n  margin: 0;\n  width: inherit;\n  position: relative;\n  display: inline-block;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  transition: 0.5s ease-in-out;\n  cursor: default;\n  transition: all 0.2s ease-in-out;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* this trick makes the height 75% of the width (4:3 ratio) */\n#m:after {\n  padding-top: 75%;\n  display: block;\n  content: \"\";\n}\n\n@media (hover: hover) {\n  :host(:hover) {\n    opacity: 0.75;\n  }\n}\n\n#m span {\n  display: block;\n  position: absolute;\n  height: 20%;\n  width: 100%;\n  background: var(--wc-menu-button-color, #000000);\n  border-radius: 10%;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  transition: 0.25s ease-in-out;\n}\n\n#m span:nth-child(1) {\n  top: 0%;\n}\n\n#m span:nth-child(2),\n#m span:nth-child(3) {\n  top: 40%;\n}\n\n#m span:nth-child(4) {\n  top: 80%;\n}\n\n:host([open]) #m span:nth-child(1) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n\n:host([open]) #m span:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n:host([open]) #m span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n:host([open]) #m span:nth-child(4) {\n  top: 40%;\n  width: 0%;\n  left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFHL0IsdUJBQXVCO0VBSXZCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHdDQUF3QztBQUMxQzs7QUFFQSw2REFBNkQ7QUFDN0Q7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0RBQWdEO0VBQ2hELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLCtCQUErQjtFQUcvQix1QkFBdUI7RUFJdkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBOztFQUVFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0NBQWdDO0VBR2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlDQUFpQztFQUdqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7QUFDWCIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAzN3B4O1xufVxuXG4jbSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiB0aGlzIHRyaWNrIG1ha2VzIHRoZSBoZWlnaHQgNzUlIG9mIHRoZSB3aWR0aCAoNDozIHJhdGlvKSAqL1xuI206YWZ0ZXIge1xuICBwYWRkaW5nLXRvcDogNzUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgOmhvc3QoOmhvdmVyKSB7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgfVxufVxuXG4jbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13Yy1tZW51LWJ1dHRvbi1jb2xvciwgIzAwMDAwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgb3BhY2l0eTogMTtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNtIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAwJTtcbn1cblxuI20gc3BhbjpudGgtY2hpbGQoMiksXG4jbSBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogNDAlO1xufVxuXG4jbSBzcGFuOm50aC1jaGlsZCg0KSB7XG4gIHRvcDogODAlO1xufVxuXG46aG9zdChbb3Blbl0pICNtIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiA0MCU7XG4gIHdpZHRoOiAwJTtcbiAgbGVmdDogNTAlO1xufVxuXG46aG9zdChbb3Blbl0pICNtIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuOmhvc3QoW29wZW5dKSAjbSBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG46aG9zdChbb3Blbl0pICNtIHNwYW46bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiA0MCU7XG4gIHdpZHRoOiAwJTtcbiAgbGVmdDogNTAlO1xufVxuIl19 */";

var template = "<div id=\"m\">\n  <span></span>\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n";

// @ts-ignore
// using a template so it only needs to be parsed once, whereas setting
// innerHTML directly in the custom element ctor means the HTML would get parsed
// for every custom element on the page
const tmpl = document.createElement("template");
tmpl.innerHTML = `<style>${css}</style>${template}`;
class WcMenuButton extends HTMLElement {
    constructor() {
        super();
        // from https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
        this.upgradeProperty = (prop) => {
            if (this.hasOwnProperty(prop)) {
                let value = this[prop];
                delete this[prop];
                this[prop] = value;
            }
        };
        this.handleMenuButtonClick = (_e) => {
            this.open = !this.open;
        };
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this._menuButton = shadowRoot.getElementById("m");
    }
    connectedCallback() {
        if (this._menuButton) {
            this._menuButton.addEventListener("click", this.handleMenuButtonClick);
        }
        this.upgradeProperty("open");
    }
    get open() {
        return this.hasAttribute("open");
    }
    set open(isOpen) {
        if (isOpen) {
            if (!this.hasAttribute("open")) {
                this.setAttribute("open", "");
            }
        }
        else {
            if (this.hasAttribute("open")) {
                this.removeAttribute("open");
            }
        }
    }
    static get observedAttributes() {
        return ["open"];
    }
    // private _bodyOverflow: string | null | undefined;
    // private _bodyPosition: string | null | undefined;
    attributeChangedCallback(_name, _oldValue, _newValue) {
        if (_name === "open") {
            if (!this.open) {
                this.dispatchEvent(new CustomEvent("closed", {
                    bubbles: true
                }));
            }
            else {
                this.dispatchEvent(new CustomEvent("opened", {
                    bubbles: true
                }));
            }
        }
    }
}
customElements.define("wc-menu-button", WcMenuButton);

export { WcMenuButton };