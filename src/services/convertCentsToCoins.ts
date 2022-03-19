import { get } from 'svelte/store';
import { dollarAmt } from '../stores/content';

export default function coinsConvert (event: Event): void {
    event.preventDefault()
    const dollarAmtValue: number = get(dollarAmt)
    const returnedResult: string = convertCentstoCoins(dollarAmtValue)
    const selected = document.getElementById('finalOutput') as HTMLElement
    selected.innerHTML = returnedResult
}

function convertCentstoCoins (value: number): string {
    let cents: number = value * 100
    const quarters: number = 25
    const dimes: number = 10
    const nickels: number = 5
    const pennies: number = 1
    let quarterResults: number = Math.floor(cents / quarters)
    let quarterRemainder: number = cents - (quarters * quarterResults)
    let dimeResults: number = Math.floor(quarterRemainder / dimes)
    let dimeRemainder: number =  quarterRemainder - (dimes * dimeResults)
    let nickelResults: number = Math.floor(dimeRemainder / nickels)
    let nickelRemainder: number = dimeRemainder - (nickels * nickelResults)
    let pennyResults: number = Math.floor(nickelRemainder / pennies)
    let pennyRemainder: number = nickelRemainder - (pennies * pennyResults)

    return `The smallest combination of coins available for this amount of coins is a total of ${quarterResults} quarters, ${dimeResults} dimes, ${nickelResults} nickels and ${pennyResults} pennies`
}
