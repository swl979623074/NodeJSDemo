var dns = require("dns")

dns.lookup('nodejs.org', (err, addresses, family) => {
  console.log('addresses:', addresses,"; family: ",family);
});

dns.lookup('www.baidu.com', (err, addresses, family) => {
  console.log('addresses:', addresses,"; family: " , family);
});

dns.lookup('www.swust.cn', (err, addresses, family) => {
  console.log('addresses:', addresses,"; family: ",family);
});

dns.lookup('www.jingshuikeji.cn', (err, addresses, family) => {
  console.log('addresses:', addresses,"; family: ",family);
});

console.log(dns.getSrevers())