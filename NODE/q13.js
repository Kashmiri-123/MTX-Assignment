var dns = require('dns');
const {hostname} = require('os');


dns.lookup("www.zomato.com", (error, address, family) => {
    console.log("Address... " + address + " \nFamily... " + family)
})

dns.resolve4("www.zomato.com", (error, address) => {
    if(error) throw error;
    else{
        console.log("\nAll IP Address  of IPV4 : " + address)

        address.forEach((add) => {
            dns.reverse(add, (error, address) => {
                if(error) throw error;
                else{
                    console.log("Address " + address + "  Host name : " + hostname)
                }
            })
        })
    }
})