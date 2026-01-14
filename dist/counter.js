function counter() {
    let count = 0;
    return () => {
        count++; // put after return to only print once and not reset each time it's printed?
        console.log(count);
    };
}
// assign var to fn which initializes counter to 0
const increment = counter();
//invoke 
increment();
increment();
increment();
