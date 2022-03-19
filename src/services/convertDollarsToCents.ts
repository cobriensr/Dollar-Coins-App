import { get } from 'svelte/store';
import { dollarAmt } from '../stores/content';

export default function centsConvert(event: Event): void {
    event.preventDefault()
    const dollarAmtValue: number = get(dollarAmt)
    const result: number = convertDollarstoCoins(dollarAmtValue)
    const selection = document.getElementById('converted') as HTMLInputElement
    selection.value = result.toString()
}

function convertDollarstoCoins(value: number): number {
    let cents: number = value * 100
    return cents
}