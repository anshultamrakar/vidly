import React, { Component } from 'react'
import { ethers } from "ethers";





class MetaMask extends Component {
    state = { 
      accountAddress : "",
      balance : 0,
      transactionId : "",
     } 

     handleConnectWallet = () => {
        if(window.ethereum){
        window.ethereum.request({method:'eth_requestAccounts'}).then(account => this.accountChangedHandler(account[0]))

        }else{
            console.log("connnect wallet")
        }
     }
     

     accountChangedHandler = (newAccount) => {
        this.setState({accountAddress : newAccount})
        this.getUserBalance(newAccount)
        this.getTransactionCount()
        this.getTransactionReceipt()
        this. getBlockTransactionCountByHash()
    }
    
    getUserBalance = () => {
        window.ethereum.request({
            method : 'eth_getBalance',
            params : [this.state.accountAddress , "latest"]
          }).then(balance => {
              this.setState({balance :ethers.utils.formatEther(balance)} )
          })
    }


    getTransactionCount = () => {
        window.ethereum.request({
            method : 'eth_getTransactionCount',
            params : [this.state.accountAddress , "latest"]
        }).then(value => console.log(parseInt(value) , "-------------transaction count------------"))
    }


    getTransactionReceipt = () => {
        window.ethereum.request({
            method : 'eth_getTransactionReceipt',
            params : ["0xb3bc555926ed8922f874893a7a72ca5d26c234f29ee1c7373b17567e55c47b2b"]
        }).then(value => this.setState({transactionId :value.transactionHash}))
    }

    getBlockTransactionCountByHash = () => {
        window.ethereum.request({
            method : 'eth_getBlockByHash',
            params : [this.state.transactionId, true]
        }).then(result => console.log(result))   
     }

    // sendTransaction = async () => {
    //     let params = [{
    //         "from": "0xceeb1381a8cfd81c11e2882d07a8e28b462a32c8",
    //             "to": "0xCFA26379e986405114853Bc9Fe822a5Cda9F3dC8",
    //             "gas": Number(21000).toString(16),
    //             "gasPrice": Number(2500000).toString(16),
    //             "value": Number(1000000000000000).toString(16)
    //     }]
    //     let result = await window.ethereum.request({method : 'eth_sendTransaction' , params}).catch((err) => {
    //         console.log(err)
    //     })
    // }


    
   
    render() { 
        return (
            <div>
                <h2>Welcome to metamask wallet</h2>
                <button className='btn btn-primary' onClick={this.handleConnectWallet}>Connect to wallet</button>
                <p>Address : {this.state.accountAddress}</p>
                <p>Balance : {this.state.balance} ETH</p>
                <p>Amount : {this.state.amountTransfer} ETH</p>
                <p>transaction ID : {this.state.transactionId} </p>
                <button  className='btn btn-warning'>Send to</button>
                <button className='btn btn-warning m-4'>Deposite</button>
            </div>
        );
    }
}
 
export default MetaMask;