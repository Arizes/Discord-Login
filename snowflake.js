  
/** -- Snowflake creating function --
 * 
 * A snowflake is essentially a unique id containing the timestamp at which the account was created
 * 
 * This is a 64 bit number
 * The first 42 bits of the number contain the timestamp
 * The next 5 bits make up the worker ID
 * The next 5 bits make up the process Num
 * The next 12 numbers make up the increment Num
 */

async function createSnowflake() {
     
    let workerNum = 1;
    let processNum = 1;
    let incrementNum = 1;
 
    // The epoch is a timestamp, I chose it to be when I started this project
    let epoch = 1609459200000;
    // Working out how long it has been since the epoch
    let sinceEpoch = Date.now() - epoch;
 
 
    // -- Working out the first 42 bits to the --
 
    // Converting milliseconds since epoch to binary
    let timestampBit = Number(sinceEpoch).toString(2);
    console.log(timestampBit)
    // Checking if the converted bit number is less than the required 42 bits, if so, we add zeros to the beginning
    if (timestampBit.toString().length < 42) {
        timestampBit = timestampBit.toString().padStart(42, "0");
    };
 
    // -- Working out the next 5 bits for the worker ID --
 
    // converting worker ID to bits
    let workerBit = Number(workerNum).toString(2);
 
    // Checking if the converted bit number is less than the required 5 bits
    if (workerBit.toString().length < 5) {
        workerBit = workerBit.toString().padStart(5, "0");
    };
 
    // -- Working out the next 5 bits for the process ID --
 
    // converting process ID to bits
    let processBit = Number(processNum).toString(2);
 
    // Checking if the converted bit number is less than the required 5 bits
    if (processBit.toString().length < 5) {
        processBit = processBit.toString().padStart(5, "0");
    };
 
    // -- Working out the next 12 bits for the increment number --
 
    // converting increment number to bits
    let incrementBit = Number(incrementNum).toString(2);
 
    // Checking if the converted bit number is less than the required 12 bits
    if (incrementBit.toString().length < 12) {
        incrementBit = incrementBit.toString().padStart(12, "0");
    };
 
    // Converting the 42+5+5+12 bits into a number
    let snowflakeID = String(timestampBit + workerBit + processBit + incrementBit);
    snowflakeID = parseInt(snowflakeID, 2)

    return snowflakeID;
};
 
async function convertSnowflake(id) {
    return ( (id/4139304) + 1609459200000 );
};

module.exports = { createSnowflake, convertSnowflake }
