module.exports = function check(str, bracketsConfig) {
    const a = bracketsConfig.map( el => el.join('') )

    for (let i = 0; i < a.length; i++) {
        if (str.includes(a[i])) str = str.replace(a[i], ''), i = -1
    }
    return !str
}
