const toUpper = (word) => (
    word.replace("_", " ")
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ")
) 

export default toUpper