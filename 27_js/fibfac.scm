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

(define (fibb n)
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

;(fibb 4)
;(fibb 10)
;(fibb 100)

(define fibbAlt
  (lambda(n)
    (if (< n 2)
        n
        (+ (fibbAlt(- n 1)) (fibbAlt (- n 2)))
    )
  )
)

;(fibbAlt 4)
;(fibbAlt 10)
;(fibbAlt 100) ;DO NOT USE