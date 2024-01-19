export default function convertNumber(value: number): string {
    const roundedValue = Math.round(value);

    if(roundedValue > value) return `${roundedValue}+`;
    if(roundedValue < value) return `${roundedValue}-`;
    return value.toString();
}