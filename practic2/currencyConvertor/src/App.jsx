import { useState } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import InputBox from "./components/InputBox.jsx";

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
      <h1>Currency app</h1>
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
                    currencyOption={options}
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
                    currencyOption={options}
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
