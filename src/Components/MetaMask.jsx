import React, { Component } from 'react'
import { ethers } from "ethers";

class MetaMask extends Component {
    state = { 
      accountAddress : "",
      balance : 0,
      amountTransfer : 0,
     } 

     handleConnectWallet = () => {
        if(window.ethereum){
         window.ethereum.request({method:'eth_requestAccounts'}).then(account => this.accountChangedHandler(account[0]))
        }else{
            console.log("connnect wallet")
        }
     }
 

    getUserBalance = () => {
        window.ethereum.request({
            method : 'eth_getBalance',
            params : [ "0xb6f547cb89114b8bdf36851b6dcdda27220e67a1", "latest"]
          }).then(balance => {
              this.setState({balance :ethers.utils.formatEther(balance)} )
          })
    }

    accountChangedHandler = (newAccount) => {
       this.setState({accountAddress : newAccount})
        this.getUserBalance(newAccount)
    }
    
    render() { 
        return (
            <div>
                <h2>Welcome to metamask wallet</h2>
                <button className='btn btn-primary' onClick={this.handleConnectWallet}>Connect to wallet</button>
                <p>Address : {this.state.accountAddress}</p>
                <p>Balance : {this.state.balance} ETH</p>
            </div>
        );
    }
}
 
export default MetaMask;