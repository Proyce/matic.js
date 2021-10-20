(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{172:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"API Architecture",url:"api-architecture"},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"isApproved",url:"is-approved"},{text:"isApprovedAll",url:"is-approved-all"},{text:"approve",url:"approve"},{text:"approveAll",url:"approve-all"},{text:"deposit",url:"deposit"},{text:"depositMany",url:"deposit-many"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawStartMany",url:"withdraw-start-many"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitMany",url:"withdraw-exit-many"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"withdrawExitFasterMany",url:"withdraw-exit-faster-many"},{text:"isWithdrawExited",url:"is-withdraw-exited"},{text:"isWithdrawExitedMany",url:"is-withdraw-exited-many"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"safeDeposit",url:"safe-deposit"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"setProofApi",url:"set-proof-api"},{text:"Advanced",url:"advanced",expand:!0,children:[{text:"ABIManager",url:"abi-manager"},{text:"Plugin",url:"plugin"}]}]},173:function(t,e,r){"use strict";var n={components:{Docs:r(174).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(172);this.savedLinks=t}},l=r(14),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},254:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(173).a}},l=r(14),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"transfer ERC20 Plasma",description:"Transfer erc20 plasma tokens",keywords:"plasma client, erc20, transfer, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/plasma/erc20/transfer.md"}},[r("h1",{attrs:{id:"transfer"}},[t._v("transfer")]),t._v(" "),r("p",[r("code",[t._v("transfer")]),t._v(" method can be used to transfer amount from one address to another address.")]),t._v(" "),r("pre",[r("code",[t._v("const erc20Token = plasmaClient.erc20(<token address>);\n\nconst result = await erc20Token.transfer(<to>,<amount>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);