export type TNextProps = () => void
export default async function next(task: TNextProps) {
    await Promise.resolve(task())
}