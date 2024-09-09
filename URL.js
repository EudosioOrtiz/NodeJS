const myURL = new URL('https://www.ETL.com/Request/History?Supplier=Polaris');

console.log(myURL.hostname) // www.etl.com

console.log(myURL.pathname) // /Request/History

console.log(myURL.searchParams) // URLSearchParams { 'Supplier' => 'Polaris' }

console.log(myURL.searchParams.get('Supplier'))

console.log(myURL.protocol)

console.log(myURL.port)