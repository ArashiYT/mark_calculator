export type TErrorPageProps = { error: string }
export default function LoadingPage({ error }: TErrorPageProps) {
    return (
        <div>Error: {error}</div>
    )
}