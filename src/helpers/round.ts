export default function round(num: number, rad: number): number {
    return Math.floor(num * Math.pow(10, rad)) / Math.pow(10, rad);
}