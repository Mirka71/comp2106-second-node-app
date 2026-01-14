function createRateLimiter(max: number): () => void {
    //assign var to function and initialize function to start at 0
    let attempts: number = 0;

    // RATE LIMITING
    function makeAttempt(): void {
        if (attempts >= max) {
            console.log('Too bad. You are at the max # of attempts.');
            return;
        }
        attempts++; // increment # of attempts
        console.log(`Attempt # ${attempts}`);
    }
    return makeAttempt;
}

// instantiate limiter
const limiter = createRateLimiter(3);
limiter();
limiter();
limiter();
limiter();
limiter();