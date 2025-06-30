// lexical scope

let a = "global"

const outer = () => {
    let a = "outer"

    const inner = () => {
        let b = "inner"
        console.log(a)
        console.log(b)
    }
    inner()
}

outer()


// Scope Chaining

const one = () => {
    let x = 1
    const two = () => {
        let y = 2
        const three = () => {
            let z = 3
            console.log(x, y, z)
        }
        three()
    }
    two()
}
one()