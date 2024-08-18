import React from 'react'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { ethers } from "ethers";
// import abi from"../Contract/MEVBot.json";
// function Slip(props) {
// const [state, setState] = useState({
//   provider: null,
//   signer: null,
//   contract: null,
// });
// const [account, setAccount] = useState("None");
// const { email } = useParams();
// const [data, setdata] = useState([]);
// const [amount, setAmount] = useState('');
// const [transactionHash, setTransactionHash] = useState('');

// const handleSendTransaction = async () => {
//   try {
//     console.log("wait");
//     const amountInWei = ethers.utils.parseEther("0.005");
//     const tx = await state.contract.pay({ value: amountInWei });

//     await tx.wait();
//     alert('Transaction successful!');
//   } catch (error) {
//     console.error('Error sending transaction:', error);
//   }
// };

// const handleLogin = async () => {
//   try {
//     const response = await fetch('/findslipdata', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data1 = await response.json();
//     setdata(data1);
//   } catch (error) {
//     console.error('Error checking user registration:', error);
//   }
// };

// useEffect(() => {
//   handleLogin();
//   const connectWallet = async () => {
//     try {
//       const { ethereum } = window;
//       if (!ethereum) {
//         window.open('https://metamask.io/');
//         return;
//       }

//       const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//       setAccount(accounts[0]);

//       ethereum.on('accountsChanged', (newAccounts) => {
//         setAccount(newAccounts[0]);
//       });

//       const provider = new ethers.providers.Web3Provider(ethereum);
//       const signer = provider.getSigner();
//       const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
//       const contractABI = abi.abi;
//       const contract = new ethers.Contract(contractAddress, contractABI, signer);

//       setState({ provider, signer, contract });
//       console.log(contract);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   connectWallet();
// }, []);
//   return (
//     <div></div>
//   )
// }

// export default Slip


function slip() {
  return (
    <div className='lg:w-1/4 p-5  bg-white text-zinc-900 font-display'>
      <div className='flex flex-col content-center items-center'>
        <img className='lg:w-[15vw] md:w-15 sm:w-14' src="img\logo\supreme.svg" alt="" />
        <div className='p-10 flex flex-col items-center border-1 border-zinc-900 rounded-3xl'>
          <h1 className='font-condensed lg:text-8xl md:text-5xl sm:text-4xl'>$20.0</h1>
          <h2 className='lg:text-3xl md:text-2xl sm:text-1xl'>Transaction Sent!</h2>
        </div>
        <div className='flex gap-2'>
          <div>
            <p>Transaction Hash: 0x1234567890</p>
          </div>
          <div>
            <img className='size-20' src="img\asserts\qr.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default slip