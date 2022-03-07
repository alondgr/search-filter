import React from 'react';
import '../Components/styles/Result.css';

export default function Result({ chosenCrypto, clicked }) {
    return (
        <div>{clicked && (
            <div className="result">
                {'Name :   ' + chosenCrypto.name} <br />
                {'Symbol :   ' + chosenCrypto.symbol}<br />
                {'Blockchain :   ' + chosenCrypto.blockchain}
            </div>
        )}
        </div>
    )
}
