// Team Adjective Nouns :: Noakai Aronesty, Kevin Cao
// SoftDev pd2
// K28
// 2022-02-08
// --------------------------------------------------

function fact(n) {
    if (n == 1) {
        return n
    }
    else return n * fact(n - 1)
}

fact(4)
fact(5)
fact(10)

function helpy(first, second, remain) {
    if (remain == 0) return second
    else if (remain == 1) return first
    else return helpy(second, (first + second), (remain - 1))
}

function fib(n) {
    return helpy(1, 1, (n))
}

fib(3)
fib(5)
fib(99)

function gcd(a, b) {
    if (a == b) return a
    else if (a > b) return gcd((a - b), b)
    else return gcd(a, (b - a))
}

gcd(48, 18)
gcd(18, 48)
gcd(25, 125)
