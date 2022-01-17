(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{207:function(e,n,t){"use strict";t.r(n);var r={components:{Layout:t(176).a}},o=t(14),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",{attrs:{title:"ABIManager",description:"matic.js internally use ABIManager for handling abi management for you",keywords:"abi manager, api type, read, write, polygon",contentSrc:"/home/runner/work/matic.js/matic.js/content/docs/advanced/abi-manager.md"}},[t("h1",{attrs:{id:"abimanager"}},[e._v("ABIManager")]),e._v(" "),t("p",[t("code",[e._v("matic.js")]),e._v(" internally uses "),t("code",[e._v("ABIManager")]),e._v(" for handling ABI management, configuration for you. All of the ABI and config are taken from "),t("a",{attrs:{href:"https://github.com/maticnetwork/static"}},[e._v("static repo")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"changeabi"}},[e._v("Change ABI")]),e._v(" "),t("p",[e._v("Sometimes you are required to change the ABI, particularly when you are developing a contract. You can do so by using "),t("code",[e._v("ABIManager")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Syntax")])]),e._v(" "),t("pre",[t("code",[e._v("import { ABIManager } from '@maticnetwork/maticjs'\n\n\nconst manager = new ABIManager(<network name>,<version>);\nawait manager.init();\n\n// set abi\n\nmanager.setABI(<contract name>,<bridge type>, <abi value>);\n\n// get abi\n\nmanager.getABI(<contract name>,<bridge type>);\n")])]),e._v(" "),t("p",[e._v("The network name, contract name, bridge name etc can be taken from our "),t("a",{attrs:{href:"https://github.com/maticnetwork/static/tree/master/network"}},[e._v("official static repo")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Example")])]),e._v(" "),t("pre",[t("code",[e._v("import { ABIManager } from '@maticnetwork/maticjs'\n\n\nconst manager = new ABIManager('testnet','mumbai');\nawait manager.init();\n\n// set abi\n\nmanager.setABI('ERC20PredicateProxy','pos', 'abi value');\n\n// get abi\n\nmanager.getABI('ERC20PredicateProxy','pos');\n")])])])}),[],!1,null,null,null);n.default=component.exports}}]);