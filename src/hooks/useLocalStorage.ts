export default function useLocalStorage<T>(key: string) {
    return (value: T) => localStorage.setItem(key, typeof value == "string" ? value : JSON.stringify(value))
}