(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{255:function(e,o,t){"use strict";t.r(o);var n={components:{Layout:t(176).a}},r=t(14),component=Object(r.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Layout",{attrs:{title:"approve erc1155 POS  ",description:"Approve erc1155 token",keywords:"pos client, erc1155, approve, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/content/docs/pos/erc1155/approve-all.md"}},[t("h1",{attrs:{id:"approveall"}},[e._v("approveAll")]),e._v(" "),t("p",[t("code",[e._v("approveAll")]),e._v(" method can be used to approve all tokens on root token.")]),e._v(" "),t("pre",[t("code",[e._v("const erc1155RootToken = posClient.erc1155(<root token address>,true);\n\nconst approveResult = await erc1155RootToken.approveAll();\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])])])}),[],!1,null,null,null);o.default=component.exports}}]);