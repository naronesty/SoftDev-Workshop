#lang Racket
(define fact
  (lambda (n)
    (if (= n 1)
      n
      (* (fact (- n 1)) n)
     )
    )
  )

;(fact 5)
;(fact 4)
;(fact 8)

(define (fib n)
   (helpy 1 1 (- n 2))
  )

(define (helpy first second remainder)
   (cond ((= remainder 0) second)
         ((= remainder -1) first)
         (else (helpy second
	                 (+ first second)
			 (- remainder 1))
               )
         )
  )

;(fib 4)
;(fib 10)
;(fib 100)

(define fibAlt
  (lambda(n)
    (if (< n 2)
        n
        (+ (fibAlt(- n 1)) (fibAlt (- n 2)))
    )
  )
)

;(fibAlt 4)
;(fibAlt 10)
;(fibAlt 100) ;DO NOT USE

(define gcd
  (lambda(a b)
    (if (= a b)
        a
        (if (> a b)
            (gcd (- a b) b)
            (gcd a (- b a))
            )
        )
    )
  )

;(gcd 48 18)
;(gcd 18 48)
;(gcd 25 125)
