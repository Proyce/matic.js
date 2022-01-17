(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{177:function(t,e){t.exports=[{text:"Introduction",url:"introduction"},{text:"Basics",url:"basics",expand:!0,children:[{text:"Installation",url:"installation"},{text:"How it works",url:"how-it-works"}]},{text:"Plasma",url:"plasma",expand:!0,children:[{text:"Initialize Plasma client",url:"initialize"},{text:"ERC20",url:"erc20",expand:!0,children:[{text:"Balance of erc20",url:"balanceOfERC20"},{text:"Approve ERC20",url:"approveERC20TokensForDeposit"},{text:"Deposit ERC20",url:"depositERC20ForUser"},{text:"Transfer ERC20",url:"transferERC20Tokens"},{text:"Start Withdraw",url:"startWithdraw"},{text:"Withdraw ERC20",url:"withdraw"}]},{text:"ERC721",url:"erc721",expand:!0,children:[{text:"Balance Of ERC721",url:"balanceOfERC721"},{text:"Safe Deposit ERC721",url:"safeDepositERC721Tokens"},{text:"Token Of Owner By Index ERC721",url:"tokenOfOwnerByIndexERC721"},{text:"Start Withdraw For NFT",url:"startWithdrawForNFT"},{text:"Withdraw ERC721",url:"withdrawNFT"},{text:"Transfer ERC721",url:"transferERC721Tokens"}]},{text:"Deposit Ethers",url:"depositEthers"},{text:"Deposit Status From TxHash",url:"depositStatusFromTxHash"},{text:"Get Transfer Signature",url:"getTransferSignature"},{text:"Transfer with Signature",url:"transferWithSignature"},{text:"Process Exit",url:"processExits"},{text:"Withdraw Manager",url:"WithdrawManager",expand:!0,children:[{text:"Exit Mintable Burnt Tokens",url:"startExitForMintableBurntToken"},{text:"Exit Metadata Mintable Burnt Tokens",url:"startExitForMetadataMintableBurntToken"}]}]},{text:"POS API",url:"pos",expand:!0,children:[{text:"Initialize POS client",url:"initialize"},{text:"ERC20",url:"ERC20",expand:!0,children:[{text:"Approve ERC20 Deposit",url:"approveERC20ForDeposit"},{text:"Deposit ERC20",url:"depositERC20ForUser"},{text:"Burn ERC20",url:"burnERC20"},{text:"Exit ERC20",url:"exitERC20"}]},{text:"ERC721",url:"ERC721",expand:!0,children:[{text:"Approve ERC721 Deposit",url:"approveERC721ForDeposit"},{text:"Deposit ERC721",url:"depositERC721ForUser"},{text:"Burn ERC721",url:"burnERC721"},{text:"Exit ERC721",url:"exitERC721"}]},{text:"ERC1155",url:"ERC1155",expand:!0,children:[{text:"Approve ERC1155 Deposit",url:"approveERC1155ForDeposit"},{text:"Deposit ERC1155",url:"depositERC1155ForUser"},{text:"Burn ERC1155",url:"burnERC1155"},{text:"Exit ERC1155",url:"exitERC1155"},{text:"Transfer ERC1155",url:"transferERC1155"}]},{text:"Deposit Ethers",url:"depositEtherForUser"}]}]},178:function(t,e,r){"use strict";var n={components:{Docs:r(176).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(177);this.savedLinks=t}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v2/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},305:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(178).a}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"undefined",description:"undefined",keywords:"undefined",contentSrc:"/home/runner/work/matic.js/matic.js/content/v2/docs/plasma/transferWithSignature.md"}},[r("h1",{attrs:{id:"transferwithsignature"}},[t._v("Transfer with Signature")]),t._v(" "),r("pre",[r("code",{staticClass:"js language-js"},[t._v("matic.transferWithSignature(sig, toSell, toBuy, orderFiller)\n")])]),t._v(" "),r("p",[t._v("Executes "),r("a",{attrs:{href:"https://github.com/maticnetwork/contracts/blob/a9b77252ece25adcd3f74443411821883bb970e6/contracts/child/BaseERC20.sol#L35"}},[t._v("transferWithSig")]),t._v(" on child token (erc20/721). Takes input as signature generated from "),r("code",[t._v("matic.getTransferSignature")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("sig")]),t._v(": signature generated with matic.getTransferSignature")]),t._v(" "),r("li",[r("code",[t._v("toSell")]),t._v(": object")]),t._v(" "),r("li",[r("code",[t._v("token")]),t._v(": address of token owned,")]),t._v(" "),r("li",[r("code",[t._v("amount")]),t._v(": amount/tokenId of the token to sell,")]),t._v(" "),r("li",[r("code",[t._v("expiry")]),t._v(": expiry (block number after which the signature should be invalid),")]),t._v(" "),r("li",[r("code",[t._v("orderId")]),t._v(": a random 32 byte hex string,")]),t._v(" "),r("li",[r("code",[t._v("spender")]),t._v(": the address approved to execute this transaction")]),t._v(" "),r("li",[r("code",[t._v("toBuy")]),t._v(": object")]),t._v(" "),r("li",[r("code",[t._v("token")]),t._v(": address of token to buy")]),t._v(" "),r("li",[r("code",[t._v("amount")]),t._v(": amount/tokenId of token to buy")]),t._v(" "),r("li",[r("code",[t._v("orderFiller")]),t._v(": address of user to transfer the tokens to")]),t._v(" "),r("li",[r("code",[t._v("options")]),t._v(" see "),r("a",{attrs:{href:"#approveERC20TokensForDeposit"}},[t._v("more infomation here")])]),t._v(" "),r("li",[r("code",[t._v("from")]),t._v(": the approved spender in the "),r("code",[t._v("toSell")]),t._v(" object by the token owner")])]),t._v(" "),r("p",[t._v("transfers "),r("code",[t._v("toSell.token")]),t._v(" from "),r("code",[t._v("tokenOwner")]),t._v(" to "),r("code",[t._v("orderFiller")])]),t._v(" "),r("pre",[r("code",{staticClass:"javascript language-javascript"},[t._v("// sell order\nlet toSell = {\n  token: token2,\n  amount: value2,\n  expiry: expire,\n  orderId: orderId,\n  spender: spender,\n}\n\n// buy order\nlet toBuy = {\n  token: token1,\n  amount: value1,\n}\n\nlet sig = await matic.getTransferSignature(toSell, toBuy, { from: tokenOwner })\n\nconst tx = await matic.transferWithSignature(\n  sig, // signature with the intent to buy tokens\n  toSell, // sell order\n  toBuy, // buy order\n  orderFiller, // order fulfiller\n  {\n    from: spender, // approved spender\n  }\n)\n")])]),t._v(" "),r("hr")])}),[],!1,null,null,null);e.default=component.exports}}]);