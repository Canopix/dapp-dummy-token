export const shortAddress = (address:string) => {
    const ln = address.length;
    return `${address.slice(0,6)}...${address.slice(ln - 4, ln)}`
}   