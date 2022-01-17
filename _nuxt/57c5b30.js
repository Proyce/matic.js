(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{266:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(176).a}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"withdrawExitFasterMany erc1155 POS  ",description:"withdrawExitFasterMany method can be used to exit the withdraw process by using the txHash from withdrawStartMany method.",keywords:"pos client, erc1155, withdrawExitFasterMany, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/content/docs/pos/erc1155/withdraw-exit-faster-many.md"}},[r("h1",{attrs:{id:"withdrawexitfastermany"}},[t._v("withdrawExitFasterMany")]),t._v(" "),r("p",[r("code",[t._v("withdrawExitFasterMany")]),t._v(" method can be used to exit the withdraw process by using the txHash from "),r("code",[t._v("withdrawStartMany")]),t._v(" method.")]),t._v(" "),r("div",{staticClass:"highlight mb-20px mt-20px"},[t._v("\nIt is fast because it generates proof in backend. You need to configure "),r("a",{attrs:{href:"docs/set-proof-api"}},[t._v("setProofAPI")])]),t._v(" "),r("p",[r("strong",[t._v("Note")]),t._v("- withdrawStart transaction must be checkpointed in order to exit the withdraw.")]),t._v(" "),r("pre",[r("code",[t._v("const erc1155RootToken = posClient.erc1155(<root token address>, true);\n\nconst result = await erc1155RootToken.withdrawExitFasterMany(<burn tx hash>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);