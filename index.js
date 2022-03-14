export default function () {
    const items = []
    const ids = []
    return {
        find: mixed =>
            items.find(
                item =>
                    item.id ===
                    parseInt(isNaN(mixed) ? mixed.split('-', 2).shift() : mixed),
            ),
        push(item) {
            if (item.id && !ids.includes(item.id)) {
                items.push(item)
                ids.push(item.id)
            }
        },
        count: () => ids.length,
        ids: () => ids.concat(),
        latest: (n = 1) => ids.slice(-1 * n),
    }
}
