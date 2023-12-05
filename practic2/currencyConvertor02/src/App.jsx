import { useState } from 'react'
import InputBox from "./components/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
// import './App.css'

function App() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount*currencyInfo[to])
    }

  return (
    <>
        <h1>Currecny App</h1>
        <form
            onSubmit={(e)=>{
                e.preventDefault();
                convert()
            }}
        >
            <div>
                <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency)=>setAmount(amount)}
                    selectCurrency={from}
                    onAmountChange={(amount)=>setAmount((amount))}
                />
            </div>
            <button
                onClick={swap}
            >
                swap
            </button>

            <div>
                <InputBox
                    label="From"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency)=>setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                />
            </div>
            <button>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

        </form>
    </>
  )
}

export default App
