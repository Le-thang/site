(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(87)),i={id:"faq",title:"FAQ",sidebar_label:"FAQ",slug:"/faq"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Generating an SSH key",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/localhost-run/site/edit/main/docs/faq.md",version:"current",sidebar_label:"FAQ",sidebar:"docs",previous:{title:"Security",permalink:"/docs/security"}},l=[{value:"Generating an SSH key",id:"generating-an-ssh-key",children:[]},{value:"Common connectivity issues",id:"common-connectivity-issues",children:[{value:"I&#39;ve set up my SSH key in my account but my custom domain tunnel is denied",id:"ive-set-up-my-ssh-key-in-my-account-but-my-custom-domain-tunnel-is-denied",children:[]},{value:"&quot;localhost.run: Permission denied (publickey)&quot; error in your terminal on a free tunnel",id:"localhostrun-permission-denied-publickey-error-in-your-terminal-on-a-free-tunnel",children:[]},{value:"My tunnel name changes every time I connect",id:"my-tunnel-name-changes-every-time-i-connect",children:[]},{value:"&quot;connect_to localhost port 8080: failed&quot; error in your terminal",id:"connect_to-localhost-port-8080-failed-error-in-your-terminal",children:[]},{value:"&quot;Something went wrong opening the port forward, check your SSH command output for clues!&quot; in your browser",id:"something-went-wrong-opening-the-port-forward-check-your-ssh-command-output-for-clues-in-your-browser",children:[]},{value:"I can see requests to localhost:8080 when browsing my site thru localhost.run",id:"i-can-see-requests-to-localhost8080-when-browsing-my-site-thru-localhostrun",children:[]}]},{value:"I want to move my domain(s) to a new email login",id:"i-want-to-move-my-domains-to-a-new-email-login",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"generating-an-ssh-key"},"Generating an SSH key"),Object(a.b)("p",null,"If you don't already have an SSH key you can generate one with this command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"ssh-keygen -t rsa\n")),Object(a.b)("h2",{id:"common-connectivity-issues"},"Common connectivity issues"),Object(a.b)("h3",{id:"ive-set-up-my-ssh-key-in-my-account-but-my-custom-domain-tunnel-is-denied"},"I've set up my SSH key in my account but my custom domain tunnel is denied"),Object(a.b)("p",null,"try adding ",Object(a.b)("inlineCode",{parentName:"p"},"plan")," as your SSH user, like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"ssh -R example.com:80:localhost:8080 plan@localhost.run\n")),Object(a.b)("p",null,"If this doesn't fix it then please send an email for help."),Object(a.b)("h3",{id:"localhostrun-permission-denied-publickey-error-in-your-terminal-on-a-free-tunnel"},'"localhost.run: Permission denied (publickey)" error in your terminal on a free tunnel'),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you are using a custom domain subscription you need to use an SSH key, this hint isn't for you."))),Object(a.b)("p",null,"If you are using a free tunnel you can skip the SSH key check by adding ",Object(a.b)("inlineCode",{parentName:"p"},"nokey")," as your SSH user, like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"ssh -R 80:localhost:8080 nokey@localhost.run\n")),Object(a.b)("h3",{id:"my-tunnel-name-changes-every-time-i-connect"},"My tunnel name changes every time I connect"),Object(a.b)("p",null,"Free tunnels change domain names after a few hours. To keep your domain name between connections make sure you have an SSH key and that you are not using the ",Object(a.b)("inlineCode",{parentName:"p"},"nokey")," username."),Object(a.b)("h3",{id:"connect_to-localhost-port-8080-failed-error-in-your-terminal"},'"connect_to localhost port 8080: failed" error in your terminal'),Object(a.b)("p",null,"Double check that your local application is accessible on localhost and your specificed port by accessing http://localhost:{your local port} in your browser."),Object(a.b)("h3",{id:"something-went-wrong-opening-the-port-forward-check-your-ssh-command-output-for-clues-in-your-browser"},'"Something went wrong opening the port forward, check your SSH command output for clues!" in your browser'),Object(a.b)("p",null,"Check your running SSH command for hints, and double check that your local application is accessible on localhost and your specificed port by accessing http://localhost:{your local port} in your browser."),Object(a.b)("h3",{id:"i-can-see-requests-to-localhost8080-when-browsing-my-site-thru-localhostrun"},"I can see requests to localhost:8080 when browsing my site thru localhost.run"),Object(a.b)("p",null,"Many web frameworks generate full URLs using the domain they ",Object(a.b)("em",{parentName:"p"},"think")," they're running under, which can sometimes be localhost and the port they listen on."),Object(a.b)("p",null,"Google the name of your framework + reverse proxy for hints on how to fix issues like this."),Object(a.b)("h2",{id:"i-want-to-move-my-domains-to-a-new-email-login"},"I want to move my domain(s) to a new email login"),Object(a.b)("p",null,"Sometimes this is because you've lost access to the email you used to sign up, or maybe you simply prefer another email."),Object(a.b)("p",null,"To move a domain:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Cancel your existing custom domain subscription if you still have access to your old account."),Object(a.b)("li",{parentName:"ol"},"Set up your domain in your new account. It is fine that it is the same domain name."),Object(a.b)("li",{parentName:"ol"},"Verify it by changing the TXT record on your",Object(a.b)("inlineCode",{parentName:"li"},"_lhr")," subdomain to your new domain's id as instructed in the web console."),Object(a.b)("li",{parentName:"ol"},"Make payment for the new domain subscription. You will be credited for time remaining on the old domain in the next step, don't worry."),Object(a.b)("li",{parentName:"ol"},"Send a message to ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"mailto:help@localhost.run"}),"help@localhost.run")," explaining that you have to moved your domain to the new account. Your old subscription will be canceled and your new subscription credited with any remaining time.")))}u.isMDXComponent=!0},87:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,p=m["".concat(i,".").concat(d)]||m[d]||b[d]||a;return t?r.a.createElement(p,c(c({ref:n},s),{},{components:t})):r.a.createElement(p,c({ref:n},s))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);