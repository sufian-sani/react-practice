import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from "./components/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('bdt')
    const [amount, setAmount] = useState(0)

    // const [currency, setCurrency] = useState([])

    let currencyObject = useCurrencyInfo(from)
    let options = Object.keys(currencyObject)
    const [convertedAmount, setConvertedAmount] = useState(0)

    const convert = () => {
        setConvertedAmount(amount * currencyObject[to])
        console.log(currencyObject[to])
    }

    // console.log(convertedAmount)
    // console.log(amount)
    // console.log(from)
    // console.log(to)

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
      >
          <div className="w-full">
              <div
                  className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label='From'
                              selectCurrency = {from}
                              amount = {amount}
                              options = {options}
                              onAmountChange={(amount)=>setAmount((amount))}
                              onCurrencyChange={(currency) => setFrom(currency)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label='To'
                              selectCurrency = {to}
                              options = {options}
                              toAmount
                              amount={convertedAmount}
                              onCurrencyChange={(currency) => setTo(currency)}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default App
