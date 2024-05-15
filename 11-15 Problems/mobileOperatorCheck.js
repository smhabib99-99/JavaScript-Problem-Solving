/**
 * Check mobile Operator of Bangladesh. 
 */

const mobileNum = '01913925210';
// console.log(mobileNum.length);

function brandCompany(mobileNum){
    if(isNaN(mobileNum)){
        return 'Enter Valid Number';
    }
    const brandCode = mobileNum.slice(0,3);

    // const brand = new Map([
    //     ['017',GrameenPhone],
    //     ['019',BanglaLink],
    //     ['018',Robi]

    // ]);
    

    if(brandCode == '017' ){
        return 'GrameenPhone';
    }else if (brandCode == '019'){
        return 'Banglalink';
    }else if( brandCode == '018'){
        return 'Robi';
    }else{
        return 'Valid Phone Number';
    }

}

const output = brandCompany(mobileNum);
console.log(output);