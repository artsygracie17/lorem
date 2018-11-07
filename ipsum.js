module.exports = {
    parallel (fnArray, cb) {
        let numRan = 0 /* Keeps track of how many functions have run so that we know when to properly trigger callback */
        fnArray.forEach(fn => {
            fn(() => { /* This is essentially when done() gets called */
                numRan++
                numRan===fnArray.length && cb() /* Check if all functions have run, and if so trigger callback */
            })
        })

    },
    series (fnArray, cb) {
        let fnDone = true /* Keeps track of whether there is a function being executed */
        let leftOverFns = [] /* Skipped over functions during timeout get stored here */
        let i=0
        fnArray.map((fn, i) => {
            if (fnDone) { /* Makes sure there isn't a function executing before executing current function */
                fnDone = false
                fn(() => { 
                    fnDone = true /* This is when done() gets called, so here we can say that there is no function being executed */
                    this.series(leftOverFns, cb) /* Recursively calls on series with leftover functions */
                    i===fnArray.length-1 && cb() /* If on last index, trigger callback */
                })
            } else {
                leftOverFns.push(fn) /* If function already executing, add current function to leftovers */
            }
        })
    }
}