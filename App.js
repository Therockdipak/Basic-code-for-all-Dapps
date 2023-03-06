import { useState, useEffect } from "react";
import {ethers} from "ethers";
import abi from "./contract/chai.json";

function App() {
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  });

  useEffect(() => {
    const connectWallet = async () => {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractAbi = abi.abi;

    try{
      const {ethereum} = window;

      if (ethereum){
        const account = await ethereum.request({method: "eth_requestAccounts", });
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress,contractAbi,signer);
      setState(provider, contract, signer);
    } catch(error){
      console.log(error);
    }
    }
    connectWallet();

  },[]);

  console.log(state);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
