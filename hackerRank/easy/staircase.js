//! Staircase
//! This is a staircase of size 4
//!    #
//!   ##
//!  ###
//! ####

const staircase = (n, i=1, string='') => {
    if(i === n+1){
        console.log(string)
    }else{
        string += ' '.repeat(n-i) + '#'.repeat(i) + '\n';
        i++
        staircase(n, i, string)
    }
}

staircase(4);