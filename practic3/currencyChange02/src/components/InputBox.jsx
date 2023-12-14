import UseCurrencyInfo from "../hooks/useCurrencyInfo.js";

function InputBox({
                      label,
                      from,
                      to,
                      amount,
                      options=[],
                      className = "",
  }) {
    // let currVal = UseCurrencyInfo()
    console.log(from)
    console.log(to)
    console.log(amount)
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
