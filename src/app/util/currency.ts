

export default function thousandCommaSeparator(number: number) {
    return number.toLocaleString('en-US', { maximumFractionDigits: 2 }) // "1,234.57"
}