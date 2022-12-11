import React, { Component } from 'react'
import { ethers } from "ethers";

class MetaMask extends Component {
    state = { 
      accountAddress : "",
      balance : 0,
      amountTransfer : 0,
      status : ""
     } 

     handleConnectWallet = () => {
        if(window.ethereum){
          
        window.ethereum.request({method:'eth_requestAccounts'}).then(account => this.accountChangedHandler(account[0]))

        window.ethereum.request({
            method : 'eth_getTransactionReceipt',
            params : ["0x5ac8d062505e496d14d75411326eae3295173995141caac6551a79f225a66612"]
        }).then(result => console.log(ethers.utils.formatEther(result.gasUsed)))
    

        window.ethereum.request({
            method : 'eth_getTransactionByHash',
            params : ["0x5ac8d062505e496d14d75411326eae3295173995141caac6551a79f225a66612"]
        }).then(result => this.setState({ amountTransfer :ethers.utils.formatEther(result.value)}))

    

        }else{
            console.log("connnect wallet")
        }
     }
 



    getUserBalance = () => {
        window.ethereum.request({
            method : 'eth_getBalance',
            params : [this.state.accountAddress , "latest"]
          }).then(balance => {
              this.setState({balance :ethers.utils.formatEther(balance)} )
          })
    }

    
    accountChangedHandler = (newAccount) => {
        console.log(newAccount)
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
                <p>Amount : {this.state.amountTransfer} ETH</p>
                <p>Status : {this.state.status} ETH</p>
            </div>
        );
    }
}
 
export default MetaMask;