export function format(input: string) {
    return input
        .split("-")
        .map(word => word[0]!.toUpperCase() + word.slice(1))
        .join(" ");
}
